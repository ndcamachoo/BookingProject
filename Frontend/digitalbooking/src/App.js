import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Main } from "./components/Main/Main";
import { UserLogin } from "./components/UserLogin/UserLogin";
import { Category } from "./components/Category/Category";
import { Footer } from "./components/Footer/Footer";
import { SignUp } from "./components/SignUp/SignUp";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import { ResSuccess } from "./components/ResSuccess/ResSuccess";
import { Reservation } from "./components/Reservation/Reservation";
import { Products } from "./components/Products/Products";
import { UserDesk } from "./components/UserDesk/UserDesk";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { NotFound } from "./components/NotFound/NotFound";
import { UserContext } from "./components/UserContext/UserContext";
import styles from "./App.module.css";
import { Forbidden } from "./components/Forbidden/Forbidden";

export const App = (props) => {
  const [user, setuser] = useState(null);
  const auth = user != null && JSON.parse(user).authorities[0];
  const [item, setItem] = useState(null); 
  const value = useMemo(() => ({ user, setuser }), [user, setuser]);
  const [showButton, setShowButton] = useState(false);
  const { toTop } = styles;
  const lastclear = localStorage.getItem('lastclear');
  const time_now  = (new Date()).getTime();
 
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {

    if ((time_now - lastclear) > 1000 * 60 * 60 * 24) {

      localStorage.clear();
  
      localStorage.setItem('lastclear', time_now);
    }

    if(localStorage.getItem("data")){
      setuser(localStorage.getItem("data"))
    }

    if(user== null){
      setItem(localStorage.getItem("data"))
    } else{ 
      setItem(null);
    }  

  }, [item, lastclear, time_now]);

  


  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={value}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={UserLogin} />
            <Route exact path="/login/:login_id" component={UserLogin} />
            <Route exact path="/logout" component={Main} />
            <Route exact path="/product" component={Products} />
            <Route exact path="/administration" render={ ()=> auth == "ADMIN" ?  <CreateProduct/> : <Forbidden mes1="Acceso no autorizado" mes2="No tiene las credenciales necesarias para poder acceder" link="/" btn="Ir al home"/>}/>
            <Route
              exact
              path="/product/:product_id"
              component={SingleProduct}
            />
            <Route exact path="/category/:categoy_id" component={Category} />
            <Route exact path="/reservation" component={ user ?Reservation : Forbidden } />
            {/*Ruta solo para pruebas, borrar antes de la entrega"*/}
            <Route
              exact
              path="/reservation/:reservation_id"
              component={ user ? Reservation : Forbidden }
            />
            <Route exact path="/confirmation" render={()=> <ResSuccess message= "¡Muchas gracias!" text="Su reserva fue realizada con éxito." bMessage= "OK" />} />
            <Route exact path="/verification" render={()=> <ResSuccess message= "¡Muchas gracias!" text="Su email ha sido verificado exitosamente." bMessage= "Volver al home"/>} />
            <Route exact path="/success" render={()=> <ResSuccess message= "¡Muchas gracias!" text="Tu propiedad se ha creado con éxito." bMessage= "Volver al home"/>} />
            <Route exact path="/preferences" component={ user ? UserDesk : Forbidden }/>
            <Route exact path="/cancellation" render={()=> <ResSuccess message= "Reserva cancelada" text="Tu reserva ha sido cancelada con éxito." bMessage= "Volver al home"/>} />
            <Route path="*" component={NotFound} />
          </Switch>
          {showButton && (
            <button onClick={scrollToTop} className={toTop}>
              <i className="fas fa-chevron-up"></i>
            </button>
          )}
          <Footer />
        </UserContext.Provider>
      </div>
    </Router>
  );
};
