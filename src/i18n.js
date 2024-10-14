// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            "profile": "Profile",
            "projects": "Projects",
            "skills": "Skills",
            "certifications": "Certifications",
            "experience": "Experience",
            "email": "Email",
            "intro_part1": "I am a",
            "intro_part2": "Frontend Engineer",
            "intro_part3": "Heeyeon Choi, who loves documenting.",
            "profile_sentence_1": "I majored in Computer Science and nurtured my dream of becoming a developer. Throughout various development experiences, I set a goal to grow as a frontend engineer.",
            "profile_sentence_2": "While working at ‘Jenosoft’, I was introduced to frontend tasks by chance, and this sparked a deeper interest in frontend development, leading me to start self-study.",
            "profile_sentence_3": "I learned frontend technologies such as JavaScript, TypeScript, and React, and gained project experience by collaborating with a backend engineer on a 'blog' project.",
            "profile_sentence_4": "In addition, I conducted an 8-month-long study group based on the book 'JavaScript Deep Dive' to gain a deeper understanding of JavaScript. By recruiting and learning together with study members, I was able to solidify my foundation in JavaScript.",
            "profile_sentence_5": "With the knowledge and skills I acquired through these projects and studies, I aim to contribute to real-world projects in the industry."
}
        
      },
      ko: {
        translation: {
            "profile": "프로필",
            "projects": "프로젝트",
            "skills": "스킬",
            "certifications": "자격증",
            "experience": "경력",
            "email": "이메일",
            "intro_part1": "기록하는",
            "intro_part2": "프론트엔드 엔지니어",
            "intro_part3": "최희연입니다.",
            "profile_sentence_1": "컴퓨터공학을 전공하며 개발자의 꿈을 키워왔고, 다양한 개발 경험을 쌓는 과정에서 프론트엔드 엔지니어로 성장하고 싶다는 목표를 가지게 되었습니다.",
            "profile_sentence_2": "‘제노소프트’에서 근무하던 중 우연한 기회로 프론트엔드 업무를 접하게 되었고, 그 이후로 프론트엔드에 대한 관심이 깊어져 독학을 시작하게 되었습니다.",
            "profile_sentence_3": "자바스크립트, 타입스크립트, React 등 프론트엔드에 필요한 기술들을 습득했으며, 백엔드 담당자와 함께 '블로그' 프로젝트를 진행하며 프로젝트 경험을 쌓았습니다.",
            "profile_sentence_4": "또한, 자바스크립트의 깊은 이해를 위해 ‘자바스크립트 딥다이브’라는 책을 기반으로 약 8개월간 스터디를 진행했습니다. 스터디원들을 직접 모집하여 함께 학습하면서 자바스크립트의 기초를 확실히 다질 수 있었습니다.",
            "profile_sentence_5": "이러한 프로젝트 경험과 스터디를 통해 습득한 지식과 기술을 바탕으로, 현업에서 실제 프로젝트에 기여하고자 합니다."
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
