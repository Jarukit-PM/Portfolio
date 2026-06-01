export type Language = "en" | "th";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
];

export const DEFAULT_LANGUAGE: Language = "en";

const en = {
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
      "A mix of frontend, backend, tooling, and AI agents that supports fullstack development.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tooling: "Tooling",
    aiAgents: "AI Agents",
  },
  experience: {
    title: "Experience",
    subtitle: "Real-world impact from internships and hands-on projects.",
    tagline: "INTERN · FULLSTACK",
    internshipType: "Internship",
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
  nav: {
    about: "เกี่ยวกับฉัน",
    skills: "ทักษะ",
    experience: "ประสบการณ์",
    education: "การศึกษา",
    contact: "ติดต่อ",
    languageLabel: "ภาษา",
  },
  hero: {
    available: "พร้อมรับโอกาสใหม่ ๆ",
    greeting: "สวัสดีครับ ผมชื่อ",
    tagline:
      "Frontend Developer · Fullstack Developer · Software Engineer มุ่งเน้นการส่งมอบผลิตภัณฑ์แบบครบวงจร ที่ผสาน UX ที่ดีเข้ากับ REST API ที่ออกแบบอย่างเป็นระบบ ฐานข้อมูลที่เชื่อถือได้ และสถาปัตยกรรมที่พร้อมขึ้นใช้งานจริง",
    badgeAngularDotnet: "ประสบการณ์ Angular & .NET",
    badgeCicdSql: "CI/CD & SQL Server",
    badgeMbaCompeng: "MBA & วิศวกรรมคอมพิวเตอร์",
    downloadResume: "ดาวน์โหลดเรซูเม่",
    resume: "เรซูเม่",
    recentExperience: "ประสบการณ์ล่าสุด",
    recentExperienceTitle: "ประสบการณ์ Frontend & Fullstack",
    internSummary:
      "ฝึกงานเป็นเวลาสองเดือนที่ บริษัท ไออาร์พีซี จำกัด (มหาชน) รับผิดชอบการพัฒนาเว็บแอปพลิเคชันภายในแบบครบวงจร ตั้งแต่การเก็บความต้องการและออกแบบฐานข้อมูล ไปจนถึงการนำขึ้นใช้งานจริง เพื่อให้ผู้เกี่ยวข้องนำเครื่องมือไปใช้ในงานได้ทันที",
    chipDebugging: "Debugging & Refactoring",
    chipProblemSolving: "การแก้ปัญหา",
    featuredProject: "โปรเจกต์เด่น",
    live: "ออนไลน์",
    viewProject: "ดูโปรเจกต์",
    starsLogistics: (stars: number) => `${stars} ดาว · โลจิสติกส์`,
  },
  skills: {
    title: "ทักษะ",
    subtitle:
      "การผสมผสานของ frontend, backend, เครื่องมือ และ AI agents ที่รองรับการพัฒนาแบบ fullstack",
    frontend: "Frontend",
    backend: "Backend",
    database: "ฐานข้อมูล",
    tooling: "เครื่องมือ",
    aiAgents: "AI Agents",
  },
  experience: {
    title: "ประสบการณ์",
    subtitle: "ผลงานจริงจากการฝึกงานและโปรเจกต์ที่ลงมือทำ",
    tagline: "ฝึกงาน · FULLSTACK",
    internshipType: "ฝึกงาน",
    items: [
      {
        role: "Full Stack Developer",
        type: "ฝึกงาน",
        period: "มิ.ย. 2025 – ส.ค. 2025 · 2 เดือน",
        location: "ระยอง, ประเทศไทย · ทำงานที่ออฟฟิศ",
        bullets: [
          "พัฒนาเว็บแอปพลิเคชันภายในด้วย Angular และ .NET เพิ่มประสิทธิภาพการทำงานข้ามทีม",
          "ได้ลงมือใช้งานการ deploy ด้วย Jenkins และจัดทำ CI/CD pipeline สำหรับการ build และ release แบบอัตโนมัติ",
          "สื่อสารแนวคิดเชิงเทคนิคได้อย่างมีประสิทธิภาพกับผู้เกี่ยวข้องทั้งสายเทคนิคและไม่ใช่สายเทคนิค",
          "พัฒนาทักษะการแก้ปัญหาผ่านการ debug และ refactor",
          "ออกแบบโครงสร้างฐานข้อมูลเริ่มต้น และทำงานกับ SQL Server ในการสร้างแบบจำลองข้อมูล การ query และการ optimize",
        ],
      },
    ],
  },
  education: {
    title: "การศึกษา",
    subtitle: "พื้นฐานด้านวิศวกรรมและธุรกิจที่เชื่อมเทคโนโลยีเข้ากับผลลัพธ์จริง",
    items: [
      {
        degree: "บริหารธุรกิจมหาบัณฑิต (MBA)",
        field: "ผู้ประกอบการ / การเป็นผู้ประกอบการ",
        period: "ส.ค. 2024 – พ.ค. 2027",
      },
      {
        degree: "วิศวกรรมศาสตรบัณฑิต (วศ.บ.)",
        field: "วิศวกรรมคอมพิวเตอร์",
        period: "ส.ค. 2022 – พ.ค. 2026",
      },
    ],
  },
  contact: {
    title: "มาสร้างสิ่งที่ยอดเยี่ยมไปด้วยกัน",
    subtitle:
      "เปิดรับตำแหน่งงานด้าน frontend, fullstack และ software engineering โดยเฉพาะงานที่ผสานเทคโนโลยีเว็บสมัยใหม่เข้ากับ UX ที่ดี",
    emailMe: "ส่งอีเมลถึงฉัน",
  },
  projects: {
    title: "โปรเจกต์",
    subtitle: "ผลงานคัดสรรที่สะท้อนวิธีการสร้างและส่งมอบผลิตภัณฑ์จริง",
    viewAll: "ดูโปรเจกต์ทั้งหมด",
    viewDetails: "ดูรายละเอียด",
    scrollLeft: "เลื่อนโปรเจกต์ไปทางซ้าย",
    scrollRight: "เลื่อนโปรเจกต์ไปทางขวา",
  },
  allProjects: {
    backToHome: "← กลับสู่หน้าแรก",
    title: "โปรเจกต์ทั้งหมด",
    subtitle: "ทุกโปรเจกต์รวมไว้ในที่เดียว — ออกแบบให้รองรับการเติบโตของรายการ",
    metaTitle: "โปรเจกต์ทั้งหมด · Portfolio",
    metaDescription: "รายการโปรเจกต์และผลงานทั้งหมด",
  },
  projectDetail: {
    backToProjects: "กลับไปหน้าโปรเจกต์",
    educationalUseOnly: "เพื่อการศึกษาเท่านั้น",
    overview: "ภาพรวม",
    keyFeatures: "ฟีเจอร์เด่น",
    screenshots: "ภาพหน้าจอ",
    myRole: "บทบาทของฉัน",
    techStack: "เทคโนโลยีที่ใช้",
    demo: "เดโม",
    links: "ลิงก์",
    viewOnGithub: "ดูบน GitHub",
    sourceAndDocs: "ซอร์สโค้ดและเอกสาร",
    liveSite: "เว็บไซต์จริง",
    openDeployment: "เปิดเว็บที่ deploy แล้ว",
    openOnYoutube: "เปิดบน YouTube",
    watchDemo: "ดูเดโม",
    embeddedAbove: "ฝังไว้ด้านบนแล้ว",
    externalDemo: "เดโมภายนอก",
    viewFullSize: "ดูขนาดเต็ม",
    comingSoon: "กรณีศึกษาฉบับเต็มกำลังจะมาเร็ว ๆ นี้",
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
