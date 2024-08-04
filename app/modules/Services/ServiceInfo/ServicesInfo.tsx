import AlternateSideServices from "~/modules/Services/AlternateSideServices";

const ServicesInfo = ({ infoList }: any) => {
  return (
    <section className="web-services-content">
      <div className="container">
        <AlternateSideServices data={infoList} />
      </div>
    </section>
  );
};

export default ServicesInfo;
