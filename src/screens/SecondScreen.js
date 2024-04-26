import styles from "./SecondScreen.module.css"
import {useEffect,useRef} from "react"
import {Player} from "@lordicon/react"
import baby from "../icons/wired-lineal-1526-onesies-baby-clothes.json"
import school from "../icons/wired-lineal-800-clothes.json"
import ballet from "../icons/wired-lineal-650-ballet-dancer.json"
import scouts from "../icons/wired-lineal-1697-campsite.json"
import towel from "../icons/wired-lineal-1607-towel.json"
import shoes from "../icons/wired-lineal-1692-running-shoe.json"
import Box from "../components/Box/Box"
import Button from "../components/Button/Button"
import HotPage from "./HotPage"
import cloth from "../images/taitz.png"
import cloth1 from "../images/taitz1.png"
import cloth2 from "../images/taitz2.png"
import cloth3 from "../videos/gufia.mp4"
import cloth4 from "../images/gufia1.png"
import cloth5 from "../images/gufia2.png"
import cloth6 from "../images/jeans.png"
import cloth7 from "../images/jeans1.png"
import cloth8 from "../images/jeans2.png"
import cloth9 from "../images/jeans3.png"

import woman from "../images/woman.png"
import woman1 from "../images/woman1.png"
import woman2 from "../images/woman2.png"
import woman4 from "../images/woman4.png"
import woman6 from "../images/woman6.png"
import woman7 from "../images/woman7.png"
import woman8 from "../images/woman8.png"
import woman10 from "../images/woman10.png"

import more from "../images/עמי בן דוד סופר סטייל דוגמאות 3.png"
import more1 from  "../images/עמי בן דוד סופר סטייל דוגמאות 4.png"
import more2 from  "../images/עמי בן דוד סופר סטייל דוגמאות 5.png"
import more3 from  "../images/עמי בן דוד סופר סטייל דוגמאות 6.png"
import more4 from  "../images/עמי בן דוד סופר סטייל דוגמאות 7.mp4"
import more5 from  "../images/עמי בן דוד סופר סטייל דוגמאות 8.png"
import more6 from "../images/עמי בן דוד סופר סטייל דוגמאות 9.png"
import more7 from "../images/עמי בן דוד סופר סטייל דוגמאות 10.png"
import more8 from  "../images/עמי בן דוד סופר סטייל דוגמאות 11.png"
import more10 from  "../images/עמי בן דוד סופר סטייל דוגמאות 12.png"
import more11 from  "../images/עמי בן דוד סופר סטייל דוגמאות 1.mp4"
import more12 from  "../images/עמי בן דוד סופר סטייל דוגמאות 14.png"
import more13 from  "../images/עמי בן דוד סופר סטייל דוגמאות 15.png"
import more14 from  "../images/עמי בן דוד סופר סטייל דוגמאות 16.png"
const SecondScreen=()=>{

    const playerRef1=useRef(null)
    const playerRef2=useRef(null)



    const content = [
  
        {
          type: 'image',
          src: cloth,
        },
     

          {
            type: 'image',
            src: cloth1,
          },
          {
            type: 'image',
            src: cloth2,
          },
 


 
     
      ];
       const content2 = [
  
        {
          type: 'image',
          src: cloth6,
        },
     

          {
            type: 'image',
            src: cloth7,
          },
          {
            type: 'image',
            src: cloth8,
          },
          {
            type: 'image',
            src: cloth9,
          },
      ];
      const content3 = [
  
        {
          type: 'video',
          src: cloth3,
        },
     

          {
            type: 'image',
            src: cloth4,
          },
          {
            type: 'image',
            src: cloth5,
          },
 
      ];

      const content4 = [
  
        {
          type: 'image',
          src: woman,
        },
     

          {
            type: 'image',
            src: woman1,
          },
          {
            type: 'image',
            src: woman2,
          },
 
          {
            type: 'image',
            src:woman4,
          },
  
  
            {
              type: 'image',
              src: woman6,
            },
            {
              type: 'image',
              src: woman7,
            },
   
            {
              type: 'image',
              src: woman8,
            },    
           
      
                {
                  type: 'image',
                  src: woman10,
                },
  
      ];

      const content5 = [
  
        {
          type: 'image',
          src: more,
        },
     

          {
            type: 'image',
            src: more1,
          },
          {
            type: 'image',
            src: more2,
          },
 
          {
            type: 'video',
            src:more4,
          },
  
  
            {
              type: 'image',
              src: more6,
            },
            {
              type: 'image',
              src: more7,
            },
   
            {
              type: 'image',
              src: more8,
            },    
            
            {
              type: 'video',
              src: more11,
            },

            {
              type: 'image',
              src: more12,
            },
                {
                  type: 'image',
                  src: more10,
                },    
                 {
                  type: 'image',
                  src: more13,
                },
                {
                  type: 'image',
                  src: more3,
                },
                {
                  type: 'image',
                  src: more5,
                },
                {
                  type: 'image',
                  src: more14,
                },
  
      ];
    return <>



    <div className={styles.title}>מה במלאי ?</div>
      <div className={styles.little}>(החליקו בין התמונות)</div>

<HotPage title="טייצים" content={content}/>

<HotPage title="גופיות ספגטי" content={content2}/>
 
<HotPage title="קולקציית נשים" content={content4}/>


<HotPage title="שורטים" content={content3}/>

<HotPage title="ועוד שלל מוצרים" content={content5}/>

    <div className={styles.title}>בנוסף , תוכלו למצוא אצלנו</div>
   <div className={styles.row}>
<Box title="בגדי תינוקות" icon={baby} description="בגדי תינוקות מ100% כותנה ובכל הצבעים זמינים אצלנו בחנות"/>
<Box title="חולצות בית ספר" icon={school} description="חולצות בית ספר עם הדפס מיוחד בגודל המתאים עבורך"/>


  <Box title=" ביגוד לבלט" icon={ballet} description="נעלי בלט בכל הגדלים ובכל הצבעים עם הסוליות הכי רכות במיוחד עבורכן"/>
    <Box title="מגבות ושטיחוני אמבטיה" icon={towel} description="מגבות ושטיחוני אמבטיה בכל הצבעים 100 אחוז כותנה באיכות ללא פשרות"/>
    </div>

    <div className={styles.row}>
<Box title="מדי צופים" icon={scouts} description="בגדי מדריך וחניך של הצופים בכל המידות נמצאים במלאי"/>
<Box title="נעליים" icon={shoes} description="נעליים במגוון רחב של סוגים : בלט , צופים , תינוקות, גברים ועוד המון"/>


 
    </div>
   <Button/>
    </>
}
export default SecondScreen