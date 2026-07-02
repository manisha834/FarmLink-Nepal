import categories from "../../data/categories";
import CategoryCard from "../product/CategoryCard";

function Categories() {
  return (
    <section className="py-5">

      <div className="container">

        <h2 className="text-center section-title">
          Browse Categories
        </h2>

        <p className="text-center section-subtitle">
          Discover fresh products from trusted Nepali farmers.
        </p>

        <div className="row mt-5">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;