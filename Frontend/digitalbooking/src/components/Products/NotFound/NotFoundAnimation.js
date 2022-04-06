import { useEffect } from "react";
import lottie from "lottie-web";
import PHError from "./PHerror.json";
import cow from "./cow.json"
import './NotFoundAnim.css'

export default function NotFoundAnimation(props) {
  
  
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".anim"),
      animationData: cow
    });
  }, []);

  return (
    <div className= "animContainer">
      <div className= "anim"/>
    </div>
  );
}
