import React, {useState, useMemo, useContext} from "react";
import { GalleryContext } from "../ProductService/GalleryContext";
import { SocialShare } from "../SocialShare/SocialShare";
import styles from "./GridBanner.module.css";
import { SocialShareVisibilty } from "./SocialShareVisibility";
import { Favorites } from "./Favorites";

export const GridBanner = (props) => {
  const { div1, shareIcon, div2, div3, div4, div5, grid, gridContainer, image, social, share } = styles;
  const {setGallery}= useContext(GalleryContext);
  const { ph1, ph2, ph3, ph4, ph5, productId} = props;
  const [visibility, setVisibility] = useState(false);
  const value = useMemo(() => ({ visibility, setVisibility }), [visibility, setVisibility ]);
 

  const handleClick= ()=>{
    setVisibility(true)
  }


  const handleGallery =()=>{
    setGallery(true)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <div className={grid}>
      <div className={gridContainer}>
        <div className={social}>
          <div className={shareIcon}><i className="fas fa-share-alt" onClick={handleClick}></i></div>
          <Favorites productId={productId} />
          {visibility &&  <SocialShareVisibilty.Provider value={value}>
            <SocialShare className={share}/> </SocialShareVisibilty.Provider>}
        </div>
        <div className={image}>
          <div className={div1}><img src={ph1} alt="imagen"/></div>
          <div className={div2}><img src={ph2} alt="imagen"/></div>
          <div className={div3}><img src={ph3} alt="imagen"/></div>
          <div className={div4}><img src={ph4} alt="imagen"/></div>
          <div className={div5}><img src={ph5} alt="imagen"/></div>
        </div>
        <h5 onClick={handleGallery}>Ver más</h5>
      </div>
    </div>
  );
};
