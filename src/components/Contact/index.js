import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
          return () => clearTimeout(timer)
        }, []) 
    
    const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
            .sendForm(
                'service_uzmgx08',
                'template_z5jlfad',
                form.current,
                '2T0icgf2q0EQSCBEJ'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message; please try again.')
                }
            )
    }

    return(
        <>
        <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            paragraph block! 
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type="text" name="name" placeholder="Name" required />
                    </li>
                    <li className='half'>
                        <input type="email" name="email" placeholder="Email" required />
                    </li>
                    <li>
                        <input placeholder="Subject" type="text" name="subject" required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='massage' required />
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value="SEND" /> 
                    </li>
                </ul>
            </form>
          </div>
        </div>
            <Loader type='pacman' />
        </div>
        </> 
    ) 
}

export default Contact