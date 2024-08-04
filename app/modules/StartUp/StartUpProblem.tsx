import NavLink from "~/components/NavLink";

const StartUpProblem = () => {
  return (
    <section className="start-up-problem-section">
      <div className="container">
        <div className="start-up-problem-section-inner">
          <h2 className="start-up-heading">
            Signs you need <span> tech partnership </span>
          </h2>
          <div className="start-up-meeting">
            <div className="start-up-meeting-description">
              <p>Not sure which Technology to Adopt?</p>
              <p>Costs out of control?</p>
            </div>
            <NavLink
              classes="main-btn startup-button shadow-none d-inline-flex justify-content-center align-items-center"
              href="/contact"
            >
              It's ok, we can help
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartUpProblem;
