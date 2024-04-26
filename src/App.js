import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import NavBar from './components/NavBar/NavBar';
import ThirdScreen from './screens/ThirdScreen';
import SmallNavBar from './components/NavBar/SmallNavBar';
import { useEffect, useState } from 'react';
import Where from './components/where/Where';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return <>
<NavBar/>
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
<Where/>
  </>
}

export default App;
