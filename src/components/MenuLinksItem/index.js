import "./styles.css";

const MenuLinksItem = ({
  children,
  title,
  icon,
  className = "",
  ...otherProps
}) => (
  <div className={`menu__links__item ${className}`} {...otherProps}>
    {icon}
    <span>{title}</span>
    {children}
  </div>
);

export default MenuLinksItem;
