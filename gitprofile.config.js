// gitprofile.config.js

const config = {
  github: {
    username: 'arvidwaldner', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'arvid-waldner-aab00982',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    '.net core',
    '.NET',
    'C#',
    'T-SQL (Microsoft SQL Server)',
    'REST',
    'WCF',
    'Javascript/JQuery',
    'ASP.NET MVC',
    'ASP.NET',
    'HTML',
    'CSS',
    'Git',
    'Github',
    'Visual Studio',
    'Azure',
    'Azure Devops',
    'AzureStack',
    'XML',
    'Json',
    'Swagger UI',
    'Team Foundation Server',
    'react'
  ],
  experiences: [
    {
      company: 'CGI Sverige AB - Jönköping, Sweden',
      position: 'IT Consultant (Software engineer)',
      from: 'February 2018',
      to: 'Present',
      companyLink: 'https://www.cgi.com/se/sv',
    },
    {
      company: 'Qsys Sverige AB - Jönköping, Sweden',
      position: 'Software engineer',
      from: 'June 2017',
      to: 'January 2018',
      companyLink: 'https://www.qsys.se/',
    },
    {
      company: 'Centiro Solutions AB - Borås, Sweden',
      position: 'Software engineer',
      from: 'October 2014',
      to: 'May 2017',
      companyLink: 'https://www.centiro.com/',
    },
    {
      company: 'Sogeti - Örebro, Sweden',
      position: 'Internship - Software engineer',
      from: 'February 2014',
      to: 'June 2014',
      companyLink: 'https://www.sogeti.se/',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      body: 'This certification validates basic knowledge of cloud services and how those services are provided with Azure. The holder of this certificate is able to demonstrate a fundamental knowledge of cloud concepts, along with Azure services, workloads, security, privacy, pricing, and support.',
      year: 'June 2023',
      link: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/'
    },
  ], 
  education: [
    {
      institution: 'Örebro University',
      degree: 'Computer Science - Bachelors Degree',
      from: '2012',
      to: '2014',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: ''
  //     description:
  //       '',
  //     imageUrl: '',
  //     link: '',
  //   },
  //   {
  //     title: '',
  //     description:
  //       '',
  //     imageUrl: '',
  //     link: '',
  //   },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
