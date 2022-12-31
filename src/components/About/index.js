import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faJava, faPython, faReact, faSwift } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { faC } from '@fortawesome/free-solid-svg-icons';
import galleryData from '../../data/gallery.json'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
          return () => clearTimeout(timer)
        }, []) 


    const renderGallery = (gallery) =>{
        return (
            <div className="images-container">
                {
                gallery.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                                src={port.cover} 
                                alt="gallery" 
                                className="gallery-image"/>
                        </div>       
                    )
                }) 
                }
            </div>
        );
    }

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['a','b','o','u','t', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am a second year undergraduate student at Northeastern University in Boston. I am currently majoring in computer 
                        science with a concentration in artifical intelligence. 
                    </p>
                    <p>
                        I have experience writing and am proficient in Java, Python, Racket, Assembly, Git, C, and Latex. I know basic skills in Swift, React, and CSS. This website 
                        is my first project using React and CSS.   
                    </p>
                    <p>
                        I have completed the following relevant courses: 
                        Fundamentals of Computer Science I/II, Discrete Structures, Mathematics of Data Models, Introduction to Mathematical Reasoning, Technology and Human Values (philosophy/ethics), Object Oriented Design, 
                        Foundations of Cybersecurity, Computer Systems, Algorithms and Data, and Introduction to Artifical Intelligence. 
                    </p>
                    <p>
                        My other interest include running, hiking, photography, and cooking. I also absolutely love dogs! 
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faPython} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faGithub} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faSwift} color="#EFD812" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faC} color="#EC4D28" />
                        </div>
                    </div>
                </div>

                <div>{renderGallery(galleryData.gallery)}</div>

            </div>
            <Loader type="semi-circle-spin" />
        </>
    )
}

export default About