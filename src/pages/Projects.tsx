import React from 'react';
import styles from './Projects.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import devider from '../images/devider.png';
import heeyeon from '../images/heeyeon.jpg'

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.profilePage}>

        <div>
           <div className={styles.defaultFont}>{t('projects')}</div>
           <img src={devider} className={styles.devider} alt='devider'></img>
        </div>

        <div className={styles.imgAndParagraph}>
            <div className={styles.myImg}>
                <img src={heeyeon} alt="Profile"></img>
            </div>
            <div className={styles.paragraph}>
                <span className={styles.sentence}>컴퓨터공학을 전공하며 개발자의 꿈을 키워왔고, 다양한 개발 경험을 쌓는 과정에서 프론트엔드 엔지니어로 성장하고 싶다는 목표를 가지게 되었습니다.</span>
                <span className={styles.sentence}>‘제노소프트’에서 근무하던 중 우연한 기회로 프론트엔드 업무를 접하게 되었고, 그 이후로 프론트엔드에 대한 관심이 깊어져 독학을 시작하게 되었습니다. </span>
                <span className={styles.sentence}>자바스크립트, 타입스크립트, React 등 프론트엔드에 필요한 기술들을 습득했으며, 백엔드 담당자와 함께 '블로그' 프로젝트를 진행하며 프로젝트 경험을 
                쌓았습니다.</span>
                <span className={styles.sentence}>또한, 자바스크립트의 깊은 이해를 위해 ‘자바스크립트 딥다이브’라는 책을 기반으로 약 8개월간 스터디를 진행했습니다. 
                스터디원들을 직접 모집하여 함께 학습하면서 자바스크립트의 기초를 확실히 다질 수 있었습니다. </span>
                <span className={styles.sentence}>이러한 프로젝트 경험과 스터디를 통해 습득한 지식과 기술을 바탕으로, 현업에서 실제 프로젝트에 기여하고자 합니다.</span>
            </div>
        </div>
        

    </div>  
  );
};

export default Projects;
