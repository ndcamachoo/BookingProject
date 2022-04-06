import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import styles from "./GridBanner.module.css";

export const Favorites = (props) => {
  const { notFav, trueFav } = styles;
  const [favData, setFavData] = useState([]);
  const [fav, setFav] = useState(false);
  const [statId, setStatId] = useState();
  const { productId } = props;
  const { user } = useContext(UserContext);
  const userId = user && JSON.parse(user).id;
  const bearer = user && `${JSON.parse(localStorage.getItem("bearer")).jwt}`;
  const options = {
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  const url =
    user &&
    `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/users/${userId}`;
  const url2 = `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/stats/save`;
  const url3 = `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com//stats/update`;
  let form = {
    user: { id: userId },
    product: { id: productId },
    like: !fav,
  };
  let form2= {
    id: statId,
    user: { id: userId },
    product: { id: productId },
    like: !fav,
  };

  useEffect(() => {
    if (user) {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          setFavData(data.stats);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  useEffect(() => {
    favData.map((stat) => {
      if(stat.productId == productId){
        setStatId(stat.id);
      }
      if (stat.productId == productId && stat.like) {
        setFav(true);
      }
    });
  }, [favData]);

  const handleFav = (e) => {
    e.preventDefault();
    if (!fav && statId == undefined) {
      fetch(url2, {
        method: "POST",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(form),
      })
        .then((response) => response.json())
        .then((data) => setStatId(data.id))
        .catch((error) => {
          console.log(error);
        });
    } else if (!fav) {
      fetch(url3, {
        method: "PUT",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(form2),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error);
        });
    } else if (fav) {
      fetch(url3, {
        method: "PUT",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(form2),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error);
        });
    }
    setFav(!fav);
  };

  return (
    <div>
      {fav ? (
        <div className={trueFav}>
          <i className="fas fa-heart" onClick={handleFav}></i>
        </div>
      ) : (
        <div className={notFav}>
          <i className="fal fa-heart" onClick={handleFav}></i>
        </div>
      )}
    </div>
  );
};
