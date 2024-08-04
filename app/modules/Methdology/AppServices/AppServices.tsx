import { appService } from "~/constants/appServices";
import AppServiceCard from "./AppServiceCard";

const AppServices = () => {
  return (
    <section className="mobile-app-services pt-5">
      <div className="container">
        <h2 className="content-title  text-center mb-5">
          Why is it important to You and Us?
        </h2>
        <div className="row mb-3">
          {appService.map((data, index) => (
            <AppServiceCard cardData={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppServices;
