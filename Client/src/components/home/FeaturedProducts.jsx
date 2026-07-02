import products from "../../data/products";
import ProductCard from "../product/ProductCard";

function FeaturedProducts() {
  return (
    <section className="py-5">

      <div className="container">

        <h2 className="fw-bold text-center mb-5">
          Featured Products
        </h2>

        <div className="row">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;