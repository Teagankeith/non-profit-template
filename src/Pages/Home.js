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
      <div className="img-cards">
        <div className="unadopted">
          <h2>132 Million</h2>
          <p>
            132 Million children are classified as orphans, 13 million of which
            lost both parents.
          </p>
        </div>
        <div className="families-adopting">
          <h2>2 Million</h2>
          <p>
            Only 2 Million families are looking or waiting to adopt a child
            currently in the United States.
          </p>
        </div>
        <div className="lost-children">
          <h2>8 Million</h2>
          
          <p>
            8 Million child are classified as missing around the world.
          </p>
        </div>
      </div>
    </HomeCont>
  );
}

export default Home;
