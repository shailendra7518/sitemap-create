import type { Address as AddressProps } from "~/constants/types";

const Address: React.FC<{ data: AddressProps[] }> = ({ data }) => {
  return (
    <>
      {data.map((el, index) => {
        return (
          <div className="address" key={index}>
            <div className="address-icon">
              <img
                src={el.logo}
                alt={el.country + " flag"}
                height="24"
                width="34"
                loading="lazy"
              />
              <span className="location-text ms-2 fw-bold" role="heading" aria-level={2}>
                {el.country}
              </span>
            </div>
            <p className="location-text py-3 mb-lg-4" role="heading" aria-level={2}>{el.address}</p>
          </div>
        );
      })}
    </>
  );
};

export default Address;
