function Stats() {
  const stats = [
    { number: "500+", label: "Registered Farmers" },
    { number: "5,000+", label: "Happy Customers" },
    { number: "50+", label: "Restaurants & Hotels" },
    { number: "77", label: "Districts Covered" },
  ];

  return (
    <section className="py-5 bg-success text-white">
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <h1 className="fw-bold display-5">{stat.number}</h1>
              <p className="fs-5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;