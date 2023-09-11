import styles from './project.module.scss'
import skills from '../../setting/skills';
import { ProjectContext } from '../../context/projectContext'
import { Project } from '../../context/projectContext';
import { useLayoutEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

type Props = {
  project: Project;
};

export default function ProjectComponent({ project }: Props) {

  const { selectedSkills, isFiltered, setIsFiltered } = useContext(ProjectContext);

  const projectRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isFiltered) {
      setIsFiltered(false);
      let ctx = gsap.context(() => {
        gsap.from(projectRef.current, { y: "100%", opacity: 0, duration: .3 });
      }, projectRef);
      return () => ctx.revert();
    }
  }, [selectedSkills]);

  return (
    <div ref={projectRef} className={styles.project}>
      <div className={styles.image_container}>
        <img src={`img/${project.image}`} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h3 className={styles.name}>{project.name}</h3>
          {project.gitLink && (
            <a href={project.gitLink} target="_blank"><i className={`${styles.git_link} fa-brands fa-github`}></i></a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} target="_blank"><i className={`${styles.demo_link} fa-solid fa-globe`}></i></a>
          )}
        </div>
        <div className={styles.description}>
          {project.description}
        </div>
        <div className={styles.skills}>
          {project.skills.map((skill) => {
            const skillSetting = skills.find((skillSetting) => {
              return skillSetting.name === skill
            })
            return <div className={styles.skill} style={{ backgroundColor: skillSetting?.color }}>{skill}</div>
          })}
        </div>
      </div>
    </div>
  )
}
