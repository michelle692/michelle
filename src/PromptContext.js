import React, { createContext, useContext, useState } from "react";
import projectsDatabase from "./data/ProjectDetails";

const getProject = (selectedProjectID) => {
  const images = projectsDatabase[selectedProjectID].images;
  const numImgs = images.length;
  const title = projectsDatabase[selectedProjectID].title;
  const description = projectsDatabase[selectedProjectID].description;
  return { images: images, numImgs: numImgs, title: title, description: description };
}

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
  const [project, setProject] = useState(getProject('RAYTRACER'));

  const updateProject = (selectedProjectID) => {
    const updatedProject = getProject(selectedProjectID);
    setProject(updatedProject);
  }

  return (
    <PromptContext.Provider value={{ project, updateProject }} >
      {children}
    </PromptContext.Provider>
  );
};

export const usePromptContext = () => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error('usePrompt must be used within a PromptProvider');
  }
  return context;
};
