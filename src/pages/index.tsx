import data from "@texts/main/index.json";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import { Hero } from "@sections/home/hero/hero";
import { Certificates } from "@sections/home/certificates/certificates";
import { AboutUs } from "@sections/home/about-us/about-us";
import { ServiceSection } from "@sections/home/service-section/service-section";
import { Industries } from "@sections/home/industries/industries";
import { Testimonials } from "@sections/home/testimonials/testimonials";
import { ContactsForm } from "@sections/home/contacts-form/contacts-form";

import softwareDevelopment from "@assets/images/main/software-development.png";
import aiAndMachineLearning from "@assets/images/main/ai-machine-learning.png";
import cloudServices from "@assets/images/main/cloud-services.png";
import dataScienceAndEngeneering from "@assets/images/main/data-science.png";
import uiUxDesign from "@assets/images/main/ui-ux-design.png";
import architectureAndConsulting from "@assets/images/main/architecture-and-consulting.png";

import { CaseStudies } from "@sections/home/case-studies/case-studies";
import Layout from "@shared/components/layout/layout";

export default function Home() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.root} />
      <Layout>
        <Hero />
        <Certificates />
        <ServiceSection currentColor="#173B91" img={softwareDevelopment} {...data.softwareDevelopment} />
        <ServiceSection currentColor="#D75186" img={aiAndMachineLearning} isRight {...data.aiMachineLearning} />
        <ServiceSection currentColor="#F28B82" img={cloudServices} {...data.cloudServices} />
        <ServiceSection currentColor="#BF81FF" img={dataScienceAndEngeneering} isRight {...data.dataScienceAndEngeneering} />
        <ServiceSection currentColor="#2741FF" img={uiUxDesign} {...data.uiUxDesign} />
        <ServiceSection currentColor="#515151" img={architectureAndConsulting} isRight {...data.architectureAndConsulting} />
        <Testimonials />
        <AboutUs />
        <ContactsForm />
        <Industries />
        <CaseStudies />
      </Layout>
    </>
  );
}
