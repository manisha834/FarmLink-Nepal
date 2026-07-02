import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default MainLayout;