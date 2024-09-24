import React, { createContext, useContext, useState } from "react";
import projectsDatabase from "./data/ProjectDetails";

const getProject = (selectedProjectID) => {
  const images = projectsDatabase[selectedProjectID].images;
  const numImgs = images.length;
  const category = projectsDatabase[selectedProjectID].category;
  const embeded = projectsDatabase[selectedProjectID].embeded;
  const title = projectsDatabase[selectedProjectID].title;
  const description = projectsDatabase[selectedProjectID].description;
  return { images: images, numImgs: numImgs, category: category, embeded: embeded, title: title, description: description };
}

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(getProject('PixieDust'));

  const updateProject = (selectedProjectID) => {
    const updatedProject = getProject(selectedProjectID);
    setProject(updatedProject);
  }

  return (
    <ProjectContext.Provider value={{ project, updateProject }} >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
