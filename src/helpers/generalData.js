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
    },
  };

  return cards;
}

export function chooseUsData() {
  const cards = {
    experience: {
      id: "experience",
      type: "title",
      title: "25年以上のIT経験値",
      details: "",
    },

    arrow1: {
      id: "arrow1",
      type: "arrow",
      title: "",
      details: "",
    },

    experience__details: {
      id: "experience__details",
      type: "details",
      title: "25年以上のIT経験値",
      details: [["IT業界の最前線での25年の経験"]],
    },

    diversity__details: {
      id: "diversity__details",
      type: "details",
      title: "10カ国にまたがる多様性",
      details: [
        ["日本", "ルーマニア", "カナダ", "英国", "韓国", "イタリア"],
        ["アメリカ", "南アフリカ", "オーストラリア", "フィリピン", "インド"],
      ],
    },

    arrow2: {
      id: "arrow2",
      type: "arrow",
      title: "arrow2",
      details: "",
    },

    diversity: {
      id: "diversity",
      type: "title",
      title: "10カ国にまたがる多様性",
      details: "",
    },

    multilingual: {
      id: "multilingual",
      type: "title",
      title: "多言語に対応したチーム体制",
      details: "",
    },

    arrow3: {
      id: "arrow3",
      type: "arrow",
      title: "",
      details: "",
    },

    multilingual__details: {
      id: "multilingual__details",
      type: "details",
      title: "多言語に対応したチーム体制",
      details: [
        ["英語", "日本語", "中国語"],
        ["ルーマニア語", "イタリア語", "アラビア語"],
      ],
    },
  };
  return cards;
}
