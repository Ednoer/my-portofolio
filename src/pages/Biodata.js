import styled from '@emotion/styled'
import { ButtonGroup as BsButtonGroup, Row, Col } from 'react-bootstrap'
import giphy from '../assets/animations/giphy.gif'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

const Section = styled.section`
  height: auto;
  margin-top: 51px;
`

const ButtonGroup = styled(BsButtonGroup)`
  .btn {
    border-radius: 2px;
    border-color: #404040;
    color: #525966;
    padding: 8px 12px;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
  .btn:hover {
    border-color: #525966;
    color: #fff !important;
    background-color: #404040;
  }
`

const Home = () => {
  const goToNewTab = (link) => {
    window.open(link, '_blank')
  }

  return (
    <Section>
      <Row>
        <Col className="d-flex flex-column align-items-between justify-content-center">
          <h1>Hi, I'm Endang Nuradi</h1>
          <h6>Software Engineer</h6>
          <p>
            I like to explore and broaden my horizons, doing my best on every projects. I'm
            searching for challenges and a great teamwork.
          </p>
          <p>
            My area of expertise is React JS, Javascript, Typescript, Scss/Css, Redux, Golang, Echo,
            GRPC, GCP, AWS, Algorithms and data structure.
          </p>
          <div className="d-flex">
            <ButtonGroup
              className="text-right"
              onClick={() => goToNewTab('https://github.com/Ednoer')}
            >
              <button type="button" className="btn btn-light">
                <AiOutlineGithub size={20} />
                Github
              </button>
            </ButtonGroup>
            <ButtonGroup
              className="text-right"
              style={{ marginLeft: 20 }}
              onClick={() => goToNewTab('https://www.linkedin.com/in/endang-nuradi-b4314ab1/')}
            >
              <button type="button" className="btn btn-light">
                <AiFillLinkedin size={20} />
                Linkedin
              </button>
            </ButtonGroup>
          </div>
        </Col>
        <Col className="d-flex justify-content-end">
          <iframe title="abstraksi" src={giphy} width="520" height="520" frameBorder="0"></iframe>
        </Col>
      </Row>
    </Section>
  )
}

export default Home
