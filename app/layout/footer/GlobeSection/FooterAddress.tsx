import React from "react";
import { footerAddressConstants } from "../../../constants";
import Address from "./Address";
const FooterAddress = () => {
  return (
    
      <div className="col-lg-6  my-auto">
        <div className="footer-Addresses">
          <div className="address-inner offset-xl-2 px-md-5 px-4">
            <Address data={footerAddressConstants.addresses} />
          </div>
        </div>
      </div>
    
  );
};

export default FooterAddress;
