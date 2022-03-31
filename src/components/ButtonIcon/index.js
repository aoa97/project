import "./styles.css";

const ButtonIcon = ({
  icon,
  badgeTitle,
  badgeColor,
  className = "",
  ...otherProps
}) => (
  <div className={`iconBtn ${className}`} {...otherProps}>
    {icon}
    {badgeTitle && (
      <div
        className="badge"
        style={{
          backgroundColor: badgeColor === "primary" ? "#7367f0" : "#ea5455",
        }}
      >
        {badgeTitle}
      </div>
    )}
  </div>
);

export default ButtonIcon;
