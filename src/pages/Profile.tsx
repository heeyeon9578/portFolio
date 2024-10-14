import React from 'react';
import styles from './Profile.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import devider from '../images/devider.png';
import heeyeon from '../images/heeyeon.jpg'

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.profilePage}>

        <div>
           <div className={styles.defaultFont}>{t('profile')}</div>
           <img src={devider} className={styles.devider} alt='devider'></img>
        </div>

        <div className={styles.imgAndParagraph}>
            <div className={styles.myImg}>
                <img src={heeyeon} alt="Profile"></img>
            </div>
            <div className={styles.paragraph}>
            <span className={styles.sentence}>{t('profile_sentence_1')}</span>
                <span className={styles.sentence}>{t('profile_sentence_2')}</span>
                <span className={styles.sentence}>{t('profile_sentence_3')}</span>
                <span className={styles.sentence}>{t('profile_sentence_4')}</span>
                <span className={styles.sentence}>{t('profile_sentence_5')}</span>
            </div>
        </div>
        

    </div>  
  );
};

export default Profile;
