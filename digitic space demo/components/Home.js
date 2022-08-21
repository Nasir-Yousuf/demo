import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/';

// const Home = () => {
//   return (
//     <div className="homeBackground">
//       <div className="homeImg"></div>
//     </div>
//   );
// };

const Home = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/digitic1.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        {' '}
        <h1 className="heading-primary">
          <span className="heading-primary--main">Digitic Space</span>
          <span className="heading-primary--sub">
            All-Rounder Digital Marketing Service Provider
          </span>
        </h1>
        <a
          href="#section-tours"
          className="_btn _btn--white _btn--animated _btn_down"
        >
          Discover our services
        </a>
      </div>
    </header>
  );
};
export default Home;
