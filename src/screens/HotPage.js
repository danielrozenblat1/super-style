import styles from "./HotPage.module.css"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import zIndex from "@mui/material/styles/zIndex";
const HotPage=(props)=>{
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
   
    slidesToShow: (window.innerWidth >= 850) ? 6 : (window.innerWidth >= 500 ? 3 : 2),
    slidesToScroll: (window.innerWidth >= 850) ? 6 : (window.innerWidth >= 500 ? 3 : 2),
  };

useEffect(()=>{

  ScrollReveal().reveal(`.${styles.title}`, {
    duration: 1000,
    distance: "50px",
    origin: "top", // Start from the right side
    easing: "ease-in-out",
    reset:false,
    viewFactor: 0.2,
    interval: 200, // Delay between each element
    delay: 200, // Delay before the animation starts
    scale: 1, // Set scale to 1 or null
  });
  ScrollReveal().reveal(`.${styles.sliderContainer}`, {
    duration: 1000,
    distance: "350px",
    origin: "right", // Start from the right side
    easing: "ease-in-out",
    reset: false,
    viewFactor: 0.2,
    interval: 200, // Delay between each element
    delay: 200, // Delay before the animation starts
    scale: 1, // Set scale to 1 or null
    // Added properties for z-index
    container: {
      zIndex: -1 // Set container's z-index to -1
    },
    // Assuming image class is .sliderImage

  });
  

},[])

return <>
<div className={styles.title}>{props.title}</div>
<div className={styles.sliderContainer}>
        <Slider  {...sliderSettings}>
          {props.content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`סופר סטייל עמי בן דוד בלבשה לכל המשפחה ${index + 1}`} />
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )}
            </div>
          ))}
        </Slider>
      </div>
</>

}
export default HotPage