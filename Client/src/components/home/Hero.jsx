import SearchBar from "../ui/SearchBar";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";

function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6" data-aos="fade-right">

            <span className="badge bg-success px-3 py-2 mb-3">
              🌱 Fresh From Nepali Farmers
            </span>

            <h1 className="display-3 fw-bold mb-4">
              Connecting Farmers
              <br />
              Directly With
              <span className="text-success"> Consumers</span>
            </h1>

            <p className="lead text-secondary mb-4">
              Buy fresh vegetables, fruits and grains directly from trusted
              local farmers while ensuring fair prices and better income.
            </p>

            <SearchBar />

            <div className="d-flex gap-3 mt-4">

              <button className="btn btn-success btn-lg">
                Explore Marketplace
              </button>

              <button className="btn btn-outline-success btn-lg">
                Become a Farmer
              </button>

            </div>

            <div className="row mt-5">

              <div className="col-4 text-center">
                <Leaf size={30} className="text-success" />
                <p className="small mt-2">100% Fresh</p>
              </div>

              <div className="col-4 text-center">
                <Truck size={30} className="text-success" />
                <p className="small mt-2">Fast Delivery</p>
              </div>

              <div className="col-4 text-center">
                <ShieldCheck size={30} className="text-success" />
                <p className="small mt-2">Trusted Farmers</p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6 text-center" data-aos="fade-left ">

            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900"
              alt="Farmer"
              className="img-fluid hero-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;