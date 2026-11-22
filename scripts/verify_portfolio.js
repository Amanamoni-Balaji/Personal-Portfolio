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

  // 4. Verify Verified Certificate Files
  console.log('\n4. Verifying Official Certificate Files:');
  for (const cert of portfolioData.certifications) {
    if (cert.pdfUrl) {
      const certDisk = path.join(process.cwd(), 'public', cert.pdfUrl);
      if (fs.existsSync(certDisk)) {
        console.log(`  [PASS] Certificate file exists for ${cert.title}: ${cert.pdfUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] Missing cert file on disk: ${certDisk}`);
        failed++;
      }

      const certHttp = await fetchUrl(encodeURI(cert.pdfUrl));
      if (certHttp.status === 200) {
        console.log(`  [PASS] Certificate served HTTP 200: ${cert.pdfUrl}`);
        passed++;
      } else {
        console.error(`  [FAIL] Certificate HTTP fetch failed: ${cert.pdfUrl}`);
        failed++;
      }
    }
  }

  // 5. Check Content & Data Validation
  console.log('\n5. Validating Content & Design Requirements:');
  
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
  const requiredProjects = ['krishiai', 'travelmate', 'time-trackers', 'agro-guardian', 'recallops-ai', 'personal-portfolio'];
  const allProjectsPresent = requiredProjects.every(id => projectIds.includes(id));
  if (allProjectsPresent) {
    console.log('  [PASS] All 6 resume projects present (KrishiAI, TravelMate, TimeTrackers, Agro_Guardian, RecallOps AI, Personal Portfolio)');
    passed++;
  } else {
    console.error('  [FAIL] Missing required projects');
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
