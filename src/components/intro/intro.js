import "./intro.scss";
import "../../styles.scss";
import pic from "./images/standing.JPG";

export default function Intro() {
  return (
    <section id="home" className="container">
      <div className="landingWrapper">
        <div className="landingContent">
          <h1 className="header">
            Hey, I'm <span className="Greg">Greg Fouzie</span> - A Software Dev
            from Ottawa.
          </h1>
          <h3 className="bio">
            I’ve developed pages and features for tens of millions of monthly
            users as a part of the Vivid Seats Web team, co-founded an
            award-winning SaaS startup ChangeRoom, and made Kontek Ecology's
            first client-facing web application.
          </h3>
        </div>
        <div className="image">
          <img src={pic} alt="Greg standing :)" />
        </div>
      </div>
    </section>
  );
}
