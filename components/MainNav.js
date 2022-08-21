import feature from './../pages/feature';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/feature" className="navigation__link">
                <span>01</span>Services
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Pricing
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular Services
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Testimonial
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainNav;
