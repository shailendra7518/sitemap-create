import AlternateSideCard from "~/components/AlternateSide/AlternateSideCard";
import { clientOverlook } from "~/constants/clientOverlook";

const ClientOverlook = () => {
  return (
    <section className="clients-overlook mt-5 pt-5">
      <div className="container">
        <h2 className="content-title text-center mb-5">
          Why Clients Shouldn’t Overlook <br /> Discovery Workshop?
        </h2>
        <div className="banner">
          <div className="container">
            {clientOverlook.map((data, index) => (
              <AlternateSideCard
                data={data}
                className={index % 2 ? " flex-row-reverse" : " "}
                key={`over-look-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientOverlook;
