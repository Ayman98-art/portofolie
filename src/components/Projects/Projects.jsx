/* eslint-disable react/no-unescaped-entities */
import ProjectsCollection from '../ProjectsCollection/ProjectsCollection';
import './Projects.css';


function Projects() {
return (
<>
    <div className="basicWarpping pt-120" id='Projects'>
        <div className='descTitle container'>
            <h2>
                Projects
            </h2>
            <article>
                <p>
                    These are my open source projects 
                    which are fetched directly from Github. <br /> 
                    If you're a developer, 
                    feel free to make a pull request.
                </p>
            </article>
            <ProjectsCollection />
        </div>
    </div>
</>
)
}

export default Projects;

