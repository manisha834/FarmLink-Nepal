import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="input-group shadow-lg rounded-4 overflow-hidden">

      <span className="input-group-text bg-white border-0">
        <Search size={20} />
      </span>

      <input
        type="text"
        className="form-control border-0 py-3"
        placeholder="Search vegetables, fruits, grains..."
      />

      <button className="btn btn-success px-4">
        Search
      </button>

    </div>
  );
}

export default SearchBar;