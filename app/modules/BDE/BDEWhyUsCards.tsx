import { companyEssence } from "~/constants/companyEssence";
import type { CompanyEssence } from "~/constants/types";

const BDEWhyUsCards = () => {
  return (
    <div className="why-us-container">
      {companyEssence.map((data: CompanyEssence, index: number) => (
        <div className="why-us__card" key={index}>
          <div className="why-us__card-img">
            <object
              data={data.logo}
              width="60"
              height="60"
              aria-label="Logo"
            ></object>
          </div>
          <h4 className="why-us__card-title" role="heading">
            {data.title}
          </h4>
          <p className="why-us__card-desc">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BDEWhyUsCards;
