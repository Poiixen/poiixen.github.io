import Link from 'next/link'

import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
const social = [
    {icon: <FaLinkedinIn /> , path: 'https://www.linkedin.com/in/jorgegarcia26/'},
    {icon: <FaGithub /> , path: 'https://github.com/Poiixen'},
    
]
const Social = ({containerStyles, iconStyles}) => {
  return <div className= {containerStyles}> 
    {social.map((item,index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
    })}
  </div>
}

export default Social;