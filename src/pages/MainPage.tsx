import React from 'react';
import styles from './MainPage.module.css';  // CSS Modules import
import profileImg from '../images/profileImg.png';
import { useTranslation } from 'react-i18next';
interface MainPageProps {
  scrollTo: (menu:string) => void;  // 프로필로 스크롤하기 위한 함수 prop
}

const MainPage: React.FC<MainPageProps> = ({ scrollTo }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.mainPage}>
      <div className={styles.btns}>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('profile')}>{t('profile')}</button>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('projects')}>{t('projects')}</button>
        <button className={styles.primaryBtn}>{t('skills')}</button>
        <button className={styles.primaryBtn}>{t('certifications')}</button>
        <button className={styles.primaryBtn}>{t('experience')}</button>
        <button className={styles.primaryBtn}>{t('email')}</button>
      </div>

      <img className={styles.profileImg} src={profileImg} alt="Profile"></img>
      
      <div className={styles.profileText}>
        <span className={styles.defaultFont}>{t('intro_part1')}</span>
        <span className={styles.strongFont}>{t('intro_part2')}</span>
        <span className={styles.defaultFont}>{t('intro_part3')}</span>
      </div>
    </div>
  );
};

export default MainPage;
