import myPicture from "./img/37842.jpg";
import iconcontact from "./img/icons8-contacts-32.png";
import iconhome from "./img/icons8-home-page-50.png";
import iconschool from "./img/icons8-school-50.png";

export const profileImg = {
  url: myPicture,
  icon1: iconcontact,
  icon2: iconhome,
  icon3: iconschool,
};

export const myInformation = {
  name: "Napatpimon Pon.",
  position: "Junior Software Developer",
  address: "Phayathai, Bangkok 10400",
  email: "Napatpimon.pon@gmail.com",
  tel: "(+66)99-017-1309",
  github: "https://github.com/khunboeing",
  linkedin: "https://bit.ly/napatpimon_pon",
  portfolio: "https://bit.ly/boeingportfolio",
};

export const experience = [
  {
    job: "Full-Stack Software Developer",
    place: "Sprint tech",
    jobDescription: "Full-Stack Software Developer",
  },
  {
    job: "Gopher Developer Boot Camp",
    place: "KBTG",
    jobDescription: [],
  },
  {
    job: "Junior Software Developer Bootcamp",
    place: "Generation Thailand",
    jobDescription: [
      // "Learned how to build web applications from React as front end, Node.js as back end, and MongoDB as a Database",
      // "Learned essential skills for switching careers, such as growth mindset, communication, agile, and teamwork",
      // "Final Project: MERN Stack CRUD Project The web application consists of a front end using React with React router and Axios as the main dependency. In the back end, it uses Express to manage RESTful API. Finally, using Mongoose to connect to MongoDB.",
    ],
  },
  {
    job: "Assistance Manager",
    place: "Wisdom International Buffet",
    jobDescription: [],
  },
  {
    job: "Assistance Manager",
    place: "TADAIMA",
    jobDescription: [],
  },
  {
    job: "Training Manager",
    place: "Zensho Thailand",
    jobDescription: [],
  },
  {
    job: "Trainee Intership",
    place: "DHL Global Forwarding(billing logistics export shipment)",
    jobDescription: [],
  },
  {
    job: "Trainee Intership",
    place: "AOT(Airport of Thailand)",
    jobDescription: [],
  },
];

export const education = {
  school: "MaeFahLuang University",
  degree: "Bachelor of Aviation Business Management",
  major: "Aviation logistics",
};

export const projects = [
  {
    name: "RUNDEV/>",
    describe:
      "Web app created as a diary for running enthusiasts for running records, distances, and collecting everything like a running diary.",
    link: "https://bit.ly/boeingportfolio",
  },
  {
    name: "Pacman Game(Find your Hat)",
    describe:
      "you can create the size of the game by putting the number you want to create the field. you have to go to the hat and don't hit the obstract, then you win the game.",
    link: "https://bit.ly/boeingportfolio",
  },
  {
    name: "My Instagram Clone",
    describe: "cloning my own Instagram with responsive (demo)",
    link: "https://bit.ly/boeingportfolio",
  },
  {
    name: "Jammming",
    describe:
      "Developed follow Codecademy Design for users to search for music and add it to Spotify playlist. Using React.JS, NPM, Netlify and Spotify API",
    link: "https://bit.ly/boeingportfolio",
  },
  {
    name: "FIT-VENGER",
    describe:
      "Web activities sport to calculate BMI.Challenge and Motivate yourself to workout",
    link: "https://bit.ly/boeingportfolio",
  },
];

export const skills = {
  frontend: ["HTML", "CSS", "React", "VueJs", "TailwindCss"],
  Backend: {
    skill1: "NodeJs",
    skill2: "express",
  },
  Database: {
    skill1: "MongoDB",
  },
  Vcs: {
    skill1: "Git",
  },
  language: {
    skill1: "Javascript",
    skill2: "Golang",
  },
  tools: {
    skill1: "Figma",
    skill2: "Vercel",
    skill3: "Trello",
  },
};
