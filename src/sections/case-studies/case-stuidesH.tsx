"use client";

// import data from "@texts/main/index.json";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { CaseCards } from "./case-cards/case-cards";

import s from "./case-studiesH.module.scss";

export const CaseStudies = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-102.5%"]);

  return (
    <section ref={targetRef} className={s.root}>
      <div className={s.contentContainer}>
        <motion.ul style={{ x }}>
          <li className={s.cardContainer}>
            <div>
              {/* {data.cases.title} */}
              <h2 className={s.title}>Horizontal variant</h2>
            </div>
          </li>
          <CaseCards />
        </motion.ul>
      </div>
    </section>
  );
};
