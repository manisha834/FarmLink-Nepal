
import MainLayout from "../components/layout/MainLayout";
import ProductFilters from "../components/product/ProductFilters";
import products from "../data/products";
import ProductCard from "../components/product/ProductCard";

function Products() {
  return (
    <MainLayout>
      <section className="container py-5">

        <h1 className="fw-bold text-success">
          Marketplace
        </h1>

        <p className="text-muted mb-4">
            Buy directly from Nepali farmers.
        </p>

        <ProductFilters />

      </section>
    </MainLayout>
  );
}

export default Products;