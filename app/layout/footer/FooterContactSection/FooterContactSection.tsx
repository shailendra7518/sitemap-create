import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "~/components/Form/NewsLetterForm";
import ProfileBadges from "~/modules/Home/Hero/ProfileBadges";
import { profileBadges } from "../../../constants/profileBadges";

const FooterContactSection = () => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-5 footer-contact-list">
      <div className="footer-widget company mx-3">
        <div className="footer-headings d-none d-sm-block">Contact</div>
        <ul className="p-0 m-0 d-none d-sm-block">
          <li className="list-group-item p-0 py-3">
            <a href="tel:+918780173037">
              <span className="d-inline-block">
                <img
                  src="/images/icons/footer-contact.svg"
                  className="me-1"
                  alt="contact-icon"
                  width="30"
                  height="30"
                  loading="lazy"
                />
                +91 8780 173 037
              </span>
            </a>
          </li>
          <li className="list-group-item p-0">
            <a href="mailto:info@techstaunch.com">
              <span className="d-inline-block">
                <img
                  src="/images/icons/footer-e-mail.svg"
                  className="me-1"
                  alt="e-mail-icon"
                  width="30"
                  height="26"
                  loading="lazy"
                />
                info@techstaunch.com
              </span>
            </a>
          </li>
        </ul>
        <div className="footer-subscribe">
          <MailchimpSubscribe
            url={
              "https://techstaunch.us14.list-manage.com/subscribe/post?u=8668452618d5c30679ad6022a&amp;id=421ad3b023&amp;f_id=006ffce0f0"
            }
            render={({ subscribe, status, message }: any) => (
              <NewsLetterForm
                status={status}
                message={message}
                onValidated={(formData: any) => subscribe(formData)}
              />
            )}
          />
        </div>
        <ProfileBadges
          content={[profileBadges[3], ...profileBadges.slice(1, 3)]}
        />
      </div>
    </div>
  );
};

export default FooterContactSection;
