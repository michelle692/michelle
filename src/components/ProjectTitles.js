import categorizedProjects from "../data/CategorizedProjects";

function ProjectTitles() {
  return (
    <div>
      {Object.keys(categorizedProjects).map(category => (
        <div key={category}>
          <h2>{category}</h2> 
          <ul>
            {categorizedProjects[category].map(project => (
              <li key={project.title}>{project.title}</li>
            ))}
          </ul> 
        </div>
      ))}
    </div>
  );
}

export default ProjectTitles;