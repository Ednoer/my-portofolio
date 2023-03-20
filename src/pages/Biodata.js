import styled from '@emotion/styled'
import { ButtonGroup as BsButtonGroup, Row, Col } from 'react-bootstrap'
import giphy from '../assets/animations/giphy.gif'
import { AiOutlineGithub, AiFillLinkedin, AiFillGitlab } from 'react-icons/ai'

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

const DivRow = styled(Row)`
  @media only screen and (max-width: 1000px) {
    .text-main {
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`

const Home = () => {
  const goToNewTab = (link) => {
    window.open(link, '_blank')
  }

  return (
    <Section>
      <DivRow>
        <Col className="d-flex flex-column align-items-between justify-content-center text-main">
          <h1>Hi, I'm Endang Nuradi</h1>
          <h6>Software Engineer</h6>
          <p>
            I like to explore and broaden my horizons, doing my best on every projects. I'm
            searching for challenges and a great teamwork.
          </p>
          <p>
            My area of expertise is React JS, Javascript, Typescript, Scss/Css, Redux, Golang,
            Google Pubsub, Kafka (Redpanda), Elasticsearch,  Docker, Jenkins, Docker, Datadog, Sentry, Unleash
          </p>
          <div className="d-flex">
            <ButtonGroup
              className="text-right"
              onClick={() => goToNewTab('https://gitlab.com/endang_nuradi')}
            >
              <button type="button" className="btn btn-light">
                <AiFillGitlab size={20} />
                Gitlab
              </button>
            </ButtonGroup>
            <ButtonGroup
              className="text-right"
              style={{ marginLeft: 10 }}
              onClick={() => goToNewTab('https://github.com/Ednoer')}
            >
              <button type="button" className="btn btn-light">
                <AiOutlineGithub size={20} />
                Github
              </button>
            </ButtonGroup>
            <ButtonGroup
              className="text-right"
              style={{ marginLeft: 10 }}
              onClick={() => goToNewTab('https://www.linkedin.com/in/endang-nuradi-b4314ab1/')}
            >
              <button type="button" className="btn btn-light">
                <AiFillLinkedin size={20} />
                Linkedin
              </button>
            </ButtonGroup>
          </div>
        </Col>
        <Col className="d-md-flex d-lg-flex justify-content-end d-none d-md-block d-lg-block">
          <iframe title="abstraksi" src={giphy} width="520" height="520" frameBorder="0"></iframe>
        </Col>
      </DivRow>
    </Section>
  )
}

export default Home
