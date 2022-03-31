import { useRef } from "react";
import MenuLinksItem from "../MenuLinksItem";
import {
  IconBread,
  IconCalendar,
  IconChat,
  IconCircle,
  IconClose,
  IconCollapse,
  IconEcommerce,
  IconEmail,
  IconHome,
  IconInvoice,
  IconPages,
  IconTodo,
  IconUser,
} from "../SVG/IconSvg";
import "./styles.css";

const Menu = () => {
  const toggleRef = useRef();
  const breadIconRef = useRef();

  const handleCloseMenu = () => {
    const menu = document.querySelector("#menu");
    menu.classList.remove("show");
  };

  const handleToggle = () => {
    toggleRef.current.classList.toggle("show");
    breadIconRef.current.classList.toggle("toggle-icon-rotate");
  };

  return (
    <div className="menu" id="menu">
      <div className="menu__brand">
        <div className="iconBtn menu__brand__logo">
          <img
            src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg"
            width={36}
            height={24}
          />
          <span>Vuexy</span>
        </div>

        <div className="iconBtn menu__collapse__icon">
          <IconCollapse />
        </div>

        {/* Mobile Close menu */}
        <div className="menu__close__icon" onClick={handleCloseMenu}>
          <IconClose />
        </div>
      </div>

      <div className="menu__links">
        {/* Toggle */}
        <MenuLinksItem
          icon={<IconHome />}
          title="Dashboards"
          onClick={handleToggle}
          className="dash-toggle"
        >
          <div className="badge">2</div>
          <div ref={breadIconRef}>
            <IconBread />
          </div>
        </MenuLinksItem>

        {/* Toggle */}
        <div ref={toggleRef} className="menu__links__section toggle">
          <MenuLinksItem icon={<IconCircle />} title="eCommerce" />
          <MenuLinksItem icon={<IconCircle />} title="Analytics" />
        </div>

        {/* Seaction A */}
        <div className="menu__links__section">
          <h5 className="section__heading">Apps &amp; Pages</h5>
          <MenuLinksItem icon={<IconEmail />} title="Email" />
          <MenuLinksItem icon={<IconChat />} title="Chat" />
          <MenuLinksItem icon={<IconTodo />} title="Todo" />
          <MenuLinksItem icon={<IconCalendar />} title="Calendar" />
          <MenuLinksItem icon={<IconInvoice />} title="Invoice" />
          <MenuLinksItem icon={<IconEcommerce />} title="eCommerce" />
          <MenuLinksItem icon={<IconUser />} title="User" />
          <MenuLinksItem icon={<IconPages />} title="Pages" />
        </div>

        {/* Seaction B */}
        <div className="menu__links__section">
          <h5 className="section__heading">User Interface</h5>
          <MenuLinksItem icon={<IconEmail />} title="Email" />
          <MenuLinksItem icon={<IconChat />} title="Chat" />
          <MenuLinksItem icon={<IconTodo />} title="Todo" />
          <MenuLinksItem icon={<IconCalendar />} title="Calendar" />
          <MenuLinksItem icon={<IconInvoice />} title="Invoice" />
          <MenuLinksItem icon={<IconEcommerce />} title="eCommerce" />
          <MenuLinksItem icon={<IconUser />} title="User" />
          <MenuLinksItem icon={<IconPages />} title="Pages" />
        </div>

        {/* Section C */}
        <div className="menu__links__section">
          <h5 className="section__heading">Forms &amp; Tables</h5>
          <MenuLinksItem icon={<IconEmail />} title="Email" />
          <MenuLinksItem icon={<IconChat />} title="Chat" />
          <MenuLinksItem icon={<IconTodo />} title="Todo" />
          <MenuLinksItem icon={<IconCalendar />} title="Calendar" />
          <MenuLinksItem icon={<IconInvoice />} title="Invoice" />
          <MenuLinksItem icon={<IconEcommerce />} title="eCommerce" />
          <MenuLinksItem icon={<IconUser />} title="User" />
          <MenuLinksItem icon={<IconPages />} title="Pages" />
        </div>

        {/* Section D */}
        <div className="menu__links__section">
          <h5 className="section__heading">Charts &amp; Maps</h5>
          <MenuLinksItem icon={<IconUser />} title="User" />
          <MenuLinksItem icon={<IconPages />} title="Pages" />
        </div>

        {/* Section E */}
        <div className="menu__links__section">
          <h5 className="section__heading">Others</h5>
          <MenuLinksItem icon={<IconEmail />} title="Email" />
          <MenuLinksItem icon={<IconChat />} title="Chat" />
          <MenuLinksItem icon={<IconTodo />} title="Todo" />
          <MenuLinksItem icon={<IconCalendar />} title="Calendar" />
          <MenuLinksItem icon={<IconInvoice />} title="Invoice" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
