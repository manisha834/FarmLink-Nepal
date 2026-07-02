function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="category-card">

        <div
          className="category-icon"
          style={{ background: category.color }}
        >
          <Icon size={35} color="white" />
        </div>

        <h4 className="mt-4">{category.name}</h4>

        <p className="text-muted">
          {category.products} Products
        </p>

      </div>
    </div>
  );
}

export default CategoryCard;