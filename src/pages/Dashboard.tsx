import React from 'react';
import styles from './Dashboard.module.css';  // CSS Modules import
import MainPage from './MainPage';
import Sticky from './Sticky';
const Dashboard: React.FC = () => {

  return (
    <div className={styles.app}>
      <Sticky></Sticky>
      <MainPage></MainPage>   
      <MainPage></MainPage>   
      <MainPage></MainPage>  
      <MainPage></MainPage>  
      <MainPage></MainPage>  
    </div>
  );
};

export default Dashboard;
