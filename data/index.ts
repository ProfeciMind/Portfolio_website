import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am passionate about working with a talented team to create exceptional user experiences. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am eager to collaborate with clients and team.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Passionate about to create innovative and user-friendly web solutions. ",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DreamHomes",
    des: "DreamHomes is a fast, intelligent real estate platform built with React, Node.js, and MongoDB, designed to streamline the home-search experience. With real-time listing updates, smart search algorithms, and lightning-fast performance, users find their ideal property in record time. The platform delivers a seamless, responsive UI and has already shown a 30% boost in engagement and 20% increase in user retention.",
    img: "/shopNow.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/node.svg", "mongo.svg"],
    link: "https://shop-now-frontend-1tfl.vercel.app/",
  },
  {
    id: 2,
    title: "SentiScore",
    des: "Transforming customer feedback into smart product ratings using the power of AI and natural language understanding.",
    img: "/w1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/node.svg",
      "mongo.svg",
      "/Python.svg ",
    ],
    link: "https://collegeeazy.vercel.app/",
  },
  {
    id: 3,
    title: "Lung Tumor Detecion",
    des: "Lung Tumor Detection is an AI-powered diagnostic system that uses deep learning to classify lung scans as Normal, Benign, or Malignant. Built with TensorFlow.",
    img: "/lung.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/stream.svg",
      "/c.svg",
      "/Python.svg",
    ],
    link: "https://thedesignyard.co.in/",
  },
  {
    id: 4,
    title: "Task and Time HR manager",
    des: "A freelance project,Enhanced a React JS-based portfolio website, boosting traffic by 50% and conversions by 20%.",
    img: "/unity.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://unityhealthsystem.com/",
  },
  // {
  //   id: 5,
  //   title: "Primecarealliance",
  //   des: "A freelance project,Enhanced a React JS-based portfolio website, boosting traffic by 50% and conversions by 20%.",
  //   img: "/pcl.png",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
  //   link: "https://www.primecarealliance.com/",
  // },
  // {
  //   id: 6,
  //   title: "Apple-Watch_showcase",
  //   des: "I have just finished a new website project where I combined the power of React.js and Three.js to create a dynamic 3D experience.",
  //   img: "/apple.png",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://apple-watch-livid.vercel.app/",
  // },
];

export const testimonials = [
  {
    quote:
      "Working with Harsh was an incredible experience. His deep understanding of development and commitment to delivering outstanding results helped us achieve our goals seamlessly. Harsh's ability to solve problems and provide innovative solutions makes him an excellent choice for any project.",
    name: "Sameer Khan",
    title: "Freelance Client from Bangalore",
  },
  {
    quote:
      "Harsh is a talented developer who brings creative ideas and exceptional coding skills to every project. His dedication and ability to communicate complex concepts in simple terms made our collaboration very effective. I look forward to working with him again.",
    name: "Yash verma",
    title: "Freelance Client from Mumbai",
  },
  {
    quote:
      "Harsh's ability to deliver quality work under tight deadlines is impressive. He collaborated with me on a college project, and his technical expertise combined with teamwork skills ensured our success. He is a true asset to any team.",
    name: "Aarav Sharma",
    title: "Batchmate at KIIT, Delhi",
  },
  {
    quote:
      "Harsh’s professionalism and attention to detail were evident throughout our project. His grasp of full-stack development helped my business establish a strong online presence. I highly recommend him to anyone looking for top-notch development services.",
    name: "Shachin singh",
    title: "Freelance Client from Ahmedabad",
  },
  {
    quote:
      "Harsh played a vital role in our academic project, always stepping up with innovative ideas and solutions. His technical knowledge and ability to work collaboratively have made him one of the most reliable peers I have worked with.",
    name: "Shahank Panday",
    title: "Classmate at KIIT, Delhi",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer @Capgemini",
    desc: "Assisted in the development of a data warehouse and design AI models for various data dashboards.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack developer-intern @Codsoft",
    desc: "Designed and developed Web app for the company using MERN (ReactJS, NodeJS, ExpressJS, MongoDB).",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a Web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ProfeciMind",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "http://www.linkedin.com/in/harsh308jha",
  },
];
