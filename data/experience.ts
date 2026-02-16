export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer / Lead",
    company: "Accenture",
    location: "Washington, DC",
    period: "Nov 2025 — Present",
    description:
      "Leading end-to-end development of a secure, mission-critical internal web application for a Federal Government client. Full-stack ownership across React + TypeScript + Vite with Material UI on the frontend and Java Spring Boot + PostgreSQL + Liquibase on the backend, with Keycloak SSO and role-based access.",
  },
  {
    role: "Senior Software Engineer",
    company: "Booz Allen Hamilton",
    location: "Washington, DC",
    period: "Oct 2024 — Nov 2025",
    description:
      "Spearheaded development of a secure cloud-based application for a Federal Government client using React/Next.js, achieving 99.9% uptime SLA. Architected scalable microservices with Docker, Kubernetes, and PostgreSQL, reducing system downtime by 45% for DOJ mission-critical analytics.",
  },
  {
    role: "Senior Software Engineer",
    company: "Northstrat Incorporated",
    location: "Sterling, VA",
    period: "Jul 2023 — Oct 2024",
    description:
      "Built large-scale React + Java Spring Boot applications with 30% performance gains. Designed microservices architecture with Docker & Kubernetes, cutting deployment times by 50%. Led testing strategy with Jest & Cypress, increasing coverage by 50%.",
  },
  {
    role: "Senior Software Engineer",
    company: "Deloitte",
    location: "Remote / Arlington, VA",
    period: "May 2021 — May 2023",
    description:
      "Led a team building complex real-time data processing and analytics systems with React and Java. Developed secure web applications for DHS, State of Texas, and CDC. Achieved 50% increase in user engagement through scalable frontend architecture.",
  },
  {
    role: "Software Engineer",
    company: "Syntelic Solutions Corporation",
    location: "Remote",
    period: "Apr 2019 — Apr 2021",
    description:
      "Crafted distribution-sector software with Angular and .NET Core, boosting user engagement 25%. Engineered scalable microservices on Azure, improving uptime by 35% and deployment speed by 50%.",
  },
  {
    role: "Software Engineer",
    company: "Bytecubed / U.Group",
    location: "Arlington, VA",
    period: "Feb 2016 — Apr 2019",
    description:
      "Built secure government web applications with Angular, React, and Java in a SCRUM environment. Doubled team productivity on UI features and increased user retention by 30%. Maintained automation testing with Selenium, Protractor, and Cucumber.",
  },
];
