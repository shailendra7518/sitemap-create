import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { urlFor } from "~/root";

const ProjectOverview = ({ project }: any) => {
  const [windowWidth, setWindowWidth] = useState<any>(null);
  //Get window size for slider for moblie view
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    function reportWindowSize(): void {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);
  return (
    <div className="project-detail-box">
      <div className="custom-modal-dialog custom-modal-dialog-centered mw-100 d-flex">
        <div className="custom-modal-content border-0 ">
          <div className="custom-modal-body d-xl-flex justify-content-center align-items-center">
            <div className="project-image text-center px-1 px-md-4 ">
              <img
                src={project?.bannerImage && urlFor(project?.bannerImage).url()}
                className="img-fluid"
                alt={project.name}
              />
            </div>
            <div className="project-content pt-3 pt-lg-0 ms-0 ms-sm-3 ms-lg-5">
              <div className="project-title py-3">
                <h3 className="fw-lighter heading">{project.name}</h3>
                <h4>{project.subTitle}</h4>
              </div>
              <ul className="project-details ps-4">
                {windowWidth <= 576
                  ? project.modalpoints &&
                    project.modalpoints
                      .slice(0, 3)
                      .map((point: string, index: number) => (
                        <li
                          className="project-detail-list px-2 py-1 py-md-2"
                          key={`project-deail-list-point-${index}`}
                        >
                          {point}
                        </li>
                      ))
                  : project.modalpoints &&
                    project.modalpoints.map((point: string, index: number) => (
                      <li
                        className="project-detail-list px-2 py-1 py-md-2"
                        key={`project-deail-list-point-${index}`}
                      >
                        {point}
                      </li>
                    ))}
              </ul>
              <div className="project-more-details d-flex justify-content-center">
                <Link
                  className="project-more-details text-decoration-none"
                  to={`projects/${project.slug.current}`}
                >
                  View More Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
