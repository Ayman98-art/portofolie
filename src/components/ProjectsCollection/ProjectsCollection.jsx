import { Col, Row } from 'react-bootstrap';
import GitHubProject from '../GitHubProject/GitHubProject';
import './ProjectsCollection.css';


function ProjectsCollection() {
return (
    <>
<Row>

<Col lg="4" className='mtop-15'>
    <GitHubProject 
        linkGit={"https://github.com/Ayman98-art/HealthCare.git"} 
        projectGit={"Health Care"} 
        titleGit={"HTMl"}
    />
</Col>

<Col lg="4" className='mtop-15'>
    <GitHubProject 
        linkGit={"https://github.com/Ayman98-art/webSiteBaby.git"} 
        projectGit={"web SiteBaby"} 
        titleGit={"JAVASCRIPT"}
    />
</Col>

<Col lg="4" className='mtop-15'>
    <GitHubProject 
        linkGit={"https://github.com/Ayman98-art/ESKIL_Fruntures.git"} 
        projectGit={"ESKIL Fruntures"} 
        titleGit={"HTMl"}
    />
</Col>

<Col lg="4" className='mtop-15'>
    <GitHubProject 
        linkGit={"https://github.com/Ayman98-art/Bank-Statament.git"} 
        projectGit={"Bank Statament"} 
        titleGit={"HTMl"}
    />
</Col>

<Col lg="4" className='mtop-15'>
    <GitHubProject 
        linkGit={"https://github.com/Ayman98-art/JQuery.git"} 
        projectGit={"JQuery $"} 
        titleGit={"JQuery"}
    />
</Col>

<Col lg="4" className='mtop-15'>
    <GitHubProject 
        linkGit={"https://github.com/Ayman98-art/Net-Work-on-device.git"} 
        projectGit={"NetWork On&Off"} 
        titleGit={"JAVASCRIPT"}
    />
</Col>

<Col lg="4" className='mtop-15'>
    <GitHubProject 
        linkGit={"https://github.com/Ayman98-art/Slider-pure-js.git"} 
        projectGit={"Slider Js"} 
        titleGit={"JAVASCRIPT"}
    />
</Col>

</Row>
    </>
)
}

export default ProjectsCollection;