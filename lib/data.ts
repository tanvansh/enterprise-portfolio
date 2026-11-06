// All resume content lives here. Sourced from the resume + LinkedIn profile.

export type Role = { title: string; period: string };
export type Experience = {
  org: string;
  location?: string;
  summary: string;
  roles: Role[];
  metrics: { value: string; label: string }[];
  responsibilities: string[];
  achievements: string[];
  tools: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    org: "Siemens Energy",
    location: "Gurugram, India",
    current: true,
    summary: "Engineering data and digital-twin systems for large offshore wind and power projects.",
    roles: [
      { title: "Solution Engineer", period: "Jan 2026 – Present" },
      { title: "Graduate Trainee Engineer", period: "Jul 2025 – Jan 2026" },
      { title: "Project Engineering Intern", period: "Jan 2025 – Jul 2025" },
    ],
    metrics: [
      { value: "3", label: "Offshore wind projects integrated" },
      { value: "3", label: "Roles in under 2 years" },
      { value: "PAM", label: "Primary administrator" },
    ],
    responsibilities: [
      "Primary administrator for the in-house Plant Asset Manager (PAM) software.",
      "Manage P&ID and 3D model data in COMOS and support collaborative engineering workflows.",
      "Lead departmental key-user meetings for project data integration.",
    ],
    achievements: [
      "Steering the shift from document-centric to data-driven engineering via the Engineering Data Backbone (DBNE).",
      "Orchestrating data integration for the Norfolk Offshore Wind Zone: Vanguard East, Vanguard West and Boreas.",
      "Resolving complex merge conflicts and running multidisciplinary clash detection in Navisworks.",
    ],
    tools: ["PAM", "COMOS", "DBNE", "Navisworks", "BIM", "P&ID", "3D models"],
  },
  {
    org: "The Home Curator",
    location: "Haldwani, India",
    current: true,
    summary: "Short-term rental growth and OTA management for premium properties.",
    roles: [{ title: "Digital Marketing Manager", period: "Oct 2022 – Present" }],
    metrics: [
      { value: "85%", label: "Projected annual occupancy" },
      { value: "+20 pts", label: "Above 65% industry average" },
      { value: "4", label: "OTA platforms" },
    ],
    responsibilities: [
      "Run OTA management and digital onboarding for properties such as Solitude, The Boutique Hotel.",
      "Manage 3+ active listings across Airbnb, Booking.com, Agoda and MakeMyTrip.",
      "Set the operational standards that define guest service quality.",
    ],
    achievements: [
      "Projected 85% annual occupancy using an AI-integrated management stack, against an industry average of 65%.",
      "Multi-platform distribution captures demand that single-platform hosts miss.",
    ],
    tools: ["Airbnb", "Booking.com", "Agoda", "MakeMyTrip", "Meta Ads", "Automation tools"],
  },
  {
    org: "Noble Soccer Store",
    summary: "A football gear brand I founded and scaled into South-East Asia.",
    roles: [{ title: "Founder", period: "May 2023 – Sep 2026" }],
    metrics: [
      { value: "+75%", label: "Revenue in Q2 after launch" },
      { value: "+80%", label: "Customer base" },
      { value: "−25%", label: "Delivery time" },
    ],
    responsibilities: [
      "Owned inventory management, order fulfilment and operating budgets.",
      "Supervised and trained a team of 10+ with performance tracking.",
      "Led marketing and customer acquisition.",
    ],
    achievements: [
      "75% increase in sales revenue in the second quarter after launch.",
      "Customer base grew 80%, reaching football fans across South-East Asia.",
      "Delivery time cut by 25% through fulfilment optimisation.",
    ],
    tools: ["E-commerce", "Meta Ads", "Google Ads", "Inventory ops"],
  },
  {
    org: "Outlier",
    summary: "AI training for mathematical reasoning.",
    roles: [{ title: "Mathematics Specialist", period: "Nov 2024 – Jan 2025" }],
    metrics: [{ value: "48+", label: "Hours of LLM training" }],
    responsibilities: [
      "Trained models to decide when to reason in language and when to call Python.",
      "Checked prompts and model responses for correctness and rated them across several criteria.",
    ],
    achievements: ["48+ hours of expert-level LLM training and evaluation."],
    tools: ["LLM evaluation", "RLHF", "Python"],
  },
  {
    org: "Team Oorja · Thapar Institute",
    location: "Patiala, India",
    summary: "University electric go-kart racing team.",
    roles: [
      { title: "Brakes & Tyres Lead", period: "Jun 2022 – Dec 2024" },
      { title: "Member", period: "Nov 2021 – Jun 2022" },
    ],
    metrics: [
      { value: "3rd / 75+", label: "Indian Karting Championship 2023" },
      { value: "AIR 6", label: "E-GKDC 2024" },
    ],
    responsibilities: [
      "Led the brakes and tyres department through design, analysis and build.",
      "Ran linear static and thermal analysis of brake discs, calipers and axles.",
    ],
    achievements: [
      "3rd in Electric Vehicles among 75+ teams, Indian Karting Championship 2023 (Kolhapur).",
      "All India Rank 6 at E-GKDC 2024 (Kari Motor Speedway).",
    ],
    tools: ["Ansys Workbench", "FEA", "Thermal analysis", "CAD"],
  },
  {
    org: "IETE Students' Forum · TIET",
    location: "Patiala, India",
    summary: "Student technical society.",
    roles: [
      { title: "Head of Marketing", period: "Jun 2023 – Apr 2024" },
      { title: "Mentor / Marketing Management", period: "Jul 2022 – Jun 2023" },
    ],
    metrics: [{ value: "Head", label: "of Marketing, 2023–24" }],
    responsibilities: ["Marketing executive for Elementos, the annual tech fest."],
    achievements: ["Worked on several machine learning projects using OpenCV and TensorFlow."],
    tools: ["OpenCV", "TensorFlow", "Marketing"],
  },
];

