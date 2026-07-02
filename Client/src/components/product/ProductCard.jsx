import { Heart, MapPin, Star } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">

      <div className="card product-card border-0 shadow-sm h-100">

        <div className="position-relative">

          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            style={{
              height: "240px",
              objectFit: "cover",
            }}
          />

          <span className="badge bg-success position-absolute top-0 start-0 m-3">
            {product.category}
          </span>

          <button className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3">
            <Heart size={18} />
          </button>

        </div>

        <div className="card-body">

          <h5 className="fw-bold">
            {product.name}
          </h5>

          <div className="d-flex justify-content-between mb-2">

            <small className="text-warning">
              <Star size={15} fill="gold" />
              {" "}4.8
            </small>

            <small className="text-muted">
              <MapPin size={15} />
              {" "}{product.district}
            </small>

          </div>

          <p className="text-muted mb-1">
            👨‍🌾 {product.farmer}
          </p>

          <h4 className="text-success fw-bold">
            Rs. {product.price}/{product.unit}
          </h4>

          <button className="btn btn-success w-100 mt-3">
            View Details
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;