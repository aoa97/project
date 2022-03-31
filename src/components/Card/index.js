import "./styles.css";

const Card = ({ children, className = "", ...otherProps }) => (
  <div className={`card ${className}`} {...otherProps}>
    {children}
  </div>
);

export default Card;
