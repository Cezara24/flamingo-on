export function servicesCards() {
  const cards = {
    itDevelopment: {
      id: "itDevelopment",
      imgSrc: "ScreenCardIcon",
      title: "IT ソリューション",
      details: [
        "スマートフォンアプリ開発",
        "Webアプリケーション開発",
        "AI開発",
        "DX 戦略立案",
      ],
    },
    digitalMarketing: {
      id: "digitalMarketing",
      imgSrc: "MentorCardIcon",
      title: "メンターサービス",
      details: ["企業幹部向けメンターサービス"],
    },
  };

  return cards;
}

export function fieldCards() {
  const cards = {
    developmentAndConsulting: {
      id: "developmentAndConsulting",
      title: "システム開発 & コンサルティング",
      details: [
        "企業のDXを支援",
        "モバイルアプリケーション開発 (スマホ・タブレット向け)",
      ],
    },
    mentorService: {
      id: "mentorService",
      title: "メンターサービス",
      details: ["企業幹部向け、メンターサービス"],
    },
    img: {
      id: "img",
      title: "img",
      details: "",
    }
  };

  return cards;
}

