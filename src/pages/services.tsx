import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/Services/hero/hero";
import { Expertise } from "@sections/Services/expertise/expertise";
import { Engagement } from "@sections/Services/engagement-options/engagement-options";
import { Industries } from "@sections/Services/industries/industries";
import { TalkToUs } from "@sections/Services/talk-to-us/talk-to-us";
import { Solutions } from "@sections/Services/solutions/solutions";
import { Portfolio } from "@sections/Services/portfolio/portfolio";

import Layout from "@shared/components/layout/layout";

export default function Services() {
  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.services} />
      <Layout>
        <Hero />
        <Expertise />
        <Engagement />
        <Industries />
        <TalkToUs />
        <Solutions />
        <Portfolio />
      </Layout>
    </>
  );
}
