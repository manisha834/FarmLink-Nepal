function HowItWorks() {
  const steps = [
    {
      icon: "👨‍🌾",
      title: "Farmer Registers",
      text: "Farmers create an account and upload fresh products.",
    },
    {
      icon: "🛒",
      title: "Customers Order",
      text: "Customers browse and place orders online.",
    },
    {
      icon: "🚚",
      title: "Delivery",
      text: "Fresh produce is delivered quickly and safely.",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      text: "Payments are made safely while farmers receive fair prices.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">How FarmLink Works</h2>

        <div className="row">
          {steps.map((step, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card border-0 shadow h-100 text-center p-4">
                <div style={{ fontSize: "50px" }}>{step.icon}</div>
                <h4 className="mt-3">{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;