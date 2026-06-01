export type Language = "en" | "th";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
];

export const DEFAULT_LANGUAGE: Language = "en";

const en = {
  meta: {
    siteTitle: "Portfolio",
    siteDescription: "My portfolio website",
    projectNotFound: "Project not found",
  },
  nav: {
    about: "About Me",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    languageLabel: "Language",
  },
  hero: {
    available: "Available for opportunities",
    greeting: "Hi, I'm",
    tagline:
      "Frontend Developer · Fullstack Developer · Software Engineer. Focused on shipping end-to-end products that pair solid UX with well-structured REST APIs, reliable databases, and deployment-ready architecture.",
    badgeAngularDotnet: "Angular & .NET experience",
    badgeCicdSql: "CI/CD & SQL Server",
    badgeMbaCompeng: "MBA & Computer Engineering",
    downloadResume: "Download Resume",
    resume: "Resume",
    recentExperience: "Recent Experience",
    recentExperienceTitle: "Frontend & Fullstack Experiences",
    internSummary:
      "Completed a two-month internship @ IRPC Public Company Limited, leading end-to-end delivery of internal web applications—from requirements and database design through deployment into production—so stakeholders could use the tools immediately in their work.",
    chipDebugging: "Debugging & Refactoring",
    chipProblemSolving: "Problem Solving",
    featuredProject: "Featured Project",
    live: "Live",
    viewProject: "View project",
    starsLogistics: (stars: number) => `${stars} stars · Logistics`,
  },
  skills: {
    title: "Skills",
    subtitle:
      "A mix of frontend, backend, database, cloud, tooling, and AI agents that supports fullstack development.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    cloud: "Cloud",
    tooling: "Tooling",
    aiAgents: "AI Agents",
  },
  experience: {
    title: "Experience",
    subtitle: "Real-world impact from internships and hands-on projects.",
    tagline: "INTERN · FULLSTACK",
    internshipType: "Internship",
    companyName: "IRPC Public Company Limited",
    skillsLine:
      "Full-Stack Development · Microsoft SQL Server · CI/CD · Jenkins · Angular · .NET",
    items: [
      {
        role: "Full Stack Developer",
        type: "Internship",
        period: "Jun 2025 – Aug 2025 · 2 mos",
        location: "Rayong, Thailand · On-site",
        bullets: [
          "Developed an internal web application using Angular and .NET, improving workflow efficiency across teams.",
          "Gained hands-on experience with Jenkins deployment and implemented CI/CD pipelines for automated builds and releases.",
          "Communicated technical concepts effectively with both technical and non-technical stakeholders.",
          "Strengthened problem-solving skills through debugging and refactoring.",
          "Designed the initial database structure and worked with SQL Server for data modeling, querying, and optimization.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    subtitle: "Engineering + business background that bridges tech and impact.",
    items: [
      {
        degree: "Master of Business Administration (MBA)",
        field: "Entrepreneurship / Entrepreneurial Studies",
        period: "Aug 2024 – May 2027",
      },
      {
        degree: "Bachelor of Engineering (BE)",
        field: "Computer Engineering",
        period: "Aug 2022 – May 2026",
      },
    ],
  },
  contact: {
    title: "Let's build something great together.",
    subtitle:
      "Open to frontend, fullstack, and software engineering roles, especially where modern web tech and great UX come together.",
    emailMe: "Email me",
  },
  projects: {
    title: "Projects",
    subtitle:
      "Selected work that highlights how I build and ship real products.",
    viewAll: "View all projects",
    viewDetails: "View details",
    scrollLeft: "Scroll projects left",
    scrollRight: "Scroll projects right",
  },
  allProjects: {
    backToHome: "← Back to home",
    title: "All Projects",
    subtitle: "Every project in one place — built to scale as the list grows.",
    metaTitle: "All Projects · Portfolio",
    metaDescription: "A complete list of projects and work.",
  },
  projectDetail: {
    backToProjects: "Back to projects",
    educationalUseOnly: "Educational use only",
    overview: "Overview",
    keyFeatures: "Key features",
    screenshots: "Screenshots",
    myRole: "My role",
    techStack: "Tech stack",
    demo: "Demo",
    links: "Links",
    viewOnGithub: "View on GitHub",
    sourceAndDocs: "Source & docs",
    liveSite: "Live site",
    openDeployment: "Open deployment",
    openOnYoutube: "Open on YouTube",
    watchDemo: "Watch demo",
    embeddedAbove: "Embedded above",
    externalDemo: "External demo",
    viewFullSize: "View full size",
    comingSoon: "Full case study coming soon.",
    closeImage: "Close full size image",
    close: "Close",
    previousScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    navHint: "Arrow keys to navigate · Esc to close",
    escHint: "Esc to close",
    viewFullSizeLabel: (label: string) => `View full size: ${label}`,
    counter: (index: number, total: number) => `${index} / ${total} · `,
  },
};

export type Dictionary = typeof en;

const th: Dictionary = {
  meta: {
    siteTitle: "Portfolio",
    siteDescription: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว",
    projectNotFound: "ไม่พบโปรเจกต์",
  },
  nav: {
    about: "เกี่ยวกับ",
    skills: "ทักษะ",
    experience: "ประสบการณ์",
    education: "การศึกษา",
    contact: "ติดต่อ",
    languageLabel: "ภาษา",
  },
  hero: {
    available: "เปิดรับโอกาสงานใหม่",
    greeting: "สวัสดี ผม",
    tagline:
      "Frontend · Fullstack · Software Engineer โฟกัสการส่งมอบผลิตภัณฑ์ครบวงจร ผสาน UX ที่ใช้งานง่ายกับ REST API ที่ออกแบบเป็นระบบ ฐานข้อมูลที่เชื่อถือได้ และสถาปัตยกรรมที่พร้อม deploy",
    badgeAngularDotnet: "ประสบการณ์ Angular & .NET",
    badgeCicdSql: "CI/CD & SQL Server",
    badgeMbaCompeng: "MBA & วิศวกรรมคอมพิวเตอร์",
    downloadResume: "ดาวน์โหลดเรซูเม",
    resume: "เรซูเม",
    recentExperience: "ประสบการณ์ล่าสุด",
    recentExperienceTitle: "ประสบการณ์ Frontend & Fullstack",
    internSummary:
      "ฝึกงานสองเดือนที่ บริษัท ไออาร์พีซี จำกัด (มหาชน) รับผิดชอบพัฒนาเว็บแอปภายในแบบครบวงจร ตั้งแต่เก็บความต้องการและออกแบบฐานข้อมูล จนถึงนำขึ้นใช้งานจริง ให้ทีมงานใช้งานได้ทันที",
    chipDebugging: "Debugging & Refactoring",
    chipProblemSolving: "แก้ปัญหาเชิงระบบ",
    featuredProject: "โปรเจกต์แนะนำ",
    live: "ใช้งานจริง",
    viewProject: "ดูโปรเจกต์",
    starsLogistics: (stars: number) => `${stars} ดาว · โลจิสติกส์`,
  },
  skills: {
    title: "ทักษะ",
    subtitle:
      "ทักษะครอบคลุม frontend, backend, ฐานข้อมูล, cloud, เครื่องมือ และ AI agents สำหรับงาน fullstack",
    frontend: "Frontend",
    backend: "Backend",
    database: "ฐานข้อมูล",
    cloud: "Cloud",
    tooling: "เครื่องมือ",
    aiAgents: "AI Agents",
  },
  experience: {
    title: "ประสบการณ์",
    subtitle: "ผลงานจากการฝึกงานและโปรเจกต์ที่ลงมือทำจริง",
    tagline: "ฝึกงาน · FULLSTACK",
    internshipType: "ฝึกงาน",
    companyName: "บริษัท ไออาร์พีซี จำกัด (มหาชน)",
    skillsLine:
      "Full-Stack · Microsoft SQL Server · CI/CD · Jenkins · Angular · .NET",
    items: [
      {
        role: "Full Stack Developer",
        type: "ฝึกงาน",
        period: "มิ.ย. 2025 – ส.ค. 2025 · 2 เดือน",
        location: "ระยอง · ทำงานที่สำนักงาน",
        bullets: [
          "พัฒนาเว็บแอปภายในด้วย Angular และ .NET ช่วยให้ทีมทำงานร่วมกันได้มีประสิทธิภาพขึ้น",
          "ใช้ Jenkins deploy และตั้งค่า CI/CD สำหรับ build และ release อัตโนมัติ",
          "อธิบายเรื่องเทคนิคให้ทั้งทีม dev และผู้ใช้งานที่ไม่ใช่สายเทคนิคเข้าใจได้ชัดเจน",
          "ฝึกแก้ปัญหาผ่านการ debug และ refactor โค้ด",
          "ออกแบบโครงสร้างฐานข้อมูลเริ่มต้น และใช้ SQL Server ในการ model ข้อมูล query และปรับประสิทธิภาพ",
        ],
      },
    ],
  },
  education: {
    title: "การศึกษา",
    subtitle: "พื้นฐานวิศวกรรมและธุรกิจที่เชื่อมเทคโนโลยีเข้ากับผลลัพธ์จริง",
    items: [
      {
        degree: "บริหารธุรกิจมหาบัณฑิต (MBA)",
        field: "การเป็นผู้ประกอบการ",
        period: "ส.ค. 2567 – พ.ค. 2570",
      },
      {
        degree: "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
        field: "วิศวกรรมคอมพิวเตอร์",
        period: "ส.ค. 2565 – พ.ค. 2569",
      },
    ],
  },
  contact: {
    title: "มาร่วมสร้างผลงานที่น่าภูมิใจกัน",
    subtitle:
      "เปิดรับงานด้าน frontend, fullstack และ software engineering โดยเฉพาะโปรเจกต์ที่ให้ความสำคัญกับ UX และเทคโนโลยีเว็บสมัยใหม่",
    emailMe: "ติดต่อทางอีเมล",
  },
  projects: {
    title: "โปรเจกต์",
    subtitle: "ผลงานที่เลือกมาเพื่อแสดงวิธีคิดและการส่งมอบผลิตภัณฑ์จริง",
    viewAll: "ดูโปรเจกต์ทั้งหมด",
    viewDetails: "ดูรายละเอียด",
    scrollLeft: "เลื่อนไปทางซ้าย",
    scrollRight: "เลื่อนไปทางขวา",
  },
  allProjects: {
    backToHome: "← กลับหน้าแรก",
    title: "โปรเจกต์ทั้งหมด",
    subtitle: "รวมทุกโปรเจกต์ไว้ในที่เดียว — ออกแบบให้ขยายรายการได้ในอนาคต",
    metaTitle: "โปรเจกต์ทั้งหมด · Portfolio",
    metaDescription: "รายการโปรเจกต์และผลงานทั้งหมด",
  },
  projectDetail: {
    backToProjects: "กลับไปหน้าโปรเจกต์",
    educationalUseOnly: "เพื่อการศึกษาเท่านั้น",
    overview: "ภาพรวม",
    keyFeatures: "จุดเด่น",
    screenshots: "ภาพหน้าจอ",
    myRole: "บทบาทของผม",
    techStack: "เทคโนโลยี",
    demo: "เดโม",
    links: "ลิงก์",
    viewOnGithub: "ดูบน GitHub",
    sourceAndDocs: "ซอร์สโค้ดและเอกสาร",
    liveSite: "เว็บไซต์",
    openDeployment: "เปิดเว็บที่ deploy แล้ว",
    openOnYoutube: "เปิดบน YouTube",
    watchDemo: "ดูวิดีโอเดโม",
    embeddedAbove: "ฝังไว้ด้านบนแล้ว",
    externalDemo: "ลิงก์เดโมภายนอก",
    viewFullSize: "ดูภาพขนาดเต็ม",
    comingSoon: "รายละเอียดฉบับเต็มกำลังจะมาเร็วนี้",
    closeImage: "ปิดภาพขนาดเต็ม",
    close: "ปิด",
    previousScreenshot: "ภาพก่อนหน้า",
    nextScreenshot: "ภาพถัดไป",
    navHint: "ใช้ปุ่มลูกศรเพื่อเลื่อน · กด Esc เพื่อปิด",
    escHint: "กด Esc เพื่อปิด",
    viewFullSizeLabel: (label: string) => `ดูขนาดเต็ม: ${label}`,
    counter: (index: number, total: number) => `${index} / ${total} · `,
  },
};

export const translations: Record<Language, Dictionary> = { en, th };
