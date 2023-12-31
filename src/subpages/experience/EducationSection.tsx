import Education from './Education'
import styles from './experience.module.scss'
import commonStyles from '../../common.module.scss'

export default function EducationSection() {
  return (
    <div className={commonStyles.section}>
      <h2>Education</h2>
      <hr />
      <div className={styles.education_list}>
        <Education orgName="Cornerstone College" orgLink="https://ciccc.ca/" orgCountry="CA" duration="Oct. 2022 - Present" level="Diploma of Web Development" />
        <Education orgName="Kyoto Sangyo University" orgLink="https://www.kyoto-su.ac.jp/index-e.html" orgCountry="JP" duration="Apr. 2013 - Mar. 2017" level="Bachelor of Computer Science and Engineering" />
      </div>
    </div>
  )
}
