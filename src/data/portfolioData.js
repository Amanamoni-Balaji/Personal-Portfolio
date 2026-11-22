export const portfolioData = {
  personal: {
    name: "Amanamoni Balaji",
    cleanWordmark: "Amanamoni Balaji",
    avatar: "/assets/profile.jpg",
    avatarWebp: "/assets/profile.webp",
    headline: "AI/ML | Data Analytics | Full Stack Development",
    subHeadline: "Information Technology Undergrad @ Matrusri Engineering College (CGPA: 9.6)",
    positioning:
      "Information Technology undergraduate with a 9.6 CGPA and hands-on experience in AI/ML, Data Analytics, and Full Stack Development. Experienced in building AI-powered applications using Python, Django, React.js, SQL, machine learning, RAG, and data analytics tools. Strong problem-solving skills with experience developing solutions across agriculture, software incident management, and academic scheduling.",
    heroIntro:
      "Building intelligent applications, turning data into actionable insights, and engineering modern full-stack web solutions.",
    aboutBio:
      "I am an Information Technology undergraduate at Matrusri Engineering College, Hyderabad, maintaining an exceptional 9.6/10 CGPA. I specialize in developing AI-powered systems, data-driven analytical pipelines, and scalable web architectures. My engineering work spans smart agricultural advisory systems, incident response agents with persistent memory, institutional scheduling optimizers, and full-stack web applications.",
    email: "amanamonibalaji1828@gmail.com",
    phone: "+91 7981591655",
    github: "https://github.com/Amanamoni-Balaji",
    linkedin: "https://www.linkedin.com/in/amanamoni-balaji",
    location: "Hyderabad, Telangana, India",
    resumeUrl: "/Amanamoni_Balaji_Resume.pdf",
    availability: "Available for Internships & High-Impact Engineering Roles",
    education: {
      college: "Matrusri Engineering College, Hyderabad",
      degree: "Bachelor of Engineering (Information Technology)",
      period: "2023 – 2027",
      cgpa: "9.6 / 10",
      status: "Currently Pursuing (3rd Year)",
      highlights: [
        "Consistent academic excellence with 9.6 CGPA",
        "Runner-Up at Datanyx 2025 Datathon (AgroTech Track)",
        "Active student member in Tech Tycoons Club"
      ]
    },
    academicHistory: [
      {
        institution: "Matrusri Engineering College, Hyderabad",
        degree: "Bachelor of Engineering (Information Technology)",
        period: "2023 – 2027",
        score: "CGPA: 9.6 / 10",
        location: "Hyderabad, Telangana",
        badge: "Current",
        details: "Core focus on Data Structures & Algorithms, Object-Oriented Programming, AI/ML, Database Systems, and Full Stack Web Architectures."
      },
      {
        institution: "Narayana Junior College, Hyderabad",
        degree: "Intermediate (MPC)",
        period: "2021 – 2023",
        score: "Percentage: 98.2%",
        location: "Hyderabad, Telangana",
        badge: "Distinction",
        details: "Rigorous analytical grounding in Mathematics, Physics, and Chemistry, graduating with a 98.2% aggregate."
      },
      {
        institution: "Gowthami High School, Achampet",
        degree: "SSC (Class X)",
        period: "Completed",
        score: "GPA: 10.0 / 10",
        location: "Achampet, Telangana",
        badge: "Perfect Score",
        details: "Graduated with a perfect 10.0 GPA across all academic disciplines, demonstrating strong quantitative aptitude."
      }
    ]
  },

  skills: [
    {
      category: "Programming",
      description: "Core algorithmic and software development languages",
      items: [
        { name: "Python", context: "Primary language for AI/ML, Django & data processing", level: "Primary" },
        { name: "C", context: "Foundational systems programming and memory concepts", level: "Core" },
        { name: "Java", context: "Object-oriented software design & academic computing", level: "Core" },
        { name: "SQL", context: "Relational queries, aggregations, joins & database schemas", level: "Database" }
      ]
    },
    {
      category: "Core Fundamentals",
      description: "Theoretical computer science & computational reasoning",
      items: [
        { name: "Data Structures & Algorithms", context: "Problem-solving, asymptotic efficiency & algorithmic design", level: "Core" },
        { name: "Object-Oriented Programming", context: "Encapsulation, inheritance, modularity & design patterns", level: "Core" }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "Neural architectures, predictive intelligence & generative agents",
      items: [
        { name: "Artificial Intelligence", context: "Intelligent search, heuristics & advisory systems", level: "AI" },
        { name: "Machine Learning", context: "Supervised classification, regression, clustering & validation", level: "Core ML" },
        { name: "CNN (Convolutional Neural Networks)", context: "Computer vision image classification for crop leaf pathologies", level: "Vision" },
        { name: "RAG (Retrieval-Augmented Generation)", context: "Persistent memory retrieval & context injection for incident triage", level: "GenAI" }
      ]
    },
    {
      category: "Web Development",
      description: "Full-stack web application frameworks and responsive UI",
      items: [
        { name: "Django", context: "MVC framework, ORM, REST endpoints & user authentication", level: "Backend" },
        { name: "React.js", context: "Component architecture, SPA routing, state management & hooks", level: "Frontend" },
        { name: "Python Full Stack Development", context: "End-to-end integration of Django backends with React interfaces", level: "Full Stack" }
      ]
    },
    {
      category: "Data Analytics",
      description: "Statistical inference, data exploration & business insights",
      items: [
        { name: "Data Analysis", context: "Exploratory data analysis, cleaning, anomaly detection & modeling", level: "Analytics" },
        { name: "Microsoft Excel", context: "Formulas, pivot tables, statistical summaries & analytical dashboards", level: "Analytics" }
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Developer tooling, database engines & collaborative VCS",
      items: [
        { name: "Git", context: "Version control, branching workflows & commit hygiene", level: "VCS" },
        { name: "GitHub", context: "Code hosting, collaboration, repository management", level: "Platform" },
        { name: "SQLite", context: "Relational database engine for web backends & local services", level: "Storage" }
      ]
    }
  ],

  projects: [
    {
      id: "krishiai",
      title: "KrishiAI – AI-Powered Smart Advisory for Farmers",
      shortTitle: "KrishiAI",
      subtitle: "AI-Powered Smart Advisory for Farmers",
      category: "AI & Predictive Analytics",
      tagline: "Intelligent agriculture solution leveraging AI and data analytics to support farm decision-making.",
      overview:
        "Developed an intelligent agriculture solution leveraging AI and data analytics to support farm decision-making. Integrated rainfall forecasting, soil-health insights, and crop advisory modules for improved planning. Applied machine learning techniques to generate recommendations that enhance productivity and reduce cultivation risks.",
      problem:
        "Farmers frequently face crop failure, unpredictable yields, and soil degradation due to erratic weather patterns and a lack of data-driven forecasting tools before planting season.",
      solution:
        "KrishiAI couples historical meteorological trends and soil nutrient profiles with machine learning models to forecast rainfall probabilities, evaluate soil viability, and deliver actionable crop cultivation advisories.",
      contribution:
        "Designed and implemented the core machine learning pipelines for rainfall forecasting and crop suitability scoring. Cleaned multi-year meteorological datasets, engineered seasonal features, and integrated model outputs into an interactive dashboard for farm advisory.",
      technologies: ["Python", "Machine Learning", "Data Analytics", "Pandas", "Scikit-Learn", "Weather APIs"],
      implementationDetails: [
        "Time-series and regression techniques to model rainfall probabilities across seasonal crop cycles.",
        "Soil condition evaluation combining NPK levels and pH balance against crop growth thresholds.",
        "Rule-assisted ML recommendation engine prioritizing drought resistance and yield stability.",
        "Intuitive visual reporting showing expected precipitation vs. specific crop water requirements."
      ],
      architectureSteps: [
        { step: "01", name: "Data Ingestion", detail: "Collect multi-year meteorological precipitation records & soil NPK nutrient profiles." },
        { step: "02", name: "Feature Engineering", detail: "Compute seasonal moisture indices, temperature variations, and moving averages." },
        { step: "03", name: "ML Forecasting", detail: "Trained regression models estimate precipitation probabilities across crop cycles." },
        { step: "04", name: "Agronomic Matching", detail: "Suitability classifiers score crop candidates based on water & soil nutrient compatibility." },
        { step: "05", name: "Advisory Delivery", detail: "Dashboard presents visual rainfall projections, risk levels, and planting calendar guidance." }
      ],
      results: [
        "Tested across regional rainfall and soil parameter datasets with consistent recommendation accuracy.",
        "Delivered verifiable decision support reducing planting uncertainty during erratic monsoons."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji",
      liveUrl: null,
      primaryImage: "/assets/krishiai/hero-image.png",
      gallery: [
        { src: "/assets/krishiai/hero-image.png", caption: "KrishiAI Agricultural Advisory Dashboard Overview" }
      ],
      featured: true,
      badge: "Featured AI Project"
    },
    {
      id: "travelmate",
      title: "TravelMate – Travel Booking & Destination Management System",
      shortTitle: "TravelMate",
      subtitle: "Travel Booking & Destination Management System",
      category: "Full Stack & Web Systems",
      tagline: "Django-based web application for destination exploration, package reservations, and itinerary management.",
      overview:
        "Engineered a Django-based web application for destination exploration and package reservations. Implemented booking management, itinerary tracking, and personalized user dashboards. Designed scalable backend workflows to ensure secure and efficient travel management.",
      problem:
        "Travelers often struggle with fragmented booking flows, lack of unified itinerary tracking, and clunky destination exploration interfaces when planning vacations.",
      solution:
        "TravelMate provides a centralized, secure web platform where users can discover travel packages, reserve accommodations, manage itineraries, and track booking statuses through a clean personalized dashboard.",
      contribution:
        "Architected the entire Django backend structure including models for destinations, bookings, and user profiles. Implemented REST API views, user authentication, and responsive frontend templates with dynamic search and booking management workflows.",
      technologies: ["Django", "Python", "SQLite", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      implementationDetails: [
        "Relational database schema modeling destinations, travel packages, bookings, and user authentication.",
        "Personalized user dashboard displaying active bookings, past trips, and status updates.",
        "Dynamic search and filtering interface for exploring destination packages by category and budget.",
        "Secure server-side validation and backend workflows preventing double-booking and ensuring data integrity."
      ],
      architectureSteps: [
        { step: "01", name: "Destination Discovery", detail: "Cataloging destinations with high-resolution imagery, pricing, and package details." },
        { step: "02", name: "User Authentication", detail: "Secure registration and session handling for personalized dashboards." },
        { step: "03", name: "Booking Engine", detail: "Handles reservations, date validations, and availability checks." },
        { step: "04", name: "Database Operations", detail: "SQLite relational storage with ORM modeling and transactional integrity." },
        { step: "05", name: "User Dashboard", detail: "Real-time reservation summary, itinerary schedule, and booking cancellation controls." }
      ],
      results: [
        "Delivered end-to-end travel booking platform with responsive dashboards and secure CRUD operations.",
        "Seamless performance supporting destination browsing, search filtering, and reservation management."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji",
      liveUrl: null,
      primaryImage: "/assets/travelmate/Screenshot_2026-05-30_151658.png",
      gallery: [
        { src: "/assets/travelmate/Screenshot_2026-05-30_151658.png", caption: "TravelMate: Destination Exploration & Curated Tour Packages" },
        { src: "/assets/travelmate/Screenshot_2026-05-30_195004.png", caption: "TravelMate: Package Booking Interface & Travel Details" },
        { src: "/assets/travelmate/Screenshot_2026-05-30_200040.png", caption: "TravelMate: Personalized User Dashboard & Booking Management" }
      ],
      featured: true,
      badge: "Django Full Stack"
    },
    {
      id: "time-trackers",
      title: "TimeTrackers – Smart Classroom & Timetable Scheduler (SIH)",
      shortTitle: "TimeTrackers",
      subtitle: "Smart Classroom & Timetable Scheduler (SIH)",
      category: "Optimization & Full Stack",
      tagline: "Automated institutional scheduling solution eliminating timetable conflicts and optimizing academic resources.",
      overview:
        "Contributed to frontend and backend development of a Smart Classroom solution with an automated timetable scheduler to improve academic planning and resource utilization. Implemented scheduling logic to minimize timetable conflicts and enable efficient allocation of classrooms and faculty. Developed features to streamline timetable management and improve coordination of academic resources.",
      problem:
        "Academic institutions lose weeks manually creating semester timetables, frequently encountering faculty double-booking, room capacity mismatches, and irregular lecture distributions.",
      solution:
        "TimeTrackers provides an algorithmic academic scheduling engine that processes teacher constraints, classroom sizes, and batch credits to generate 100% conflict-free institutional timetables.",
      contribution:
        "Designed original UI wireframes and system architecture notes. Developed key frontend interfaces using React, built the interactive timetable grid view, and contributed to constraint modeling for faculty-room matching for the Smart India Hackathon submission.",
      technologies: ["React.js", "Python", "Optimization Algorithms", "Tailwind CSS", "JavaScript"],
      implementationDetails: [
        "Multi-constraint scheduling logic considering teacher availability periods, subject credit hours, and classroom physical capacities.",
        "Role-based authentication architecture with dedicated views for Administrators, Faculty, and Students.",
        "Interactive schedule visualizer allowing weekly timetable inspection by class, faculty, or room number.",
        "Conflict detection engine highlighting potential schedule clashes before timetable commitment."
      ],
      architectureSteps: [
        { step: "01", name: "Constraints Modeling", detail: "Inputs faculty slot availability, subject hours, room seating sizes, and cohort requirements." },
        { step: "02", name: "Clash Matrix", detail: "Maps overlapping professor allocations and resource bottlenecks before assignment." },
        { step: "03", name: "Constraint Satisfaction", detail: "Optimization algorithms solve allocation graph to eliminate timetable clashes." },
        { step: "04", name: "Schedule Visualizer", detail: "Builds responsive matrix views filtered by Department, Batch, Semester, or Faculty." },
        { step: "05", name: "Export & Access", detail: "Multi-role access (Admin/Faculty/Student) with instant timetable verification and export." }
      ],
      results: [
        "Project contributed for the Smart India Hackathon (SIH) internal and national evaluation.",
        "Demonstrated automated clash-free schedule generation across multi-department academic programs."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji",
      liveUrl: null,
      primaryImage: "/assets/smartclassroom/Screenshot 2025-09-24 184559.png",
      gallery: [
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184559.png", caption: "TimeTrackers: Role Selection & Academic Portal Login" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184644.png", caption: "Institution Setup: Academic Year & Department Configuration" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184702.png", caption: "Faculty Constraints & Teaching Availability Matrix" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184805.png", caption: "Classroom Capacity & Laboratory Resource Management" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184833.png", caption: "Automated Timetable Generation Engine & Visual Grid" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 185019.png", caption: "Weekly Class Schedule View with Faculty Allocation" },
        { src: "/assets/wireframes/WhatsApp Image 2025-09-18 at 20.35.18_2e718084.jpg", caption: "Original Engineering Wireframe Sketch: System Architecture & Login Flow" },
        { src: "/assets/wireframes/WhatsApp Image 2025-09-18 at 20.35.19_041c100c.jpg", caption: "Original Engineering Wireframe Sketch: Teacher Slot Constraints" }
      ],
      featured: true,
      badge: "Smart India Hackathon"
    },
    {
      id: "agro-guardian",
      title: "Agro_Guardian – AI-Based Crop Recommendation and Disease Prediction",
      shortTitle: "Agro_Guardian",
      subtitle: "AI-Based Crop Recommendation and Disease Prediction",
      category: "Deep Learning & AgriTech",
      tagline: "AI-based system for crop recommendation and disease prediction using CNN and soil analytics.",
      overview:
        "Developed an AI-based system for crop recommendation and disease prediction. Recommends suitable crops based on soil and weather conditions. Uses CNN to detect potato leaf diseases from images.",
      problem:
        "Foliage diseases like early and late potato blight destroy harvests if unaddressed, while improper crop selection without soil nutrient awareness exhausts arable farmlands.",
      solution:
        "Agro_Guardian combines computer vision CNN models for rapid leaf disease classification with an agronomic soil chemistry recommendation engine that pairs soil NPK/pH metrics with ideal crops.",
      contribution:
        "Engineered the responsive frontend in React.js, structured the Django backend to serve REST endpoints for computer vision inference, integrated the trained deep learning model, and authored the disease mitigation advisory workflows.",
      technologies: ["React.js", "Django", "Python", "Machine Learning", "CNN", "TensorFlow / Keras", "REST APIs"],
      implementationDetails: [
        "Convolutional Neural Network (CNN) trained on curated leaf pathology datasets to identify healthy leaves, early blight, and late blight.",
        "Django REST Framework backend handling image uploads, preprocessing, model inference, and confidence score calculation.",
        "Crop recommendation module matching soil nutrient matrices against agronomic optimal ranges.",
        "Modular React frontend providing instant visual feedback, disease severity indicators, and curative advisory."
      ],
      architectureSteps: [
        { step: "01", name: "Field Data Capture", detail: "Farmer inputs soil chemistry metrics (N, P, K, pH) or uploads potato foliage photographs." },
        { step: "02", name: "Image Preprocessing", detail: "Normalizes RGB channels, resizes inputs to standard 224x224, and applies noise filters." },
        { step: "03", name: "CNN Classification", detail: "Deep learning convolutional model calculates confidence probabilities for leaf pathologies." },
        { step: "04", name: "Soil Chemistry Matcher", detail: "Evaluates soil nutrient parameters against botanical tolerance thresholds." },
        { step: "05", name: "Actionable Guidance", detail: "Delivers disease severity diagnosis, organic/chemical treatment steps, and crop rotation plans." }
      ],
      results: [
        "Accurate classification of potato leaf pathologies with high confidence thresholds.",
        "Seamless end-to-end integration: leaf upload to diagnosis in under 2 seconds on standard hardware."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji",
      liveUrl: null,
      primaryImage: "/assets/agroguardian/crop-disease.png",
      gallery: [
        { src: "/assets/agroguardian/crop-disease.png", caption: "Deep Learning Leaf Disease Classification & Diagnostic View" },
        { src: "/assets/agroguardian/crop-recommend.png", caption: "Soil Nutrient Matrix & Crop Recommendation Interface" },
        { src: "/assets/agroguardian/hero-farm.jpg", caption: "Agro_Guardian Field Platform Overview" }
      ],
      featured: true,
      badge: "Deep Learning & CNN"
    },
    {
      id: "recallops-ai",
      title: "RecallOps AI – Hindsight-Powered Incident Response & Root Cause Investigation Agent",
      shortTitle: "RecallOps AI",
      subtitle: "Hindsight-Powered Incident Response & Root Cause Investigation Agent",
      category: "Generative AI & SRE Operations",
      tagline: "AI-powered SRE agent utilizing RAG and persistent memory to investigate incidents and identify root causes.",
      overview:
        "Developed an AI-powered SRE agent to investigate software incidents, analyze logs and symptoms, and identify potential root causes. Implemented RAG with persistent memory to retrieve relevant past incidents and resolutions, enabling faster and context-aware investigations. Built a closed-loop learning workflow that stores confirmed resolutions and uses them to improve recommendations for future incidents.",
      problem:
        "When software infrastructure fails, site reliability engineers waste critical minutes querying logs and searching past incident post-mortems under high-stress conditions.",
      solution:
        "RecallOps AI indexes prior outage reports, error traces, and remediation actions into a persistent vector memory store. When a new alert occurs, the assistant retrieves the closest past failure patterns and synthesizes step-by-step diagnostic recommendations using LLMs.",
      contribution:
        "Contributed to project architecture during HackWithHyderabad 3.0: structured incident similarity search pipelines, designed the investigation dashboard, and evaluated LLM response quality for technical post-mortem analysis.",
      technologies: ["React.js", "FastAPI", "Python", "LLMs", "RAG", "Persistent Memory", "Vector Search"],
      implementationDetails: [
        "Persistent memory pipeline indexing past incident post-mortems with metadata tagging.",
        "Semantic vector similarity search linking current alerts to historical troubleshooting cases.",
        "Evidence-grounded prompt templates minimizing model hallucination during incident triage.",
        "Clean terminal-inspired incident console with diagnostic workflow guidance."
      ],
      architectureSteps: [
        { step: "01", name: "Outage Ingestion", detail: "Captures error logs, exception traces, and monitoring alerts from production environments." },
        { step: "02", name: "Vector Indexing", detail: "Embeds post-mortems and historical runbooks into persistent vector embeddings." },
        { step: "03", name: "Semantic Retrieval", detail: "Semantic similarity retrieval identifies the closest historical incidents with resolution notes." },
        { step: "04", name: "RAG Synthesis", detail: "Grounds foundation models in verified post-mortem documentation to suggest diagnostic actions." },
        { step: "05", name: "Closed-Loop Learning", detail: "Stores confirmed resolutions back into persistent memory to enhance future recommendations." }
      ],
      results: [
        "Competed in HackWithHyderabad 3.0 as part of team and demonstrated working incident response agent prototype.",
        "Showcased significant reduction in incident investigation time by instantly surfacing past resolutions."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji/RecallOps-AI",
      liveUrl: null,
      primaryImage: "/assets/recallops/hero.png",
      gallery: [
        { src: "/assets/recallops/hero.png", caption: "RecallOps AI: SRE Incident Investigation & Persistent Memory Copilot" }
      ],
      featured: true,
      badge: "HackWithHyderabad 3.0"
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      shortTitle: "Personal Portfolio",
      subtitle: "Personal Portfolio Website",
      category: "Frontend & Creative Engineering",
      tagline: "Responsive React.js portfolio platform presenting projects, technical expertise, certifications, and achievements.",
      overview:
        "Built a responsive React.js portfolio platform to present projects, technical expertise, certifications, and achievements. Implemented reusable components, intuitive navigation, and mobile-first design principles. Optimized performance and accessibility for a seamless user experience across devices.",
      problem:
        "Recruiters need an authentic, fast-loading, visually distinctive showcase of a candidate's verified capabilities without generic AI clutter.",
      solution:
        "A dark editorial portfolio combining GitHub's developer clarity, Kaggle's analytical rigor, and Notion's typography, equipped with interactive 3D cards, project carousels, and client-side routing.",
      contribution:
        "Single-handedly designed and engineered the complete application architecture from scratch using React, Vite, Tailwind CSS, and Framer Motion.",
      technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
      implementationDetails: [
        "Client-side routing across multi-page architecture with smooth route transitions.",
        "Reusable component architecture separating presentation from centralized portfolio data.",
        "Responsive navigation drawer and custom mobile layouts without horizontal overflow.",
        "Accessible contrast, semantic HTML, and zero console error verification."
      ],
      architectureSteps: [
        { step: "01", name: "Design System", detail: "Created custom dark editorial palette with obsidian, charcoal, and restrained blue accents." },
        { step: "02", name: "Data Architecture", detail: "Centralized verified resume credentials into structured, typed data objects." },
        { step: "03", name: "Interactive UI", detail: "Engineered 3D tilt cards, screenshot carousels, and credential inspection modals." },
        { step: "04", name: "Motion & Accessibility", detail: "Implemented spring physics respecting prefers-reduced-motion standards." },
        { step: "05", name: "Production Optimization", detail: "Vite bundling yielding sub-5s build times with zero runtime exceptions." }
      ],
      results: [
        "100% error-free execution verified in headless Chromium testing.",
        "Optimized asset delivery and responsive UX across mobile, tablet, and desktop viewports."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji",
      liveUrl: null,
      primaryImage: "/assets/portfolio/preview.svg",
      gallery: [
        { src: "/assets/portfolio/preview.svg", caption: "Personal Portfolio: Dark Editorial Architecture & Interactive React UI" }
      ],
      featured: false,
      badge: "React.js Production"
    }
  ],

  internships: [
    {
      id: "infotact",
      role: "Data Analytics Intern",
      company: "Infotact Solutions",
      duration: "Ongoing",
      status: "Ongoing",
      type: "Internship",
      description:
        "Conducting in-depth exploratory data analysis, data cleaning, and statistical modeling. Creating comprehensive data visualizations and synthesizing actionable insights to support business intelligence decisions.",
      responsibilities: [
        "Performing exploratory data analysis (EDA) and data cleansing on heterogeneous datasets.",
        "Designing intuitive visual charts and reports to communicate statistical trends.",
        "Leveraging Python and Microsoft Excel for analytical transformations and metric evaluations.",
        "Collaborating with team members to translate analytical observations into clear recommendations."
      ],
      technologies: ["Data Analytics", "Python", "Data Analysis", "Microsoft Excel"],
      certificatePdf: "/certificates/Infotact_Data_Analytics_Offer_Letter.pdf",
      documentType: "Offer Letter & Appointment Documentation",
      credentialId: "48c945094211"
    },
    {
      id: "blackbucks",
      role: "AI Machine Learning Engineer Intern",
      company: "Blackbucks Education Pvt. Ltd.",
      duration: "May 2026 – June 2026",
      status: "Scheduled",
      type: "Internship",
      description:
        "Scheduled engineering internship covering end-to-end AI/ML modeling, algorithm evaluation, and deployment of predictive intelligence modules.",
      responsibilities: [
        "Hands-on curriculum covering end-to-end machine learning model lifecycles.",
        "Deep dive into predictive modeling, neural architectures, and model deployment pipelines.",
        "Collaborative project execution under industry mentor guidance."
      ],
      technologies: ["AI/ML", "Python", "Machine Learning", "Model Deployment"],
      certificatePdf: "/certificates/Blackbucks_AI_ML_Internship_Certificate.pdf",
      documentType: "Certificate of Completion",
      credentialId: "BBEDINT2026ST05365"
    },
    {
      id: "innovation-hacks",
      role: "Full Stack Development Intern",
      company: "Innovation Hacks",
      duration: "Completed",
      status: "Completed",
      type: "Internship",
      description:
        "Contributed to front-end and back-end web application development. Engineered responsive user interfaces, integrated RESTful APIs, and maintained clean, modular component structures.",
      responsibilities: [
        "Developed responsive user interface components using React.js and modern CSS.",
        "Connected frontend modules with backend REST API endpoints for dynamic data delivery.",
        "Ensured cross-browser compatibility and optimized rendering performance across viewports.",
        "Followed Git version control best practices and participated in iterative code reviews."
      ],
      technologies: ["React.js", "Django", "JavaScript", "HTML/CSS", "REST APIs"],
      certificatePdf: "/certificates/Innovation_Hacks_Full_Stack_Certificate.pdf",
      documentType: "Certificate of Completion",
      credentialId: "IH-FS-2026-0354"
    },
    {
      id: "blend-vidya",
      role: "Artificial Intelligence Intern",
      company: "Blend Vidya",
      duration: "Completed",
      status: "Completed",
      type: "Internship",
      description:
        "Focused on artificial intelligence and machine learning pipelines. Explored model training workflows, feature engineering, and hands-on implementation of AI algorithms.",
      responsibilities: [
        "Studied and implemented fundamental machine learning pipelines and model evaluation strategies.",
        "Performed feature engineering, dataset splitting, and hyperparameter tuning in Google Colab.",
        "Assisted in benchmarking algorithm performance using precision, recall, and F1-score metrics.",
        "Researched practical applications of computer vision and natural language processing concepts."
      ],
      technologies: ["Artificial Intelligence", "Machine Learning", "Python", "Feature Engineering"],
      certificatePdf: "/certificates/Blend_Vidya_AI_Training_Certificate.pdf",
      documentType: "Certificate of Training Completion"
    }
  ],

  internshipCertificates: [
    {
      id: "eduskills-google-aiml",
      title: "Certificate of Virtual Internship – AI-ML",
      role: "AI-ML Virtual Intern",
      issuer: "EduSkills & AICTE (Supported by Google for Developers)",
      organization: "EduSkills & AICTE, Ministry of Education",
      partner: "Supported by Google for Developers (India Edu Program)",
      duration: "January – March 2026 (10-Weeks)",
      issueDate: "March 2026",
      status: "Verified Credential",
      badge: "Grade O (Outstanding)",
      grade: "Grade O (Outstanding)",
      credentialId: "4044b75a93618eda0394",
      studentId: "STU69180bd1d95871763183569",
      category: "AI & Machine Learning",
      description: "Successfully completed 10-weeks AI-ML Virtual Internship supported by Google for Developers under the India Edu Program. Evaluated by AICTE Ministry of Education and EduSkills leadership with an Outstanding Grade (O).",
      skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Google for Developers", "Model Evaluation"],
      pdfUrl: "/certificates/EduSkills_Google_AI_ML_Virtual_Internship.pdf",
      pages: 1,
      accentColor: "from-blue-600 to-indigo-600",
      issuerLogoText: "Google | EduSkills"
    },
    {
      id: "blackbucks-aiml",
      title: "Certificate of Completion – AI Machine Learning Engineer",
      role: "AI Machine Learning Engineer Intern",
      issuer: "Blackbucks Education Pvt. Ltd.",
      organization: "Blackbucks Education Pvt. Ltd.",
      partner: "Trusted by N.E.A.T, AICTE",
      duration: "1 May 2026 to 15 June 2026 (6 Weeks)",
      issueDate: "22 June 2026",
      status: "Verified Credential",
      badge: "NEAT Trusted",
      grade: "Completed with Distinction",
      credentialId: "BBEDINT2026ST05365",
      studentId: "1608-23-737-069",
      category: "AI & Machine Learning",
      description: "Successfully completed 6-Week Short-Term Internship in AI Machine Learning Engineer. Participated in structured training sessions, practical assignments, and project-based learning activities aligned with current industry standards.",
      skills: ["Machine Learning", "AI Engineering", "Deep Learning", "Supervised Modeling", "Model Optimization"],
      pdfUrl: "/certificates/Blackbucks_AI_ML_Internship_Certificate.pdf",
      pages: 1,
      accentColor: "from-emerald-600 to-teal-600",
      issuerLogoText: "Blackbucks | NEAT"
    },
    {
      id: "innovation-hacks-fullstack",
      title: "Certificate of Completion – Full Stack Development",
      role: "Full Stack Development Intern",
      issuer: "Innovation Hacks",
      organization: "Innovation Hacks",
      partner: "Code Locally. Impact Globally.",
      duration: "Aug 22, 2026 to Sep 22, 2026",
      issueDate: "September 2026",
      status: "Verified Credential",
      badge: "Verified Completion",
      grade: "Full Stack Certified",
      credentialId: "IH-FS-2026-0354",
      category: "Web Development",
      description: "Successfully completed intensive Full Stack Development Internship. Built responsive web applications, interactive component architectures, REST API endpoints, and version-controlled Git workflows.",
      skills: ["React.js", "Django", "JavaScript", "HTML5/CSS3", "REST APIs", "Git Workflows"],
      pdfUrl: "/certificates/Innovation_Hacks_Full_Stack_Certificate.pdf",
      pages: 1,
      accentColor: "from-sky-600 to-cyan-600",
      issuerLogoText: "Innovation Hacks"
    },
    {
      id: "blend-vidya-ai",
      title: "Certificate of Training Completion – Artificial Intelligence",
      role: "Artificial Intelligence Intern",
      issuer: "Blend Vidya EdTech",
      organization: "Blend Vidya EdTech",
      partner: "ISO 9001:2015 & MSME Certified",
      duration: "05/01/2025 to 05/03/2025 (2 Months)",
      issueDate: "March 2025",
      status: "Verified Credential",
      badge: "ISO 9001:2015",
      grade: "Training Completed",
      category: "AI & Machine Learning",
      description: "Completed two months comprehensive training and practical internship on Artificial Intelligence, with recognized dedication, hard work, and valuable contributions during the training curriculum.",
      skills: ["Artificial Intelligence", "Model Pipelines", "Data Preprocessing", "Feature Engineering"],
      pdfUrl: "/certificates/Blend_Vidya_AI_Training_Certificate.pdf",
      pages: 1,
      accentColor: "from-amber-600 to-orange-600",
      issuerLogoText: "Blend Vidya"
    },
    {
      id: "infotact-data-analytics",
      title: "Internship Offer Letter & Appointment – Data Analytics",
      role: "Associate L1 (Data Analytics)",
      issuer: "Infotact Solutions",
      organization: "Infotact Solutions",
      partner: "ISO 9001:2015 Approved Seal",
      duration: "05/10/2026 to 05/01/2027 (Ongoing)",
      issueDate: "2 October 2026",
      status: "Active Appointment",
      badge: "Associate L1 &bull; Active",
      grade: "Associate L1",
      credentialId: "48c945094211",
      category: "Data Analytics",
      description: "Official appointment and offer documentation as Associate L1 in Data Analytics at Infotact Solutions. Comprehensive 2-page document outlining role responsibilities, EDA workflows, dashboard engineering, performance milestones, and terms.",
      skills: ["Data Analytics", "Exploratory Data Analysis", "Python", "SQL", "Microsoft Excel", "Business Dashboards"],
      pdfUrl: "/certificates/Infotact_Data_Analytics_Offer_Letter.pdf",
      pages: 2,
      accentColor: "from-violet-600 to-purple-600",
      issuerLogoText: "Infotact Solutions"
    }
  ],

  professionalCertifications: [
    {
      id: "oracle-database",
      title: "Database Foundations",
      issuer: "Oracle Academy",
      organization: "Oracle Academy",
      date: "November 24, 2024",
      year: "2024",
      status: "Verified Credential",
      badge: "Oracle Certified",
      credentialId: "1608-23-737-069",
      category: "Database & Cloud",
      description: "Satisfactory completion of all coursework in Database Foundations presented by Oracle Academy, covering relational database architecture, entity-relationship modeling, normalization, and SQL.",
      skills: ["SQL", "Relational Database Design", "ER Modeling", "Oracle Architecture"],
      pdfUrl: "/certificates/Oracle_Database_Foundations.pdf",
      issuerLogoText: "Oracle Academy"
    },
    {
      id: "iit-bombay-python-ml",
      title: "Python for Machine Learning Training",
      issuer: "IIT Bombay & EduPyramids, SINE",
      organization: "Spoken Tutorial Project, IIT Bombay",
      date: "April 22, 2026",
      year: "2026",
      status: "Verified Credential",
      badge: "Score: 94.00%",
      credentialId: "4010764TZK",
      category: "AI & Machine Learning",
      description: "Successfully completed remote examination on Python for Machine Learning organized at Matrusri Engineering College with course material provided by EduPyramids, SINE, IIT Bombay.",
      skills: ["Python", "Machine Learning", "Model Training", "Supervised Algorithms"],
      pdfUrl: "/certificates/IIT_Bombay_Python_Machine_Learning.pdf",
      issuerLogoText: "IIT Bombay | SINE"
    },
    {
      id: "iit-bombay-java",
      title: "Java Training",
      issuer: "IIT Bombay & EduPyramids, SINE",
      organization: "Spoken Tutorial Project, IIT Bombay",
      date: "April 22, 2025",
      year: "2025",
      status: "Verified Credential",
      badge: "Score: 82.50%",
      credentialId: "401076414H",
      category: "Programming & Software",
      description: "Successfully passed remote examination from SINE, IIT Bombay, for Java training organized at Matrusri Engineering College (4 Credits, Score: 82.50%).",
      skills: ["Java", "Object-Oriented Programming", "Algorithmic Logic", "Data Structures"],
      pdfUrl: "/certificates/IIT_Bombay_Java_Training.pdf",
      issuerLogoText: "IIT Bombay | SINE"
    },
    {
      id: "iit-bombay-python-343",
      title: "Python 3.4.3 Training",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      organization: "IIT Bombay",
      date: "December 4, 2024",
      year: "2024",
      status: "Verified Credential",
      badge: "Score: 60.00%",
      credentialId: "4010764YGC",
      category: "Programming & Software",
      description: "Completed Python 3.4.3 test organized at Matrusri Engineering College with course material provided by Spoken Tutorial Project, IIT Bombay (4 Credits).",
      skills: ["Python 3", "Control Flow", "Functions", "Data Types"],
      pdfUrl: "/certificates/IIT_Bombay_Python_3_4_3.pdf",
      issuerLogoText: "IIT Bombay"
    },
    {
      id: "scrs-machine-learning",
      title: "Machine Learning using Python Programming",
      issuer: "Soft Computing Research Society (SCRS) Students' Chapter",
      organization: "Soft Computing Research Society",
      date: "December 18, 2024 to January 14, 2025",
      year: "2024–2025",
      status: "Verified Credential",
      badge: "SCRSCC088",
      credentialId: "SCRSCC088",
      category: "AI & Machine Learning",
      description: "Successfully completed intensive Certificate Course on Machine Learning using Python Programming conducted by the Soft Computing Research Society Students' Chapter at Matrusri Engineering College.",
      skills: ["Machine Learning", "Python Programming", "Model Validation", "Soft Computing"],
      pdfUrl: "/certificates/SCRS_Machine_Learning_Python.pdf",
      issuerLogoText: "SCRS"
    },
    {
      id: "hp-ai-beginners",
      title: "AI for Beginners",
      issuer: "HP LIFE | HP Foundation",
      organization: "HP Foundation",
      date: "August 16, 2026",
      year: "2026",
      status: "Verified Credential",
      badge: "HP Foundation",
      credentialId: "b9020f7c-b596-44cf-aed5-2d397f0c71b5",
      category: "AI & Machine Learning",
      description: "Gained core understanding of artificial intelligence, key concepts and applications, data importance in AI, business use-cases, and ethical implications.",
      skills: ["Artificial Intelligence", "AI Applications", "Data Foundations", "Ethical AI"],
      pdfUrl: "/certificates/HPLIFE_AI_for_Beginners.pdf",
      issuerLogoText: "HP LIFE"
    },
    {
      id: "hp-ai-business",
      title: "AI for Business Professionals",
      issuer: "HP LIFE | HP Foundation",
      organization: "HP Foundation",
      date: "August 16, 2026",
      year: "2026",
      status: "Verified Credential",
      badge: "HP Foundation",
      credentialId: "9407b380-a430-4587-ba68-aa557e001e8e",
      category: "AI & Machine Learning",
      description: "Explored AI's role in modern enterprise, standalone vs integrated AI tools, effective prompt crafting techniques, ethical use, and workplace productivity.",
      skills: ["Prompt Engineering", "Business AI", "Workflow Automation", "Professional Tech"],
      pdfUrl: "/certificates/HPLIFE_AI_for_Business_Professionals.pdf",
      issuerLogoText: "HP LIFE"
    },
    {
      id: "hp-data-science",
      title: "Data Science & Analytics",
      issuer: "HP LIFE | HP Foundation",
      organization: "HP Foundation",
      date: "August 16, 2026",
      year: "2026",
      status: "Verified Credential",
      badge: "HP Foundation",
      credentialId: "02751506-1725-4328-9ea0-355d7fba2b05",
      category: "Data Analytics",
      description: "Studied leading data science and analytics practices, methodologies, business value of data-driven approaches, and analytical competencies.",
      skills: ["Data Science", "Analytics Methodologies", "Business Insights", "Data Strategy"],
      pdfUrl: "/certificates/HPLIFE_Data_Science_and_Analytics.pdf",
      issuerLogoText: "HP LIFE"
    },
    {
      id: "hp-cybersecurity",
      title: "Introduction to Cybersecurity Awareness",
      issuer: "HP LIFE | HP Foundation",
      organization: "HP Foundation",
      date: "August 16, 2026",
      year: "2026",
      status: "Verified Credential",
      badge: "HP Foundation",
      credentialId: "cdbe2b1e-4082-42c4-9124-c30ade0a808f",
      category: "Cybersecurity & Systems",
      description: "Gained knowledge about common cybersecurity threats, vulnerability vectors, and foundational methodologies to secure digital data and information systems.",
      skills: ["Cybersecurity", "Threat Awareness", "Information Security", "Digital Safety"],
      pdfUrl: "/certificates/HPLIFE_Cybersecurity_Awareness.pdf",
      issuerLogoText: "HP LIFE"
    },
    {
      id: "iste-ramanujan-level1",
      title: "Srinivasa Ramanujan Mathematical Competitions 2024 – Level 1",
      issuer: "Indian Society for Technical Education (ISTE)",
      organization: "ISTE Tamilnadu Section",
      date: "19th & 20th October 2024",
      year: "2024",
      status: "National Competition",
      badge: "Chapter Level",
      category: "Mathematics & Honors",
      description: "Certificate of Participation in the National Level Srinivasa Ramanujan Mathematical Competitions Level 1 (Chapter Level) conducted by ISTE for Engineering College Students.",
      skills: ["Advanced Mathematics", "Quantitative Aptitude", "Mathematical Logic"],
      pdfUrl: "/certificates/ISTE_Ramanujan_Math_Competition_Level_1.pdf",
      issuerLogoText: "ISTE"
    },
    {
      id: "iste-ramanujan-level2",
      title: "Srinivasa Ramanujan Mathematical Competitions 2024 – Level 2 (State Level)",
      issuer: "Indian Society for Technical Education (ISTE)",
      organization: "ISTE Tamilnadu Section",
      date: "09th & 10th November 2024",
      year: "2024",
      status: "State Level Competition",
      badge: "State Level",
      category: "Mathematics & Honors",
      description: "Certificate of Participation in the National Level Srinivasa Ramanujan Mathematical Competitions Level 2 (State Level) conducted by ISTE for Engineering College Students.",
      skills: ["State Level Mathematics", "Analytical Reasoning", "Competitive Computing"],
      pdfUrl: "/certificates/ISTE_Ramanujan_Math_Competition_Level_2.pdf",
      issuerLogoText: "ISTE"
    },
    {
      id: "iei-membership",
      title: "Certificate of Membership",
      issuer: "The Institution of Engineers (India)",
      organization: "The Institution of Engineers (India) - Students' Chapter",
      date: "Valid upto 2027",
      year: "2024–2027",
      status: "Active Membership",
      badge: "IEI Member",
      credentialId: "500059/MECS/IT/00159",
      category: "Professional Memberships",
      description: "Certificate of Membership granted to Amanamoni Balaji representing Matrusri Engineering College Students' Chapter, valid through academic graduation in 2027.",
      skills: ["Professional Membership", "Engineering Community", "Technical Leadership"],
      pdfUrl: "/certificates/IEI_Certificate_of_Membership.pdf",
      issuerLogoText: "IEI India"
    },
    {
      id: "cisco-networking",
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      organization: "Cisco & Matrusri Engineering College",
      date: "10 Jun 2025",
      year: "2025",
      status: "Verified Credential",
      badge: "Cisco Certified",
      category: "Cybersecurity & Systems",
      description: "Offered by Matrusri Engineering College through the Cisco Networking Academy program. Fundamental networking concepts, IP addressing, subnetting, and TCP/IP protocol suite.",
      skills: ["Networking Basics", "TCP/IP Protocol", "Subnetting", "Routing & Switching"],
      pdfUrl: "/certificates/Cisco_Networking_Basics.pdf",
      issuerLogoText: "Cisco Academy"
    },
    {
      id: "cisco-python",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy / Python Institute",
      organization: "Cisco & OpenEDG Python Institute",
      date: "Certified",
      year: "2025",
      status: "Verified Credential",
      badge: "Python Institute",
      category: "Programming & Software",
      description: "Foundational Python programming covering data types, control flow, functions, modular architecture, and algorithmic problem-solving.",
      skills: ["Python", "Algorithmic Logic", "Data Structures", "Modular Programming"],
      pdfUrl: "/certificates/Python_Essentials_Cisco.pdf",
      issuerLogoText: "Cisco & Python Inst."
    },
    {
      id: "cisco-data-analytics",
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      organization: "Cisco Networking Academy",
      date: "Certified",
      year: "2025",
      status: "Verified Credential",
      badge: "Cisco Certified",
      category: "Data Analytics",
      description: "Essential data analysis methodologies, data lifecycle, exploratory analysis, statistical techniques, and analytical communication.",
      skills: ["Data Analytics", "Exploratory Data Analysis", "Data Lifecycle", "Statistical Reasoning"],
      pdfUrl: "/certificates/Data_Analytics_Essentials.pdf",
      issuerLogoText: "Cisco Academy"
    },
    {
      id: "tata-cybersecurity",
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Tata & Forage",
      organization: "Tata Group & Forage",
      date: "August 16, 2026",
      year: "2026",
      status: "Verified Credential",
      badge: "Tata Certified",
      credentialId: "6a818d7eba854243f456fda6",
      category: "Cybersecurity & Systems",
      description: "Completed practical job simulation in Cybersecurity Analysis with Tata and Forage. Covered identity and access management (IAM) fundamentals, IAM strategy assessment, custom IAM solution design, and enterprise platform integration.",
      skills: ["Identity & Access Management (IAM)", "IAM Strategy Assessment", "Custom IAM Solutions", "Platform Integration"],
      pdfUrl: "/certificates/Tata_Cybersecurity_Analyst_Job_Simulation.pdf",
      issuerLogoText: "Tata | Forage"
    },
    {
      id: "tata-data-visualisation",
      title: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "Tata & Forage",
      organization: "Tata Group & Forage",
      date: "August 16, 2026",
      year: "2026",
      status: "Verified Credential",
      badge: "Tata Certified",
      credentialId: "6a818880aa694bdf89ad70a2",
      category: "Data Analytics",
      description: "Completed practical job simulation in Data Visualisation with Tata and Forage. Mastered framing business scenarios, choosing optimal visualizations, creating effective executive dashboards, and communicating data-driven strategic insights.",
      skills: ["Data Visualisation", "Business Scenario Framing", "Executive Dashboards", "Data Storytelling"],
      pdfUrl: "/certificates/Tata_Data_Visualisation_Empowering_Business.pdf",
      issuerLogoText: "Tata | Forage"
    },
    {
      id: "tata-genai-analytics",
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata & Forage",
      organization: "Tata Group & Forage",
      date: "August 16, 2026",
      year: "2026",
      status: "Verified Credential",
      badge: "Tata Certified",
      credentialId: "6a818022aa694bdf89ac1031",
      category: "AI & Machine Learning",
      description: "Completed practical job simulation in GenAI Powered Data Analytics with Tata and Forage. Performed exploratory data analysis and risk profiling, predictive modeling for delinquency forecasting, executive data reporting, and AI-driven collections strategy implementation.",
      skills: ["Generative AI", "Exploratory Data Analysis", "Risk Profiling", "Predictive Delinquency Modeling", "AI Collections Strategy"],
      pdfUrl: "/certificates/Tata_GenAI_Powered_Data_Analytics.pdf",
      issuerLogoText: "Tata | Forage"
    }
  ],

  certifications: [
    {
      id: "oracle-database",
      title: "Database Foundations",
      issuer: "Oracle Academy",
      organization: "Oracle Academy",
      date: "November 24, 2024",
      status: "Verified Credential",
      badge: "Oracle Certified",
      credentialId: "1608-23-737-069",
      category: "Database & Cloud",
      description: "Coursework completion in Database Foundations covering relational database architecture, entity-relationship modeling, normalization, and SQL.",
      skills: ["SQL", "Relational Database Design", "ER Modeling", "Oracle Architecture"],
      pdfUrl: "/certificates/Oracle_Database_Foundations.pdf"
    },
    {
      id: "iit-bombay-python-ml",
      title: "Python for Machine Learning Training",
      issuer: "IIT Bombay & EduPyramids, SINE",
      organization: "Spoken Tutorial Project, IIT Bombay",
      date: "April 22, 2026",
      status: "Verified Credential",
      badge: "Score: 94.00%",
      credentialId: "4010764TZK",
      category: "AI & Machine Learning",
      description: "Python for Machine Learning training organized at Matrusri Engineering College with material from EduPyramids, SINE, IIT Bombay.",
      skills: ["Python", "Machine Learning", "Model Training", "Supervised Algorithms"],
      pdfUrl: "/certificates/IIT_Bombay_Python_Machine_Learning.pdf"
    },
    {
      id: "iit-bombay-java",
      title: "Java Training",
      issuer: "IIT Bombay & EduPyramids, SINE",
      organization: "Spoken Tutorial Project, IIT Bombay",
      date: "April 22, 2025",
      status: "Verified Credential",
      badge: "Score: 82.50%",
      credentialId: "401076414H",
      category: "Programming & Software",
      description: "Remote examination from SINE, IIT Bombay, for Java training organized at Matrusri Engineering College (4 Credits).",
      skills: ["Java", "Object-Oriented Programming", "Algorithmic Logic", "Data Structures"],
      pdfUrl: "/certificates/IIT_Bombay_Java_Training.pdf"
    },
    {
      id: "cisco-networking",
      title: "Networking Basics",
      issuer: "Cisco",
      organization: "Cisco Networking Academy",
      date: "10 Jun 2025",
      status: "Verified Credential",
      badge: "Cisco Certified",
      category: "Cybersecurity & Systems",
      description: "Fundamental networking concepts, IP addressing, subnetting, TCP/IP protocol suite, Ethernet architecture, and network troubleshooting.",
      skills: ["Networking Basics", "TCP/IP Protocol", "Subnetting", "Routing & Switching"],
      pdfUrl: "/certificates/Cisco_Networking_Basics.pdf"
    },
    {
      id: "cisco-python",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy / Python Institute",
      organization: "Cisco & OpenEDG Python Institute",
      date: "Certified",
      status: "Verified Credential",
      badge: "Python Institute",
      category: "Programming & Software",
      description: "Foundational Python programming covering data types, control flow, functions, modular architecture, and algorithmic problem-solving.",
      skills: ["Python", "Algorithmic Logic", "Data Structures", "Modular Programming"],
      pdfUrl: "/certificates/Python_Essentials_Cisco.pdf"
    },
    {
      id: "cisco-data-analytics",
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      organization: "Cisco Networking Academy",
      date: "Certified",
      status: "Verified Credential",
      badge: "Cisco Certified",
      category: "Data Analytics",
      description: "Essential data analysis methodologies, data lifecycle, exploratory analysis, statistical techniques, and analytical communication.",
      skills: ["Data Analytics", "Exploratory Data Analysis", "Data Lifecycle", "Statistical Reasoning"],
      pdfUrl: "/certificates/Data_Analytics_Essentials.pdf"
    },
    {
      id: "tata-cybersecurity",
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Tata & Forage",
      organization: "Tata Group & Forage",
      date: "August 16, 2026",
      status: "Verified Credential",
      badge: "Tata Certified",
      credentialId: "6a818d7eba854243f456fda6",
      category: "Cybersecurity & Systems",
      description: "Completed practical job simulation in Cybersecurity Analysis with Tata and Forage. Covered identity and access management (IAM) fundamentals, IAM strategy assessment, custom IAM solution design, and enterprise platform integration.",
      skills: ["Identity & Access Management (IAM)", "IAM Strategy Assessment", "Custom IAM Solutions", "Platform Integration"],
      pdfUrl: "/certificates/Tata_Cybersecurity_Analyst_Job_Simulation.pdf"
    },
    {
      id: "tata-data-visualisation",
      title: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "Tata & Forage",
      organization: "Tata Group & Forage",
      date: "August 16, 2026",
      status: "Verified Credential",
      badge: "Tata Certified",
      credentialId: "6a818880aa694bdf89ad70a2",
      category: "Data Analytics",
      description: "Completed practical job simulation in Data Visualisation with Tata and Forage. Mastered framing business scenarios, choosing optimal visualizations, creating effective executive dashboards, and communicating data-driven strategic insights.",
      skills: ["Data Visualisation", "Business Scenario Framing", "Executive Dashboards", "Data Storytelling"],
      pdfUrl: "/certificates/Tata_Data_Visualisation_Empowering_Business.pdf"
    },
    {
      id: "tata-genai-analytics",
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata & Forage",
      organization: "Tata Group & Forage",
      date: "August 16, 2026",
      status: "Verified Credential",
      badge: "Tata Certified",
      credentialId: "6a818022aa694bdf89ac1031",
      category: "AI & Machine Learning",
      description: "Completed practical job simulation in GenAI Powered Data Analytics with Tata and Forage. Performed exploratory data analysis and risk profiling, predictive modeling for delinquency forecasting, executive data reporting, and AI-driven collections strategy implementation.",
      skills: ["Generative AI", "Exploratory Data Analysis", "Risk Profiling", "Predictive Delinquency Modeling", "AI Collections Strategy"],
      pdfUrl: "/certificates/Tata_GenAI_Powered_Data_Analytics.pdf"
    }
  ],

  achievements: [
    {
      id: "datanyx-runnerup",
      title: "Runner-Up in Datanyx 2025 Datathon",
      organization: "MJCET, Hyderabad",
      track: "AgroTech Domain",
      year: "2025",
      type: "Competition",
      badge: "Runner-Up",
      description:
        "Runner-Up in Datanyx 2025 Datathon conducted by MJCET, Hyderabad, for developing an innovative AI-based solution addressing challenges in the AgroTech domain.",
      impact: "Developed predictive agricultural intelligence pipelines under strict competition time constraints, recognized by the judging panel for methodological rigor and practical utility."
    },
    {
      id: "hackwithhyd",
      title: "HackWithHyderabad 3.0 Competitor",
      organization: "HackWithHyderabad Community",
      track: "AI Incident Response",
      year: "2024 / 2025",
      type: "Hackathon",
      badge: "Hackathon Competitor",
      description:
        "Competed in HackWithHyderabad 3.0 as part of a team and contributed to the development of RecallOps AI, an AI-powered incident response solution.",
      impact: "Contributed to RAG architecture and prompt evaluation to enable fast evidence-based diagnosis during complex server outages."
    },
    {
      id: "smart-india-hackathon",
      title: "Smart India Hackathon (SIH) Contributor",
      organization: "Ministry of Education / SIH",
      track: "Smart Classroom & Timetable Scheduler",
      year: "Hackathon",
      type: "National Hackathon",
      badge: "SIH Contributor",
      description:
        "Contributed to Smart India Hackathon (SIH) through the development of a Smart Classroom & Timetable Scheduler.",
      impact: "Eliminated timetable slot overlaps and faculty workload distribution conflicts through automated constraint matching algorithms."
    },
    {
      id: "tech-tycoons",
      title: "Active Member of Tech Tycoons Club",
      organization: "Matrusri Engineering College",
      track: "Technical Community & Project Activities",
      year: "2023 – Present",
      type: "Community Leadership",
      badge: "Active Member",
      description:
        "Active Member of the Tech Tycoons Club at Matrusri Engineering College, contributing to technical and project-based activities.",
      impact: "Participates in peer coding workshops, hackathons, technical symposiums, and collaborative knowledge-sharing sessions."
    },
    {
      id: "academic-excellence",
      title: "Academic Excellence — 9.6 CGPA",
      organization: "Matrusri Engineering College",
      track: "Information Technology",
      year: "2023 – Present",
      type: "Academic Standing",
      badge: "CGPA: 9.6 / 10",
      description:
        "Maintained a CGPA of 9.6 while consistently excelling in technical coursework. Secured 98.2% in Intermediate and 10.0 GPA in SSC, demonstrating strong academic performance.",
      impact: "Ranked among top percentiles across academic terms with deep mastery of computing foundations."
    }
  ]
};
