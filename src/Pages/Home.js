import "./App.css";
import HeadingCont from "../Molecules/HeadingCont";
import Header from "../Molecules/Header";
import HomeCont from "../Molecules/HomeCont";

function Home() {
  return (
    <HomeCont>
      <HeadingCont>
        <Header>
          <div className="logo-cont">
            <img
              className="logo"
              src="https://i.imgur.com/kevl9Xw.png"
              alt="Save the Lost Logo"
            />
          </div>
          <div className="arial-links">
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Contact</a>
          </div>
          <div className="action-buttons">
            <a
              target="_blank"
              href="https://support.savethechildren.org/site/SPageNavigator/sponsorship.html#!/"
              className="sponser-arial"
              rel="noreferrer"
            >
              Become a sponser
            </a>
            <a target="_blank" href="/">
              Adopt
            </a>
          </div>
        </Header>
      </HeadingCont>
      <div className="donate-now">
        <h1>Donate now!</h1>
        <button>DONATE</button>
      </div>
    </HomeCont>
  );
}

export default Home;
