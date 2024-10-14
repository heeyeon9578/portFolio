import React from 'react';
import styles from './Sticky.module.css';  // CSS Modules import
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

    // 새로운 창에서 GitHub 페이지 열기
    const goToGithub = () => {
      window.open('https://github.com/heeyeon9578/', '_blank');
    }
  
    // 새로운 창에서 Tistory 페이지 열기
    const goToTistory = () => {
      window.open('https://choi-hee-yeon.tistory.com/', '_blank');
    }
  
    // 새로운 창에서 Notion 페이지 열기
    const goToNotion = () => {
      window.open('http://heeyeon9578.notion.site/', '_blank');
    }
  
  const downloadResume = () =>{
    const link = document.createElement('a');
    link.href = '/최희연_이력서.pdf';  // PDF 파일 경로 (public 폴더에 저장)
    link.download = '최희연_이력서.pdf';  // 다운로드될 파일 이름
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className={styles.sticky}>

        <div className={styles.circle} onClick={toggleLanguage}>
          {i18n.language === 'en' ? '한' : 'En'}
        </div>
        <div className={styles.circle}>
          <img src={colorPicker} className={styles.colorPicker} alt='colorPicker'></img>
        </div>
        <div className={styles.circle} onClick={goToGithub}>
          <img src={github} className={styles.colorPicker} alt='github'></img>
        </div>
        <div className={styles.circle} onClick={goToTistory}>
          <img src={tistory} className={styles.colorPicker} alt='tistory'></img>
        </div>
        <div className={styles.circle} onClick={goToNotion}>
          <img src={notion} className={styles.colorPicker} alt='notion'></img>
        </div>
        <div className={styles.download} onClick={downloadResume}>
          <img src={download} className={styles.colorPicker} alt='download'></img>
        </div>
        <div className={styles.download}>
          <img src={goUp} className={styles.colorPicker} alt='goUp'></img>
        </div>
      </div>
  );
};

export default Sticky;
