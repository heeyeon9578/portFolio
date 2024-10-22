import React,{useState} from 'react';
import styles from './Projects.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import devider from '../images/devider.png';
import blogProject from '../images/blogProject.png';
import profileImg from '../images/profileImg.png';
import geugol from '../images/geugol.png';
import dashBoard from '../images/dashboardPage.png';
import portFolioImg from '../images/portFolioImg.png';
import geuGolImg from '../images/geugolImg.png';
import github from '../images/github.png';
import notion from '../images/notion.png';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const blogPj = 'blogProject';
  const geugolPj = 'geugol';
  const portFolio = 'portFolio';
  const [project, setProject] = useState(blogPj);

  const changeProject = (project: string) =>{
    setProject(project);
    console.log(project);
  };

  const goToBlog = () => {
    window.open('https://mk-blogservice.site/', '_blank');
  }

  const goToGeugol = () => {
    window.open('http://geugol.site/link/9cvefH', '_blank');
  }

  const goToPortFolio = () => {
    window.open('https://heeyeon-portfolio.netlify.app/', '_blank');
  }
  // 새로운 창에서 GitHub 페이지 열기
  const goToGithub = (whatKind : string) => {

    switch(whatKind){
      case blogPj : 
        window.open(`https://github.com/MiffyAndKitty/BlogProject_Front`, '_blank');
        break;
      case geugolPj :
        window.open(`https://github.com/BSBSCompany/Geugol_Front`, '_blank');
        break;
      case portFolio:
        window.open(`https://github.com/heeyeon9578/portFolio`, '_blank');
        break;
      default:
        window.open(`https://github.com/heeyeon9578/`, '_blank');
        break;
    }
    
  }
  // 새로운 창에서 Notion 페이지 열기
  const goToNotion = (whatKind : string) => {
    
    switch(whatKind){
      case blogPj : 
        window.open(`https://heeyeon9578.notion.site/MK-Blog-24-03-17-24-09-30-e5d9f108063d42fc82e5a6a7d423a596?pvs=4`, '_blank');
        break;
      case geugolPj :
        window.open(`https://neat-professor-a5a.notion.site/1096b09bbd5d8041bdfffb364775f2fd`, '_blank');
        break;
      case portFolio:
        window.open(`https://heeyeon9578.notion.site/52ff5a864dd7461c883070626b058283?pvs=4`, '_blank');
        break;
      default:
        window.open(`http://heeyeon9578.notion.site/`, '_blank');
        break;
    }
  }

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
            <div className={styles.project} onClick={()=>changeProject(blogPj)}>
              <img src={blogProject} alt='blog-project' className={styles.projectImg}></img>
            </div>
            <div className={styles.project} onClick={()=>changeProject(geugolPj)}>
              <img src={geugol} alt='geugol-project' className={styles.projectImg}></img>
            </div>
            <div className={styles.project} onClick={()=>changeProject(portFolio)}>
              <img src={profileImg} alt='profileImg-project' className={styles.projectImg}></img>
            </div>            
          </div>

          <div className={styles.detail}>
            {project === blogPj &&(
                <div className={styles.detailAll}>

                  <div className={styles.imgAndName}>
                    <img src={dashBoard} className={styles.projectDetail} onClick={goToBlog}></img>
                    <span className={styles.blog} onClick={goToBlog}>MK-Blog</span>
                    <span className={styles.blogDetail}>사람들이 댓글과 게시글을 통해 생각과 이야기를 나누고, 사용자 프로필 및 게시글을 손쉽게 관리할 수 있도록 설계된 사용자 중심의 블로그 플랫폼입니다.</span>
                  </div>

                  <div className={styles.gitAndNotion}>
                    <div className={styles.circle} onClick={()=>goToGithub(project)}>
                      <img src={github} className={styles.github} alt='github'></img>
                    </div>
                    <div className={styles.circle} onClick={()=>goToNotion(project)}>
                      <img src={notion} className={styles.github} alt='notion'></img>
                    </div>
                  </div>
                  
                </div>
            )}

            {project === geugolPj &&(
              <div className={styles.detailAll}>

              <div className={styles.imgAndName}>
                <img src={geuGolImg} className={styles.projectDetail} onClick={goToGeugol}></img>
                <span className={styles.blog} onClick={goToGeugol}>그쪽이 골라주세요</span>
                <span className={styles.blogDetail}>사람들이 댓글과 게시글을 통해 생각과 이야기를 나누고, 사용자 프로필 및 게시글을 손쉽게 관리할 수 있도록 설계된 사용자 중심의 블로그 플랫폼입니다.</span>
              </div>

              <div className={styles.gitAndNotion}>
                <div className={styles.circle} onClick={()=>goToGithub(project)}>
                  <img src={github} className={styles.github} alt='github'></img>
                </div>
                <div className={styles.circle} onClick={()=>goToNotion(project)}>
                  <img src={notion} className={styles.github} alt='notion'></img>
                </div>
              </div>
              
            </div>
            )}  

            {project === portFolio &&(
             <div className={styles.detailAll}>

             <div className={styles.imgAndName}>
               <img src={portFolioImg} className={styles.projectDetail} onClick={goToPortFolio}></img>
               <span className={styles.blog} onClick={goToPortFolio}>포트폴리오</span>
               <span className={styles.blogDetail}>사람들이 댓글과 게시글을 통해 생각과 이야기를 나누고, 사용자 프로필 및 게시글을 손쉽게 관리할 수 있도록 설계된 사용자 중심의 블로그 플랫폼입니다.</span>
             </div>

             <div className={styles.gitAndNotion}>
               <div className={styles.circle} onClick={()=>goToGithub(project)}>
                 <img src={github} className={styles.github} alt='github'></img>
               </div>
               <div className={styles.circle} onClick={()=>goToNotion(project)}>
                 <img src={notion} className={styles.github} alt='notion'></img>
               </div>
             </div>
             
           </div>
            )}  


          </div>
        </div>
        

    </div>  
  );
};

export default Projects;
