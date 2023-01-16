import LogoTitle from "../../assets/images/logo-s.png";
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'l', 'a']
    
    useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
      return () => clearTimeout(timer)
    }, []) 


    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>h</span>
                <span className={letterClass}>e</span>           
                <span className={letterClass}>l</span>
                <span className={letterClass}>l</span>
                <span className={`${letterClass} _12`}>o,</span>
                <br /> 
                <span className={`${letterClass} _13`}>i</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                </h1>
                <h2>computer science student at northeastern university</h2>
                <a className="flat-button" href="mailto:ejtaira177@gmail.com">CONTACT ME</a>
            </div>
            <Logo />
        </div>
        <Loader type="semi-circle-spin" />
        </>
    );
}

export default Home 