import React, {useContext} from 'react'
import { useLocation } from "react-router-dom";
import {SocialShareVisibilty} from "../GridBanner/SocialShareVisibility"
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    WhatsappIcon,
  } from "react-share";

import styles from './SocialShare.module.css'

export const SocialShare = () => {
    const location = useLocation();
    const path = location.pathname;
    const {social, icons}= styles;
    const {visibility, setVisibility}= useContext(SocialShareVisibilty);
    
    const handleClick = ()=>{

      setVisibility(false);
    }

    return (
        <div  className={social}>
        <p  onClick= {handleClick}>X</p>   
        <h4>Compartí tu próximo alojamiento en las redes sociales</h4> 
        <div className={icons}> 
        <EmailShareButton url={`https://frontend.dvx32y9gwvi8h.amplifyapp.com/${path}`} quote={"Digital Booking"} className="share">
          <EmailIcon size={29} round={true} />
        </EmailShareButton>
        <FacebookShareButton
          url={`https://frontend.dvx32y9gwvi8h.amplifyapp.com${path}`}
          quote={"Digital Booking"}
          className="share"
        >
          <FacebookIcon size={29} round={true} />
        </FacebookShareButton>
      <LinkedinShareButton
        url={`https://frontend.dvx32y9gwvi8h.amplifyapp.com${path}`}
        quote={"Digital Booking"}
        className="share"
      >
        <LinkedinIcon size={29} round={true} />
      </LinkedinShareButton>
      <PinterestShareButton
        url={`https://frontend.dvx32y9gwvi8h.amplifyapp.com${path}`}
        quote={"Digital Booking"}
        className="share"
      >
        <PinterestIcon size={29} round={true} />
      </PinterestShareButton>
      <WhatsappShareButton
        url={`https://frontend.dvx32y9gwvi8h.amplifyapp.com${path}`}
        quote={"Digital Booking"}
        className="share"
      >
        <WhatsappIcon size={29} round={true} />
      </WhatsappShareButton>
      </div>
      </div>
    )
}
