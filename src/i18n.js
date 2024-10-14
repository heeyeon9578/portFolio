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
          "intro_part3": "who loves documenting."
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
          "intro_part3": "최희연입니다."
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
