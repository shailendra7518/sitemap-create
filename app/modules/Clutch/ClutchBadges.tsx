interface ClutchBadgesProps {
  content: Record<string, any>;
  className?: string;
}

const ClutchBadges: React.FC<ClutchBadgesProps> = ({ content, className }) => {
  return (
    <div className={`d-flex gap-2 ${className}`}>
      {content.map((data: any, index: number) => {
        return (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center cursor-pointer"
          >
            <img
              src={data.image}
              alt={data.alternate}
              className="clutch-badges-img"
              loading="lazy"
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

export default ClutchBadges;
