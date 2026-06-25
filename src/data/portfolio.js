import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import {
  SiExpress,
  SiHackerone,
  SiJavascript,
  SiLeetcode,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si'

export const profile = {
  name: 'Ankesh Kumar',
  title: 'MCA Student | Full Stack Web Developer',
  location: 'India',
  email: 'ankeshkumar813108@gmail.com',
  phone: '+91 70614 34689',
  resumeUrl: '/resume-placeholder.pdf',
  roles: ['Web Developer', 'Frontend Developer', 'React Developer', 'Java Developer'],
  summary:
    'I am an MCA student passionate about building modern web applications. I enjoy creating responsive websites, learning new technologies, solving programming problems, and developing real-world projects.',
  objective:
    'To secure an internship or entry-level full stack developer role where I can contribute to production-ready applications, keep growing as an engineer, and solve meaningful problems with clean code.',
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/your-username', icon: FaGithub },
  { label: 'LeetCode', href: 'https://leetcode.com/your-username', icon: SiLeetcode },
  { label: 'HackerRank', href: 'https://hackerrank.com/your-username', icon: SiHackerone },
  { label: 'Instagram', href: 'https://instagram.com/your-username', icon: FaInstagram },
]

export const education = [
  { degree: 'MCA', place: 'College Name', year: '2025 - Present', score: 'CGPA: Add your CGPA' },
  { degree: 'BCA', place: 'College Name', year: '2022 - 2025', score: 'Percentage/CGPA: Add details' },
  { degree: '12th', place: 'School Name', year: '2022', score: 'Percentage: Add percentage' },
  { degree: '10th', place: 'School Name', year: '2020', score: 'Percentage: Add percentage' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 92, icon: FaHtml5 },
      { name: 'CSS3', level: 88, icon: FaCss3Alt },
      { name: 'JavaScript', level: 84, icon: SiJavascript },
      { name: 'React.js', level: 80, icon: FaReact },
      { name: 'Bootstrap', level: 78, icon: FaBootstrap },
      { name: 'Tailwind CSS', level: 76, icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 72, icon: FaNodeJs },
      { name: 'Express.js', level: 70, icon: SiExpress },
      { name: 'Java', level: 82, icon: FaJava },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 78, icon: SiMysql },
      { name: 'MongoDB', level: 70, icon: SiMongodb },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 78, icon: FaGitAlt },
      { name: 'GitHub', level: 82, icon: FaGithub },
      { name: 'VS Code', level: 90, icon: FaCode },
      { name: 'Postman', level: 72, icon: SiPostman },
    ],
  },
]

export const projects = [
  {
    title: 'Student Management System',
    category: 'Full Stack',
    description: 'A dashboard for managing students, attendance, marks, departments, and searchable academic records.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/your-username/student-management-system',
    demo: 'https://example.com',
    accent: '#22d3ee',
  },
  {
    title: 'E-commerce Website',
    category: 'Full Stack',
    description: 'A responsive shopping experience with product listings, cart interactions, authentication flow, and order UI.',
    tech: ['React', 'MongoDB', 'Express', 'Node.js'],
    github: 'https://github.com/your-username/ecommerce-website',
    demo: 'https://example.com',
    accent: '#a78bfa',
  },
  {
    title: 'Portfolio Website',
    category: 'Frontend',
    description: 'A premium developer portfolio with smooth animations, project filters, contact form, and theme toggle.',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
    github: 'https://github.com/your-username/portfolio',
    demo: 'https://example.com',
    accent: '#fb7185',
  },
  {
    title: 'To-Do Application',
    category: 'Frontend',
    description: 'A clean productivity app with CRUD tasks, persistent local storage, status filters, and responsive layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/your-username/todo-app',
    demo: 'https://example.com',
    accent: '#34d399',
  },
  {
    title: 'Login Authentication System',
    category: 'Backend',
    description: 'Secure authentication screens and API patterns with protected routes, validation, and session-ready structure.',
    tech: ['JavaScript', 'Node.js', 'JWT', 'MongoDB'],
    github: 'https://github.com/your-username/login-authentication',
    demo: 'https://example.com',
    accent: '#f59e0b',
  },
]

export const experiences = [
  {
    title: 'Open to Internship Opportunities',
    type: 'Internship',
    meta: 'Full Stack, Frontend, Java Development',
    description:
      'Actively looking for internship roles where I can work on real products, collaborate with experienced developers, and contribute reliable code.',
  },
  {
    title: 'Web Development Training',
    type: 'Training',
    meta: 'Self-paced and guided learning',
    description:
      'Practicing frontend, backend, database, Git workflows, and deployment through hands-on projects and coding exercises.',
  },
]

export const certifications = [
  { title: 'Java Programming', issuer: 'Add Issuer', year: '2026', details: 'Core Java, OOP, collections, exceptions, and problem solving.' },
  { title: 'Web Development', issuer: 'Add Issuer', year: '2026', details: 'Responsive layouts, UI fundamentals, JavaScript, and deployment.' },
  { title: 'SQL & Database', issuer: 'Add Issuer', year: '2026', details: 'Relational database concepts, SQL queries, schema design, and joins.' },
  { title: 'React Development', issuer: 'Add Issuer', year: '2026', details: 'Components, hooks, state management, routing patterns, and APIs.' },
  { title: 'Git & GitHub', issuer: 'Add Issuer', year: '2026', details: 'Version control, repositories, branching, collaboration, and project hosting.' },
]

export const achievements = [
  { label: 'Projects Built', value: 5 },
  { label: 'Technologies Practiced', value: 15 },
  { label: 'Certifications', value: 5 },
  { label: 'Coding Problems', value: 120 },
]
