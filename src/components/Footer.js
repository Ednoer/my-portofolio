import styled from '@emotion/styled';

const Section = styled.footer`
  margin-top: 50px;
  position: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #fff !important;
  border-top: 1px solid;
`;


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Section>
        <p>Endang Nuradi &copy; {year}</p>
        <p>🌖 🌗 🌘 🌑 🌒 🌓 🌔</p>
    </Section>
  )
}

export default Footer
