import angularImg from '../assets/skill-icons/angular.svg';
import reactImg from '../assets/skill-icons/react.svg';
import javascriptImg from '../assets/skill-icons/javascript.svg';
import htmlImg from '../assets/skill-icons/html.svg';
import scssImage from '../assets/skill-icons/sass.svg';
import tailwindImage from '../assets/skill-icons/tailwindcss.svg';
import npmImage from '../assets/skill-icons/npm.svg'
import cssImg from '../assets/skill-icons/css-3.svg'
import ngxsImg from '../assets/skill-icons/ngxs.png';
import singleSPAImage from '../assets/skill-icons/single-spa.svg'

export const SkillsData = [
  { name: 'Angular', imageUrl: angularImg, link:'#', level: 80 , maxLevel: 100},
  { name: 'React', imageUrl:reactImg, link: '#' , level: 50 , maxLevel: 100},
  { name: 'HTML', imageUrl: htmlImg, link: '#', level: 80 , maxLevel: 100},
  { name: 'JavaScript', imageUrl: javascriptImg, link: '#', level: 80 , maxLevel: 100},
  { name: 'CSS', imageUrl: cssImg, link: '#', level: 80 , maxLevel: 100},
  { name: 'Scss', imageUrl: scssImage, link: '#', level: 80 , maxLevel: 100},
  { name: 'tailwind', imageUrl: tailwindImage, link: '#', level: 50 , maxLevel: 100},
  { name: 'ngxs', imageUrl: ngxsImg, link: '#', level: 80 , maxLevel: 100},
  { name: 'npm', imageUrl: npmImage, link: '#', level: 80 , maxLevel: 100},
  { name: 'single-spa', imageUrl: singleSPAImage, link: '#', level: 80 , maxLevel: 100}
];


export const ExperienceData = [
  {
    company: 'Accenture Inc',
    time: '2021 - 2024',
    role: 'Software Engineering Consultant',
    description: `Partnered with product owners and architects to assess technical feasibility and suggest alternative solutions for feature implementation.\nDeveloped and implemented a micro front-end prototype using Single-spa to explore its feasibility for a large-scale application. The successful prototype led to further development efforts.\nDesigned the front-end architecture and provided ongoing technical guidance as a subject matter expert.\nCollaborated with backend teams to create well-defined interface agreements, accelerating development by 50%.\nImplemented unit testing using Jasmine and Karma, to ensure code quality and reliability.\nFacilitated team growth through strategic task delegation, hands-on support, and knowledge sharing.\nProvided testing teams with clear feature context, user stories, acceptance criteria and expected behavior for efficient testing.`
  },
  {
    company: '',
    time: '2019 - 2021',
    role: 'Senior Software Engineer',
    description: `Developed reusable Angular components with configurable options, reducing code duplication and streamlining development.\nEnhanced code quality and maintainability by actively participating in code reviews and providing constructive feedback to team members.\nDeveloped and maintained key features for a fleet management application in Angular, contributing to improved efficiency and operations.\nConducted comprehensive accessibility audits of web applications using automated testing tools and manual techniques, ensuring WCAG compliance.\nOverhauled the UI of a Java Server Pages web admin application, incorporating jQuery for advanced features like drag-and-drop sorting and dynamic visualization which improved the user experience.\nPerformed API performance testing using JMeter to ensure optimal application responsiveness and reliability.`
  },
  {
    company: '',
    time: '2016 - 2019',
    role: 'Software Engineer',
    description: `Developed a functional Angular application prototype for an open banking API monitoring system. Utilized routing, dependency injection, and implemented reusable UI components to improve efficiency.\nThe prototype served as a foundation for further development by the team.\nImplemented data visualization using Chart.js to display key metrics in an open banking API monitoring system.\nDeveloped and maintained REST APIs using Sprint Boot for an open banking business solution.\nContributed to the ongoing development and maintenance of c-commerce application features using AngularJS, leveraging routing, dependency injection, and data-binding for a responsive user interface.\nDeveloped and maintained middleware APIs using PHP for a Drupal-hosted c- commerce application, enabling seamless integration with external APIs.`
  }
]