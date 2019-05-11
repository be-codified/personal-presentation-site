const sections = {
  skills: 'section-skills',
  latestWork: 'section-latest-work',
  howWasMade: 'section-how-was-this-page-made',
};

const navigation = {
  main: [
    {
      id: null,
      text: 'My skills',
      items: [
        {
          id: `${sections.skills}-my-main-skills`,
          text: 'Main skills',
        },
        {
          id: `${sections.skills}-my-skills-to-produce-visual-output`,
          text: 'To produce visual output',
        },
        {
          id: `${sections.skills}-my-skills-to-work-with-programming-logic`,
          text: 'To work with programming logic',
        },
        {
          // TODO:
          id: `${sections.skills}-some-id`,
          text: 'To ???',
        },
      ],
      classNames: 'button--plain',
    },
    {
      id: null,
      text: 'My latest works',
      items: [
        {
          id: `${sections.latestWork}-nfl-american-football-widgets`,
          text: 'NFL American Football Widgets',
        },
        {
          id: `${sections.latestWork}-petrol-website`,
          text: 'Petrol website',
        },
        {
          id: `${sections.latestWork}-btc-city`,
          text: 'BTC City',
        },
        {
          id: `${sections.latestWork}-mail-starter`,
          text: 'Mail starter',
        },
      ],
      classNames: 'button--plain',
    },
    {
      id: sections.howWasMade,
      text: 'How was this page made',
    },
  ],
};

export default navigation;
