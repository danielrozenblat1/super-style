import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"

import { useRef } from "react"
import Card from "../components/card/Card"
const ThirdScreen=()=>{
    const playerRef1=useRef(null);


    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

return <>
<div className={styles.title}>קצת עלינו</div>
<div className={styles.description}>הצוות מאחורי סופר סטייל</div>
<Card />

</>


}
export default ThirdScreen