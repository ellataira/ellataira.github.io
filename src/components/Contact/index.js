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
        e.preventDefault();
    
        emailjs.sendForm('service_uzmgx08', 'template_a0irv1t', form.current, '2T0icgf2q0EQSCBEJ')
          .then((result) => {
            alert('Message successfully sent!')
            window.location.reload(false)
          }, (error) => {
            alert('Failed to send message; please try again.')
          });
      };

    return(
        <>
        <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p2>
          send me an email, please! 
          </p2>

          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type="text" name="from_name" placeholder="Name" required />
                    </li>             
                    <li className='half'>
                        <input type="text" name="reply_to" placeholder="Email" required />
                    </li>  
                    <li>
                        <input placeholder="Subject" type="text" name="subject" required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required />
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value="SEND" /> 
                    </li>
                </ul>
            </form>
          </div>
        </div>
            <Loader type='semi-circle-spin' />
        </div>
        </> 
    ) 
}

export default Contact