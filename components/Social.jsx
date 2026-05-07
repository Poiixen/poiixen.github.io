import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaQuestion } from 'react-icons/fa';

const social = [
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/jorgegarcia26/' },
  { icon: <FaGithub />, path: 'https://github.com/Poiixen' },
  { icon: <FaQuestion />, path: '/r/index.html' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) =>
        item.path.startsWith('https') || item.path === '/r/index.html' ? (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        ) : (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      )}
    </div>
  );
};

export default Social;