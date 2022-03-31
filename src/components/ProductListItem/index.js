import Card from "../Card";
import { IconEcommerce, IconWishlist, IconStar } from "../SVG/IconSvg";
import "./styles.css";

const ProductListItem = ({ product }) => {
  return (
    <Card className="product">
      {/* Product Image */}
      <div className="product__imgWrapper">
        <img src={product.img} alt="Product Image" />
      </div>

      {/* Product Detils [Rating, Price, Name, Description] */}
      <div className="product-details">
        <div className="product_rating__price">
          <div className="product__rating">
            {Array(product.rating)
              .fill()
              .map((x, i) => (
                <IconStar key={i} size={16} filled="true" />
              ))}
            {Array(5 - product.rating)
              .fill()
              .map((x, i) => (
                <IconStar size={16} key={i} />
              ))}
          </div>

          <h5 className="product__price">${product.price}</h5>
        </div>

        <h4 className="product__name">{product.name}</h4>
        <p className="product__desc">{product.discription}</p>
      </div>

      {/* Buttons [Wishlist, ViewInCart */}
      <button className="wishlist__btn">
        <IconWishlist size={14} /> Wishlist
      </button>

      <button className="cart__btn">
        <IconEcommerce size={14} /> View In Cart
      </button>
    </Card>
  );
};

export default ProductListItem;
