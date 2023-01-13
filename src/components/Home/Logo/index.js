import './index.scss'
import LogoS from '../../../assets/images/flowertransp.png'
import { useRef } from 'react';


const Logo = () => { 

    const solidLogoRef = useRef(); 

    /** image rendered for live webiste version -- does not animate the logo image because
     * I do not have full access to the gsap library, only the trial version 
     */
    return (
      <img
            className="solid-inanimate-logo"
            ref={solidLogoRef}
            src={LogoS}
            alt="JavaScript,  Developer"
          />
    )


}

export default Logo 

