import styles from "./Where.module.css"
import Social from "../social/Social"
import logo from "../../images/סופר סטייל.png"
const Where=()=>{

return <>
<div className={styles.box}>
<div className={styles.center}><img className={styles.image} src={logo}/></div>
<div className={styles.city}>הבנים 12 רמת השרון</div>
<div className={styles.hours}>שעות פתיחה : <br/> ימים א'-ה' : 8:00 - 20:00 <br/> יום ו' :8:00 - 15:00</div>
<div className={styles.search}>חפשו אותנו ב</div>
<Social/>
</div>

</>

}
export default Where