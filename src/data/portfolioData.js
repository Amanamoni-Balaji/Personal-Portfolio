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
      id: "careflow",
      title: "CareFlow – Clinical Pathway Process Mining & Analytics System",
      shortTitle: "CareFlow",
      subtitle: "Clinical Pathway Process Mining & Operational Intelligence",
      category: "Healthcare Analytics & Process Mining",
      tagline: "Healthcare analytics and process-mining system analyzing clinical event logs, discovering patient pathways, detecting bottlenecks, and optimizing hospital workflows.",
      overview:
        "CareFlow is a specialized healthcare analytics and process-mining system engineered to analyze clinical pathway processes using hospital event-log data. By reconstructing end-to-end patient journeys, discovering Directly-Follows Graphs (DFG), quantifying inter-departmental transfer delays, and auditing guideline conformance, CareFlow empowers clinical administrators to uncover operational bottlenecks, reduce waiting times, and optimize care delivery.",
      problem:
        "Modern hospital administrators face severe operational opacity: aggregate statistics (such as average length of stay) obscure the granular sequence of patient transitions. Hidden delays in triage handoffs, diagnostic imaging backlogs, and non-conformant treatment deviations cause bed-blocking and inflated patient wait times.",
      objectives: [
        "Process and chronologically validate clinical event-log datasets with hospital department metadata.",
        "Perform PM4Py Directly-Follows Graph (DFG) process discovery and trace variant extraction.",
        "Detect operational bottlenecks and quantify inter-departmental handoff delays with transparent severity tiers.",
        "Evaluate trace sequence fitness against reference clinical guidelines using conformance checking.",
        "Train predictive machine learning models to forecast discharge delays without data leakage.",
        "Deliver an interactive 9-page Streamlit analytics dashboard with multi-format automated reporting."
      ],
      solution:
        "CareFlow leverages PM4Py process-mining discovery algorithms, statistical waiting-time decomposition, and interactive Plotly visualizations in a modular Streamlit dashboard. It identifies the slowest clinical transitions, quantifies cumulative bottleneck hours, evaluates trace fitness against clinical guidelines, and predicts patient discharge delays using machine learning.",
      contribution:
        "Designed and implemented the end-to-end process-mining engine using PM4Py and Python. Built automated event-log validation and chronological sorting pipelines, engineered bottleneck detection algorithms with severity tiers, developed an interactive 9-page Streamlit analytical dashboard, and created multi-format automated institutional reporting (PDF, Excel, PPTX).",
      technologies: [
        "Python",
        "Streamlit",
        "PM4Py",
        "Data Analytics",
        "Process Mining",
        "Data Visualization",
        "Plotly",
        "Scikit-Learn",
        "Pandas",
        "SQLite"
      ],
      keyFeatures: [
        "Clinical event-log processing and schema validation enforcing datetime chronology and mandatory case attributes.",
        "Process discovery generating Directly-Follows Graphs (DFG) and frequency matrices across hospital departments.",
        "Patient pathway analysis and trace variant extraction analyzing common and rare patient journeys.",
        "Operational bottleneck detection calculating waiting times, ranking delays, and setting severity alerts.",
        "Clinical guideline conformance checking with sequence fitness scores against reference clinical pathways.",
        "Predictive machine learning forecasting potential discharge delays based on early admission characteristics.",
        "Interactive 9-page Streamlit analytical suite with global cross-page cohort filters and Plotly charts.",
        "Automated institutional reporting generating PDF summaries, Excel workbooks, and PowerPoint decks."
      ],
      implementationDetails: [
        "Clinical event-log validation pipeline verifying timestamp chronology, mandatory case attributes, and schema consistency.",
        "PM4Py Directly-Follows Graph (DFG) process discovery and variant extraction analyzing common patient journeys.",
        "Operational bottleneck detection ranking transition durations, quantifying cumulative delay hours, and setting severity alerts.",
        "Guideline conformance checking measuring sequence fitness scores against reference clinical pathways.",
        "Predictive machine learning pipeline forecasting potential discharge delays based on early admission characteristics.",
        "Interactive 9-page Streamlit analytical suite with global cross-page cohort filters and automated PDF/Excel/PPTX report export."
      ],
      architectureSteps: [
        { step: "01", name: "Event-Log Ingestion & Cleaning", detail: "Validates clinical schema, enforces ISO datetime chronology, removes duplicates, and handles missing values." },
        { step: "02", name: "Process Discovery Engine", detail: "Leverages PM4Py to construct Directly-Follows Graphs (DFG) and trace patient pathway variants across hospital departments." },
        { step: "03", name: "Bottleneck & Transition Analysis", detail: "Calculates queue times between clinical activities, flags slowest handoffs, and categorizes delay severity tiers." },
        { step: "04", name: "Conformance & Predictive Modeling", detail: "Audits pathway deviations against clinical reference standards and trains Random Forest classifiers to predict discharge delays." },
        { step: "05", name: "Analytical Dashboard & Reporting", detail: "Renders interactive Plotly visual charts in Streamlit with instant exports for PDF summary reports, PPTX decks, and Excel workbooks." }
      ],
      results: [
        "Analyzed 5,000+ patient journey event logs across multiple clinical departments (Emergency, Inpatient, Diagnostics, ICU, Discharge).",
        "Successfully exposed key transition bottlenecks and quantified average handoff delays to support data-driven hospital scheduling.",
        "Delivered 9-page production-quality analytics dashboard with zero data leakage in predictive modeling."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji/CareFlow-Clinical-Pathway-Process-Mining",
      liveUrl: null,
      primaryImage: "/assets/careflow/careflow-hero.png",
      gallery: [
        {
          src: "/assets/careflow/careflow-hero.png",
          title: "Executive Overview Dashboard",
          description: "High-level hospital KPI dashboard tracking patient admissions, discharge volume, and median length of stay.",
          caption: "CareFlow: Executive Overview Dashboard & Hospital Operational KPIs"
        },
        {
          src: "/assets/careflow/careflow-kpis.png",
          title: "Clinical Operational KPIs",
          description: "Real-time tracking of triage response rates, critical patient alerts, and departmental bed utilization.",
          caption: "CareFlow: Clinical Operational KPIs & Bed Utilization Metrics"
        },
        {
          src: "/assets/careflow/careflow-charts.png",
          title: "Admission & Patient Flow Trends",
          description: "Time-series throughput charts analyzing patient progression across emergency and inpatient departments.",
          caption: "CareFlow: Admission & Patient Flow Time-Series Trends"
        },
        {
          src: "/assets/careflow/careflow-process-mining.png",
          title: "Directly-Follows Graph (DFG)",
          description: "PM4Py process mining graph reconstructing clinical event logs and identifying non-standard transfer paths.",
          caption: "CareFlow: PM4Py Process Discovery & Directly-Follows Graph (DFG)"
        },
        {
          src: "/assets/careflow/careflow-patient-journey.png",
          title: "Individual Patient Trajectory",
          description: "Detailed event log trace following a patient journey from initial triage through imaging, ICU, and discharge.",
          caption: "CareFlow: Individual Patient Trace & Chronological Event Log Journey"
        },
        {
          src: "/assets/careflow/careflow-bottlenecks.png",
          title: "Bottleneck & Delay Analytics",
          description: "Quantitative analysis pinpointing prolonged transition times between emergency triage and inpatient admission.",
          caption: "CareFlow: Clinical Bottleneck Analysis & Departmental Waiting Time Rankings"
        },
        {
          src: "/assets/careflow/careflow-predictive.png",
          title: "Machine Learning Length-of-Stay Predictor",
          description: "Predictive models forecasting patient discharge readiness and flagging potential readmission risks.",
          caption: "CareFlow: Machine Learning Predictive Analytics for Patient Discharge Delays"
        },
        {
          src: "/assets/careflow/careflow-reports.png",
          title: "Automated Clinical Reports",
          description: "Executive report generator with multi-format export capabilities for hospital compliance audits.",
          caption: "CareFlow: Automated Institutional Reports & Multi-Format Export Engine"
        }
      ],
      featured: true,
      badge: "Healthcare Process Mining"
    },
    {
      id: "mediassist-ai",
      title: "MediAssist AI – Intelligent Healthcare Chatbot Using NLP",
      shortTitle: "MediAssist AI",
      subtitle: "Intelligent Healthcare Chatbot Using Natural Language Processing",
      category: "AI Healthcare & NLP Systems",
      tagline: "Intelligent healthcare conversational assistant providing evidence-based health guidance, symptom triage, and emergency red-flag detection using NLP.",
      overview:
        "MediAssist AI is an intelligent healthcare conversational platform engineered to comprehend natural-language patient queries and deliver evidence-based health guidance grounded strictly in verified clinical literature from WHO, MedlinePlus, and NHS. Featuring a 7-stage NLP processing pipeline, machine learning intent classification, multi-symptom assessment, and automated emergency red-flag detection, MediAssist AI provides safe educational health guidance without diagnostic overreach.",
      problem:
        "Everyday patients turn to generic search engines and hallucination-prone AI tools for symptom guidance, frequently encountering catastrophized worst-case diagnoses, unverified dosages, and dangerous delays in recognizing life-threatening emergencies.",
      objectives: [
        "Build a specialized healthcare conversational assistant grounded in verified clinical authorities (WHO, MedlinePlus, NHS).",
        "Implement an automated emergency red-flag detector triggering immediate urgent care escalation (911 / 112).",
        "Classify healthcare queries across 12 medical intent classes using calibrated machine learning without hardcoded heuristics.",
        "Perform medical entity extraction for reported symptoms, conditions, durations, and severity.",
        "Provide an educational multi-symptom assessment tool evaluating symptom overlap without diagnostic claims.",
        "Engineer a decoupled React (TypeScript) frontend and Django REST Framework backend with secure JWT authentication and admin analytics."
      ],
      solution:
        "MediAssist AI implements a decoupled React (TypeScript) and Django REST Framework architecture with an isolated NLP engine. It uses calibrated intent classification, sublinear TF-IDF semantic retrieval against verified clinical sources, automated emergency red-flag triage, and strict medical disclaimer enforcement.",
      contribution:
        "Architected the full-stack system: built the modern React TypeScript frontend with Tailwind CSS and Recharts; implemented the Django REST Framework backend with JWT authentication and session history; developed the 7-stage NLP engine with custom preprocessors, calibrated intent classifier, symptom evaluator, and emergency red-flag safety protocols.",
      technologies: [
        "React.js",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "Django",
        "Django REST Framework",
        "NLP",
        "NLTK",
        "spaCy",
        "Scikit-learn",
        "TF-IDF",
        "Cosine Similarity",
        "SimpleJWT"
      ],
      keyFeatures: [
        "Natural-language query processing with custom clinical preprocessor (tokenization, negation preservation, lemmatization).",
        "Intent classification across 12 medical intents via Calibrated LinearSVC machine learning model.",
        "Medical entity extraction identifying reported symptoms, conditions, durations, and severity levels.",
        "Semantic similarity information retrieval scoring inquiries against verified clinical knowledge chunks (WHO, MedlinePlus, NHS).",
        "Automated emergency red-flag detector triggering immediate urgent care escalation (911 / 112) for acute symptoms.",
        "Interactive multi-symptom assessment tool evaluating symptom overlap against clinical condition profiles.",
        "Health guidance with verified medical citations and clinical safety disclaimers emphasizing educational use.",
        "Conversation context management and authenticated session history with JWT authentication.",
        "Administrative analytics dashboard with interactive charts monitoring system health and query patterns."
      ],
      implementationDetails: [
        "7-stage NLP pipeline incorporating tokenization, negation-preserving stopword filtering, and WordNet lemmatization.",
        "Calibrated LinearSVC intent classifier trained across 12 distinct medical query intents with confidence scoring.",
        "Medical entity extraction identifying reported symptoms, conditions, durations, and severity levels.",
        "Semantic similarity information retrieval scoring inquiries against verified clinical knowledge chunks (WHO, MedlinePlus, NHS).",
        "Automated emergency red-flag detector triggering immediate urgent care escalation (911 / 112) for acute symptoms.",
        "Interactive multi-symptom assessment tool evaluating symptom overlap against clinical condition profiles.",
        "Decoupled React TypeScript frontend with conversation context management, JWT auth, and administrative analytics dashboard."
      ],
      architectureSteps: [
        { step: "01", name: "User Query & Emergency Gate", detail: "Evaluates incoming query for critical emergency keywords (e.g., chest pain, stroke signs) to trigger instant emergency escalation." },
        { step: "02", name: "NLP Preprocessing & Lemmatization", detail: "Cleans text, preserves negation tokens, and applies WordNet lemmatization via NLTK to standardize clinical vocabulary." },
        { step: "03", name: "Intent Classification & NER", detail: "Extracts TF-IDF n-grams (1-3) and executes Calibrated LinearSVC to classify user intent across 12 medical categories." },
        { step: "04", name: "Semantic Knowledge Retrieval", detail: "Executes cosine similarity matching against structured medical chunks verified from WHO, MedlinePlus, and NHS clinical sources." },
        { step: "05", name: "Safety Guard & Response Delivery", detail: "Injects mandatory clinical disclaimers, formats symptom guidance, and dispatches authenticated JSON payload to React frontend." }
      ],
      results: [
        "Built end-to-end full-stack medical conversational platform with decoupled React 19 + TypeScript frontend and Django backend.",
        "Knowledge base strictly verified against trusted healthcare authorities (WHO, MedlinePlus, NHS) across 14 clinical categories.",
        "Verified emergency detection protocols ensuring 100% fail-safe escalation for life-threatening symptom inputs."
      ],
      githubUrl: "https://github.com/Amanamoni-Balaji/MediAssist-AI",
      liveUrl: null,
      primaryImage: "/assets/mediassist/mediassist-hero.png",
      gallery: [
        {
          src: "/assets/mediassist/mediassist-hero.png",
          title: "Conversational Healthcare Assistant",
          description: "Responsive landing interface introducing the clinical NLP triage assistant and instant medical inquiry system.",
          caption: "MediAssist AI: Responsive Healthcare Assistant Landing Page"
        },
        {
          src: "/assets/mediassist/mediassist-chat.png",
          title: "Interactive Triage Chat Interface",
          description: "Natural language consultation dialogue analyzing user symptoms with context-aware conversational AI.",
          caption: "MediAssist AI: Interactive Natural Language Medical Consultation Interface"
        },
        {
          src: "/assets/mediassist/mediassist-consultation.png",
          title: "Verified Clinical Guidance",
          description: "Structured health recommendations with source citations, precautionary measures, and clinical disclaimers.",
          caption: "MediAssist AI: Health Guidance with Verified Clinical Sources & Safety Disclaimers"
        },
        {
          src: "/assets/mediassist/mediassist-symptoms.png",
          title: "Multi-Symptom Assessment Tool",
          description: "Differential symptom matrix evaluating overlapping clinical indicators to recommend appropriate specialist care.",
          caption: "MediAssist AI: Multi-Symptom Assessment Tool & Overlap Analysis"
        },
        {
          src: "/assets/mediassist/mediassist-dashboard.png",
          title: "Administrative Analytics Dashboard",
          description: "Visual analytics tracking consultation volume, common symptom distributions, and triage resolution rates.",
          caption: "MediAssist AI: Administrative Analytics Dashboard with Interactive Recharts"
        },
        {
          src: "/assets/mediassist/mediassist-history.png",
          title: "Patient Conversation History",
          description: "Secure session history allowing users to review previous symptom evaluations and medical recommendations.",
          caption: "MediAssist AI: Authenticated Patient Conversation History & Session Records"
        },
        {
          src: "/assets/mediassist/mediassist-about.png",
          title: "Clinical Methodology & Safety Guardrails",
          description: "Architecture documentation outlining the NLP pipeline, medical knowledge base, and safety guardrails.",
          caption: "MediAssist AI: Clinical Methodology & Safety Guardrails"
        },
        {
          src: "/assets/mediassist/mediassist-api.png",
          title: "Django REST Framework Backend API",
          description: "Verified RESTful endpoints handling patient authentication, symptom classification, and audit logging.",
          caption: "MediAssist AI: Django REST Framework API Endpoints & Verification Suite"
        }
      ],
      featured: true,
      badge: "NLP Healthcare Assistant"
    },
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
      githubUrl: "https://github.com/Amanamoni-Balaji/Krishi-AI",
      liveUrl: null,
      primaryImage: "/assets/krishiai/hero-image.png",
      gallery: [
        {
          src: "/assets/krishiai/hero-image.png",
          title: "Agricultural Advisory Platform",
          description: "Farmer advisory landing portal designed for accessible crop insights and climate-resilient farming.",
          caption: "KrishiAI: Agricultural Advisory Platform Landing & Overview"
        },
        {
          src: "/assets/krishiai/krishi-input-form.png",
          title: "Soil & Climate Parameter Inputs",
          description: "Interactive form capturing soil nitrogen, phosphorus, potassium, pH, rainfall, and temperature data.",
          caption: "KrishiAI: Soil Nutrient & Environmental Parameter Input Form"
        },
        {
          src: "/assets/krishiai/krishi-soil-parameters.png",
          title: "Nutrient Calibration Matrix",
          description: "Fine-grained calibration sliders for precise environmental and agronomic parameter input.",
          caption: "KrishiAI: Precise Soil Chemistry Calibration Matrix"
        },
        {
          src: "/assets/krishiai/krishi-prediction-results.png",
          title: "AI Crop Recommendation Output",
          description: "Model prediction recommending optimal crops ranked by agronomic viability and confidence scores.",
          caption: "KrishiAI: Ranked Crop Recommendations with Agronomic Viability Scores"
        },
        {
          src: "/assets/krishiai/krishi-pro-analysis.png",
          title: "Pro Soil Nutrient Analysis",
          description: "Comprehensive nutrient breakdown comparing current farm readings against optimal crop thresholds.",
          caption: "KrishiAI: In-Depth Soil Nutrient Threshold Analysis"
        },
        {
          src: "/assets/krishiai/krishi-rainfall-trends.png",
          title: "Precipitation & Climate Trends",
          description: "Historical rainfall and microclimate analysis guiding seasonal sowing and irrigation schedules.",
          caption: "KrishiAI: Historical Rainfall & Climate Trend Analysis"
        },
        {
          src: "/assets/krishiai/krishi-mlops-dashboard.png",
          title: "MLOps Pipeline Monitoring",
          description: "Real-time monitoring interface tracking model drift, inference latency, and dataset versioning.",
          caption: "KrishiAI: MLOps Model Performance & Data Drift Dashboard"
        },
        {
          src: "/assets/krishiai/krishi-model-metrics.png",
          title: "Model Evaluation & Benchmarks",
          description: "Accuracy, precision, and recall benchmarks across Random Forest, XGBoost, and LightGBM models.",
          caption: "KrishiAI: Multi-Model Evaluation & Precision Benchmarks"
        }
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
      githubUrl: "https://github.com/Amanamoni-Balaji/Travelmate",
      liveUrl: null,
      primaryImage: "/assets/travelmate/Screenshot_2026-05-30_151658.png",
      gallery: [
        {
          src: "/assets/travelmate/travelmate-home.png",
          title: "Destination Discovery Portal",
          description: "Explore curated destinations, travel packages, and seasonal tourism highlights with search and filters.",
          caption: "TravelMate: Destination Discovery Portal & Curated Tour Packages"
        },
        {
          src: "/assets/travelmate/travelmate-destination-details.png",
          title: "Curated Destination Details",
          description: "Detailed itinerary view showing package highlights, inclusions, travel guides, and photo galleries.",
          caption: "TravelMate: Comprehensive Destination Itinerary & Pricing Breakdown"
        },
        {
          src: "/assets/travelmate/travelmate-booking.png",
          title: "Package Reservation Interface",
          description: "Direct booking workflow allowing travelers to select tour dates, passenger counts, and travel tiers.",
          caption: "TravelMate: Package Reservation Interface & Booking Form"
        },
        {
          src: "/assets/travelmate/travelmate-dashboard.png",
          title: "User Travel Dashboard",
          description: "Personalized traveler dashboard managing active reservations, past itineraries, and booking confirmations.",
          caption: "TravelMate: User Itinerary Dashboard & Active Booking Tracker"
        },
        {
          src: "/assets/travelmate/travelmate-profile.png",
          title: "Traveler Profile & Preferences",
          description: "User account management for saving traveler details, emergency contacts, and journey preferences.",
          caption: "TravelMate: Traveler Profile & Account Preferences"
        },
        {
          src: "/assets/travelmate/travelmate-contact.png",
          title: "Customer Support & Inquiry Center",
          description: "Direct inquiry form and traveler support channels for trip customization and booking assistance.",
          caption: "TravelMate: Direct Customer Support & Inquiry Portal"
        },
        {
          src: "/assets/travelmate/travelmate-register.png",
          title: "User Authentication & Sign Up",
          description: "Secure registration portal enabling traveler accounts, booking history access, and itinerary saving.",
          caption: "TravelMate: Secure User Authentication & Registration"
        },
        {
          src: "/assets/travelmate/Screenshot_2026-05-30_151658.png",
          title: "Curated Destination Showcase",
          description: "Visual showcase of premier domestic and international destinations with verified itineraries.",
          caption: "TravelMate: Premier Domestic & International Destination Showcase"
        }
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
      githubUrl: "https://github.com/Amanamoni-Balaji/TimeTrackers",
      liveUrl: null,
      primaryImage: "/assets/smartclassroom/Screenshot 2025-09-24 184559.png",
      gallery: [
        {
          src: "/assets/smartclassroom/Screenshot 2025-09-24 184559.png",
          title: "Institutional Portal & Role Access",
          description: "Role-based authentication interface for academic administrators, department heads, and faculty members.",
          caption: "TimeTrackers: Role Selection & Academic Portal Login"
        },
        {
          src: "/assets/smartclassroom/Screenshot 2025-09-24 184644.png",
          title: "Academic Department Configuration",
          description: "Setup module for defining academic years, semesters, lecture halls, and department course loads.",
          caption: "TimeTrackers: Institution Setup & Department Configuration"
        },
        {
          src: "/assets/smartclassroom/Screenshot 2025-09-24 184702.png",
          title: "Faculty Teaching Availability Matrix",
          description: "Constraint specification view capturing teacher slot preferences, working hours, and workload ceilings.",
          caption: "TimeTrackers: Faculty Constraints & Teaching Availability Matrix"
        },
        {
          src: "/assets/smartclassroom/Screenshot 2025-09-24 184805.png",
          title: "Classroom & Lab Capacity Allocation",
          description: "Facility management interface optimizing seating capacity and specialized laboratory equipment utilization.",
          caption: "TimeTrackers: Classroom Capacity & Laboratory Resource Management"
        },
        {
          src: "/assets/smartclassroom/Screenshot 2025-09-24 184817.png",
          title: "Conflict-Free Master Timetable Grid",
          description: "Generated weekly master schedule eliminating faculty double-booking and room overlap.",
          caption: "TimeTrackers: Weekly Master Timetable Grid with Zero Collisions"
        },
        {
          src: "/assets/smartclassroom/Screenshot 2025-09-24 184833.png",
          title: "Automated Scheduling Engine Output",
          description: "Algorithmic solver output resolving complex departmental constraints in real-time.",
          caption: "TimeTrackers: Automated Timetable Generation Engine Output"
        },
        {
          src: "/assets/smartclassroom/Screenshot 2025-09-24 184848.png",
          title: "Practical & Lab Session Distribution",
          description: "Dedicated scheduling view for multi-hour laboratory blocks and concurrent batch assignments.",
          caption: "TimeTrackers: Laboratory Block Scheduling & Concurrent Batch Allocation"
        },
        {
          src: "/assets/smartclassroom/Screenshot 2025-09-24 185019.png",
          title: "Faculty Schedule & Workload Balance",
          description: "Weekly faculty schedule view verifying balanced workload distribution and zero scheduling clashes.",
          caption: "TimeTrackers: Weekly Faculty Schedule & Workload Balance"
        }
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
      githubUrl: "https://github.com/Amanamoni-Balaji/Agro_Guardian",
      liveUrl: null,
      primaryImage: "/assets/agroguardian/crop-disease.png",
      gallery: [
        {
          src: "/assets/agroguardian/crop-disease.png",
          title: "Deep Learning Crop Disease Detection",
          description: "Computer vision model classifying leaf pathology from photos and recommending targeted treatments.",
          caption: "Agro_Guardian: Deep Learning Leaf Disease Classification & Diagnostic View"
        },
        {
          src: "/assets/agroguardian/crop-recommend.png",
          title: "Soil-Based Crop Recommendation",
          description: "Intelligent recommendation engine analyzing NPK, temperature, humidity, and pH for crop suitability.",
          caption: "Agro_Guardian: Soil Nutrient Matrix & Crop Recommendation Interface"
        },
        {
          src: "/assets/agroguardian/agro-advanced-soil.png",
          title: "Advanced Parameter Input Matrix",
          description: "Fine-grained agronomic parameter dashboard for precision soil chemistry and climate specifications.",
          caption: "Agro_Guardian: Precision Soil Chemistry & Climate Specification Matrix"
        },
        {
          src: "/assets/agroguardian/agro-features-grid.png",
          title: "Modular Agronomic Feature Suite",
          description: "Comprehensive feature hub offering weather forecasts, crop schedules, and rotation planning.",
          caption: "Agro_Guardian: Modular Agronomic Features & Decision Tools Hub"
        },
        {
          src: "/assets/agroguardian/agro-weather-advisory.png",
          title: "Microclimate & Weather Advisory",
          description: "Localized precipitation forecasts, temperature tracking, and climate warnings for crop health.",
          caption: "Agro_Guardian: Localized Weather Forecast & Microclimate Advisory"
        },
        {
          src: "/assets/agroguardian/agro-simple-mode.png",
          title: "Streamlined Farmer Advisory Interface",
          description: "Simplified advisory flow allowing farmers to quickly access personalized crop recommendations.",
          caption: "Agro_Guardian: Simplified Rapid Farmer Advisory Flow"
        },
        {
          src: "/assets/agroguardian/agro-crop-rotation.png",
          title: "Crop Rotation & Soil Preservation",
          description: "Agronomic advisory tool proposing multi-season crop sequencing to preserve soil nutrients.",
          caption: "Agro_Guardian: Multi-Season Crop Rotation & Soil Health Planner"
        },
        {
          src: "/assets/agroguardian/agro-fertilizer-calculator.png",
          title: "NPK Fertilizer Optimizer",
          description: "Calculates precise fertilizer dosages to correct nutrient deficits without over-fertilization.",
          caption: "Agro_Guardian: NPK Fertilizer Dosage & Soil Deficit Optimizer"
        }
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
      githubUrl: "https://github.com/Amanamoni-Balaji/RecallOpps-AI",
      liveUrl: null,
      primaryImage: "/assets/recallops/hero.png",
      gallery: [
        {
          src: "/assets/recallops/hero.png",
          title: "RecallOps AI Incident Copilot",
          description: "SRE command center interface integrating LLM intelligence with persistent operational memory.",
          caption: "RecallOps AI: SRE Incident Investigation & Persistent Memory Copilot"
        },
        {
          src: "/assets/recallops/recallops-metrics.png",
          title: "System Operational Metrics",
          description: "Real-time dashboard tracking system health, API response latency, and memory engine connectivity.",
          caption: "RecallOps AI: Real-Time SRE Operational Metrics & Latency Tracking"
        },
        {
          src: "/assets/recallops/recallops-incidents.png",
          title: "Active Incident Queue & Triage",
          description: "Prioritized incident stream categorizing operational alerts by severity, service, and blast radius.",
          caption: "RecallOps AI: Prioritized Incident Stream & Alert Triage Queue"
        },
        {
          src: "/assets/recallops/recallops-incident-detail.png",
          title: "Root Cause Investigation View",
          description: "Detailed incident view displaying correlated log traces, anomalous metrics, and automated triage notes.",
          caption: "RecallOps AI: Root Cause Diagnostic View with Correlated Log Traces"
        },
        {
          src: "/assets/recallops/recallops-demolab.png",
          title: "Incident Simulation Lab",
          description: "Interactive testing sandbox allowing SRE teams to simulate microservice outages and verify agent responses.",
          caption: "RecallOps AI: Interactive Microservice Outage Simulation Sandbox"
        },
        {
          src: "/assets/recallops/recallops-simulation.png",
          title: "Real-Time Outage Simulation",
          description: "Live demonstration of automated incident ingestion and contextual runbook retrieval during an active outage.",
          caption: "RecallOps AI: Live Automated Incident Ingestion & Outage Simulation"
        },
        {
          src: "/assets/recallops/recallops-system-status.png",
          title: "Hindsight & Grok Status Panel",
          description: "Service health monitor tracking Grok LLM integration, vector database indexing, and memory health.",
          caption: "RecallOps AI: Grok LLM Integration & Persistent Vector Memory Status"
        },
        {
          src: "/assets/recallops/recallops-runbook-analysis.png",
          title: "Runbook Retrieval & Recommendation",
          description: "Automated retrieval of historical incident postmortems and proven resolution procedures.",
          caption: "RecallOps AI: Automated Historical Runbook Retrieval & Synthesis"
        }
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
      githubUrl: "https://github.com/Amanamoni-Balaji/Personal-Portfolio",
      liveUrl: null,
      primaryImage: "/assets/portfolio/portfolio-hero.png",
      gallery: [
        {
          src: "/assets/portfolio/portfolio-hero.png",
          title: "Hero & Executive Introduction",
          description: "Editorial dark theme landing view highlighting engineering background, featured work, and core expertise.",
          caption: "Personal Portfolio: High-Performance Dark Editorial Architecture & Interactive React UI"
        },
        {
          src: "/assets/portfolio/portfolio-about.png",
          title: "About & Engineering Philosophy",
          description: "Detailed professional background, academic achievements (9.6 CGPA), and technical strengths.",
          caption: "Personal Portfolio: Professional Background & Academic Credentials"
        },
        {
          src: "/assets/portfolio/portfolio-skills.png",
          title: "Skills & Core Competencies Matrix",
          description: "Interactive capability matrix spanning AI/ML research, backend architectures, and frontend engineering.",
          caption: "Personal Portfolio: Interactive Technical Skills & Capabilities Matrix"
        },
        {
          src: "/assets/portfolio/portfolio-projects.png",
          title: "Featured Engineering Projects Archive",
          description: "Searchable technical archive of real-world software systems with live category filtering.",
          caption: "Personal Portfolio: Searchable Engineering Projects Archive with Live Filtering"
        },
        {
          src: "/assets/portfolio/portfolio-case-study.png",
          title: "In-Depth Technical Case Study",
          description: "Detailed project breakdown featuring system architecture, quantitative results, and implementation metrics.",
          caption: "Personal Portfolio: In-Depth Engineering Case Study & System Architecture"
        },
        {
          src: "/assets/portfolio/portfolio-experience.png",
          title: "Professional Experience & Internships",
          description: "Chronological career timeline detailing 4 technical engineering internships and key contributions.",
          caption: "Personal Portfolio: Professional Experience & Career Milestones Timeline"
        },
        {
          src: "/assets/portfolio/portfolio-certifications.png",
          title: "Verified Professional Certifications",
          description: "Catalog of 18 industry certifications with high-resolution credential previews and PDF verification.",
          caption: "Personal Portfolio: Verified Industry Certifications & Credential Previews"
        },
        {
          src: "/assets/portfolio/portfolio-contact.png",
          title: "Contact Channels & Direct Messaging",
          description: "Interactive contact hub with direct email integration, WhatsApp connect, and instant inquiry delivery.",
          caption: "Personal Portfolio: Contact Channels & Verified Direct Messaging System"
        }
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
      imageUrl: "/certificates/EduSkills_Google_AI_ML_Virtual_Internship.jpg",
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
      imageUrl: "/certificates/Blackbucks_AI_ML_Internship_Certificate.jpg",
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
      imageUrl: "/certificates/Innovation_Hacks_Full_Stack_Certificate.jpg",
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
      imageUrl: "/certificates/Blend_Vidya_AI_Training_Certificate.jpg",
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
      badge: "Associate L1 • Active",
      grade: "Associate L1",
      credentialId: "48c945094211",
      category: "Data Analytics",
      description: "Official appointment and offer documentation as Associate L1 in Data Analytics at Infotact Solutions. Comprehensive 2-page document outlining role responsibilities, EDA workflows, dashboard engineering, performance milestones, and terms.",
      skills: ["Data Analytics", "Exploratory Data Analysis", "Python", "SQL", "Microsoft Excel", "Business Dashboards"],
      pdfUrl: "/certificates/Infotact_Data_Analytics_Offer_Letter.pdf",
      imageUrl: "/certificates/Infotact_Data_Analytics_Offer_Letter.jpg",
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
      imageUrl: "/certificates/Oracle_Database_Foundations.jpg",
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
      imageUrl: "/certificates/IIT_Bombay_Python_Machine_Learning.jpg",
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
      imageUrl: "/certificates/IIT_Bombay_Java_Training.jpg",
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
      imageUrl: "/certificates/IIT_Bombay_Python_3_4_3.jpg",
      issuerLogoText: "IIT Bombay"
    },
    {
      id: "scrs-machine-learning",
      title: "Machine Learning using Python Programming Course",
      issuer: "Soft Computing Research Society (SCRS) Students' Chapter",
      organization: "Soft Computing Research Society (SCRS) Students' Chapter",
      date: "December 18, 2024 to January 14, 2025",
      year: "2024–2025",
      status: "Verified Credential",
      badge: "SCRSCC088 Verified",
      credentialId: "SCRSCC088",
      category: "AI & Machine Learning",
      description:
        "Successfully completed the Certificate Course on Machine Learning using Python Programming conducted by Soft Computing Research Society Students' Chapter at Matrusri Engineering College from December 18, 2024 to January 14, 2025.",
      skills: ["Machine Learning", "Python Programming", "Model Validation", "Soft Computing"],
      pdfUrl: "/certificates/SCRS_Machine_Learning_Python.pdf",
      imageUrl: "/certificates/SCRS_Machine_Learning_Python.jpg",
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
      imageUrl: "/certificates/HPLIFE_AI_for_Beginners.jpg",
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
      imageUrl: "/certificates/HPLIFE_AI_for_Business_Professionals.jpg",
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
      imageUrl: "/certificates/HPLIFE_Data_Science_and_Analytics.jpg",
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
      imageUrl: "/certificates/HPLIFE_Cybersecurity_Awareness.jpg",
      issuerLogoText: "HP LIFE"
    },
    {
      id: "iste-ramanujan-level1",
      title: "Srinivasa Ramanujan Mathematical Competitions 2024 – Level 1 (Chapter Level)",
      issuer: "Indian Society for Technical Education (ISTE) Tamilnadu Section",
      organization: "Indian Society for Technical Education (ISTE) Tamilnadu Section",
      date: "19th & 20th October 2024",
      year: "2024–2025",
      status: "Chapter Level Participant",
      badge: "Chapter Level Participant",
      category: "Mathematics & Honors",
      description:
        "Participated in the National Level Srinivasa Ramanujan Mathematical Competitions Level 1 (Chapter Level), conducted by ISTE Tamilnadu Section on 19th and 20th October 2024 for Engineering College Students.",
      skills: ["Advanced Mathematics", "Quantitative Aptitude", "Mathematical Logic"],
      pdfUrl: "/certificates/ISTE_Ramanujan_Math_Competition_Level_1.pdf",
      imageUrl: "/certificates/ISTE_Ramanujan_Math_Competition_Level_1.jpg",
      issuerLogoText: "ISTE"
    },
    {
      id: "iste-ramanujan-level2",
      title: "Srinivasa Ramanujan Mathematical Competitions 2024 – Level 2 (State Level)",
      issuer: "Indian Society for Technical Education (ISTE) Tamilnadu Section",
      organization: "Indian Society for Technical Education (ISTE) Tamilnadu Section",
      date: "09th & 10th November 2024",
      year: "2024–2025",
      status: "State Level Finalist",
      badge: "State Level Finalist",
      category: "Mathematics & Honors",
      description:
        "Participated in the National Level Srinivasa Ramanujan Mathematical Competitions Level 2 (State Level), conducted by ISTE Tamilnadu Section on 09th and 10th November 2024 for Engineering College Students.",
      skills: ["State Level Mathematics", "Analytical Reasoning", "Competitive Computing"],
      pdfUrl: "/certificates/ISTE_Ramanujan_Math_Competition_Level_2.pdf",
      imageUrl: "/certificates/ISTE_Ramanujan_Math_Competition_Level_2.jpg",
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
      imageUrl: "/certificates/IEI_Certificate_of_Membership.jpg",
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
      imageUrl: "/certificates/Cisco_Networking_Basics.jpg",
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
      imageUrl: "/certificates/Python_Essentials_Cisco.jpg",
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
      imageUrl: "/certificates/Data_Analytics_Essentials.jpg",
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
      imageUrl: "/certificates/Tata_Cybersecurity_Analyst_Job_Simulation.jpg",
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
      imageUrl: "/certificates/Tata_Data_Visualisation_Empowering_Business.jpg",
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
      imageUrl: "/certificates/Tata_GenAI_Powered_Data_Analytics.jpg",
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
      pdfUrl: "/certificates/Oracle_Database_Foundations.pdf",
      imageUrl: "/certificates/Oracle_Database_Foundations.jpg"
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
      pdfUrl: "/certificates/IIT_Bombay_Python_Machine_Learning.pdf",
      imageUrl: "/certificates/IIT_Bombay_Python_Machine_Learning.jpg"
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
      pdfUrl: "/certificates/IIT_Bombay_Java_Training.pdf",
      imageUrl: "/certificates/IIT_Bombay_Java_Training.jpg"
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
      pdfUrl: "/certificates/Cisco_Networking_Basics.pdf",
      imageUrl: "/certificates/Cisco_Networking_Basics.jpg"
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
      pdfUrl: "/certificates/Python_Essentials_Cisco.pdf",
      imageUrl: "/certificates/Python_Essentials_Cisco.jpg"
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
      pdfUrl: "/certificates/Data_Analytics_Essentials.pdf",
      imageUrl: "/certificates/Data_Analytics_Essentials.jpg"
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
      pdfUrl: "/certificates/Tata_Cybersecurity_Analyst_Job_Simulation.pdf",
      imageUrl: "/certificates/Tata_Cybersecurity_Analyst_Job_Simulation.jpg"
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
      pdfUrl: "/certificates/Tata_Data_Visualisation_Empowering_Business.pdf",
      imageUrl: "/certificates/Tata_Data_Visualisation_Empowering_Business.jpg"
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
      pdfUrl: "/certificates/Tata_GenAI_Powered_Data_Analytics.pdf",
      imageUrl: "/certificates/Tata_GenAI_Powered_Data_Analytics.jpg"
    }
  ],

  achievements: [
    {
      id: "datanyx-runnerup",
      title: "DATANYX 2025 – Runner-Up",
      organization: "MJCET, Hyderabad",
      track: "Telangana's 24-Hour Datathon • AgroTech Domain",
      year: "2025",
      type: "Competition",
      badge: "Runner-Up (2nd Position)",
      description:
        "Secured Second Position in DATANYX 2025, Telangana's 24-Hour Datathon, organized by Muffakham Jah College of Engineering and Technology (MJCET), on 29–30 November 2025. Also received a separate Certificate of Participation for the event. Developed an innovative AI-based solution addressing challenges in the AgroTech domain.",
      impact: "Developed predictive agricultural intelligence pipelines under strict competition time constraints, recognized by the judging panel for methodological rigor and practical utility.",
      imageUrl: "/certificates/Datanyx_2025_Certificate_of_Achievement.jpg",
      certificates: [
        {
          id: "datanyx-achievement",
          title: "DATANYX 2025 – Certificate of Achievement (Second Position)",
          label: "Certificate of Achievement",
          badge: "Runner-Up • 2nd Position",
          organization: "MJCET & IEEE SMC / AWS Cloud Clubs",
          imageUrl: "/certificates/Datanyx_2025_Certificate_of_Achievement.jpg",
          description:
            "Certificate of Achievement proudly presented to Balaji Amanamoni for securing Second Position in DATANYX'25, Telangana's 24-Hour Datathon, organized by the Department of Computer Science and Artificial Intelligence, Muffakham Jah College of Engineering and Technology (MJCET), held on 29th–30th November 2025."
        },
        {
          id: "datanyx-participation",
          title: "DATANYX 2025 – Certificate of Participation",
          label: "Certificate of Participation",
          badge: "Active Participation",
          organization: "MJCET & IEEE SMC / AWS Cloud Clubs",
          imageUrl: "/certificates/Datanyx_2025_Certificate_of_Participation.jpg",
          description:
            "Certificate of Participation proudly presented to Balaji Amanamoni for active participation in DATANYX'25, Telangana's 24-Hour Datathon, organized by the Department of Computer Science and Artificial Intelligence, Muffakham Jah College of Engineering and Technology (MJCET), held on 29th–30th November 2025."
        }
      ],
      teamGallery: [
        {
          id: "datanyx-award-stage-2",
          title: "Amanamoni Balaji — Second Position Recognition",
          caption: "Official stage photograph of Amanamoni Balaji with the Certificate of Achievement and ₹8,000 prize cheque at DATANYX 2025.",
          imageUrl: "/assets/datanyx/datanyx-award-stage-2.jpg"
        },
        {
          id: "datanyx-award-stage-1",
          title: "Amanamoni Balaji — Stage Felicitation & Award Cheque",
          caption: "Amanamoni Balaji on stage holding the DATANYX 2025 Certificate of Achievement and the ₹8,000 award cheque against the official event backdrop.",
          imageUrl: "/assets/datanyx/datanyx-award-stage-1.jpg"
        },
        {
          id: "datanyx-team-cheque-outdoors",
          title: "Team Aurum — ₹8,000 Runner-Up Award Cheque Celebration",
          caption: "Team Aurum (Amanamoni Balaji and teammates) celebrating Second Position at DATANYX 2025 with the official ₹8,000 award cheque outdoors at MJCET.",
          imageUrl: "/assets/datanyx/datanyx-team-cheque-outdoors.jpg"
        },
        {
          id: "datanyx-team-project-presentation",
          title: "Live AgroTech Project Demonstration",
          caption: "Team Aurum presenting their AgroTech AI platform ('Sowing Seeds of Sustainability') live during the 24-hour datathon at MJCET.",
          imageUrl: "/assets/datanyx/datanyx-team-project-presentation.jpg"
        },
        {
          id: "datanyx-team-nyxbot",
          title: "Team Aurum with DATANYX NYXBOT Mascot",
          caption: "Teammates posing with the official NYXBOT robot mascot and DATANYX directional arrow at Muffakham Jah College of Engineering & Technology.",
          imageUrl: "/assets/datanyx/datanyx-team-nyxbot.jpg"
        }
      ]
    },
    {
      id: "hackwithhyd",
      title: "HackWithHyderabad 3.0 – Certificate of Participation",
      organization: "Hack With India × Devnovate",
      track: "8-Hour Technology Hackathon • Microsoft Office, Hyderabad",
      year: "October 2026",
      type: "Hackathon",
      badge: "Hackathon Competitor",
      description:
        "Participated in HackWithHyderabad 3.0, an 8-hour technology hackathon organized by Hack With India in collaboration with Devnovate, held on 3rd October 2026 at Microsoft Office, Hyderabad. Contributed to the development of RecallOps AI, an AI-powered incident response copilot.",
      impact: "Engineered automated runbook retrieval and similarity-based diagnosis pipelines under high-intensity hackathon time constraints.",
      imageUrl: "/certificates/HackWithHyderabad_3_0_Certificate.jpg",
      pdfUrl: "/certificates/HackWithHyderabad_3_0_Certificate.pdf"
    },
    {
      id: "smart-india-hackathon",
      title: "Internal Hackathon for Smart India Hackathon 2025",
      organization: "Matrusri Engineering College & MoE's Innovation Cell",
      track: "Smart Classroom & Timetable Scheduler",
      year: "September 2025",
      type: "National Hackathon",
      badge: "SIH 2025 Participant",
      description:
        "Successfully participated in the Internal Hackathon for Smart India Hackathon 2025 held on 25th September 2025 at Matrusri Engineering College, organized in association with the Ministry of Education's Innovation Cell (MoE) and AICTE. Contributed to the development of TimeTrackers, an automated smart classroom and timetable constraint scheduling system.",
      impact: "Eliminated timetable slot overlaps and faculty workload distribution conflicts through automated constraint matching algorithms.",
      imageUrl: "/certificates/Smart_India_Hackathon_2025_Certificate.jpg"
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
      title: "Academic Excellence — 9.6 CGPA (B.E. Information Technology)",
      organization: "Matrusri Engineering College (Osmania University)",
      track: "Academic Performance & Coursework Honors",
      year: "2023 – Present",
      type: "Academic Standing",
      badge: "CGPA: 9.6 / 10",
      description:
        "Official academic performance record at Matrusri Engineering College (Osmania University), maintaining a cumulative CGPA of 9.6 out of 10 with a semester SGPA of 9.71 in Year III Sem VI. Consistent top-grade performance (A+ / A) across Machine Learning, Design & Analysis of Algorithms, Embedded Systems, Cloud Computing, and Network Security.",
      impact: "Maintained a consistent top-tier academic ranking throughout B.E. Information Technology, combining theoretical rigor with practical software and AI engineering implementation.",
      imageUrl: "/certificates/Academic_Excellence_Grade_Report.jpg"
    }
  ]
};
