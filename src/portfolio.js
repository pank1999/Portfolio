/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pankaj Pandey",
  title: "Hi all, I'm Pankaj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Typescript / Angular / Nodejs / Nest Js / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14F2y-SEJUKBkrSB42o8H9iUc6TZKUtdV/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pank1999",
  linkedin: "https://www.linkedin.com/in/pankaj-kumar-pandey/",
  gmail: "pankajpandey8630@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VITS, Satna M.P, India",
      logo: require("./assets/images/vits-logo.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Aug 2018 - April 2022",
      desc: "Finalist in the Smart India Hackathon",
      descBullets: [
        "Runner Up in IOT Exhibition",
        "Participated in Soft-tech Hackathon Jaipur 2021",
        "Winner In final year reflection competition",
        "Member of the college cricket team"
      ]
    },
    {
      schoolName: "Blooms Academy, Satna M.P India",
      logo: require("./assets/images/blooms.jpeg"),
      subHeader: "Class 12th",
      duration: "July 2017 - Mar 2018",
      desc: "House Captain of school",
      descBullets: ["Selected in school cricket team"]
    },
    {
      schoolName: "Blooms Academy, Satna M.P India",
      logo: require("./assets/images/blooms.jpeg"),
      subHeader: "Class 10th",
      duration: "July 2015 - Mar 2016",
      desc: "Member of co-curricular activities team",
      descBullets: [
        "Won inter house group dance competition",
        "Participated in maths olympiad"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Wisflux Tech Labs",
      companylogo: require("./assets/images/wisflux_logo.jpeg"),
      date: "September 2022 – Present",
      descBullets: [
        "Developed microservices that significantly enhanced software performance, thereby contributing to an improved user experience",
        "I designed and implemented a planner module aimed at assisting administrators in configuring campaigns, thereby optimizing efficiency and saving time"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "UPCRED",
      companylogo: require("./assets/images/upcred_logo.jpeg"),
      date: "Oct 2021 – DESC 2021",
      descBullets: [
        "Worked on project with team of five members and collaboration with development team on Influencer Marketing project. In the Bitbucket working environment and using REACT for frontend",
        "Enhancing the user experience by incorporating scroll- triggered animations into an existing User Interface"
      ]
    },
    {
      role: "Full Stack Developer - Intern",
      company: "SKYHYPE",
      companylogo: require("./assets/images/skyhypelogo2.jpg"),
      date: "Jun 2021 – Sep 2021",
      descBullets: [
        "In this role, my primary responsibility entails crafting user interfaces through the utilization of HTML, CSS, and JavaScript"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ecommerce-app.png"),
      projectName: "E-commerce App",
      projectDesc:
        "A E-commerce app where you can buy products and manage your inventory.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/pank1999/Myshop-E-commerce-app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/paskey.avif"),
      projectName: "Paskey",
      projectDesc:
        "A mobile application to manage your password and generate secure password.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://paskey.online/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Smart India Hackathon 2020",
      subtitle: "Finalist in Smart India Hackathon 2020 Software Edition",
      image: require("./assets/images/SIH.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    },
    {
      title: "IOT Exhibition",
      subtitle: "Runner Up in IOT Exhibition in VITS, Satna",
      image: require("./assets/images/IOT2.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Cloud Computing",
      subtitle: "Completed Certifcation from RGPV on Cloud Computing",
      image: require("./assets/images/cloud-computing.webp"),
      imageAlt: "Cloud computing",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8630211986",
  email_address: "pankajpandey8630@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
