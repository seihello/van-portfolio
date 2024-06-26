import styles from "./experience.module.scss";

type Props = {
  orgName: string;
  orgLink: string;
  orgCountry: string;
  duration: string;
  level: string;
};

export default function Education(props: Props) {
  return (
    <div className={styles.work_wrapper}>
      <div className={styles.experience_first}>
        <div className={styles.org_name}>
          <a className={styles.link} href={props.orgLink} target="_blank">
            <img src={`https://flagsapi.com/${props.orgCountry}/shiny/64.png`} />
            <h3>{props.orgName}</h3>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className={styles.experience_first}>
        <p
          className={styles.role}
          style={{
            width: "70%",
          }}
        >
          {props.level}
        </p>
        <p>{props.duration}</p>
      </div>
    </div>
  );
}
