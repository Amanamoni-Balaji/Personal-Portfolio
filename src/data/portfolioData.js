export const portfolioData = {
  personal: {
    name: "Amanamoni Balaji",
    cleanWordmark: "Amanamoni Balaji",
    headline: "AI & Machine Learning | Data Analytics | Full Stack Development",
    positioning:
      "An aspiring technology professional interested in building intelligent applications, developing data-driven solutions, and creating useful software products.",
    heroIntro:
      "Building intelligent solutions, turning data into insights, and creating meaningful digital experiences.",
    aboutBio:
      "I am an Information Technology undergraduate at Matrusri Engineering College, Hyderabad (CGPA 9.6). I combine machine learning modeling, analytical rigor, and modern full-stack development to solve real-world problems. My projects span agricultural advisory systems, clinical process mining, incident recovery assistants, and automated scheduling platforms.",
    education: {
      college: "Matrusri Engineering College, Hyderabad",
      degree: "B.E. Information Technology",
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
        institution: "Matrusri Engineering College",
        degree: "B.E. in Information Technology",
        period: "2023 – 2027",
        score: "CGPA: 9.6 / 10",
        location: "Hyderabad, Telangana",
        badge: "Current",
        details: "Specializing in AI/ML, Data Analytics, and Web Architectures. Deep focus on data structures, algorithmic design, and distributed systems."
      },
      {
        institution: "Narayana Junior College",
        degree: "Intermediate MPC (Maths, Physics, Chemistry)",
        period: "2021 – 2023",
        score: "98.2%",
        location: "Hyderabad, Telangana",
        badge: "Distinction",
        details: "Strong foundations in differential calculus, linear algebra, analytical mechanics, and chemical principles."
      },
      {
        institution: "Gowthami High School",
        degree: "Secondary School Certificate (SSC)",
        period: "Completed",
        score: "GPA: 10.0 / 10",
        location: "Achampet, Telangana",
        badge: "Perfect Score",
        details: "Graduated with perfect 10.0 GPA across all academic disciplines, building quantitative and computational curiosity."
      }
    ],
    email: "balajiamanamoni@gmail.com",
    github: "https://github.com/Amanamoni-Balaji",
    linkedin: "https://www.linkedin.com/in/amanamoni-balaji",
    location: "Hyderabad, Telangana, India",
    resumeUrl: "/Amanamoni_Balaji_Resume.pdf",
    availability: "Available for Internships & Engineering Roles"
  },

  skills: [
    {
      category: "Programming",
      description: "Core algorithmic languages for systems, logic, and data processing",
      items: [
        { name: "Python", context: "Primary language for AI/ML, data pipelines & Django", level: "Core" },
        { name: "Java", context: "Object-oriented software design & academic computing", level: "Proficient" }
      ]
    },
    {
      category: "Frontend",
      description: "Modern, responsive, accessible web engineering",
      items: [
        { name: "React.js", context: "Hooks, SPA routing, modular UI architecture", level: "Primary UI" },
        { name: "JavaScript", context: "ES6+, asynchronous flows, DOM manipulation", level: "Core" },
        { name: "HTML", context: "Semantic document structuring & accessibility", level: "Core" },
        { name: "CSS", context: "Modern layouts, Flexbox, Grid, transitions", level: "Core" },
        { name: "Tailwind CSS", context: "Utility-first design systems & dark themes", level: "Styling" }
      ]
    },
    {
      category: "Backend",
      description: "Server architecture, API contracts, and business logic",
      items: [
        { name: "Django", context: "MVC framework, ORM, authentication & middleware", level: "Framework" },
        { name: "REST APIs", context: "Resource modeling, endpoint design & JSON interchange", level: "Architecture" }
      ]
    },
    {
      category: "Database",
      description: "Structured storage, schema integrity, and query optimization",
      items: [
        { name: "SQL", context: "Relational queries, aggregations, joins & indexing", level: "Relational" },
        { name: "SQLite", context: "Embedded relational storage for application backends", level: "Database" }
      ]
    },
    {
      category: "Data Analytics",
      description: "Extracting actionable intelligence and communicating insights",
      items: [
        { name: "Data Analysis", context: "EDA, anomaly detection, statistical summaries", level: "Analytics" },
        { name: "Data Visualization", context: "Communicating trends with charts & dashboards", level: "Visuals" },
        { name: "Excel", context: "Formulas, pivot tables, statistical modeling", level: "Analytics" }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "Predictive intelligence, computer vision, and foundation models",
      items: [
        { name: "Machine Learning", context: "Supervised classification, regression, clustering", level: "ML Core" },
        { name: "Model Development", context: "Feature engineering, validation & evaluation metrics", level: "Modeling" },
        { name: "Generative AI", context: "LLMs, prompt engineering, context augmentation", level: "GenAI" },
        { name: "Retrieval-Augmented Generation (RAG)", context: "Context injection, semantic similarity & vector lookups", level: "Architecture" }
      ]
    },
    {
      category: "Tools",
      description: "Developer workflows, version control, and environments",
      items: [
        { name: "Git", context: "Branching workflows, version tracking & commit hygiene", level: "VCS" },
        { name: "GitHub", context: "Pull requests, code reviews & repository hosting", level: "Collaboration" },
        { name: "VS Code", context: "Primary development environment & tooling extensions", level: "IDE" }
      ]
    }
  ],

  projects: [
    {
      id: "krishiai",
      title: "KrishiAI – AI-Powered Agricultural Advisory System",
      shortTitle: "KrishiAI",
      subtitle: "Intelligent Agricultural Advisory System",
      category: "AI & Predictive Analytics",
      tagline: "Empowering farmers with rainfall forecasts, soil analysis, and data-driven crop recommendations.",
      overview:
        "KrishiAI is an intelligent agricultural advisory platform engineered to help farmers make informed, data-driven farming decisions. By synthesizing historical meteorological data, soil nutrient profiles (NPK, pH), and machine learning models, the system predicts rainfall trends and recommends the most viable crops for each specific farmland.",
      problem:
        "Agriculture in many regions continues to rely on traditional heuristics that struggle with climate volatility, unpredictable precipitation patterns, and declining soil health. Farmers frequently suffer crop failures or suboptimal yields because they lack accessible, data-driven forecasting tools before planting.",
      solution:
        "KrishiAI addresses this gap with an intuitive advisory system that couples machine learning predictions with agronomic knowledge. It delivers seasonal rainfall estimates, evaluates soil suitability, and outputs actionable planting guidance formatted for easy interpretation by agricultural stakeholders.",
      contribution:
        "Designed and implemented the core machine learning pipelines for precipitation estimation and crop suitability scoring. Cleaned and prepared multi-year meteorological datasets, engineered seasonal features, and integrated model outputs into an interactive dashboard for intuitive farmer advisory.",
      technologies: ["Python", "Machine Learning", "Data Analytics", "Pandas", "Scikit-Learn", "Weather APIs"],
      implementationDetails: [
        "Historical precipitation analysis using time-series and regression techniques to detect seasonal patterns.",
        "Soil condition evaluation combining NPK levels and pH balance against crop growth thresholds.",
        "Rule-assisted ML recommendation engine prioritizing drought resistance and yield stability.",
        "Exploratory analytics dashboards providing clear visual breakdowns of expected rainfall vs. crop water requirements."
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
        "Provided verifiable decision support reducing planting uncertainty during erratic monsoons."
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
      id: "agroguardian",
      title: "AgroGuardian – AI-Based Crop Recommendation and Disease Prediction System",
      shortTitle: "AgroGuardian",
      subtitle: "AI-Based Crop Recommendation & Disease Prediction",
      category: "Deep Learning & AgriTech",
      tagline: "End-to-end agricultural platform integrating crop suitability recommendations with deep learning leaf disease diagnostics.",
      overview:
        "AgroGuardian is a dual-function agricultural intelligence system combining soil-based crop recommendation with computer-vision disease diagnosis. The platform allows farmers to select optimal crops for their land while enabling instant diagnosis of plant diseases (such as early and late potato leaf blight) from uploaded field photographs.",
      problem:
        "Crop diseases can devastate entire yields within days if left undetected, yet expert plant pathologists are inaccessible to most rural farming communities. Concurrently, improper crop selection without soil nutrient awareness exhausts farmlands and reduces agricultural returns.",
      solution:
        "AgroGuardian provides an accessible web application where farmers can upload photographs of crop foliage for instant CNN-based disease diagnosis with treatment recommendations, alongside an input form that matches nitrogen, phosphorus, potassium, and soil pH to recommended crop varieties.",
      contribution:
        "Engineered the responsive frontend with React.js, structured the Django backend to serve REST endpoints for computer vision inference, integrated the trained deep learning model, and authored the mitigation advisory workflow for detected leaf diseases.",
      technologies: ["React.js", "Django", "Python", "Machine Learning", "TensorFlow / Keras", "REST APIs"],
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
        { src: "/assets/agroguardian/hero-farm.jpg", caption: "AgroGuardian Field Platform Overview" }
      ],
      featured: true,
      badge: "Deep Learning"
    },
    {
      id: "careflow",
      title: "CareFlow – Clinical Pathway Process Mining and Analytics System",
      shortTitle: "CareFlow",
      subtitle: "Clinical Pathway Process Mining & Analytics",
      category: "Healthcare Analytics & Process Mining",
      tagline: "Uncovering hospital workflow bottlenecks and analyzing patient care pathways through data-driven process mining.",
      overview:
        "CareFlow is a comprehensive healthcare process intelligence and analytics platform designed to analyze hospital event logs, reconstruct clinical patient journeys, detect operational bottlenecks, and present actionable executive insights for medical directors and hospital administrators.",
      problem:
        "Modern hospital operations suffer from hidden workflow inefficiencies: extended emergency waiting times, delayed lab turnaround, and deviations from standardized treatment pathways. Administrators typically rely on static reports that fail to show where delays actually accumulate in multi-department patient journeys.",
      solution:
        "CareFlow applies process mining algorithms to hospital electronic health records (EHR) and event logs. It visually maps actual clinical pathways, quantifies transition durations between care stages, flags operational bottlenecks, and generates executive-grade compliance and performance reports.",
      contribution:
        "Engineered the complete analytical dashboard in React with modular views: Executive Overview, Bottleneck Analysis, Process Mining Graph, Patient Journey Tracker, and Automated Reports. Implemented KPI aggregations, duration heatmaps, and downloadable clinical process intelligence summaries.",
      technologies: ["React.js", "Python", "Process Mining", "Data Analytics", "Data Visualization", "Chart.js"],
      implementationDetails: [
        "Clinical event log ingestion mapping Patient ID, Care Department, Event Activity, Timestamp, and Outcome.",
        "Interactive process variant visualizer tracing pathway transitions from intake through triage, diagnostics, treatment, and discharge.",
        "Bottleneck identification engine calculating stage-by-stage wait times and identifying statistical outliers.",
        "Executive KPI cards tracking median length of stay (LOS), pathway deviation rates, and department throughput.",
        "Automated clinical reporting module generating formal performance summaries."
      ],
      architectureSteps: [
        { step: "01", name: "EHR Log Extraction", detail: "Ingest structured hospital event streams with Patient ID, Department, Activity, and Timestamps." },
        { step: "02", name: "Variant Discovery", detail: "Process mining algorithms discover empirical treatment pathways and detect deviation variants." },
        { step: "03", name: "Bottleneck Profiling", detail: "Computes transition durations across emergency, lab, and radiology to pinpoint queues." },
        { step: "04", name: "Journey Reconstruction", detail: "Traces individual patient timelines against standard clinical guidelines." },
        { step: "05", name: "Executive Intelligence", detail: "Renders interactive duration heatmaps, department throughput KPIs, and audit-ready reports." }
      ],
      results: [
        "Successfully mapped multi-stage clinical pathways across emergency and inpatient departments.",
        "Identified diagnostic-to-treatment transition lag as the primary operational bottleneck in hospital event log analysis."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji",
      liveUrl: null,
      primaryImage: "/assets/careflow/executive_overview_charts_1793367709015.png",
      gallery: [
        { src: "/assets/careflow/executive_overview_charts_1793367709015.png", caption: "Executive Overview: Throughput Trends & Clinical Metrics" },
        { src: "/assets/careflow/bottleneck_analysis_1793367892183.png", caption: "Bottleneck Analysis: Stage-by-Stage Wait Time Identification" },
        { src: "/assets/careflow/process_mining_1793367828718.png", caption: "Process Mining Discovery: Variant Pathways & Flow Transitions" },
        { src: "/assets/careflow/patient_journey_1793367769964.png", caption: "Patient Journey Tracker: Individual Pathway Tracing" },
        { src: "/assets/careflow/predictive_analytics_1793367968054.png", caption: "Predictive Analytics: Duration Forecasts & Risk Stratification" },
        { src: "/assets/careflow/reports_1793368053255.png", caption: "Clinical Performance & Compliance Reporting View" }
      ],
      featured: true,
      badge: "Process Mining"
    },
    {
      id: "smart-classroom",
      title: "Smart Classroom and Timetable Scheduler",
      shortTitle: "Smart Classroom",
      subtitle: "Automated Academic Scheduling & Resource Optimization",
      category: "Optimization & Full Stack",
      tagline: "Algorithmic institutional scheduling system eliminating timetable conflicts and optimizing room capacities.",
      overview:
        "The Smart Classroom and Timetable Scheduler (Time Trackers) is an automated academic resource planning platform built for institutions. It eliminates manual scheduling bottlenecks by algorithmically distributing subjects, faculty availability, and room capacities into clash-free academic timetables.",
      problem:
        "Creating academic timetables manually is a tedious, error-prone task that takes academic committees weeks each semester. Scheduling conflicts — such as assigning a professor to two simultaneous classes, exceeding room capacities, or uneven student lecture distributions — cause frequent administrative friction.",
      solution:
        "An algorithmic scheduling web platform that models teacher time constraints, course hour requirements, room seating capacities, and student cohort schedules. The system generates conflict-free schedules and allows administrators and faculty to inspect and modify them interactively.",
      contribution:
        "Researched and conceptualized system design wireframes (hand-sketched architecture notes preserved in project archive). Developed key frontend interfaces using React, built the interactive timetable grid view, and contributed to constraint modeling for faculty-room matching.",
      technologies: ["React.js", "Python", "Optimization Algorithms", "Tailwind CSS", "JavaScript"],
      implementationDetails: [
        "Multi-constraint logic considering faculty availability periods, subject credit hours, and classroom physical capacities.",
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
        "Project contributed for the Smart India Hackathon internal evaluation.",
        "Demonstrated automated clash-free schedule generation across multi-department academic programs."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji",
      liveUrl: null,
      primaryImage: "/assets/smartclassroom/Screenshot 2025-09-24 184559.png",
      gallery: [
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184559.png", caption: "Time Trackers: Role Selection & Academic Portal Login" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184644.png", caption: "Institution Setup: Academic Year & Department Configuration" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184702.png", caption: "Faculty Constraints & Teaching Availability Matrix" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184805.png", caption: "Classroom Capacity & Laboratory Resource Management" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 184833.png", caption: "Automated Timetable Generation Engine & Visual Grid" },
        { src: "/assets/smartclassroom/Screenshot 2025-09-24 185019.png", caption: "Weekly Class Schedule View with Faculty Allocation" },
        { src: "/assets/wireframes/WhatsApp Image 2025-09-18 at 20.35.18_2e718084.jpg", caption: "Original Engineering Wireframe Sketch: System Architecture & Login Flow" },
        { src: "/assets/wireframes/WhatsApp Image 2025-09-18 at 20.35.19_041c100c.jpg", caption: "Original Engineering Wireframe Sketch: Teacher Slot Constraints" }
      ],
      featured: true,
      badge: "Hackathon Project"
    },
    {
      id: "recallops-ai",
      title: "RecallOps AI – AI-Powered Incident Response & Root Cause Investigation",
      shortTitle: "RecallOps AI",
      subtitle: "Incident Response & Root Cause Investigation",
      category: "Generative AI & SRE Operations",
      tagline: "Persistent memory incident response assistant built for HackWithHyderabad 3.0 to accelerate technical outage recovery.",
      overview:
        "RecallOps AI is an intelligent incident management assistant concept created during HackWithHyderabad 3.0. It harnesses persistent operational knowledge and retrieval-augmented generation to surface relevant historical precedents, pinpoint likely root causes, and recommend proven diagnostic procedures during live production outages.",
      problem:
        "When critical software infrastructure fails, site reliability engineers (SREs) waste valuable minutes manually querying logs and searching past post-mortems. High-stress environments increase time-to-mitigation (MTTR) because institutional troubleshooting knowledge is scattered across static docs and incident channels.",
      solution:
        "RecallOps AI indexes prior outage reports, error traces, and remediation actions into a persistent vector memory store. When a new alert occurs, the assistant retrieves the closest past failure patterns and synthesizes step-by-step diagnostic recommendations using LLMs.",
      contribution:
        "Contributed to project architecture during HackWithHyderabad 3.0: structured incident similarity search pipelines, designed the investigation dashboard, and evaluated LLM response quality for technical post-mortem analysis.",
      technologies: ["React", "FastAPI", "Python", "LLMs", "RAG", "Vector Search"],
      implementationDetails: [
        "Persistent memory pipeline indexing past incident post-mortems with metadata tagging.",
        "Semantic vector similarity search linking current alerts to historical troubleshooting cases.",
        "Evidence-grounded prompt templates minimizing model hallucination during incident triage.",
        "Clean terminal-inspired incident console with diagnostic workflow guidance."
      ],
      architectureSteps: [
        { step: "01", name: "Outage Ingestion", detail: "Captures error logs, exception traces, and monitoring alerts from production environments." },
        { step: "02", name: "Vector Indexing", detail: "Embeds post-mortems and historical runbooks into persistent vector embeddings." },
        { step: "03", name: "Similarity Search", detail: "Semantic similarity retrieval identifies the closest historical incidents with resolution notes." },
        { step: "04", name: "RAG Synthesis", detail: "Grounds foundation models in verified post-mortem documentation to suggest diagnostic actions." },
        { step: "05", name: "SRE Console", detail: "Interactive troubleshooting dashboard presenting evidence-based remediation recommendations." }
      ],
      results: [
        "Demonstrated working prototype at HackWithHyderabad 3.0 hackathon.",
        "Showcased significant reduction in incident investigation time by instantly surfacing past resolutions."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji/RecallOps-AI",
      liveUrl: null,
      primaryImage: "/assets/careflow/predictive_analytics_1793367968054.png",
      gallery: [],
      featured: false,
      badge: "HackWithHyderabad 3.0"
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
      technologies: ["Python", "Data Analysis", "Data Visualization", "Microsoft Excel"]
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
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs"]
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
      technologies: ["Machine Learning", "Python", "Google Colab", "Feature Engineering"]
    },
    {
      id: "blackbucks",
      role: "AI/ML Internship",
      company: "Blackbucks Education Pvt. Ltd.",
      duration: "1 May – 15 June 2026",
      status: "Scheduled",
      type: "Upcoming Internship (6 Weeks)",
      description:
        "Scheduled six-week intensive engineering internship focused on end-to-end AI/ML modeling, algorithm evaluation, and deployment of predictive intelligence modules.",
      responsibilities: [
        "Rigorous hands-on curriculum covering end-to-end machine learning model lifecycles.",
        "Deep dive into predictive modeling, neural architectures, and model deployment pipelines.",
        "Collaborative project execution under industry mentor guidance."
      ],
      technologies: ["AI/ML Modeling", "Python", "Deep Learning", "Model Deployment"]
    }
  ],

  certifications: [
    {
      id: "cisco-networking",
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "Certified",
      status: "Verified Credential",
      description: "Fundamental networking concepts, IP addressing, subnetting, TCP/IP protocol suite, Ethernet architecture, and basic network troubleshooting.",
      skills: ["Computer Networks", "TCP/IP Protocol", "Subnetting", "Routing & Switching"],
      pdfUrl: "/certificates/Cisco_Networking_Basics.pdf"
    },
    {
      id: "aws-genai",
      title: "AWS Generative AI Virtual Internship",
      issuer: "EduSkills",
      date: "Credential Issued",
      status: "Verified Credential",
      description: "Completed virtual internship curriculum on AWS cloud fundamentals, generative artificial intelligence concepts, foundation models, and prompt architectures.",
      skills: ["Generative AI", "AWS Cloud Concepts", "Foundation Models", "Prompt Engineering"],
      pdfUrl: null
    },
    {
      id: "aiml-eduskills",
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills",
      date: "Credential Issued",
      status: "Verified Credential",
      description: "Comprehensive training in machine learning workflows, supervised algorithms, neural network foundations, and evaluation methodologies.",
      skills: ["Machine Learning", "Supervised Learning", "Model Training", "Evaluation Metrics"],
      pdfUrl: null
    },
    {
      id: "db-oracle",
      title: "Database Foundations",
      issuer: "Oracle",
      date: "Certified",
      status: "Verified Credential",
      description: "Relational database modeling, entity-relationship diagrams (ERD), normalization rules, SQL queries, DDL/DML, and database architecture foundations.",
      skills: ["SQL", "Relational Database Design", "ER Modeling", "Oracle Architecture"],
      pdfUrl: null
    },
    {
      id: "ml-scrs",
      title: "Machine Learning Using Python",
      issuer: "SCRS",
      date: "Certified",
      status: "Verified Credential",
      description: "Hands-on machine learning implementations with Python, scikit-learn, data preprocessing, classification, regression, and model validation techniques.",
      skills: ["Python", "scikit-learn", "Classification", "Regression", "Data Preprocessing"],
      pdfUrl: null
    },
    {
      id: "cisco-python",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy / Python Institute",
      date: "Certified",
      status: "Verified Credential",
      description: "Foundational Python programming covering data types, control flow, functions, modular architecture, and algorithmic problem-solving.",
      skills: ["Python", "Algorithmic Logic", "Data Structures", "Modular Programming"],
      pdfUrl: "/certificates/Python_Essentials_Cisco.pdf"
    },
    {
      id: "cisco-data-analytics",
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "Certified",
      status: "Verified Credential",
      description: "Essential data analysis methodologies, data lifecycle, exploratory analysis, statistical techniques, and analytical communication.",
      skills: ["Data Analytics", "Exploratory Data Analysis", "Data Lifecycle", "Statistical Reasoning"],
      pdfUrl: "/certificates/Data_Analytics_Essentials.pdf"
    }
  ],

  achievements: [
    {
      id: "datanyx-runnerup",
      title: "Runner-Up — Datanyx 2025 Datathon",
      organization: "MJCET, Hyderabad",
      track: "AgroTech Domain",
      year: "2025",
      type: "Competition",
      badge: "Runner-Up",
      description:
        "Secured the prestigious Runner-Up position at the Datanyx 2025 Datathon in the AgroTech domain, competing against top university teams across Hyderabad with data-driven agricultural prediction models.",
      impact: "Developed predictive agricultural intelligence pipelines under strict competition time constraints, recognized by the judging panel for methodological rigor and practical utility."
    },
    {
      id: "hackwithhyd",
      title: "HackWithHyderabad 3.0 Contributor",
      organization: "HackWithHyderabad Community",
      track: "AI & SRE Operations",
      year: "2024 / 2025",
      type: "Hackathon",
      badge: "Contributor",
      description:
        "Active project contributor with RecallOps AI — an intelligent incident response and root-cause retrieval assistant utilizing persistent incident knowledge bases.",
      impact: "Contributed to RAG architecture and prompt evaluation to enable fast evidence-based diagnosis during complex server outages."
    },
    {
      id: "smart-india-hackathon",
      title: "Smart India Hackathon – Project Contributor",
      organization: "Ministry of Education / SIH",
      track: "Academic Scheduling & Resource Optimization",
      year: "Participation",
      type: "National Hackathon",
      badge: "SIH Contributor",
      description:
        "Key contributor to the Smart Classroom and Timetable Scheduler project, designing constraint-satisfaction wireframes and frontend modules for automated academic timetable generation.",
      impact: "Eliminated timetable slot overlaps and faculty workload distribution conflicts through automated constraint matching algorithms."
    },
    {
      id: "tech-tycoons",
      title: "Active Member — Tech Tycoons Club",
      organization: "Matrusri Engineering College",
      track: "Technical Community & Peer Mentorship",
      year: "2023 – Present",
      type: "Community Leadership",
      badge: "Active Member",
      description:
        "Student leader and member participating in peer coding workshops, hackathons, technical symposiums, and collaborative knowledge-sharing sessions.",
      impact: "Fosters peer-to-peer technical learning in Python, web development, and AI fundamentals across student cohorts."
    }
  ]
};
