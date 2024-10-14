import React from 'react';
import styles from './Dashboard.module.css';  // CSS Modules import
import colorPicker from '../images/colorPickrer.png';
import github from '../images/github.png';
import tistory from '../images/tistory.png';
import notion from '../images/notion.png';
import download from '../images/download.png';
import goUp from '../images/goUp.png'
import { useTranslation } from 'react-i18next';  // i18n 추가

const Sticky: React.FC = () => {

  const { i18n } = useTranslation();

  // 언어 전환 함수
  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.sticky}>

         {/* 언어 전환 버튼 */}
      <div className={styles.circle} onClick={toggleLanguage}>
        {i18n.language === 'en' ? '한' : 'En'}
      </div>
        <div className={styles.circle}>
          <img src={colorPicker} className={styles.colorPicker} alt='colorPicker'></img>
        </div>
        <div className={styles.circle}>
          <img src={github} className={styles.colorPicker} alt='github'></img>
        </div>
        <div className={styles.circle}>
          <img src={tistory} className={styles.colorPicker} alt='tistory'></img>
        </div>
        <div className={styles.circle}>
          <img src={notion} className={styles.colorPicker} alt='notion'></img>
        </div>
        <div className={styles.download}>
          <img src={download} className={styles.colorPicker} alt='download'></img>
        </div>
        <div className={styles.download}>
          <img src={goUp} className={styles.colorPicker} alt='goUp'></img>
        </div>
      </div>
  );
};

export default Sticky;
