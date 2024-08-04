const OurGeography = () => {
  return (
    <section className="our-geography">
      <div className="container">
        <div className="our-geography-heading  text-center justify-content-center pt-5 pb-4 ">
          <div className="heading justify-content-center">
            <h2>
              <span className="fw-bold me-2"> Our </span> Geography
            </h2>
          </div>
          <p className="our-geography-sub-title mb-4 text-center mx-auto my-2 ">
            worldwide clients
          </p>
        </div>
        <div className="countries-wide-clients text-center">
          <img
            className="img-fluid pb-5"
            width="1124px"
            height="794px"
            src="/images/world-wide-clients.svg"
            alt="World map showing locations of worldwide clients"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OurGeography;
