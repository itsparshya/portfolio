import {
  Code2,
  Database,
  Globe,
  Layers3,
  Server,
  Smartphone,
} from 'lucide-react'

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Processes' },
]

export const stats = [
  { value: 'Java', label: 'Core expertise' },
  { value: 'Spring', label: 'Backend' },
  { value: 'React', label: 'Frontend' },
  { value: 'SQL', label: 'Data & APIs' },
]

export const about =
  "I’m a software developer who enjoys turning business requirements into dependable, maintainable applications. My work combines Java and Spring Boot on the backend with React on the frontend, supported by relational databases and clean REST APIs. I focus on readable code, practical architecture, responsive interfaces, and shipping features that users can actually use."

export const skills = [
  {
    name: 'Backend',
    icon: <Server size={22} />,
    items: ['Java', 'Spring Boot', 'REST API', 'Spring Security'],
  },
  {
    name: 'Frontend',
    icon: <Globe size={22} />,
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Database',
    icon: <Database size={22} />,
    items: ['PostgreSQL', 'MySQL', 'SQL', 'JPA/Hibernate'],
  },
  {
    name: 'Tools',
    icon: <Code2 size={22} />,
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    name: 'Architecture',
    icon: <Layers3 size={22} />,
    items: ['MVC', 'JWT', 'Microservices', 'Clean APIs'],
  },
  {
    name: 'Mobile',
    icon: <Smartphone size={22} />,
    items: ['Flutter', 'Dart', 'Android', 'REST APIs'],
  },
]

export const services = [
  {
    title: 'Full-Stack Development',
    description: 'Complete web applications with a reliable backend, modern frontend, database and API integration.',
    icon: <Layers3 size={24} />,
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Java Backend',
    description: 'Business logic, authentication, REST APIs, database integration and maintainable Spring Boot services.',
    icon: <Server size={24} />,
    tags: ['Java', 'Spring', 'REST'],
  },
  {
    title: 'React Frontend',
    description: 'Responsive interfaces that are clean, fast and easy for users to navigate across devices.',
    icon: <Code2 size={24} />,
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'API & Database',
    description: 'Well-structured APIs and relational database designs for applications that need dependable data flow.',
    icon: <Database size={24} />,
    tags: ['PostgreSQL', 'SQL', 'JWT'],
  },
]

export const projects = [
  {
    title: 'MiniBank',
    subtitle: 'Banking Management Platform',
    category: 'Full-Stack',
    year: '2026',
    description:
      'A full-stack banking application with authentication, account information, balances and transaction-oriented workflows.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'JWT'],
    icon: <Database size={42} />,
    live: '#',
    github: 'https://github.com/',
  },
  {
    title: 'QR Food Ordering',
    subtitle: 'Restaurant Ordering System',
    category: 'Web App',
    year: '2026',
    description:
      'A QR-based food ordering experience where customers can browse a menu, manage a cart, checkout and track orders.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'REST API'],
    icon: <Globe size={42} />,
    live: '#',
    github: 'https://github.com/',
  },
  {
    title: 'Developer Toolkit',
    subtitle: 'Utilities & Experiments',
    category: 'Development',
    year: '2026',
    description:
      'A collection of developer-focused experiments covering Java, APIs, frontend components, automation and application tooling.',
    tech: ['Java', 'React', 'Flutter', 'Git'],
    icon: <Code2 size={42} />,
    live: '#',
    github: 'https://github.com/',
  },
]

export const experience = [
  {
    label: '01 — DISCOVER',
    title: 'Understand the requirement',
    description: 'Clarify the business problem, users, scope, integrations and the result the project needs to achieve.',
  },
  {
    label: '02 — BUILD',
    title: 'Design & develop',
    description: 'Break the work into practical components, build the API and UI, and keep the code easy to maintain.',
  },
  {
    label: '03 — REFINE',
    title: 'Test & improve',
    description: 'Validate workflows, handle edge cases, fix issues and polish the experience across screen sizes.',
  },
  {
    label: '04 — SHIP',
    title: 'Deploy & support',
    description: 'Prepare the application for deployment and help with the handoff, documentation and future improvements.',
  },
]

export const contact = {
  email: 'your.email@example.com',
  phone: '+91 00000 00000',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
}
