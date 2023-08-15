import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import postbook from "@/public/postbook.png";
import tictactoe from "@/public/tictactoe.png";
import htdrl from "@/public/htdrl.png";
import react from "@/public/react.png";
import html from "@/public/html.png";
import css from "@/public/css.png";
import js from "@/public/js.png";
import nextjs from "@/public/nextjs.png";
import api from "@/public/api.png";
import db from "@/public/db.png";
import tailwind from "@/public/tailwind.png";
import adminPanel from "@/public/adminPanel.png";
import mui from "@/public/mui.png";
import sass from "@/public/sass.png";
import aptech from "@/public/aptech.png";
import easy from "@/public/easy.png";
import genesis from "@/public/genesis.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Designing",
    location: "Kumaripati, Lalitpur",
    description:
      "Successfully completed the Web Designing and Hosting Course from Aptech Computer Education Pvt. Ltd. and able to convert my UI Design into pixel perfect Responsive HTML5/CSS3.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2021 - Dec 2021",
    img:aptech,
    name:"Aptech",
    link:"https://www.aptechlalitpur.com/"
  },
  {
    title: "React Web Developer",
    location: "Kalimati, Kathmandu",
    description:
      "During my tenure, I had the opportunity to contribute my skills in developing and maintaining an admin panel based on CRUD application. My responsibilities included designing and implementing front-end solutions using various technologies such as HTML5, CSS, JavaScript, and other frameworks.",
    icon: React.createElement(FaReact),
    date: "April 2022 - June 2023",
    img:easy,
    name:"Easy Software",
    link:"https://easysoftware.com.np/"
  },
  {
    title: "Frontend Web Developer",
    location: "Shankhamul, Kathmandu",
    description:
      "I am currently working as a Frontend Developer at a company specializing in WordPress development. My role involves creating and maintaining user interfaces for WordPress-based projects using HTML, CSS, and JavaScript. I collaborate with a diverse team to ensure high-quality, visually appealing, and user-friendly websites and web applications. ",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - present",
    img:genesis,
    name:"Genesis Web Technology",
    link:"https://www.genesiswtech.com/"
  },
] as const;

export const projectsData = [
  {
    title: "Tic Tac Toe",
    description:
      "I developed a Tic Tac Toe game that offers both single player and two player modes. In single player mode, players can choose between easy and hard difficulty levels.",
    tags: [react,html,css,js],
    imageUrl: tictactoe,
    link:"https://subham-tandukar-games.netlify.app/",
  },
  {
    title: "Post Book",
    description:
      "I created a goggle authentication and crud application using next js where you can sign in with your google account and create a post where you can edit and delete it.",
      tags: [nextjs,api,db,tailwind],
    imageUrl: postbook,
    link:"https://post-book.vercel.app/",
  },
  {
    title: "Library App",
    description:
      "I created a full-stack web app using the MERN stack. This includes user authentication with email verification using OTP code and CRUD functionality for managing books.",
      tags: [react,api,db,mui],
    imageUrl: htdrl,
    link:"https://htdrl.netlify.app/",
  },
  {
    title: "Admin Panel",
    description:
      "Login with Email: admin@gmail.com and Password: admin. This app allows the user to create, read, update, and delete notes. Also, it features search functionality and filtering options using dropdown menus.",
      tags: [react,api,db,sass],
    imageUrl: adminPanel,
    link:"https://adminpanel-role-and-permission.netlify.app/",
  },
] as const;

export const skillsData = [
  "Next JS",
  "React",
  "HTML 5",
  "CSS 3",
  "Sass",
  "Javascript",
  "Jquery",
  "API integration",
  "Mongo DB",
  "Bootstrap",
  "UI kit",
  "Tailwind CSS",
  "Php",
  "Wordpress",
  "Material UI",
  "Adobe Photoshop",
  "Figma",
  "Git",
] as const;
