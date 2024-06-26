import WorkExperience from "./WorkExperience";
import styles from "./experience.module.scss";
import commonStyles from "../../common.module.scss";

const summationsFulltimeDescription = [
  "Develop an educational web platform for university students and professors to enhance their learning process using Next.js and Supabase.",
  "Design UI/UX that allows users to operate comfortably and conveniently.",
  "Build a robust database that enables efficient data retrieval and allows for data manipulation based on permissions.",
];

const summationsInternshipDescription = [
  "Developed an educational web application using Next.js.",
  "Implemented 15+ interactive features and refactored the code for easy maintenance.",
  "Collaborated with another developer to refine designs and achieve user-friendly application.",
];

const sandmanmediaDescription = [
  "Built web pages using a CMS, utilizing HTML and CSS to ensure optimal design and layout across different devices and screen sizes.",
  "Utilized JavaScript to implement interactive features and functionality, such as API calling and smooth animations.",
  "Created CMS components and modules using PHP, to enhance the efficiency of development process.",
  "Collaborated with designers and developers to refine designs and achieve user-friendly websites.",
];

const muratecDescription = [
  "Developed a large-scale software for controlling machines which work in semiconductor factories.",
  "Designed the architecture, created C++ codes, conducted testing.",
  "Managed external development teams and reviewed their deliverables.",
  "Communicated with our clients and local workers to arrange schedules and report problems.",
];

export default function WorkExperienceSection() {
  return (
    <div className={commonStyles.section}>
      <h2>Work Experience</h2>
      <hr />
      <div className={styles.work_list}>
        <WorkExperience
          companyName="Summations"
          companyLink="https://summations.com/"
          companyCountry="CA"
          duration="Nov. 2023 - Present"
          position="Full Stack Web Developer"
          skills={["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind", "Git"]}
          description={summationsFulltimeDescription}
          image=""
        />
        <WorkExperience
          companyName="Summations"
          companyLink="https://summations.com/"
          companyCountry="CA"
          duration="Aug. 2023 - Nov. 2023"
          position="Full Stack Web Developer (Internship)"
          skills={["Next.js", "TypeScript", "Mantine", "Git"]}
          description={summationsInternshipDescription}
          image=""
          isCompanyNameHidden={true}
        />
        <WorkExperience
          companyName="Sandman Media Inc."
          companyLink="https://www.sandmanmedia.com/"
          companyCountry="CA"
          duration="Jun. 2023 - Aug. 2023"
          position="Web Developer"
          skills={["Joomla!", "JavaScript", "PHP", "MySQL", "Sass"]}
          description={sandmanmediaDescription}
          image="/img/webdev.jpg"
        />
        <WorkExperience
          companyName="Muratec Machinery"
          companyLink="https://www.muratec.net/"
          companyCountry="JP"
          duration="Apr. 2017 - Aug. 2022"
          position="Software Engineer"
          skills={[
            "C",
            "C++",
            "Python",
            "SQL",
            "Vue.js",
            "Git",
            "Jenkins",
            "Redmine",
            "Linux",
            "OOP",
            "UML",
            "DevOps",
            "Agile Dev",
            "SEMI Standards",
          ]}
          description={muratecDescription}
          image="/img/semicon.jpg"
        />
      </div>
    </div>
  );
}
