import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";
import { Contacts } from "@sections/home/contacts/contacts";
import { AboutUs } from "@sections/home/about-us/about-us";
import { TalkToUs } from "@sections/home/talk-to-us/talk-to-us";
import { Industries } from "@sections/home/industries/industries";
import { Testimonials } from "@sections/home/testimonials/testimonials";
import { ContactsForm } from "@sections/home/contacts-form/contacts-form";
import { FAQ } from "@sections/home/faq/faq";
import { CaseStudies } from "@sections/home/case-studies/case-studies";
import { Hero } from "@sections/subservices/hero/hero";

export default function Subservices() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.subservices} />
      <main>
        <Hero />
        <Testimonials />
        <AboutUs />
        <ContactsForm />
        <Industries />
        <CaseStudies />
        <TalkToUs />
        <FAQ />
        <Contacts />
        <ContactsForm />
      </main>
    </>
  );
}
