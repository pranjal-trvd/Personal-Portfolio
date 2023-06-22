import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Blog Website",
      description: "Developed a blog website using the MERN stack. It provides a seamless platform for publishing and managing blog posts.",
      imgUrl: 'https://perspectives.mobilelive.ca/wp-content/uploads/2020/11/blogs.jpg',
    },
    {
      title: "Job Portal",
      description: "Full fledged Job Portal which lets recruiter post job posting and lets other people apply for thses jobs.",
      imgUrl: "https://www.digitalhealth.gov.au/sites/default/files/styles/original/public/2021-07/IDH_csr-1771-education-training.png?itok=r4DjtLR3",
    },
    {
      title: "Netflix Clone",
      description: "Created a Netflix clone using HTML,CSS,JS. Frontend is dynamically updated by fetching data from API",
      imgUrl: "https://i.pinimg.com/originals/95/29/4f/95294f9f252d185fc1f48846eb0b87d7.jpg",
    },
    {
      title: "Weather Tracker",
      description: "A fully functional website which retrieves real time data from api and show it dynamically on page",
      imgUrl: "https://www.stenaline.co.uk/-/media/Images/irish-seas/general/ferrycheck/ferrycheck-weather-2020-50.jpg?mw=308&hash=8127A28191DC7E9ECC2AE952F71856176338C54F",
    },
    {
      title: "Fighting Game",
      description: "A fighting game developed using JS classes and implemented abilities as class functions",
      imgUrl: "https://whatsyourgrief.com/wp-content/uploads/2013/11/family-fighting-after-a-death-1024x622.jpg",
    },
    {
      title: "Chat Application",
      description:"A React native chat application which let users chat in realtime.",
      imgUrl: "https://amplibit.com/wp-content/uploads/2020/09/contact-amplibit-new-1.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My project portfolio comprises a mix of learning and practice projects, showcasing my progression as a web developer. These projects have allowed me to explore new technologies while honing my existing skills.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>There are more projects currently in progress, and I will add them here as soon as they are completed.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>There are more projects currently in progress, and I will add them here as soon as they are completed.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
