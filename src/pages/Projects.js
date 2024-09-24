import Display from "../components/Display";
import NavBar from "../components/NavBar";
import ProjectTitles from "../components/ProjectTitles";
import '../css/Projects.css'
function Projects() {
  return (
    <div className="projects-container">
      <NavBar />
      <div className="display-container">
        <Display />
      </div>
      <div className="titles-container">
        <ProjectTitles />
      </div>
      <div>
        <h1>Projects</h1>
      </div>
    </div>
  );
}

export default Projects;