export type Project = {
  title: string;
  context: string;
  description: string;
  stack: string[];
  live?: string;
  github?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Multi-Timeframe Swing Highs & Lows Indicator",
    context: "Personal · Trading tools",
    description:
      "Custom TradingView indicator that finds swing highs and lows across multiple timeframes and overlays EMAs with supply and demand zones.",
    stack: ["Pine Script", "TradingView", "Technical analysis"],
  },
  {
    title: "Digital Twin & Asset Configuration",
    context: "Siemens Energy",
    description:
      "Configuring plant assets in Plant Asset Manager as part of moving engineering from documents to a connected data backbone (DBNE).",
    stack: ["PAM", "DBNE", "COMOS"],
    note: "Internal work · no public link",
  },
  {
    title: "Multi-Disciplinary BIM Coordination",
    context: "Siemens Energy · Norfolk Offshore Wind Zone",
    description:
      "Merging models from multiple disciplines, resolving merge conflicts and running clash detection before issues reach construction.",
    stack: ["Navisworks", "BIM", "3D models"],
    note: "Internal work · no public link",
  },
  {
    title: "Electric Go-Kart",
    context: "Team Oorja",
    description:
      "Concept and design of an electric go-kart that placed AIR 6 at E-GKDC 2024. I owned brake and axle design, validated with FEA.",
    stack: ["Ansys Workbench", "FEA", "EV powertrain"],
  },
  {
    title: "Noble Soccer Store",
    context: "Founder",
    description: "The e-commerce storefront and brand behind my football gear business.",
    stack: ["E-commerce", "Meta Ads", "Fulfilment ops"],
    live: "https://www.noblesoccer.in",
  },
  {
    title: "Computer Vision & ML Experiments",
    context: "IETE Students' Forum",
    description: "A set of machine learning projects built with OpenCV and TensorFlow during university.",
    stack: ["Python", "OpenCV", "TensorFlow"],
  },
  {
    title: "Line Following Buggy",
    context: "University",
    description: "Designed and built a remotely controlled buggy with line-following behaviour.",
    stack: ["Embedded", "Sensors", "Motor control"],
  },
  {
    title: "Mangonel",
    context: "University",
    description: "Built a working Roman catapult from raw materials, tools and assembly drawings.",
    stack: ["Mechanical design", "Fabrication"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Pine Script", "English", "Hindi", "Spanish (limited)"] },
  { group: "Engineering software", items: ["PAM (Plant Asset Manager)", "COMOS", "Navisworks", "BIM", "Ansys Workbench"] },
  { group: "Tools & libraries", items: ["TensorFlow", "OpenCV", "TradingView", "Data analytics", "FEA", "Statistics"] },
  { group: "Platforms", items: ["Meta Ads", "Google Ads", "Airbnb", "Booking.com", "Agoda", "MakeMyTrip"] },
];

export const spokenLanguages = ["English", "Hindi", "Spanish (limited)"];

export const education = [
  {
    school: "Thapar Institute of Engineering & Technology",
    degree: "B.Tech, Mechanical Engineering",
    detail: "CGPA 8.01",
    period: "2021 – 2025",
    location: "Patiala, Punjab",
  },
  {
    school: "Wynberg-Allen School",
    degree: "ISC · Physics, Chemistry, Mathematics",
    period: "2019 – 2021",
    location: "Mussoorie, Uttarakhand",
  },
  {
    school: "Sherwood College",
    degree: "ICSE",
    period: "2011 – 2019",
    location: "Nainital, Uttarakhand",
  },
];

export const certifications = [
  { name: "NCC “C” Certificate", issuer: "National Cadet Corps · Air Wing" },
  { name: "Go-Kart Design Challenge (EV Category)", issuer: "ISNEE Motorsports" },
  { name: "The Complete Data Analyst Bootcamp", issuer: "Udemy" },
  { name: "Investment Banking: Financial Analysis & Valuation", issuer: "" },
  { name: "Optimize Ads with Google Ads & Quality Scores", issuer: "" },
  { name: "Travel Agency Operations", issuer: "" },
  { name: "International Award for Young People", issuer: "" },
];
