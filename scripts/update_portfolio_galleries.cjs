const fs = require('fs');
const path = require('path');

const updatedGalleries = {
  'careflow': [
    {
      src: '/assets/careflow/careflow-hero.png',
      title: 'Executive Overview Dashboard',
      description: 'High-level hospital KPI dashboard tracking patient admissions, discharge volume, and median length of stay.',
      caption: 'CareFlow: Executive Overview Dashboard & Hospital Operational KPIs'
    },
    {
      src: '/assets/careflow/careflow-kpis.png',
      title: 'Clinical Operational KPIs',
      description: 'Real-time tracking of triage response rates, critical patient alerts, and departmental bed utilization.',
      caption: 'CareFlow: Clinical Operational KPIs & Bed Utilization Metrics'
    },
    {
      src: '/assets/careflow/careflow-charts.png',
      title: 'Admission & Patient Flow Trends',
      description: 'Time-series throughput charts analyzing patient progression across emergency and inpatient departments.',
      caption: 'CareFlow: Admission & Patient Flow Time-Series Trends'
    },
    {
      src: '/assets/careflow/careflow-process-mining.png',
      title: 'Directly-Follows Graph (DFG)',
      description: 'PM4Py process mining graph reconstructing clinical event logs and identifying non-standard transfer paths.',
      caption: 'CareFlow: PM4Py Process Discovery & Directly-Follows Graph (DFG)'
    },
    {
      src: '/assets/careflow/careflow-patient-journey.png',
      title: 'Individual Patient Trajectory',
      description: 'Detailed event log trace following a patient journey from initial triage through imaging, ICU, and discharge.',
      caption: 'CareFlow: Individual Patient Trace & Chronological Event Log Journey'
    },
    {
      src: '/assets/careflow/careflow-bottlenecks.png',
      title: 'Bottleneck & Delay Analytics',
      description: 'Quantitative analysis pinpointing prolonged transition times between emergency triage and inpatient admission.',
      caption: 'CareFlow: Clinical Bottleneck Analysis & Departmental Waiting Time Rankings'
    },
    {
      src: '/assets/careflow/careflow-predictive.png',
      title: 'Machine Learning Length-of-Stay Predictor',
      description: 'Predictive models forecasting patient discharge readiness and flagging potential readmission risks.',
      caption: 'CareFlow: Machine Learning Predictive Analytics for Patient Discharge Delays'
    },
    {
      src: '/assets/careflow/careflow-reports.png',
      title: 'Automated Clinical Reports',
      description: 'Executive report generator with multi-format export capabilities for hospital compliance audits.',
      caption: 'CareFlow: Automated Institutional Reports & Multi-Format Export Engine'
    }
  ],
  'mediassist-ai': [
    {
      src: '/assets/mediassist/mediassist-hero.png',
      title: 'Conversational Healthcare Assistant',
      description: 'Responsive landing interface introducing the clinical NLP triage assistant and instant medical inquiry system.',
      caption: 'MediAssist AI: Responsive Healthcare Assistant Landing Page'
    },
    {
      src: '/assets/mediassist/mediassist-chat.png',
      title: 'Interactive Triage Chat Interface',
      description: 'Natural language consultation dialogue analyzing user symptoms with context-aware conversational AI.',
      caption: 'MediAssist AI: Interactive Natural Language Medical Consultation Interface'
    },
    {
      src: '/assets/mediassist/mediassist-consultation.png',
      title: 'Verified Clinical Guidance',
      description: 'Structured health recommendations with source citations, precautionary measures, and clinical disclaimers.',
      caption: 'MediAssist AI: Health Guidance with Verified Clinical Sources & Safety Disclaimers'
    },
    {
      src: '/assets/mediassist/mediassist-symptoms.png',
      title: 'Multi-Symptom Assessment Tool',
      description: 'Differential symptom matrix evaluating overlapping clinical indicators to recommend appropriate specialist care.',
      caption: 'MediAssist AI: Multi-Symptom Assessment Tool & Overlap Analysis'
    },
    {
      src: '/assets/mediassist/mediassist-dashboard.png',
      title: 'Administrative Analytics Dashboard',
      description: 'Visual analytics tracking consultation volume, common symptom distributions, and triage resolution rates.',
      caption: 'MediAssist AI: Administrative Analytics Dashboard with Interactive Recharts'
    },
    {
      src: '/assets/mediassist/mediassist-history.png',
      title: 'Patient Conversation History',
      description: 'Secure session history allowing users to review previous symptom evaluations and medical recommendations.',
      caption: 'MediAssist AI: Authenticated Patient Conversation History & Session Records'
    },
    {
      src: '/assets/mediassist/mediassist-about.png',
      title: 'Clinical Methodology & Safety Guardrails',
      description: 'Architecture documentation outlining the NLP pipeline, medical knowledge base, and safety guardrails.',
      caption: 'MediAssist AI: Clinical Methodology & Safety Guardrails'
    },
    {
      src: '/assets/mediassist/mediassist-api.png',
      title: 'Django REST Framework Backend API',
      description: 'Verified RESTful endpoints handling patient authentication, symptom classification, and audit logging.',
      caption: 'MediAssist AI: Django REST Framework API Endpoints & Verification Suite'
    }
  ],
  'krishiai': [
    {
      src: '/assets/krishiai/hero-image.png',
      title: 'Agricultural Advisory Platform',
      description: 'Farmer advisory landing portal designed for accessible crop insights and climate-resilient farming.',
      caption: 'KrishiAI: Agricultural Advisory Platform Landing & Overview'
    },
    {
      src: '/assets/krishiai/krishi-input-form.png',
      title: 'Soil & Climate Parameter Inputs',
      description: 'Interactive form capturing soil nitrogen, phosphorus, potassium, pH, rainfall, and temperature data.',
      caption: 'KrishiAI: Soil Nutrient & Environmental Parameter Input Form'
    },
    {
      src: '/assets/krishiai/krishi-soil-parameters.png',
      title: 'Nutrient Calibration Matrix',
      description: 'Fine-grained calibration sliders for precise environmental and agronomic parameter input.',
      caption: 'KrishiAI: Precise Soil Chemistry Calibration Matrix'
    },
    {
      src: '/assets/krishiai/krishi-prediction-results.png',
      title: 'AI Crop Recommendation Output',
      description: 'Model prediction recommending optimal crops ranked by agronomic viability and confidence scores.',
      caption: 'KrishiAI: Ranked Crop Recommendations with Agronomic Viability Scores'
    },
    {
      src: '/assets/krishiai/krishi-pro-analysis.png',
      title: 'Pro Soil Nutrient Analysis',
      description: 'Comprehensive nutrient breakdown comparing current farm readings against optimal crop thresholds.',
      caption: 'KrishiAI: In-Depth Soil Nutrient Threshold Analysis'
    },
    {
      src: '/assets/krishiai/krishi-rainfall-trends.png',
      title: 'Precipitation & Climate Trends',
      description: 'Historical rainfall and microclimate analysis guiding seasonal sowing and irrigation schedules.',
      caption: 'KrishiAI: Historical Rainfall & Climate Trend Analysis'
    },
    {
      src: '/assets/krishiai/krishi-mlops-dashboard.png',
      title: 'MLOps Pipeline Monitoring',
      description: 'Real-time monitoring interface tracking model drift, inference latency, and dataset versioning.',
      caption: 'KrishiAI: MLOps Model Performance & Data Drift Dashboard'
    },
    {
      src: '/assets/krishiai/krishi-model-metrics.png',
      title: 'Model Evaluation & Benchmarks',
      description: 'Accuracy, precision, and recall benchmarks across Random Forest, XGBoost, and LightGBM models.',
      caption: 'KrishiAI: Multi-Model Evaluation & Precision Benchmarks'
    }
  ],
  'travelmate': [
    {
      src: '/assets/travelmate/travelmate-home.png',
      title: 'Destination Discovery Portal',
      description: 'Explore curated destinations, travel packages, and seasonal tourism highlights with search and filters.',
      caption: 'TravelMate: Destination Discovery Portal & Curated Tour Packages'
    },
    {
      src: '/assets/travelmate/travelmate-destination-details.png',
      title: 'Curated Destination Details',
      description: 'Detailed itinerary view showing package highlights, inclusions, travel guides, and photo galleries.',
      caption: 'TravelMate: Comprehensive Destination Itinerary & Pricing Breakdown'
    },
    {
      src: '/assets/travelmate/travelmate-booking.png',
      title: 'Package Reservation Interface',
      description: 'Direct booking workflow allowing travelers to select tour dates, passenger counts, and travel tiers.',
      caption: 'TravelMate: Package Reservation Interface & Booking Form'
    },
    {
      src: '/assets/travelmate/travelmate-dashboard.png',
      title: 'User Travel Dashboard',
      description: 'Personalized traveler dashboard managing active reservations, past itineraries, and booking confirmations.',
      caption: 'TravelMate: User Itinerary Dashboard & Active Booking Tracker'
    },
    {
      src: '/assets/travelmate/travelmate-profile.png',
      title: 'Traveler Profile & Preferences',
      description: 'User account management for saving traveler details, emergency contacts, and journey preferences.',
      caption: 'TravelMate: Traveler Profile & Account Preferences'
    },
    {
      src: '/assets/travelmate/travelmate-contact.png',
      title: 'Customer Support & Inquiry Center',
      description: 'Direct inquiry form and traveler support channels for trip customization and booking assistance.',
      caption: 'TravelMate: Direct Customer Support & Inquiry Portal'
    },
    {
      src: '/assets/travelmate/travelmate-register.png',
      title: 'User Authentication & Sign Up',
      description: 'Secure registration portal enabling traveler accounts, booking history access, and itinerary saving.',
      caption: 'TravelMate: Secure User Authentication & Registration'
    },
    {
      src: '/assets/travelmate/Screenshot_2026-05-30_151658.png',
      title: 'Curated Destination Showcase',
      description: 'Visual showcase of premier domestic and international destinations with verified itineraries.',
      caption: 'TravelMate: Premier Domestic & International Destination Showcase'
    }
  ],
  'time-trackers': [
    {
      src: '/assets/smartclassroom/Screenshot 2025-09-24 184559.png',
      title: 'Institutional Portal & Role Access',
      description: 'Role-based authentication interface for academic administrators, department heads, and faculty members.',
      caption: 'TimeTrackers: Role Selection & Academic Portal Login'
    },
    {
      src: '/assets/smartclassroom/Screenshot 2025-09-24 184644.png',
      title: 'Academic Department Configuration',
      description: 'Setup module for defining academic years, semesters, lecture halls, and department course loads.',
      caption: 'TimeTrackers: Institution Setup & Department Configuration'
    },
    {
      src: '/assets/smartclassroom/Screenshot 2025-09-24 184702.png',
      title: 'Faculty Teaching Availability Matrix',
      description: 'Constraint specification view capturing teacher slot preferences, working hours, and workload ceilings.',
      caption: 'TimeTrackers: Faculty Constraints & Teaching Availability Matrix'
    },
    {
      src: '/assets/smartclassroom/Screenshot 2025-09-24 184805.png',
      title: 'Classroom & Lab Capacity Allocation',
      description: 'Facility management interface optimizing seating capacity and specialized laboratory equipment utilization.',
      caption: 'TimeTrackers: Classroom Capacity & Laboratory Resource Management'
    },
    {
      src: '/assets/smartclassroom/Screenshot 2025-09-24 184817.png',
      title: 'Conflict-Free Master Timetable Grid',
      description: 'Generated weekly master schedule eliminating faculty double-booking and room overlap.',
      caption: 'TimeTrackers: Weekly Master Timetable Grid with Zero Collisions'
    },
    {
      src: '/assets/smartclassroom/Screenshot 2025-09-24 184833.png',
      title: 'Automated Scheduling Engine Output',
      description: 'Algorithmic solver output resolving complex departmental constraints in real-time.',
      caption: 'TimeTrackers: Automated Timetable Generation Engine Output'
    },
    {
      src: '/assets/smartclassroom/Screenshot 2025-09-24 184848.png',
      title: 'Practical & Lab Session Distribution',
      description: 'Dedicated scheduling view for multi-hour laboratory blocks and concurrent batch assignments.',
      caption: 'TimeTrackers: Laboratory Block Scheduling & Concurrent Batch Allocation'
    },
    {
      src: '/assets/smartclassroom/Screenshot 2025-09-24 185019.png',
      title: 'Faculty Schedule & Workload Balance',
      description: 'Weekly faculty schedule view verifying balanced workload distribution and zero scheduling clashes.',
      caption: 'TimeTrackers: Weekly Faculty Schedule & Workload Balance'
    }
  ],
  'agro-guardian': [
    {
      src: '/assets/agroguardian/crop-disease.png',
      title: 'Deep Learning Crop Disease Detection',
      description: 'Computer vision model classifying leaf pathology from photos and recommending targeted treatments.',
      caption: 'Agro_Guardian: Deep Learning Leaf Disease Classification & Diagnostic View'
    },
    {
      src: '/assets/agroguardian/crop-recommend.png',
      title: 'Soil-Based Crop Recommendation',
      description: 'Intelligent recommendation engine analyzing NPK, temperature, humidity, and pH for crop suitability.',
      caption: 'Agro_Guardian: Soil Nutrient Matrix & Crop Recommendation Interface'
    },
    {
      src: '/assets/agroguardian/agro-advanced-soil.png',
      title: 'Advanced Parameter Input Matrix',
      description: 'Fine-grained agronomic parameter dashboard for precision soil chemistry and climate specifications.',
      caption: 'Agro_Guardian: Precision Soil Chemistry & Climate Specification Matrix'
    },
    {
      src: '/assets/agroguardian/agro-features-grid.png',
      title: 'Modular Agronomic Feature Suite',
      description: 'Comprehensive feature hub offering weather forecasts, crop schedules, and rotation planning.',
      caption: 'Agro_Guardian: Modular Agronomic Features & Decision Tools Hub'
    },
    {
      src: '/assets/agroguardian/agro-weather-advisory.png',
      title: 'Microclimate & Weather Advisory',
      description: 'Localized precipitation forecasts, temperature tracking, and climate warnings for crop health.',
      caption: 'Agro_Guardian: Localized Weather Forecast & Microclimate Advisory'
    },
    {
      src: '/assets/agroguardian/agro-simple-mode.png',
      title: 'Streamlined Farmer Advisory Interface',
      description: 'Simplified advisory flow allowing farmers to quickly access personalized crop recommendations.',
      caption: 'Agro_Guardian: Simplified Rapid Farmer Advisory Flow'
    },
    {
      src: '/assets/agroguardian/agro-crop-rotation.png',
      title: 'Crop Rotation & Soil Preservation',
      description: 'Agronomic advisory tool proposing multi-season crop sequencing to preserve soil nutrients.',
      caption: 'Agro_Guardian: Multi-Season Crop Rotation & Soil Health Planner'
    },
    {
      src: '/assets/agroguardian/agro-fertilizer-calculator.png',
      title: 'NPK Fertilizer Optimizer',
      description: 'Calculates precise fertilizer dosages to correct nutrient deficits without over-fertilization.',
      caption: 'Agro_Guardian: NPK Fertilizer Dosage & Soil Deficit Optimizer'
    }
  ],
  'recallops-ai': [
    {
      src: '/assets/recallops/hero.png',
      title: 'RecallOps AI Incident Copilot',
      description: 'SRE command center interface integrating LLM intelligence with persistent operational memory.',
      caption: 'RecallOps AI: SRE Incident Investigation & Persistent Memory Copilot'
    },
    {
      src: '/assets/recallops/recallops-metrics.png',
      title: 'System Operational Metrics',
      description: 'Real-time dashboard tracking system health, API response latency, and memory engine connectivity.',
      caption: 'RecallOps AI: Real-Time SRE Operational Metrics & Latency Tracking'
    },
    {
      src: '/assets/recallops/recallops-incidents.png',
      title: 'Active Incident Queue & Triage',
      description: 'Prioritized incident stream categorizing operational alerts by severity, service, and blast radius.',
      caption: 'RecallOps AI: Prioritized Incident Stream & Alert Triage Queue'
    },
    {
      src: '/assets/recallops/recallops-incident-detail.png',
      title: 'Root Cause Investigation View',
      description: 'Detailed incident view displaying correlated log traces, anomalous metrics, and automated triage notes.',
      caption: 'RecallOps AI: Root Cause Diagnostic View with Correlated Log Traces'
    },
    {
      src: '/assets/recallops/recallops-demolab.png',
      title: 'Incident Simulation Lab',
      description: 'Interactive testing sandbox allowing SRE teams to simulate microservice outages and verify agent responses.',
      caption: 'RecallOps AI: Interactive Microservice Outage Simulation Sandbox'
    },
    {
      src: '/assets/recallops/recallops-simulation.png',
      title: 'Real-Time Outage Simulation',
      description: 'Live demonstration of automated incident ingestion and contextual runbook retrieval during an active outage.',
      caption: 'RecallOps AI: Live Automated Incident Ingestion & Outage Simulation'
    },
    {
      src: '/assets/recallops/recallops-system-status.png',
      title: 'Hindsight & Grok Status Panel',
      description: 'Service health monitor tracking Grok LLM integration, vector database indexing, and memory health.',
      caption: 'RecallOps AI: Grok LLM Integration & Persistent Vector Memory Status'
    },
    {
      src: '/assets/recallops/recallops-runbook-analysis.png',
      title: 'Runbook Retrieval & Recommendation',
      description: 'Automated retrieval of historical incident postmortems and proven resolution procedures.',
      caption: 'RecallOps AI: Automated Historical Runbook Retrieval & Synthesis'
    }
  ],
  'personal-portfolio': [
    {
      src: '/assets/portfolio/portfolio-hero.png',
      title: 'Hero & Executive Introduction',
      description: 'Editorial dark theme landing view highlighting engineering background, featured work, and core expertise.',
      caption: 'Personal Portfolio: High-Performance Dark Editorial Architecture & Interactive React UI'
    },
    {
      src: '/assets/portfolio/portfolio-about.png',
      title: 'About & Engineering Philosophy',
      description: 'Detailed professional background, academic achievements (9.6 CGPA), and technical strengths.',
      caption: 'Personal Portfolio: Professional Background & Academic Credentials'
    },
    {
      src: '/assets/portfolio/portfolio-skills.png',
      title: 'Skills & Core Competencies Matrix',
      description: 'Interactive capability matrix spanning AI/ML research, backend architectures, and frontend engineering.',
      caption: 'Personal Portfolio: Interactive Technical Skills & Capabilities Matrix'
    },
    {
      src: '/assets/portfolio/portfolio-projects.png',
      title: 'Featured Engineering Projects Archive',
      description: 'Searchable technical archive of real-world software systems with live category filtering.',
      caption: 'Personal Portfolio: Searchable Engineering Projects Archive with Live Filtering'
    },
    {
      src: '/assets/portfolio/portfolio-case-study.png',
      title: 'In-Depth Technical Case Study',
      description: 'Detailed project breakdown featuring system architecture, quantitative results, and implementation metrics.',
      caption: 'Personal Portfolio: In-Depth Engineering Case Study & System Architecture'
    },
    {
      src: '/assets/portfolio/portfolio-experience.png',
      title: 'Professional Experience & Internships',
      description: 'Chronological career timeline detailing 4 technical engineering internships and key contributions.',
      caption: 'Personal Portfolio: Professional Experience & Career Milestones Timeline'
    },
    {
      src: '/assets/portfolio/portfolio-certifications.png',
      title: 'Verified Professional Certifications',
      description: 'Catalog of 18 industry certifications with high-resolution credential previews and PDF verification.',
      caption: 'Personal Portfolio: Verified Industry Certifications & Credential Previews'
    },
    {
      src: '/assets/portfolio/portfolio-contact.png',
      title: 'Contact Channels & Direct Messaging',
      description: 'Interactive contact hub with direct email integration, WhatsApp connect, and instant inquiry delivery.',
      caption: 'Personal Portfolio: Contact Channels & Verified Direct Messaging System'
    }
  ]
};

const filePath = path.join(__dirname, '..', 'src', 'data', 'portfolioData.js');
let content = fs.readFileSync(filePath, 'utf8');

for (const [projectId, items] of Object.entries(updatedGalleries)) {
  const regex = new RegExp('(id:\\s*["\']' + projectId + '["\'][\\s\\S]*?gallery:\\s*\\[)([\\s\\S]*?)(\\][\\s\\S]*?featured:)', 'm');
  const formattedItems = '\n' + items.map(item => {
    return '        {\n' +
      '          src: "' + item.src + '",\n' +
      '          title: ' + JSON.stringify(item.title) + ',\n' +
      '          description: ' + JSON.stringify(item.description) + ',\n' +
      '          caption: ' + JSON.stringify(item.caption) + '\n' +
      '        }';
  }).join(',\n') + '\n      ';

  if (regex.test(content)) {
    content = content.replace(regex, '$1' + formattedItems + '$3');
    console.log('Successfully updated gallery for: ' + projectId);
  } else {
    console.error('FAILED to find match for: ' + projectId);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating portfolioData.js!');
