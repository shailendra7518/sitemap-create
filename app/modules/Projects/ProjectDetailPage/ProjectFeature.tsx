const ProjectFeature = ({ features }: any) => {
  return (
    <section className="project-features py-4 mt-lg-5">
      <div className="container">
        <div className="heading mb-4">
          <h2>
            <span className="fw-bold me-2">Project</span>Features
          </h2>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-12 col-lg-12">
            <ul className="detail-list-group  project-feature-list mb-0">
              {features.points.map((feature: string, index: string) => (
                <li
                  className="detail-list feature-list ms-2 mb-2"
                  key={`feature-${index}`}
                >
                  <span className="list-content position-relative" role="heading" aria-level={2}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeature;
