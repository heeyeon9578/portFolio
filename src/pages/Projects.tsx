import React from 'react';
import styles from './Projects.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import devider from '../images/devider.png';
import blogProject from '../images/blogProject.png';
import profileImg from '../images/profileImg.png';
import geugol from '../images/geugol.png';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.profilePage}>

        <div>
           <div className={styles.defaultFont}>{t('projects')}</div>
           <img src={devider} className={styles.devider} alt='devider'></img>
        </div>

        <div className={styles.buttons}>
          <button className={styles.secondaryBtn}>웹</button>
          <button className={styles.secondaryBtn}>게임</button>
        </div>
        
        <div className={styles.projectAndDetail}>

          <div className={styles.projects}>
            <div className={styles.project}>
              <img src={blogProject} alt='blog-project' className={styles.projectImg}></img>
            </div>
            <div className={styles.project}>
              <img src={geugol} alt='geugol-project' className={styles.projectImg}></img>
            </div>
            <div className={styles.project}>
              <img src={profileImg} alt='profileImg-project' className={styles.projectImg}></img>
            </div>            
          </div>

          <div className={styles.detail}>

          </div>
        </div>
        

    </div>  
  );
};

export default Projects;
