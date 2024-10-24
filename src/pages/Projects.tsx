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
import helloGachonImg from '../images/helloGachon.png';
import helloGachonMarkImg from '../images/helloGachonMark.png';
import github from '../images/github.png';
import notion from '../images/notion.png';
import 'animate.css';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const blogPj = 'blogProject';
  const geugolPj = 'geugol';
  const portFolio = 'portFolio';
  const helloGachon ='printf(”helloGachon!”)';
  const web = t('web');  // 웹 부분의 번역 추가
  const game = t('game');    // 게임 부분의 번역 추가

  const [project, setProject] = useState(blogPj);
  const [kind, setKind] = useState(web);
  const [selectedProject, setSelectedProject] = useState(blogPj); // 클릭된 프로젝트 상태 관리
  const [animationClass, setAnimationClass] = useState('animate__fadeIn');

  const changeProject = (project: string) => {
    setAnimationClass(''); // 애니메이션 리셋
    setSelectedProject(project); // 클릭 시 프로젝트 상태 업데이트
    setTimeout(() => {
      setProject(project); // 프로젝트 변경
      setAnimationClass('animate__fadeIn'); // 애니메이션 다시 추가
    }, 0);
  };
  
  const changeKind = (whatKind: string) => {
    setKind(whatKind);
    
    if(whatKind === web) {
      setProject(blogPj); 
      setSelectedProject(blogPj); // 클릭 시 프로젝트 상태 업데이트
    }
    if(whatKind === game) {
      setProject(helloGachon); 
      setSelectedProject(helloGachon); // 클릭 시 프로젝트 상태 업데이트
    }
  };

  const goToBlog = () => {
    window.open('https://mk-blogservice.site/', '_blank');
  };

  const goToGeugol = () => {
    window.open('http://geugol.site/link/9cvefH', '_blank');
  };

  const goToPortFolio = () => {
    window.open('https://heeyeon-portfolio.netlify.app/', '_blank');
  };

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
      case helloGachon:
        window.open(`https://github.com/heeyeon9578/HelloGachon`, '_blank');
        break;
      default:
        window.open(`https://github.com/heeyeon9578/`, '_blank');
        break;
    }
    
  };
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
      case helloGachon:
        window.open(`https://heeyeon9578.notion.site/printf-helloGachon-e14f9740ae474faf99c12aa9c8e35cdb?pvs=4`, '_blank');
        break;
      default:
        window.open(`http://heeyeon9578.notion.site/`, '_blank');
        break;
    }
  };

  return (
    <div className={styles.profilePage}>

        <div>
           <div className={styles.defaultFont}>{t('projects')}</div>
           <img src={devider} className={styles.devider} alt='devider'></img>
        </div>

        <div className={styles.buttons}>
          <button className={`${styles.secondaryBtn} ${kind === web ? styles.activeSecondBtn : ''}`} onClick={()=>changeKind(web)}>{t('web')} </button>
          <button className={`${styles.secondaryBtn} ${kind === game ? styles.activeSecondBtn : ''}`}  onClick={()=>changeKind(game)}>{t('game')}</button>
        </div>
        
       {kind === web && <div className={styles.projectAndDetail}>

          <div className={styles.projects}>
            <div className={`${styles.project} ${selectedProject === blogPj ? styles.active : ''}`} onClick={()=>changeProject(blogPj)}>
              <img src={blogProject} alt='blog-project' className={styles.projectImg}></img>
            </div>
            <div className={`${styles.project} ${selectedProject === geugolPj ? styles.active : ''}`} onClick={()=>changeProject(geugolPj)}>
              <img src={geugol} alt='geugol-project' className={styles.projectImg}></img>
            </div>
            <div className={`${styles.project} ${selectedProject === portFolio ? styles.active : ''}`} onClick={()=>changeProject(portFolio)}>
              <img src={profileImg} alt='profileImg-project' className={styles.projectImg}></img>
            </div>            
          </div>

          <div className={`${styles.detail} animate__animated ${animationClass}`}>

            {project === blogPj &&(
                <div className={styles.detailAll}>

                  <div className={styles.imgAndName}>
                    <img src={dashBoard} className={styles.projectDetail} onClick={goToBlog} alt='blog'></img>
                    <span className={styles.blog} onClick={goToBlog}>MK-Blog</span>
                    <span className={styles.blogDetail}>{t('blogDetail')}</span>
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
                <img src={geuGolImg} className={styles.projectDetail} onClick={goToGeugol}  alt='geugol'></img>
                <span className={styles.blog} onClick={goToGeugol}>{t('geugol')}</span>
                <span className={styles.blogDetail}>{t('geugolDetail')}</span>
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
               <img src={portFolioImg} className={styles.projectDetail} onClick={goToPortFolio} alt='portFolio'></img>
               <span className={styles.blog} onClick={goToPortFolio}>{t('portFolio')}</span>
               <span className={styles.blogDetail}>{t('portFolioDetail')}</span>
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
        </div>}
        
        {kind === game && <div className={styles.projectAndDetail}>

          <div className={styles.projects}>
            <div className={`${styles.project} ${selectedProject === helloGachon ? styles.active : ''}`} onClick={()=>changeProject(helloGachon)}>
              <img src={helloGachonMarkImg} alt='helloGachon' className={styles.projectImg}></img>
            </div>
                  
          </div>

          <div className={`${styles.detail} animate__animated ${animationClass}`}>

            {project === helloGachon &&(
                <div className={styles.detailAll}>

                  <div className={styles.imgAndName}>
                    <img src={helloGachonImg} className={styles.projectDetail} alt='helloGachon'></img>
                    <span className={styles.blog} >{helloGachon}</span>
                    <span className={styles.blogDetail}>{t('helloGachonDetail')}</span>
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
        </div>}
    </div>  
  );
};

export default Projects;
