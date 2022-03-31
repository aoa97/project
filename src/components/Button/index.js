import "./styles.css";

const Button = ({ children, className = "", outline, icon, ...otherProps }) => (
  <>
    <button
      className={`${outline ? "btn-outline" : "btn"} ${className}`}
      {...otherProps}
    >
      {children}
      {icon && icon}
    </button>
  </>
);

export default Button;
