import React,{useRef} from 'react';
import styles from './Dashboard.module.css';  // CSS Modules import
import MainPage from './MainPage';
import Sticky from './Sticky';
import Profile from '../pages/Profile'
import Projects from './Projects';
const Dashboard: React.FC = () => {
 // Profile 컴포넌트에 대한 ref 생성
 const profileRef = useRef<HTMLDivElement>(null);
 const projecteRef = useRef<HTMLDivElement>(null);
 // Profile로 스크롤하는 함수
 const scrollTo = (menu: string) => {
   if ( menu ==='profile' &&profileRef.current) {
     profileRef.current.scrollIntoView({ behavior: 'smooth' });
   }

   if ( menu ==='projects' &&projecteRef.current) {
    projecteRef.current.scrollIntoView({ behavior: 'smooth' });
  }
 };
  return (
    <div className={styles.app}>
      <Sticky></Sticky>
      <MainPage scrollTo={scrollTo}></MainPage>   
      <div ref={profileRef}>
        <Profile />
      </div>

      <div ref={projecteRef}>
        <Projects />
      </div>

    </div>
  );
};

export default Dashboard;
