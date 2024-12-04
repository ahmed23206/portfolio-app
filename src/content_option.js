
import headshot from "./assets/images/headshot.jpeg";

const logotext = "Abdi";
const meta = {
    title: "Abdi Ahmed",
    description: "Aspiring Software Engineer | Passionate about building innovative solutions",
};

const introdata = {
    title: "I’m Abdi Ahmed",
    animated: {
        first: "I build innovative solutions",
        second: "I solve challenging IT problems",
        third: "I love driving operational efficiency",
    },
    description: "Aspiring Software Engineer with over two years of experience in IT service management and technical support. Proficient in object-oriented programming, system monitoring, and tools like Splunk, ServiceNow, and Jira. I bring a problem-solving mindset and a passion for creating scalable solutions to every project.",
    your_img_url: headshot,
};

const dataabout = {
    title: "About Me",
    aboutme: "With over two years of hands-on experience in IT service management, I specialize in system monitoring, technical support, and collaborative workflows. My foundation in Agile methodologies, CI/CD, and modern tech stacks like React and AWS empowers me to deliver high-quality solutions.",
};

const worktimeline = [
    {
        jobtitle: "IT Service Desk Technician 2",
        where: "Ohio State University, Columbus, OH",
        date: "Aug 2024 - Present",
        details: [
            "Utilized ServiceNow to efficiently manage and resolve student requests, reducing response times.",
            "Improved support for over 500 devices using JAMF for Apple product management.",
            "Guided students through Buckeye Link navigation, enhancing their academic experience.",
            "Handled 30+ daily calls with superior problem-solving and communication skills.",
        ],
    },
    {
        jobtitle: "Service Desk Technician 2",
        where: "McGraw-Hill, Columbus, OH",
        date: "Aug 2023 – Aug 2024",
        details: [
            "Provided support for approximately 25 users daily, reducing ticket backlog by 20%.",
            "Leveraged Splunk to monitor system logs and detect issues proactively.",
            "Resolved 50+ user tickets during a significant CrowdStrike outage.",
            "Enhanced overall service efficiency using Jira for tracking and escalation.",
        ],
    },
    {
        jobtitle: "IT Service Desk Technician 2",
        where: "Nationwide, Columbus, OH",
        date: "Jan 2023 – Aug 2023",
        details: [
            "Delivered technical support to 20+ users daily, improving resolution times by 15%.",
            "Implemented seamless onboarding for new users, optimizing system integration.",
            "Reduced ticket handling time by 10% through collaboration with cross-functional teams.",
        ],
    },
];

const skills = [
    { name: "React", value: 90 },
    { name: "Java", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "AWS", value: 75 },
    { name: "ServiceNow", value: 95 },
    { name: "Splunk", value: 90 },
];

const services = [
    {
        title: "Web Development",
        description: "Building user-centric web applications tailored to business needs.",
    },
    {
        title: "System Monitoring",
        description: "Expertise in tools like Splunk and Dynatrace to ensure system reliability.",
    },
    {
        title: "IT Support and Troubleshooting",
        description: "Delivering timely solutions to complex technical issues.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Inventory Management System - Java-based system integrated with MongoDB.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Weather Forecast App - React app deployed with AWS and Docker.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "Ahmed23206@gmail.com",
    description:
        "Whether it’s discussing how I can contribute to your team, sharing insights, or exploring innovative projects, feel free to reach out. Let’s collaborate and create meaningful solutions together!",
    YOUR_SERVICE_ID: "service_id", // Set up on emailjs.com
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/yourgithubprofile", // Update when ready
    linkedin: "https://www.linkedin.com/in/abdirahmana/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
