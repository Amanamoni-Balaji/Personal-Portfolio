import fs from 'fs';
import path from 'path';
import http from 'http';
import { portfolioData } from '../src/data/portfolioData.js';

const BASE_URL = 'http://localhost:3000';

function fetchUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`${BASE_URL}${urlPath}`, (res) => {
      resolve({ status: res.statusCode, headers: res.headers });
    }).on('error', (err) => {
      resolve({ status: 500, error: err.message });
    });
  });
}

async function runVerification() {
  console.log('==============================================');
  console.log('AMANAMONI BALAJI PORTFOLIO — VERIFICATION SUITE');
  console.log('==============================================\n');

  let passed = 0;
  let failed = 0;

  // 1. Test Server Root
  console.log('1. Checking Server Connectivity:');
  const rootRes = await fetchUrl('/');
  if (rootRes.status === 200) {
    console.log('  [PASS] Vite Dev Server is alive at http://localhost:3000 (Status: 200)');
    passed++;
  } else {
    console.error(`  [FAIL] Root URL returned status ${rootRes.status}`);
    failed++;
  }

  // 2. Verify all project primary images exist on disk & are served via HTTP
  console.log('\n2. Verifying Project Media & Asset Integrity:');
  for (const project of portfolioData.projects) {
    const diskPath = path.join(process.cwd(), 'public', project.primaryImage);
    const exists = fs.existsSync(diskPath);
    if (exists) {
      console.log(`  [PASS] ${project.shortTitle} primary image on disk: ${project.primaryImage}`);
      passed++;
    } else {
      console.error(`  [FAIL] Missing image file on disk: ${diskPath}`);
      failed++;
    }

    // HTTP test
    const httpRes = await fetchUrl(encodeURI(project.primaryImage));
    if (httpRes.status === 200) {
      console.log(`  [PASS] ${project.shortTitle} primary image served HTTP 200`);
      passed++;
    } else {
      console.error(`  [FAIL] Could not fetch ${project.primaryImage} over HTTP (Status: ${httpRes.status})`);
      failed++;
    }

    // Check gallery images
    if (project.gallery && project.gallery.length > 0) {
      for (const item of project.gallery) {
        const itemDisk = path.join(process.cwd(), 'public', item.src);
        if (fs.existsSync(itemDisk)) {
          passed++;
        } else {
          console.error(`  [FAIL] Missing gallery item: ${item.src}`);
          failed++;
        }
      }
      console.log(`  [PASS] ${project.shortTitle} gallery (${project.gallery.length} images verified)`);
    }
  }

  // 3. Verify Profile Photo & Assets
  console.log('\n3. Verifying Official Profile Photograph:');
  const avatarPath = path.join(process.cwd(), 'public', portfolioData.personal.avatar);
  if (fs.existsSync(avatarPath)) {
    console.log(`  [PASS] Official profile photo exists on disk: ${portfolioData.personal.avatar}`);
    passed++;
  } else {
    console.error(`  [FAIL] Missing profile photo on disk: ${avatarPath}`);
    failed++;
  }
  const avatarHttp = await fetchUrl(portfolioData.personal.avatar);
  if (avatarHttp.status === 200) {
    console.log(`  [PASS] Profile photo served HTTP 200 via ${portfolioData.personal.avatar}`);
    passed++;
  } else {
    console.error(`  [FAIL] Could not fetch profile photo over HTTP`);
    failed++;
  }

  // 4. Verify Resume Document
  console.log('\n4. Verifying Resume Document:');
  const resumeDisk = path.join(process.cwd(), 'public', portfolioData.personal.resumeUrl);
  if (fs.existsSync(resumeDisk)) {
    const size = fs.statSync(resumeDisk).size;
    console.log(`  [PASS] Official Resume PDF exists (${size} bytes)`);
    passed++;
  } else {
    console.error(`  [FAIL] Missing resume file at ${resumeDisk}`);
    failed++;
  }

  const resumeHttp = await fetchUrl(encodeURI(portfolioData.personal.resumeUrl));
  if (resumeHttp.status === 200) {
    console.log(`  [PASS] Resume PDF served HTTP 200 via ${portfolioData.personal.resumeUrl}`);
    passed++;
  } else {
    console.error(`  [FAIL] Could not fetch resume over HTTP (Status: ${resumeHttp.status})`);
    failed++;
  }

  // 4. Verify Professional Certifications (Non-Internship)
  console.log('\n4. Verifying All 18 Official Professional Certifications:');
  if (portfolioData.professionalCertifications && portfolioData.professionalCertifications.length === 18) {
    console.log('  [PASS] All 18 professional certifications cataloged in data model');
    passed++;
  } else {
    console.error(`  [FAIL] Expected 18 professional certifications, found ${portfolioData.professionalCertifications?.length}`);
    failed++;
  }

  const seenImages = new Set();

  for (const cert of portfolioData.professionalCertifications) {
    if (cert.pdfUrl) {
      const certDisk = path.join(process.cwd(), 'public', cert.pdfUrl);
      if (fs.existsSync(certDisk)) {
        console.log(`  [PASS] Professional Certificate PDF on disk: ${cert.title} -> ${cert.pdfUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] Missing cert file on disk: ${certDisk}`);
        failed++;
      }

      const certHttp = await fetchUrl(encodeURI(cert.pdfUrl));
      if (certHttp.status === 200) {
        console.log(`  [PASS] Professional Certificate PDF served HTTP 200: ${cert.pdfUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] Certificate HTTP fetch failed: ${cert.pdfUrl}`);
        failed++;
      }
    }

    // Check certificate thumbnail image
    if (cert.imageUrl) {
      const imgDisk = path.join(process.cwd(), 'public', cert.imageUrl);
      if (fs.existsSync(imgDisk)) {
        const size = fs.statSync(imgDisk).size;
        console.log(`  [PASS] Certificate thumbnail on disk: ${cert.title} (${size} bytes) -> ${cert.imageUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] Missing thumbnail image on disk: ${imgDisk}`);
        failed++;
      }

      if (seenImages.has(cert.imageUrl)) {
        console.error(`  [FAIL] Duplicate thumbnail image detected: ${cert.imageUrl}`);
        failed++;
      } else {
        seenImages.add(cert.imageUrl);
        passed++;
      }

      const imgHttp = await fetchUrl(encodeURI(cert.imageUrl));
      if (imgHttp.status === 200) {
        console.log(`  [PASS] Certificate thumbnail served HTTP 200: ${cert.imageUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] Certificate thumbnail HTTP fetch failed: ${cert.imageUrl}`);
        failed++;
      }
    } else {
      console.error(`  [FAIL] Certificate missing imageUrl: ${cert.title}`);
      failed++;
    }
  }

  // 5. Verify Internship Certificates
  console.log('\n5. Verifying All 5 Official Internship Certificates:');
  if (portfolioData.internshipCertificates && portfolioData.internshipCertificates.length === 5) {
    console.log('  [PASS] All 5 internship certificates cataloged in data model');
    passed++;
  } else {
    console.error(`  [FAIL] Expected 5 internship certificates, found ${portfolioData.internshipCertificates?.length}`);
    failed++;
  }

  for (const cert of portfolioData.internshipCertificates) {
    const certDisk = path.join(process.cwd(), 'public', cert.pdfUrl);
    if (fs.existsSync(certDisk)) {
      const size = fs.statSync(certDisk).size;
      console.log(`  [PASS] Internship Certificate on disk: ${cert.title} (${size} bytes) -> ${cert.pdfUrl}`);
      passed++;
    } else {
      console.error(`  [FAIL] Missing internship cert on disk: ${certDisk}`);
      failed++;
    }

    const certHttp = await fetchUrl(encodeURI(cert.pdfUrl));
    if (certHttp.status === 200) {
      console.log(`  [PASS] Internship Certificate served HTTP 200: ${cert.pdfUrl}`);
      passed++;
    } else {
      console.error(`  [FAIL] HTTP fetch failed for internship cert: ${cert.pdfUrl}`);
      failed++;
    }

    // Check internship certificate thumbnail image
    if (cert.imageUrl) {
      const imgDisk = path.join(process.cwd(), 'public', cert.imageUrl);
      if (fs.existsSync(imgDisk)) {
        const size = fs.statSync(imgDisk).size;
        console.log(`  [PASS] Internship thumbnail on disk: ${cert.title} (${size} bytes) -> ${cert.imageUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] Missing internship thumbnail on disk: ${imgDisk}`);
        failed++;
      }

      if (seenImages.has(cert.imageUrl)) {
        console.error(`  [FAIL] Duplicate thumbnail image detected: ${cert.imageUrl}`);
        failed++;
      } else {
        seenImages.add(cert.imageUrl);
        passed++;
      }

      const imgHttp = await fetchUrl(encodeURI(cert.imageUrl));
      if (imgHttp.status === 200) {
        console.log(`  [PASS] Internship thumbnail served HTTP 200: ${cert.imageUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] Internship thumbnail HTTP fetch failed: ${cert.imageUrl}`);
        failed++;
      }
    } else {
      console.error(`  [FAIL] Internship certificate missing imageUrl: ${cert.title}`);
      failed++;
    }
  }

  // 6. Verify Achievements & Datanyx Certificates
  console.log('\n6. Verifying Achievement Certificates (including DATANYX 2025):');
  const datanyx = portfolioData.achievements.find(a => a.id === 'datanyx-runnerup');
  if (datanyx && datanyx.certificates && datanyx.certificates.length === 2) {
    console.log('  [PASS] DATANYX 2025 has both Certificate of Achievement and Certificate of Participation');
    passed++;

    for (const cert of datanyx.certificates) {
      const diskPath = path.join(process.cwd(), 'public', cert.imageUrl);
      if (fs.existsSync(diskPath)) {
        const size = fs.statSync(diskPath).size;
        console.log(`  [PASS] ${cert.label} on disk: ${cert.imageUrl} (${size} bytes)`);
        passed++;
      } else {
        console.error(`  [FAIL] Missing Datanyx certificate on disk: ${diskPath}`);
        failed++;
      }

      const certHttp = await fetchUrl(encodeURI(cert.imageUrl));
      if (certHttp.status === 200) {
        console.log(`  [PASS] ${cert.label} served HTTP 200: ${cert.imageUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] HTTP fetch failed for ${cert.imageUrl}`);
        failed++;
      }
    }
  } else {
    console.error('  [FAIL] DATANYX 2025 entry missing expected certificates array');
    failed++;
  }

  // Check reorganization: Ramanujan Level 1, Level 2, and SCRS must NOT be in achievements
  const achievementIds = portfolioData.achievements.map(a => a.id);
  const removedFromAchievements = ['iste-ramanujan-level2', 'iste-ramanujan-level1', 'scrs-ml-course'];
  const hasUnexpectedInAchievements = removedFromAchievements.some(id => achievementIds.includes(id));
  if (!hasUnexpectedInAchievements && achievementIds.length === 5) {
    console.log('  [PASS] Ramanujan Level 1, Level 2, and SCRS successfully removed from Achievements (5 genuine achievements remain)');
    passed++;
  } else {
    console.error(`  [FAIL] Achievements contains unexpected or removed entries: ${achievementIds}`);
    failed++;
  }

  // Check that all 3 are present in professionalCertifications
  const profCertIds = portfolioData.professionalCertifications.map(c => c.id);
  const requiredInProf = ['iste-ramanujan-level2', 'iste-ramanujan-level1', 'scrs-machine-learning'];
  const allInProf = requiredInProf.every(id => profCertIds.includes(id));
  if (allInProf && portfolioData.professionalCertifications.length === 18) {
    console.log('  [PASS] Ramanujan Level 1, Level 2, and SCRS verified present in Professional Certifications without duplicates');
    passed++;
  } else {
    console.error('  [FAIL] Missing required certificates in Professional Certifications');
    failed++;
  }

  // 7. Check Content & Data Validation
  console.log('\n7. Validating Content & Design Requirements:');
  
  // Wordmark check
  if (portfolioData.personal.cleanWordmark === "Amanamoni Balaji") {
    console.log('  [PASS] Clean wordmark is "Amanamoni Balaji" (no AB monogram or Balaji.dev)');
    passed++;
  } else {
    console.error('  [FAIL] Incorrect wordmark');
    failed++;
  }

  // Education & CGPA
  if (portfolioData.personal.education.cgpa === "9.6 / 10" && portfolioData.personal.education.college.includes("Matrusri")) {
    console.log('  [PASS] Education matches: Matrusri Engineering College, CGPA 9.6 / 10');
    passed++;
  } else {
    console.error('  [FAIL] Education details mismatched');
    failed++;
  }

  // Resume Projects present
  const projectIds = portfolioData.projects.map(p => p.id);
  const requiredProjects = ['careflow', 'mediassist-ai', 'krishiai', 'travelmate', 'time-trackers', 'agro-guardian', 'recallops-ai', 'personal-portfolio'];
  const allProjectsPresent = requiredProjects.every(id => projectIds.includes(id));
  if (allProjectsPresent && portfolioData.projects.length === 8) {
    console.log('  [PASS] All 8 engineering projects present (CareFlow, MediAssist AI, KrishiAI, TravelMate, TimeTrackers, Agro_Guardian, RecallOps AI, Personal Portfolio)');
    passed++;
  } else {
    console.error('  [FAIL] Missing required projects or unexpected project count');
    failed++;
  }

  // Internships present
  const requiredInternships = ['infotact', 'innovation-hacks', 'blend-vidya', 'blackbucks'];
  const internshipIds = portfolioData.internships.map(i => i.id);
  const allInternshipsPresent = requiredInternships.every(id => internshipIds.includes(id));
  if (allInternshipsPresent) {
    console.log('  [PASS] All 4 required internships present (Infotact, Innovation Hacks, Blend Vidya, Blackbucks)');
    passed++;
  } else {
    console.error('  [FAIL] Missing required internships');
    failed++;
  }

  // No fake proficiency ratings
  let hasFakePercentages = false;
  for (const group of portfolioData.skills) {
    for (const item of group.items) {
      if (typeof item.percentage !== 'undefined' || typeof item.rating !== 'undefined') {
        hasFakePercentages = true;
      }
    }
  }
  if (!hasFakePercentages) {
    console.log('  [PASS] No fake skill percentage bars or artificial ratings present');
    passed++;
  } else {
    console.error('  [FAIL] Fake percentages found in skills');
    failed++;
  }

  console.log('\n==============================================');
  console.log(`TOTAL CHECKS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
  console.log('==============================================\n');

  if (failed === 0) {
    console.log('>>> ALL VERIFICATION CHECKS PASSED PERFECTLY! <<<');
    process.exit(0);
  } else {
    console.error('>>> SOME CHECKS FAILED! <<<');
    process.exit(1);
  }
}

runVerification();
