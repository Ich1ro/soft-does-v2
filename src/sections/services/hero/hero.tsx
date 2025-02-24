import serviceHero from "@assets/images/main/service-hero_shadow.png";

import s from "./hero.module.scss";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>
          <span>Soft does</span> services
        </h1>
        <p className={s.tagText}>We transform market insights into globally beloved apps that power your business</p>
        <button className={s.button}>Contact us</button>
      </div>
      <Image aria-hidden alt="" src={serviceHero.src} className={s.heroImage} width={serviceHero.width} height={serviceHero.height} />
    </section>
  );
};
