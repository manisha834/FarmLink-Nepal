function FarmerCard({ farmer }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow h-100 text-center">

        <img
          src={farmer.image}
          className="rounded-circle mx-auto mt-4"
          alt={farmer.name}
          width="130"
          height="130"
        />

        <div className="card-body">

          <h4>{farmer.name}</h4>

          <p>📍 {farmer.district}</p>

          <p>{farmer.speciality}</p>

          <span className="badge bg-success">
            {farmer.experience}
          </span>

        </div>

      </div>
    </div>
  );
}

export default FarmerCard;