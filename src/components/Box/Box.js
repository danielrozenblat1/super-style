import { useEffect, useRef } from "react"
import styles from "./Box.module.css"
import { Player } from "@lordicon/react"

const Box=(props)=>{
    const playerRef1=useRef(null)

    
useEffect(()=>{
    playerRef1?.current?.playFromBeginning()

},[])


    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

    return <>
    <div className={styles.box}>
    <div className={styles.title}>{props.title}</div>
    <div className={styles.icon}>
    <Player ref={playerRef1} icon={props.icon} size="100%" onComplete={handleComplete}/>

</div>
    {/* <div className={styles.description}>{props.description}</div> */}
    </div>
    </>
}
export default Box