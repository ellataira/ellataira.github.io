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
                                alt={port.description} 
                                className="portfolio-image"/>
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
                        I am a third year undergraduate student at Northeastern University in Boston. I am currently majoring in computer 
                        science with a concentration in artifical intelligence. I am currently seeking a co-op from July - December 2024. 
                    </p>
                    <p>
                        I have experience writing and am proficient in Java, Python, Racket, Assembly, Git, C, and Latex. I am familiar with Swift, JavaScript, and CSS. This website 
                        is my first project using React and CSS.   
                    </p>
                    <p>
                        I have completed the following relevant courses: 
                        Artificial Intelligence, Mathematics of Data Models, Technology and Human Values,
Object Oriented Design, Foundations of Cybersecurity, Computer Systems, Algorithms and Data
                    </p>
                    <p>
                        I have completed my first co-op experience at Check Point Software Technologies Inc. as a Security Engineer Intern. In this role, I have collaborated in customer meetings to identify cybersecurity challenges and execute customized solutions, 
                        demonstrated and implemented Check Point’s cloud, network, and endpoint security solutions, emphasizing their role in safeguarding operations and data against threats, and 
                        leveraged self-directed company expertise to enhance team projects, emphasizing security solutions for operational resilience against evolving threats.
                    </p>
                    <p>
                        I am originally from Chicago, IL. My other interest include running, hiking, crossword puzzles, and cooking. I also absolutely love dogs! 
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