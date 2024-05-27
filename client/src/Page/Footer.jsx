import { Link } from 'react-router-dom';
import Github from '../Components/links/Github';
import LinkedIn from '../Components/links/LinkedIn';
import Instagram from '../Components/links/Instagram';

const Footer = () => {
  return (
    <div className=" mt-60">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to={'/about-me'} className="link link-hover">
            About me
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://docs.google.com/document/d/18ySfM4Db26B9PCVPvKZI5ISMoRCcCt7BLqKDb1_F9HY/edit?usp=sharing"
            className="link link-hover"
          >
            Resume
          </Link>

          <Link to={'contact'} className="link link-hover">
            Contact
          </Link>

          <Link to={'donate'} className="link link-hover">
            Donate
          </Link>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <Github />

            <LinkedIn />

            <Instagram />
          </div>
        </nav>

        <aside>
          <p>Copyright © 2024 - All right reserved by Cool Games Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
