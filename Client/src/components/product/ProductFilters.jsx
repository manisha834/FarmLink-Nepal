import { Search } from "lucide-react";

function ProductFilters() {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4">

        <h4 className="fw-bold mb-1">Find Fresh Products</h4>

        <p className="text-muted mb-4">
          Search and filter products from local Nepali farmers.
        </p>

        <div className="row g-3 align-items-center">

          {/* Search */}
          <div className="col-lg-5">
            <div className="input-group">

              <span className="input-group-text bg-white border-end-0">
                <Search size={18} />
              </span>

              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search products..."
              />

            </div>
          </div>

          {/* Category */}
          <div className="col-lg-3">
            <select className="form-select">
              <option>All Categories</option>
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Grains</option>
              <option>Dairy</option>
            </select>
          </div>

          {/* District */}
          <div className="col-lg-3">
            <select className="form-select">
              <option>All Districts</option>
              <option>Kathmandu</option>
              <option>Chitwan</option>
              <option>Kavre</option>
              <option>Mustang</option>
            </select>
          </div>

          {/* Button */}
          <div className="col-lg-1 d-grid">
            <button className="btn btn-success">
              Go
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductFilters;