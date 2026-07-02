import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Farmers() {
  return (
    <>
      <Navbar />

      <section className="container py-5">
        <h1 className="fw-bold text-success">Our Farmers</h1>
        <p className="text-muted">
          Meet the trusted farmers who supply fresh products through FarmLink Nepal.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Farmers;