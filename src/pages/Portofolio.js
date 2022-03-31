import styled from '@emotion/styled'
import { Row, Col } from 'react-bootstrap'
import giphy from '../assets/animations/giphy.gif'
import printerous from '../assets/icons/printerous.svg'
import nle from '../assets/icons/bea-cukai.png'
import allofresh from '../assets/icons/allofresh.png'
import GooglePlay from '../assets/icons/ic-download-android.svg'
import AppStore from '../assets/icons/ic-download-ios.svg'

const Section = styled.section`
  height: auto;
  margin-top: 51px;
`
const Card = styled.div`
  margin-top: 10px;
  padding: 16px;
  color: #525966;
  border-radius: 5px;
  border: 1px solid;
  border-color: #404040;

  .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  p {
    font-size: 12px;
    line-height: 12px;
  }

  :hover {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  }
`

const Image = styled.img`
  width: auto;
  height: 50px;
`

const listData = [
  {
    name: 'Printerous',
    position: 'Frontend Engineer',
    description: 'All-in-One Platform for a Better E-Procurement System in Print & Packaging Goods',
    link: 'https://www.printerous.com',
    logo: <img src={printerous} alt="printerous" />,
    type: 'web'
  },
  {
    name: 'AlloFresh',
    position: 'Fullstack Engineer',
    description:
      'Q-Commerce, Online grocery shopping from Allofresh, delivered fresh to your door.',
    logo: <Image src={allofresh} alt="nle" />,
    type: 'mobile',
    link_android: 'https://play.google.com/store/apps/details?id=id.allofresh.ecommerce',
    link_ios: 'https://apps.apple.com/app/allofresh/id1610121515'
  },
  {
    name: 'NLE Bea Cukai',
    position: 'Frontend Engineer',
    description:
      'National Logistics Ecosystem, Offering Quick & Strong Solutions for Transportations',
    link: 'https://nle.kemenkeu.go.id',
    logo: <Image src={nle} alt="nle" />,
    type: 'web'
  }
]
const About = () => {
  const goToNewTab = (link) => {
    window.open(link, '_blank')
  }
  return (
    <Section>
      <Row>
        <Col
          className="d-flex flex-column align-items-between justify-content-center"
          style={{ paddingTop: 60 }}
        >
          {listData.map((el) => (
            <Card key={el.name}>
              <div className="d-flex justify-content-between">
                <h4>{el.name}</h4>
                {el?.logo}
              </div>
              <h6>{el.position}</h6>
              <p>{el.description}</p>
              {el?.type === 'mobile' ? (
                <div>
                  <img
                    src={GooglePlay}
                    alt="googleplay"
                    style={{ width: 90, cursor: 'pointer' }}
                    onClick={() => goToNewTab(el?.link_android)}
                  />
                  <img
                    src={AppStore}
                    alt="appstore"
                    style={{ width: 90, marginLeft: 10, cursor: 'pointer' }}
                    onClick={() => goToNewTab(el?.link_ios)}
                  />
                </div>
              ) : (
                <p className="link" onClick={() => goToNewTab(el?.link)}>
                  {el?.link}
                </p>
              )}
            </Card>
          ))}
        </Col>
        <Col className="d-flex justify-content-end">
          <iframe title="abstraksi" src={giphy} width="520" height="520" frameBorder="0"></iframe>
        </Col>
      </Row>
    </Section>
  )
}

export default About
