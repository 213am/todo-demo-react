import Footer from "./basic/Footer";
import Header from "./basic/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer>
        <p>Copyright 2024. By Hong</p>
      </Footer>
    </>
  );
};
export default Layout;
