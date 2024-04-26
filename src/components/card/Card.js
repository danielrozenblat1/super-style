import ActionAreaCard from "./MuiCard"
import styles from "./Card.module.css"
import ami from "../../images/עמי בן דוד.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Card=()=>{

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 100,
            delay: 200,
            scale: 1,
          });
        },[])
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll:1
          };
    return <>
    


    {/* <div className={styles.sliderContainer}> */}
  {/* <Slider {...sliderSettings} style={{zIndex:0}}> */}

  <ActionAreaCard src={ami} name="עמי בן דוד" description="מנכ''ל ומייסד סופר סטייל" background="white"/>
  
  {/* </Slider></div> */}
  
  
    
    
    
    </>
}
export default Card