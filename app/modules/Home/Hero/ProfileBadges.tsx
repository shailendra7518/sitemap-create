const ProfileBadges: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="row justify-content-center align-items-center mt-5">
      {content.map((data: any, index: number) => {
        return (
          <div
            key={index}
            className="d-flex p-2 justify-content-center align-items-center col-4 cursor-pointer"
          >
            <img
              src={data.image}
              className="w-100 h-auto profile-badge"
              width="120"
              height="120"
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

export default ProfileBadges;
