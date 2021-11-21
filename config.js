const profile = {
  fullName: 'Александр Проблема',
  description: 'Переводчик и урч',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.svg',
  about: {
    title: `НЕ БУДЬ БАКОЙ! 
    УЛЫБНИСЬ И ИЗДАЙ СЫРНЫЕ ЗВУКИ`,
    description: `Парень 25-и лет, страдаю от депрессии и проблем с социализацией. Видимо, следствие двух попаданий под машину черепномозговой травмы. В последнее время замечаю за собой бредовое поведение и мышление. Порой делаю переводы комиксов, модов, и игр на RPGM MV. Да в целом и всё на этом.
	Не будь как я, найди в себе силы и добивайся целей. А если будет грустно, представь что ты урчащий сырник и поурчи про себя.`,
    findMeOn: [
      //{
      //  iconName: 'location',
      //  text: 'Россия, Владивосток',
      //  url: '',
      //  hoverColor: '#546e7a'
      //},
      {
        iconName: 'vk',
        text: 'Александр Проблема',
        url: 'https://vk.com/mamoru_trouble',
        hoverColor: '#e9641c'
      },
      {
        iconName: 'telegram',
        text: 'Mamoru Mondai',
        url: 'https://t.me/Mamoru_Mondai',
        hoverColor: '#e9641c'
      },
      {
        iconName: 'steam',
        text: 'Mamoru Mondai',
        url: 'https://steamcommunity.com/id/mamoru_trouble/',
        hoverColor: '#e9641c'
      },
	  {
        iconName: 'github',
        text: 'AveAcVale',
        url: 'https://github.com/AveAcVale',
        hoverColor: '#e9641c'
      }
    ]
  },
  social: [
    {
      iconName: 'vk',
      url: 'https://vk.com/mamoru_trouble',
      text: "Я в ВК",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/Mamoru_Mondai',
      text: "Тележка с сыром",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'steam',
      url: 'https://steamcommunity.com/id/mamoru_trouble/',
      text: "Поиграем?",
      hoverColor: '#000'
    },
    {
      iconName: 'github',
      url: 'https://github.com/AveAcVale',
      text: 'Github',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  //{
    //title: 'Project Title #1',
    //img: '',
    //description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    //categories: ['Sample', 'Open source', 'React'],
    //siteUrl: 'https://amazing.project.com',
    //sourceCodeUrl: 'https://github.com/user/project'
  //}
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
