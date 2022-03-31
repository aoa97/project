import { useStore } from "../../context/AppContext";
import ProductListItem from "../ProductListItem";
import "./styles.css";

const ProductList = () => {
  const { filteredProducts } = useStore();

  return (
    <div className="productList">
      {filteredProducts.map((p) => (
        <ProductListItem key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
