import Nav from 'react-bootstrap/Nav';
import './GitHubProject.css';


// eslint-disable-next-line react/prop-types
function GitHubProject({ linkGit,projectGit, titleGit}) {
return (
<>
    <div className="GitHubProject">

    <div className='GitHubProject__content'>

        <div className='GitHubProject__head'>
            <Nav.Link 
                href={linkGit}
                target='blank'
                >
                <h2>{projectGit}</h2>
            </Nav.Link>
            <span className='PublicSuodo'>Public</span>
        </div>

        <div className='GitHubProject__title'>
            👽 <span>{titleGit}</span>      
        </div>

    </div>

    </div>
</>
)
}

export default GitHubProject;