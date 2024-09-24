import projectsDatabase from "./ProjectDetails";

const remapProjectsByCategory = (projectsDatabase) => {
  const categorizedProjects = {};

  for (const key in projectsDatabase) {
    const proj = projectsDatabase[key];
    const category = proj.category;

    if (!categorizedProjects[category]) {
      categorizedProjects[category] = [];
    }
    categorizedProjects[category].push(proj);
  }
  return categorizedProjects;
};

const categorizedProjects = remapProjectsByCategory(projectsDatabase);
console.log("categorized projects", categorizedProjects)

export default categorizedProjects;