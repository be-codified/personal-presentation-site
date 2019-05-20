import sections from './sections';

const navigationDataMain = [
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
        text: 'Producing visual output',
      },
      {
        id: `${sections.skills}-my-skills-to-work-with-programming-logic`,
        text: 'Working with programming logic',
      },
      {
        id: `${sections.skills}-magical-tools-i-use`,
        text: 'Magical tools I use',
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
        id: `${sections.latestWork}-petrol`,
        text: 'Petrol',
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
    id: sections.clients,
    text: 'Clients',
  },
  {
    id: sections.howWasMade,
    text: 'How was this page made',
  },
];

export default navigationDataMain;