import React, {useContext, useState, useEffect} from "react"
import styles from './MenuMobile.module.css'
import { MobileVisibilty } from "../Nav/MobileVisibility";
import { useLocation } from 'react-router-dom';
import { UserContext } from "../UserContext/UserContext";
import { SignedUpMenuMobile } from './SignedUpMenuMobile';
import  {MenuMobileDefault} from './MenuMobileDefault'

export const MenuMobile = (props) => {
  const { social, socialbar, menumobile, menuhide, header} = styles; 
  const {visibility, setVisibility}= useContext(MobileVisibilty);
  const [login, setlogin] = useState();
  const [register, setregister] = useState();
  const location = useLocation();
  const { user } = useContext(UserContext);
  let component = user ? <SignedUpMenuMobile /> : <MenuMobileDefault />;
  
  useEffect(() => {
    if(location.pathname === '/login'){
      setlogin(true);
      setregister(false);
    }else if(location.pathname === '/register'){
      setlogin(false);
      setregister(true);
    }else{
      setlogin(false);
      setregister(false);
    }
  }, [location, login, register, setlogin, setregister])

  const handleClick = () => {
    setVisibility(false)
  }
 
  return (
    <div className={ visibility ? menumobile: menuhide}>
      {component}
        <div className={social}>
        <section className={header}>
          </section>
          <div className={ socialbar }>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
  );
};
