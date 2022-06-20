import { memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import type { Skill } from "../../types";

import styles from "./skills.module.scss";

type SkillsProps = {
  readonly skills: readonly Skill[];
};

export const Skills = memo<SkillsProps>(({ skills }) => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.description}>All the technologies I feel comfortable with ⚙️</p>

      <ul className={styles.list}>
        {skills.map((skill) => {
        
const ico = skill.link;
          
return (
            <li className={styles.skill} key={skill.slug} style={{ color: skill.color }}>
              <a  className={styles.link}>
                <span className={styles.label}>{skill.name}</span>
           <img src={ico}></img>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
});
