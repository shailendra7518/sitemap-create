import { emailID } from "~/constants/emailID";

const LetsTalk = () => {
  return (
    <div className="col-lg-5 mt-3">
      <div className="heading">
        <h2>
          <span className="fw-bold me-2"> Let's</span>Talk Business
        </h2>
      </div>
      <div className="heading-sub-text pe-md-5">
        Our representative will contact you within 24 hours. After that, we will
        sign an NDA to keep your ideas confidential and discuss the main
        requirements of the project.
      </div>
      <div className="heading-sub-text pe-5 text-start">
        Simply fill out the form or email us at
        <span className="ms-1">
          <a href={`mailto:${emailID}`}>{emailID}</a>
        </span>
      </div>
    </div>
  );
};

export default LetsTalk;
