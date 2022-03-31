import { IconBread, IconHome, IconSettings } from "../SVG/IconSvg";
import "./styles.css";

const ContentHeader = () => (
  <header>
    {/* Left Side */}
    <div className="header__left">
      <h2>Shop</h2>

      {/* Breadcrumb */}
      <div className="header__breadcrump">
        <IconHome className="homeIcon" />
        <IconBread className="breadIcon" />
        <a className="bread" href="#">
          ECommerce
        </a>
        <IconBread className="breadIcon" />
        <span className="bread-active">Shop</span>
      </div>
    </div>

    {/* Right Side */}
    <div className="header__right">
      <button className="btn dropdown">
        <IconSettings />
      </button>
    </div>
  </header>
);

export default ContentHeader;
