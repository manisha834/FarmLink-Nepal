import farmers from "../../data/farmers";
import FarmerCard from "../farmer/FarmerCard";

function FeaturedFarmers() {
  return (
    <section className="py-5 bg-light">

      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Meet Our Farmers
        </h2>

        <div className="row">

          {farmers.map((farmer) => (
            <FarmerCard
              key={farmer.id}
              farmer={farmer}
            />
          ))}

        </div>

        

      </div>

    </section>
  );
}

export default FeaturedFarmers;