function Features() {
  const features = [
    {
      icon: "🌾",
      title: "Direct Farmer Sales",
      text: "No middlemen. Farmers sell directly to customers.",
    },
    {
      icon: "💰",
      title: "Fair Pricing",
      text: "Transparent prices for both buyers and farmers.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Fresh products delivered from nearby farms.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Why Choose FarmLink Nepal?
        </h2>

        <div className="row">

          {features.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm text-center p-4">

                <div className="display-4">{feature.icon}</div>

                <h4 className="mt-3">{feature.title}</h4>

                <p>{feature.text}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;