import React from "react";
import MethodologySlider from "~/components/MethodologySlider/MethodologySlider";
import { scrumUsecases } from "~/constants/scrumUsecases";

const AgileUsecases: React.FC = () => {
  return (
    <section className="use-cases">
      <div className="container">
        <h2 className="content-title fw-bolder  mt-5">Use Cases:</h2>
        <h2 className="content-title white ">Agile SCRUM Methodology</h2>
        <MethodologySlider data={scrumUsecases} />
        <div className="d-flex gap-lg-5 justify-content-center flex-lg-row flex-column flex-nowrap flex-lg-wrap mt-4">
          <div className="d-flex col-lg-5 mb-4 mb-lg-0 h-100">
            <div className="block p-4">
              <h2 className="content-sub-title lh-base text-center pe-0 pe-xl-3 pt-4 ">
                Agile works best with projects that have a high level of
                <span className="text-theme">&nbsp;uncertainty</span>
              </h2>
            </div>
          </div>
          <div className="d-flex col-lg-5 mb-4 mb-lg-0 h-100">
            <div className="block p-4">
              <h2 className="content-sub-title lh-base text-center pe-5 pt-4">
                Waterfall works best for projects with high
                <span className="text-theme">&nbsp;value&nbsp;</span> and
                <span className="text-theme">&nbsp;certainty.</span>
              </h2>
            </div>
          </div>
        </div>
        <p className="content-details mt-5">
          Both Agile and Waterfall are two different schools of thought in the
          project management world. The right project execution process, whether
          it’s Waterfall or Agile depend on the context of your project. Like we
          always say-Every project is unique and requires a different treatment
          altogether.
        </p>
        <p className="content-details">
          Contrary to popular belief, Agile methodology doesn’t work with all
          types of projects. For instance, if you own a grocery store, and it
          works well, and you want to open another one. You don’t need ‘Agile’
          way of project management. It would simply be a waste crucial
          resources that are already scarce. How we help our clients identify if
          they need Agile methodology is based on the level of uncertainty,
          value proposition, operational and value risks involved.
        </p>
        <p className="content-details">
          Similarly, Waterfall method better known as the rather ‘traditional’
          method to project management is used for better ‘quality’ standards
          due to its strict documentation and ‘assembly line’ production
          features. Well that’s not entirely true, as ‘Quality’ is subjective to
          a projects context. You can build quality into Agile projects just as
          much as you can in Waterfall projects. You can also have bad quality
          in Waterfall projects just like you can in Agile projects.
        </p>
      </div>
    </section>
  );
};

export default AgileUsecases;
