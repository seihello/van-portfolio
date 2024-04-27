import styles from "./experience.module.scss";
import skills from "../../setting/skills";

type Props = {
  companyName: string;
  companyLink: string;
  companyCountry: string;
  duration: string;
  position: string;
  skills: string[];
  description: string[];
  image?: string;
  isCompanyNameHidden?: boolean;
};

export default function WorkExperience(props: Props) {
  return (
    <div className={styles.work_wrapper}>
      {!props.isCompanyNameHidden && (
        <div className={styles.experience_first}>
          <div className={styles.org_name}>
            <a className={styles.link} href={props.companyLink} target="_blank">
              <img src={`https://flagsapi.com/${props.companyCountry}/shiny/64.png`} />
              <h3>{props.companyName}</h3>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      )}
      <div className={styles.work_item}>
        <div className={styles.work_description}>
          <div className={styles.experience_first}>
            <p className={styles.role}>{props.position}</p>
            <p>{props.duration}</p>
          </div>
          {/* <div className={styles.skills}>
            {props.skills.map((skill, index) => {
              const skillSetting = skills.find((skillSetting) => {
                return skillSetting.name === skill;
              });
              return (
                <div key={index} className={styles.skill} style={{ backgroundColor: skillSetting?.color }}>
                  {skill}
                </div>
              );
            })}
          </div> */}
          <ul>
            {props.description.map((description) => {
              return <li>{description}</li>;
            })}
          </ul>
        </div>
        {/* <div className={styles.work_image}>
          <img src={props.image} />
        </div> */}
      </div>
    </div>
  );
}
