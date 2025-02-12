import data from '@texts/main/index.json';

import kansasFlag from '@assets/images/main/kansas-flag-min.jpg';
import serviceHero from '@assets/images/main/service-hero.png';

import s from './hero.module.scss';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <div className={s.tagContainer}>
          <p className={s.tagText}>{data.services_hero.tagText}</p>
          <Image
            aria-hidden
            alt=""
            src={kansasFlag.src}
            className={s.flagImage}
            width={kansasFlag.width}
            height={kansasFlag.height}
          />
        </div>
        <h1 className={s.title}>{data.services_hero.title}</h1>
        <button className={s.button}>{data.services_hero.buttonText}</button>
        <Image
            aria-hidden
            alt=""
            src={serviceHero.src}
            className={s.heroImage}
            width={serviceHero.width}
            height={serviceHero.height}
          />
      </div>
    </section>
  );
};
