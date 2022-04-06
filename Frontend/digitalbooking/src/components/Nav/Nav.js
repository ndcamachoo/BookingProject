import React, {
  Fragment,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/hamburguer.svg";
import { MobileVisibilty } from "./MobileVisibility";
import { SignedUpNav } from "../SignedUpNav/SignedUpNav";
import { NavButtons } from "../NavButtons/NavButtons";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { NavContext } from "./NavContext";
import styles from "./Nav.module.css";


export const Nav = () => {
  const { user } = useContext(UserContext);
  const [search, setsearch] = useState(true);
  const {signedbar, setSignedbar}= useContext(NavContext);
  const [visibility, setVisibility] = useState(false);
  const value = useMemo(
    () => ({ visibility, setVisibility }),
    [visibility, setVisibility]
  );
  const { searchNav, searchInput, scrolled, color1, color2, hamburguesita } =
    styles;
  let history = useHistory();

  const changeVisibility = () => {
    if (window.scrollY >= 80) {
      setsearch(false);
    } else {
      setsearch(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setVisibility(true);
  };

  window.addEventListener("scroll", changeVisibility);

  return (
    <Fragment>
      <MobileVisibilty.Provider value={value}>
        <MenuMobile />
      </MobileVisibilty.Provider>
      <nav className={search ? color1 : color2}>
        <img onClick={handleClick} src={logo} alt="Logo" />
        <section className={search ? searchInput : scrolled}>
          <i className="fas fa-search"></i>
          <input
            type="text"
            className={searchNav}
            placeholder="Encontrá tu lugar"
          >
          </input>
        </section>
          { user !=null ? <SignedUpNav /> : <NavButtons /> }
        <img
          className={hamburguesita}
          alt="ícono menú"
          src={menu}
          onClick={handleMenu}
        />
      </nav>
    </Fragment>
  );
};
