import React from "react";
import FooterContactForm from "~/components/Form/FooterForm";
import TestimonialsSlider from "~/components/Slider/TestimonialsSlider";
import EstimationBanner from "../../../components/EstimationBanner/EstimationBanner";
import ProjectShowcase from "../../../components/ProjectShowcase/ProjectShowcase";
import CompanyStats from "~/modules/AboutUs/CompanyStats";

const ServiceWrapper: React.FC<{ projects: any }> = ({
  children,
  projects,
}: any) => {
  return (
    <>
      {children}
      <ProjectShowcase projects={projects} />
      <CompanyStats />
      <EstimationBanner />
      <FooterContactForm />
      {/* Commented as image not sized properly */}
      <TestimonialsSlider />
    </>
  );
};

export default ServiceWrapper;
