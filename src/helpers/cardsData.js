import itIcon from "../images/itIcon.png"
import mentorIcon from "../images/mentorIcon.png"

export function languageModulesCards() {
    const cards = {
        itDevelopment: {
        id: "itDevelopment",
        imgSrc: "itIcon",
        title: "IT ソリューション",
        details: [
          "スマートフォンアプリ開発",
          "Webアプリケーション開発",
          "AI開発",
          "DX 戦略立案",
        ],
        arrows: "hide",
      },
      digitalMarketing: {
        id: "digitalMarketing",
        imgSrc: "mentorIcon",
        title: "メンターサービス",
        details: [
          "企業幹部向けメンターサービス",
        ],
        arrows: "hide",
      },
    };
  
    return cards;
  }
  