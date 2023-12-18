import { v4 as uuidv4 } from 'uuid';

const data = {
  facebookComments: {
    dataHref: 'https://becuda.herokuapp.com/all-projects',
    dataWidth: '',
    dataNumposts: '5',
    dataColorScheme: 'dark',
  },
  projects: [

    {
      id: 1,
      url: '/contribute-page',
      img: '/images/projectImages/water.jpg',
      title: 'Water Distribution',
      amount: 670000,
      realised: 0,
      status: 'closed',
      current: true,
      body: 'This project is aimed at ensuring the availability of pipe-borne water throughout the Befang territory.',
      desc: 'Distribution of pipe-borne water to all quarters in the Befang Village.',
    },
    {
      id: 2,
      url: '/web-creator',
      img: '/images/projectImages/web-project.jpeg',
      title: 'Web Hosting and database upgrade',
      amount: 85000,
      realised: 0,
      status: 'open',
      current: true,
      body: 'This website is a personal initiative by the developer. It is currently hosted under a subdomain on heroku which is a free cloud platform. However we need to purchase and secure a dedicated domain extension like becuda.com and use a shared hosting plan. Domains, SSL and hosting are billed annually. We also need to upgrade the database which currently has a capacity of just 512MB. This capacity will not be enough to save the data as the user base grows with time. ',
      desc: 'Website domain and hosting, database upgrade',
    },
    {
      id: 3,
      url: '/contribute-page',
      img: '/images/projectImages/back-to-school.jpeg',
      title: 'back to school support sept 2022',
      amount: 70000,
      realised: 0,
      status: 'open',
      current: true,
      body: 'All members of the Befang Youths Initiative (BEYOIN) have decided to make a small contribution to buy exercise books to all Befang-born pupils of G.S Befang before the start of this accademic year 2022. We welcome all those who bind this idea to channel their support through their branch treasurers. For more info, click on the whatsApp icon on the website or leave your comments below ',
      desc: 'The Purchase of exercise books for all befang-born pupils of G.S befang',
    },
  ],

  events: [

    {
      id: 1,
      url: '/contribute-page',
      img: 'images/events/water.jpg',
      title: 'All befang convention (ABC)',
      date: '8 july, 2022',
      body: 'This project is aimed at ensuring the availability of pipe-borne water throughout the Befang territory.',
      desc: 'Distribution of pipe-borne water to all quarters in the Befang Village.',
    },
    {
      id: 2,
      url: '/web-creator',
      img: '/images/events/web-project.jpeg',
      title: 'Web Hosting and database upgrade',
      date: '14 nov, 2022',
      body: 'This website is a personal initiative by the developer. It is currently hosted under a subdomain on heroku which is a free cloud platform. However we need to purchase and secure a dedicated domain extension like becuda.com and use a shared hosting plan. Domains, SSL and hosting are billed annually. We also need to upgrade the database which currently has a capacity of just 512MB. This capacity will not be enough to save the data as the user base grows with time. ',
      desc: 'Website domain and hosting, database upgrade',
    },
    {
      id: 3,
      url: '/contribute-page',
      img: '/images/events/back-to-school.jpeg',
      title: 'back to school support sept 2022',
      date: '18 oct, 2022',
      body: 'All members of the Befang Youths Initiative (BEYOIN) have decided to make a small contribution to buy exercise books to all Befang-born pupils of G.S Befang before the start of this accademic year 2022. We welcome all those who bind this idea to channel their support through their branch treasurers. For more info, click on the whatsApp icon on the website or leave your comments below ',
      desc: 'The Purchase of exercise books for all befang-born pupils of G.S befang',
    },
    {
      id: 4,
      url: '/contribute-page',
      img: '/images/events/back-to-school.jpeg',
      title: 'back to school support sept 2022',
      date: '11 nov, 2022',
      body: 'All members of the Befang Youths Initiative (BEYOIN) have decided to make a small contribution to buy exercise books to all Befang-born pupils of G.S Befang before the start of this accademic year 2022. We welcome all those who bind this idea to channel their support through their branch treasurers. For more info, click on the whatsApp icon on the website or leave your comments below ',
      desc: 'The Purchase of exercise books for all befang-born pupils of G.S befang',
    },
  ],

  befangChiefs: [

    {

      id: 1,
      chiefName: 'chief Edon michel',
      chiefTitle: 'Chief of befang',
      img: '/images/chiefs/chief-img.jpeg',
      position: 'Current chief',
    },
  ],

  becudaExecutive: [

    {

      id: 1,
      name: 'kum johnson ofon',
      position: 'president',

    },
    {

      id: 2,
      name: 'aleh philip katche',
      position: 'vice president',

    },
    {
      id: 3,
      name: 'dang afiah katche',
      position: 'secretery general',
    },
    {
      id: 4,
      name: 'akeh peter intong',
      position: 'vice secretery',
    },
    {
      id: 5,
      name: 'munchang francis katche',
      position: 'first publicity sec.',
    },
    {
      id: 6,
      name: 'okah benjamin',
      position: 'second vice publicity sec.',
    },
    {
      id: 7,
      name: 'dang aleh joseph',
      position: 'first social secretory.',
    },
    {
      id: 8,
      name: 'bezeng gladys',
      position: 'second social secretory.',
    },
    {
      id: 9,
      name: 'bezeng thomas ongock',
      position: 'fin. secretory.',
    },
    {
      id: 10,
      name: 'aleh joseph tem',
      position: 'youth coordinator',
    },
    {
      id: 11,
      name: 'anjah esther',
      position: 'women coordinator',
    },
    {
      id: 12,
      name: 'dang dominic',
      position: 'adviser',
    },
    {
      id: 13,
      name: 'dang elias aleh',
      position: 'legal adviser',
    },
    {
      id: 14,
      name: 'akeh george ketchem',
      position: 'legal adviser',
    },
    {
      id: 15,
      name: 'bezeng andrew',
      position: 'treasurer',
    },
    {
      id: 16,
      name: 'bezeng fidelis',
      position: 'protocol',
    },

  ],

  users: [

    {

      name: 'Esoh Derick',
      img: '/images/users/eleven.jpeg',
      title: 'president',
      profession: '',
      info: '',
      branch: 'beyoin',
      executive: true,
    },
    {

      name: 'Esoh jimuel',
      img: '/images/users/jimwel.jpeg',
      title: 'DM',
      executive: true,
      profession: '',
      info: '',
      branch: 'beyoin',
    },
    {

      name: 'Ichu Kalvin',
      img: '/images/users/kalv.jpeg',
      title: 'Secretary General',
      executive: true,
      profession: '',
      info: '',
      branch: 'beyoin',
    },
    {

      name: 'Ngeh Radivin',
      img: '/images/users/radivin.jpeg',
      title: 'advicer',
      profession: '',
      info: '',
      branch: 'beyoin',
      executive: true,
    },
    {

      name: 'Dang Brita',
      img: '/images/users/Dang-Brita.jpeg',
      title: 'Financial secretary',
      profession: '',
      info: '',
      branch: 'beyoin',
      executive: true,
    },

    {

      name: 'Mendi Georgette Endem',
      img: '/images/users/mendi-georgette.jpeg',
      title: 'treasurer',
      profession: '',
      info: '',
      branch: 'beyoin',
      executive: true,
    },
    {

      name: 'Mrs Florence Chewachong',
      img: '/images/users/becuda-logo.png',
      title: 'president',
      profession: '',
      country: 'uk',
      info: '',
      branch: 'diaspora',
      executive: true,
    },
    {

      name: 'Dr Bezeng Simon Bezeng',
      img: '/images/users/becuda-logo.png',
      title: 'treasurer',
      country: 'south africa',
      executive: true,
      profession: '',
      info: '',
      branch: 'diaspora',
    },
    {

      name: 'Mr mendi Bertrand',
      img: '/images/users/becuda-logo.png',
      title: 'SG',
      country: 'south africa',
      executive: true,
      branch: 'diaspora',
      profession: '',
      info: '',
    },
    {

      name: 'Mr Bonglibi Amah',
      img: '/images/users/becuda-logo.png',
      title: 'public relations officer',
      executive: false,
      country: 'uae',
      profession: '',
      info: '',
      branch: 'diaspora',
    },
  ],

  greatIcons: [

    {
      id: 1,
      name: 'Mr Dang Akuh Dominic',
      img: '/images/iconsImages/dominic-gce.jpg',
      profession: 'Cameroon GCE Board Registrar',
      work: 'His works will be put here soon',

    },
    {

      id: 2,
      name: 'Mr Kum Henry Ichu',
      img: '/images/iconsImages/kum-herny.jpg',
      profession: 'Head Of The DDRC Bamenda ',
      work: 'His works will be put here soon',

    },
  ],

  webSupporters: [

    {
      id: 1,
      name: 'supporter name',
      amount: '100 cfa',
    },
  ],

  contributors: [

    {

      id: 1,
      name: 'Akeh leslie',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 2,
      name: 'tem jenis kakon',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 3,
      name: 'bezeng jimuel',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 4,
      name: 'bezeng sonita',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 5,
      name: 'besseng donarise',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 6,
      name: 'aleh chantal',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 7,
      name: 'kum miloreat',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 8,
      name: 'nick nick',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 9,
      name: 'abanda louis',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 10,
      name: 'ojang wou angorm',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 11,
      name: 'ojang madcolin',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 12,
      name: 'mendi georgette',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 13,
      name: 'cynthia bih',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 14,
      name: 'kum yanick',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 15,
      name: 'milien',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 16,
      name: 'kum alvin',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 17,
      name: 'stella',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {

      id: 18,
      name: 'kum redrick',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 19,
      name: 'menjong collette',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 20,
      name: 'ofon fabiola',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 21,
      name: 'ashie jeannette',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 22,
      name: 'dang brita',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 23,
      name: 'bezeng edwin',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 24,
      name: 'katche remih',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 25,
      name: 'itong resdiren',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 26,
      name: 'itong frederick',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },
    {
      id: 20,
      name: 'dang minet',
      amount: 600,
      branch: 'beyoin',
      'water destribution': true,
    },

  ],

  branches: [
    {
      id: 1,
      name: 'Bamenda',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 100,
      text: 'members',
      link: '/comming-soon',
    },
    {
      id: 2,
      name: 'Buea',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 100,
      text: 'members',
      link: '/comming-soon',
    },
    {
      id: 3,
      name: 'Muea',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 100,
      text: 'members',
      link: '/comming-soon',
    },
    {
      id: 4,
      name: 'Mutengene',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 100,
      text: 'members',
      link: '/comming-soon',
    },
    {
      id: 5,
      name: 'Limbe',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 31,
      text: 'members',
      link: '/comming-soon',
    },
    {
      id: 6,
      name: 'Douala',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 100,
      text: 'members',
      link: '/comming-soon',
    },
    {
      id: 7,
      name: 'Yaounde',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 100,
      text: 'members',
      link: '/comming-soon',
    },
    {
      id: 8,
      name: 'Diaspora',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 67,
      text: 'members',
      link: '/diaspora',
    },
    {
      id: 9,
      name: 'BEYUCUDA',
      treasurerName: 'treasurer name',
      treasurerNumber: 237676308067,
      treasurerTitle: 'treasurer',
      value: 65,
      text: 'members',
      link: '/comming-soon',
    },
  ],
  forums: [
    {
      id: uuidv4(),
      year: 2023,
      name: 'Katche Devine',
      forum: 'ngien',
      executive: true,
      position: 'President',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Dang Colins',
      forum: 'ngien',
      executive: true,
      position: 'Treasurer',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Musong Ernest',
      forum: 'ngien',
      executive: true,
      position: 'General secretary',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Foh Terrence',
      forum: 'ngien',
      executive: false,
      position: '',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Katche Leslie',
      forum: 'ngien',
      executive: false,
      position: '',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Ichu Kalvin',
      forum: 'ngien',
      executive: false,
      position: '',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Katche Roland',
      forum: 'ngien',
      executive: false,
      position: '',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Kum Hans',
      forum: 'ngien',
      executive: false,
      position: '',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Akeh Larinette',
      forum: 'ngien',
      executive: false,
      position: '',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      year: 2023,
      name: 'Bezeng Edwin',
      forum: 'ngien',
      executive: false,
      position: '',
      savings: [
        {
          id: uuidv4(),
          date: 'Sat 4th Nov, 2023',
          amt: 0,
        },
      ],
    },
  ],
};

export default data;
