const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'DY.',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'DANIEL YEBOAH',
  role: 'Front End Engineer',
  description:
    "Creative React Developer with experience designing useful, approachable user interfaces. Knowledgeable on all aspects of Facebook's design best practices and emerging UI development techniques. Skilled at connecting exceptional assets with users via creative UI frameworks and careful user experience optimization.",
  resume:
    'https://app.enhancv.com/share/162e0063?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic',
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-yeboah-b92447110/',
    github: 'https://github.com/dyofficial',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Secret Santa',
    description: 'Secret Santa matchmaking app for workers',
    stack: ['Material UI', 'Lottie Files', 'React', 'Google OAUTH'],
    sourceCode: 'https://github.com/dyofficial/xpay-sec-santa',
    livePreview: 'https://xpay-sec-santa.vercel.app/',
  },
  {
    name: 'DY Store',
    description: 'An e-commerce store built with commerce js and stripe API',
    stack: ['Material UI', 'Rest API', 'React'],
    sourceCode: 'https://github.com/dyofficial/dy-store',
    livePreview: 'https://dy-store.vercel.app/',
  },
  // {
  //   name: 'Chrome',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Tailwind CSS',
  'Material UI',
  'Git',
  'Jest',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'danielkofi4@gmail.com',
};

export { header, about, projects, skills, contact };
