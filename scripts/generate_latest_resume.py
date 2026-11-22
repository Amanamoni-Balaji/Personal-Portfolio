import os
import shutil
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_resume(output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()

    c_primary = colors.HexColor("#0f172a")
    c_accent = colors.HexColor("#0284c7")
    c_subtext = colors.HexColor("#475569")
    c_line = colors.HexColor("#cbd5e1")

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=c_primary,
        alignment=1,
        spaceAfter=2
    )

    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=c_subtext,
        alignment=1,
        spaceAfter=6
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=c_accent,
        spaceBefore=6,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.5,
        textColor=c_primary
    )

    bold_label = ParagraphStyle(
        'BoldLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11.5,
        textColor=c_primary
    )

    story = []

    # Title & Contact
    story.append(Paragraph("AMANAMONI BALAJI", title_style))
    story.append(Paragraph(
        "amanamonibalaji1828@gmail.com &nbsp;|&nbsp; +91 7981591655 &nbsp;|&nbsp; "
        "GitHub: github.com/Amanamoni-Balaji &nbsp;|&nbsp; LinkedIn: linkedin.com/in/amanamoni-balaji &nbsp;|&nbsp; Hyderabad, India",
        contact_style
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=c_line, spaceBefore=0, spaceAfter=4))

    # Education
    story.append(Paragraph("EDUCATION", section_heading))
    edu_data = [
        [
            Paragraph("<b>Matrusri Engineering College</b>, Hyderabad<br/><font color='#475569'><i>Bachelor of Engineering (Information Technology)</i></font>", body_style),
            Paragraph("<b>2023 – 2027</b><br/><font color='#0284c7'><b>CGPA: 9.6 / 10</b></font>", ParagraphStyle('R1', parent=body_style, alignment=2))
        ],
        [
            Paragraph("<b>Narayana Junior College</b>, Hyderabad<br/><font color='#475569'><i>Intermediate (MPC)</i></font>", body_style),
            Paragraph("<b>2021 – 2023</b><br/><font color='#0284c7'><b>Percentage: 98.2%</b></font>", ParagraphStyle('R2', parent=body_style, alignment=2))
        ],
        [
            Paragraph("<b>Gowthami High School</b>, Achampet<br/><font color='#475569'><i>Secondary School Certificate (Class X)</i></font>", body_style),
            Paragraph("<b>Completed</b><br/><font color='#0284c7'><b>GPA: 10.0 / 10</b></font>", ParagraphStyle('R3', parent=body_style, alignment=2))
        ]
    ]
    t_edu = Table(edu_data, colWidths=[390, 150])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)

    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    summary_text = (
        "Information Technology undergraduate with a 9.6 CGPA and hands-on experience in AI/ML, Data Analytics, and Full Stack Development. "
        "Experienced in building AI-powered applications using Python, Django, React.js, SQL, machine learning, RAG, and data analytics tools. "
        "Strong problem-solving skills with experience developing solutions across agriculture, software incident management, and academic scheduling."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 2))

    # Technical Skills
    story.append(Paragraph("SKILLS", section_heading))
    skills_data = [
        [Paragraph("<b>Programming:</b>", bold_label), Paragraph("C, Python, Java, SQL", body_style)],
        [Paragraph("<b>Core Fundamentals:</b>", bold_label), Paragraph("Data Structures & Algorithms, Object-Oriented Programming (OOP)", body_style)],
        [Paragraph("<b>AI & Machine Learning:</b>", bold_label), Paragraph("Artificial Intelligence, Machine Learning, CNN, RAG", body_style)],
        [Paragraph("<b>Web Development:</b>", bold_label), Paragraph("Django, React.js, Python Full Stack Development", body_style)],
        [Paragraph("<b>Data Analytics:</b>", bold_label), Paragraph("Microsoft Excel, Data Analysis", body_style)],
        [Paragraph("<b>Tools & Platforms:</b>", bold_label), Paragraph("Git, GitHub, SQLite", body_style)]
    ]
    t_skills = Table(skills_data, colWidths=[130, 410])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 2))

    # Projects
    story.append(Paragraph("PROJECTS", section_heading))
    proj_items = [
        "<b>KrishiAI – AI-Powered Smart Advisory for Farmers</b><br/>"
        "• Developed an intelligent agriculture solution leveraging AI and data analytics to support farm decision-making.<br/>"
        "• Integrated rainfall forecasting, soil-health insights, and crop advisory modules for improved planning.<br/>"
        "• Applied machine learning techniques to generate recommendations that enhance productivity and reduce cultivation risks.",

        "<b>TravelMate – Travel Booking & Destination Management System</b><br/>"
        "• Engineered a Django-based web application for destination exploration and package reservations.<br/>"
        "• Implemented booking management, itinerary tracking, and personalized user dashboards.<br/>"
        "• Designed scalable backend workflows to ensure secure and efficient travel management.",

        "<b>TimeTrackers – Smart Classroom & Timetable Scheduler (SIH)</b><br/>"
        "• Contributed to frontend and backend development of a Smart Classroom solution with an automated timetable scheduler to improve academic planning and resource utilization.<br/>"
        "• Implemented scheduling logic to minimize timetable conflicts and enable efficient allocation of classrooms and faculty.<br/>"
        "• Developed features to streamline timetable management and improve coordination of academic resources.",

        "<b>Agro_Guardian – AI-Based Crop Recommendation and Disease Prediction</b><br/>"
        "• Developed an AI-based system for crop recommendation and disease prediction.<br/>"
        "• Recommends suitable crops based on soil and weather conditions.<br/>"
        "• Uses CNN to detect potato leaf diseases from images.",

        "<b>RecallOps AI – Hindsight-Powered Incident Response & Root Cause Investigation Agent</b><br/>"
        "• Developed an AI-powered SRE agent to investigate software incidents, analyze logs and symptoms, and identify potential root causes.<br/>"
        "• Implemented RAG with persistent memory to retrieve relevant past incidents and resolutions, enabling faster and context-aware investigations.<br/>"
        "• Built a closed-loop learning workflow that stores confirmed resolutions and uses them to improve recommendations for future incidents.",

        "<b>Personal Portfolio Website</b><br/>"
        "• Built a responsive React.js portfolio platform to present projects, technical expertise, certifications, and achievements.<br/>"
        "• Implemented reusable components, intuitive navigation, and mobile-first design principles.<br/>"
        "• Optimized performance and accessibility for a seamless user experience across devices."
    ]
    for p in proj_items:
        story.append(Paragraph(p, body_style))
        story.append(Spacer(1, 2))

    # Internships
    story.append(Paragraph("INTERNSHIPS", section_heading))
    exp_data = [
        [
            Paragraph("<b>Data Analytics Intern</b> — Infotact Solutions", bold_label),
            Paragraph("<b>Ongoing</b>", ParagraphStyle('R_exp1', parent=body_style, alignment=2))
        ],
        [
            Paragraph("<b>AI Machine Learning Engineer Intern</b> — Blackbucks Education Pvt. Ltd.", bold_label),
            Paragraph("<b>May 2026 – June 2026</b>", ParagraphStyle('R_exp2', parent=body_style, alignment=2))
        ],
        [
            Paragraph("<b>Full Stack Development Intern</b> — Innovation Hacks", bold_label),
            Paragraph("<b>Completed</b>", ParagraphStyle('R_exp3', parent=body_style, alignment=2))
        ],
        [
            Paragraph("<b>Artificial Intelligence Intern</b> — Blend Vidya", bold_label),
            Paragraph("<b>Completed</b>", ParagraphStyle('R_exp4', parent=body_style, alignment=2))
        ]
    ]
    t_exp = Table(exp_data, colWidths=[380, 160])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_exp)
    story.append(Spacer(1, 2))

    # Certifications
    story.append(Paragraph("CERTIFICATIONS", section_heading))
    certs_text = (
        "• <b>AWS Generative AI Virtual Internship</b> — EduSkills &nbsp;|&nbsp; "
        "• <b>AI-ML Virtual Internship</b> — EduSkills<br/>"
        "• <b>Database Foundations</b> — Oracle &nbsp;|&nbsp; "
        "• <b>Machine Learning Using Python</b> — SCRS &nbsp;|&nbsp; "
        "• <b>Networking Basics</b> — Cisco"
    )
    story.append(Paragraph(certs_text, body_style))
    story.append(Spacer(1, 2))

    # Achievements
    story.append(Paragraph("ACHIEVEMENTS", section_heading))
    ach_text = (
        "• <b>Runner-Up in Datanyx 2025 Datathon</b> conducted by MJCET, Hyderabad, for developing an innovative AI-based solution addressing challenges in the AgroTech domain.<br/>"
        "• <b>Competed in HackWithHyderabad 3.0</b> as part of a team and contributed to the development of RecallOps AI, an AI-powered incident response solution.<br/>"
        "• <b>Contributed to Smart India Hackathon (SIH)</b> through the development of a Smart Classroom & Timetable Scheduler.<br/>"
        "• <b>Active Member of the Tech Tycoons Club</b> at Matrusri Engineering College, contributing to technical and project-based activities.<br/>"
        "• <b>Academic Excellence:</b> Maintained a CGPA of 9.6 while consistently excelling in technical coursework (98.2% in Intermediate and 10.0 GPA in SSC)."
    )
    story.append(Paragraph(ach_text, body_style))

    doc.build(story)
    print(f"Generated latest resume at {output_path}")

if __name__ == '__main__':
    out1 = "d:\\Portfolio_Final\\public\\Amanamoni_Balaji_Resume.pdf"
    out2 = "d:\\Portfolio_Final\\public\\resume.pdf"
    generate_resume(out1)
    shutil.copyfile(out1, out2)
    print("Resume successfully synced to public/")
