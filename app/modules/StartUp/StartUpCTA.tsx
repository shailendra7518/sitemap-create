import InvertedWhiteComma from "~/components/Icons/InvertedWhiteComma";
import NavLink from "~/components/NavLink";

const StartUpCTA = () => {
  return (
    <section className="start-up-cta-section">
      <div className="container">
        <div className="start-up-cta-section-inner">
          <div className="start-up-cta-heading">
            <InvertedWhiteComma />
            <h2>We will walk the walk</h2>
          </div>
          <NavLink
            classes="main-btn startup-button shadow-none d-inline-flex justify-content-center align-items-center"
            href="/contact/#contact-form"
          >
            Lets Get Started Together
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default StartUpCTA;
