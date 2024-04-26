import styles from "./FirstScreen.module.css"

import Button from "../components/Button/Button"
import logo from "../images/סופר סטייל.png"

const FirstScreen=(props)=>{





return <>
<div className={props.scrolled ? styles.titleFixed : styles.title}>שמים על עצמנו רק </div>
<div className={styles.center}><img src={logo} className={styles.image} alt="סופר סטייל לוגו"/></div>
<div className={styles.subTitle}>הלבשה לכל המשפחה</div>


</>


}
export default FirstScreen