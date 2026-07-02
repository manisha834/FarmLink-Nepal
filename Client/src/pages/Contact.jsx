import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="container py-5">
        <h1 className="fw-bold text-success">Contact Us</h1>

        <p>Email: support@farmlinknepal.com</p>
        <p>Phone: +977-9800000000</p>
        <p>Location: Kathmandu, Nepal</p>
      </section>

      <Footer />
    </>
  );
}

export default Contact;