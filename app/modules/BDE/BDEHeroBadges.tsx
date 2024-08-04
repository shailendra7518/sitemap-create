const BDEHeroBadges: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="justify-content-center align-items-center hero-badges">
      {content.map((data: any, index: number) => {
        return (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center badge-container"
            role="button"
          >
            <img
              src={data.image}
              className="hero-profile-badge"
              alt={data.alternate}
              onClick={() => {
                if (typeof window !== "undefined")
                  window.open(data.link, "newwindow", "width=1280,height=800");
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BDEHeroBadges;
