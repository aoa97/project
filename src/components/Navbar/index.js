import { useState } from "react";
import ButtonIcon from "../ButtonIcon";
import {
  IconCalendar,
  IconChat,
  IconClose,
  IconDarkMode,
  IconDrawer,
  IconEcommerce,
  IconEmail,
  IconFAQ,
  IconLightMode,
  IconLogout,
  IconNotification,
  IconPricing,
  IconSearch,
  IconSettings,
  IconStar,
  IconTodo,
  IconUser,
} from "../SVG/IconSvg";
import "./styles.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState(false);
  const [userDropOpen, setUserDropOpen] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleShowMenu = () => {
    const menu = document.querySelector("#menu");
    menu.classList.add("show");
  };

  if (search)
    return (
      <nav>
        <IconSearch />
        <input
          type="search"
          className="nav__Search"
          placeholder="Explore Vuexy"
        />
        <ButtonIcon icon={<IconClose />} onClick={() => setSearch(false)} />
      </nav>
    );

  return (
    <nav>
      <div className="nav__left">
        {/* Mobile Drawer */}
        <ButtonIcon
          className="nav__left__drawer"
          icon={<IconDrawer />}
          onClick={handleShowMenu}
        />

        <div className="nav__left__icons">
          <ButtonIcon icon={<IconCalendar />} />
          <ButtonIcon icon={<IconChat />} />
          <ButtonIcon icon={<IconEmail />} />
          <ButtonIcon icon={<IconTodo />} />
          <ButtonIcon icon={<IconStar />} />
        </div>
      </div>

      <div className="nav__right">
        <div className="nav__lang">
          <div className="nav__lang__item">
            <img
              src={require("../../assets/images/flags/usa.png")}
              width={22}
              height={14}
              alt="USA Flag"
            />
            <span>English</span>
          </div>
        </div>

        <div className="nav__tools">
          <ButtonIcon
            icon={darkMode ? <IconLightMode /> : <IconDarkMode />}
            onClick={handleDarkMode}
          />
          <ButtonIcon icon={<IconSearch />} onClick={() => setSearch(true)} />
          <ButtonIcon
            icon={<IconEcommerce />}
            badgeTitle="5"
            badgeColor="primary"
          />
          <ButtonIcon icon={<IconNotification />} badgeTitle="3" />
        </div>

        {/* User Dropdown */}
        <div
          className="nav__user dropdown"
          onClick={() => setUserDropOpen(!userDropOpen)}
        >
          <div className="nav__user__details">
            <h5>John Doe</h5>
            <span>admin</span>
          </div>
          <div className="nav__user__avatar">
            <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png" />
            <div className="active" />
          </div>

          {userDropOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <IconUser />
                <span>Profile</span>
              </li>
              <li className="dropdown-item">
                <IconEmail />
                <span>Inbox</span>
              </li>
              <li className="dropdown-item">
                <IconTodo />
                <span>Task</span>
              </li>
              <li className="dropdown-item">
                <IconChat />
                <span>Chat</span>
              </li>
              <div className="dropdown-divider" />
              <li className="dropdown-item">
                <IconSettings />
                <span>Settings</span>
              </li>
              <li className="dropdown-item">
                <IconPricing />
                <span>Pricing</span>
              </li>
              <li className="dropdown-item">
                <IconFAQ />
                <span>FAQ</span>
              </li>
              <li className="dropdown-item">
                <IconLogout />
                <span>Log out</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
