import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/services/hero/hero";
import { Expertise } from "@sections/services/expertise/expertise";
import { Engagement } from "@sections/services/engagement-options/engagement-options";
import { Industries } from "@sections/services/industries/industries";
import { TalkToUs } from "@sections/services/talk-to-us/talk-to-us";
import { Solutions } from "@sections/services/solutions/solutions";
import { Portfolio } from "@sections/services/portfolio/portfolio";
import { FAQ } from "@sections/services/faq/faq";
import { ContactsForm } from "@sections/services/contact-form/contact-form";

import Header from "@sections/header/header";
import Footer from "@sections/footer/footer";

export default function Services() {
  return (
    <>
      <Header />
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.services} />
      <main>
        <Hero />
        <Expertise />
        <Engagement />
        <Industries />
        <TalkToUs />
        <Solutions />
        <Portfolio />
        <FAQ />
        <ContactsForm />
        <Footer />
      </main>
    </>
  );
}
