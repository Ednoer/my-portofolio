// components
import Menu from "../components/Menu";
import Footer from "../components/Footer";


const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
