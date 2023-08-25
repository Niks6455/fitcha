import React, { useState } from "react";
import styles from './ActiveCard.module.scss'
import AppContext from '../../context';
import { BrowserRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';

const ActiveCard = ({text, name, count}) => {
  const {img1, img2, img3, cafe1, cafe2, cafe3} = React.useContext(AppContext)
  const location = useLocation();
  console.log(location.pathname);
  function prov(count){
    if(Number(count) === 1 && location.pathname === "/Active") return img1
    if(Number(count) === 2 && location.pathname === "/Active") return img2
    if(Number(count) === 3 && location.pathname === "/Active") return img3
    if(Number(count) === 1 && location.pathname === "/Eade") return cafe1
    if(Number(count) === 2 && location.pathname === "/Eade") return cafe2
    if(Number(count) === 3 && location.pathname === "/Eade") return cafe3
  }
  
  
	return (	

 
              <div className={styles.ActiveCard}>
                <div className={styles.ActiveCard_inner}>
                  <div className={styles.ActiveCard_info}>
                 
                    <div>
                    Место №  {count} - <span className={styles.blue_color}>{name}</span>
                    </div>
                    <div className={styles.ActiveCard_img}>
                      <img   src={prov(count)} alt="Описание изображения" />
                    </div>
                    
                    <div className={styles.concluz}>{text}</div>
                  </div>
                </div>
               
              </div> 
             
	)
}

export default ActiveCard