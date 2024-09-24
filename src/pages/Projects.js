import Display from "../components/Display";
import NavBar from "../components/NavBar";
import ProjectTitles from "../components/ProjectTitles";
import '../css/Projects.css'
function Projects() {
  return (
    <div>
      <NavBar />
      <Display />
      <ProjectTitles />
      <div className="projects-container">
        <h1>Projects</h1>
      </div>
    </div>
  );
}

export default Projects;