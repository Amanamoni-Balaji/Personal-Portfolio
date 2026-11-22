import base64
import os
from playwright.sync_api import sync_playwright

with open(r'd:\Portfolio_Final\public\assets\profile.jpg', 'rb') as f:
    photo_b64 = base64.b64encode(f.read()).decode('utf-8')

html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }}
  body {{
    background-color: #f1f5f9;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }}
  .card {{
    width: 980px;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }}
  .header-box {{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border: 1.5px solid #93c5fd;
    border-radius: 6px;
    padding: 16px 20px;
    background: #ffffff;
    margin-bottom: 22px;
  }}
  .user-info {{
    display: flex;
    gap: 18px;
    align-items: center;
  }}
  .profile-photo {{
    width: 95px;
    height: 115px;
    object-fit: cover;
    border: 2px solid #3b82f6;
    background: #60a5fa;
    border-radius: 4px;
  }}
  .details {{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }}
  .name {{
    font-size: 16px;
    font-weight: 700;
    color: #1e3a8a;
  }}
  .subtext {{
    font-size: 13px;
    color: #4b5563;
  }}
  .right-status {{
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    color: #1f2937;
    text-align: left;
    min-width: 220px;
  }}
  .status-badge {{
    color: #15803d;
    font-weight: 700;
  }}
  .tab-header {{
    display: inline-block;
    background: #f59e0b;
    color: #111827;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: -1px;
  }}
  .tab-border {{
    border: 1px solid #cbd5e1;
    border-top: 2px solid #f59e0b;
    border-radius: 0 5px 5px 5px;
    padding: 18px;
    background: #ffffff;
  }}
  .sem-nav {{
    display: flex;
    align-items: center;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    margin-bottom: 16px;
    overflow: hidden;
  }}
  .nav-btn {{
    padding: 9px 14px;
    font-size: 13px;
    color: #64748b;
    background: #ffffff;
    cursor: default;
    border-right: 1px solid #cbd5e1;
  }}
  .sem-item {{
    flex: 1;
    text-align: center;
    padding: 9px 6px;
    font-size: 12px;
    font-weight: 600;
    color: #475569;
    border-right: 1px solid #cbd5e1;
    background: #ffffff;
  }}
  .sem-item.active {{
    background: #fbbf24;
    color: #0f172a;
    font-weight: 700;
  }}
  table {{
    width: 100%;
    border-collapse: collapse;
    font-size: 12.5px;
  }}
  th {{
    background: #e0f2fe;
    color: #0369a1;
    font-weight: 600;
    padding: 10px 12px;
    text-align: left;
    border: 1px solid #bae6fd;
  }}
  td {{
    padding: 9px 12px;
    border: 1px solid #e2e8f0;
    color: #334155;
  }}
  tr:nth-child(even) td {{
    background: #f8fafc;
  }}
  .grade-aplus {{
    font-weight: 700;
    color: #0f172a;
  }}
  .grade-a {{
    font-weight: 600;
    color: #0f172a;
  }}
  .summary-row {{
    display: flex;
    justify-content: flex-end;
    gap: 48px;
    padding: 14px 20px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-top: none;
    font-size: 13.5px;
    font-weight: 700;
    color: #0369a1;
  }}
</style>
</head>
<body>
  <div class="card">
    <div class="header-box">
      <div class="user-info">
        <img class="profile-photo" src="data:image/jpeg;base64,{photo_b64}" alt="Amanamoni Balaji">
        <div class="details">
          <div class="name">AMANAMONI BALAJI (REGULAR)</div>
          <div class="subtext" style="font-weight: 600;">1608-23-737-069</div>
          <div class="subtext">MECS / 2025-2026 / Bachelor of Engineering / IT / III YEAR VI SEM / Section B</div>
          <div class="subtext">7981591655</div>
        </div>
      </div>
      <div class="right-status">
        <div>Admission Date : </div>
        <div>Quota : <strong>A-CONVENOR</strong></div>
        <div>Student Status : <span class="status-badge">IN COLLEGE</span></div>
      </div>
    </div>

    <div class="tab-header">Semwise Final Marks</div>
    <div class="tab-border">
      <div class="sem-nav">
        <div class="nav-btn">&lt;</div>
        <div class="sem-item">I YEAR II SEM</div>
        <div class="sem-item">II YEAR III SEM</div>
        <div class="sem-item">II YEAR IV SEM</div>
        <div class="sem-item">III YEAR V SEM</div>
        <div class="sem-item active">III YEAR VI SEM</div>
        <div class="nav-btn" style="border-right: none;">&gt;</div>
      </div>

      <table>
        <thead>
          <tr>
            <th style="width: 50px;">Sl.No</th>
            <th style="width: 125px;">Subject Code</th>
            <th>Subject Name</th>
            <th style="width: 110px;">Month Year</th>
            <th style="width: 95px;">Final Grade</th>
            <th style="width: 70px;">Credits</th>
            <th style="width: 80px;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>PC615ITU23</td>
            <td>Machine Learning</td>
            <td>June-2026</td>
            <td class="grade-aplus">A+</td>
            <td>3</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>2</td>
            <td>PC613ITU23</td>
            <td>Embedded Systems</td>
            <td>June-2026</td>
            <td class="grade-aplus">A+</td>
            <td>3</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>3</td>
            <td>PC659ITU23</td>
            <td>Embedded Systems Lab</td>
            <td>June-2026</td>
            <td class="grade-aplus">A+</td>
            <td>1</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>4</td>
            <td>PC614ITU23</td>
            <td>Design and Analysis of Algorithms</td>
            <td>June-2026</td>
            <td class="grade-a">A</td>
            <td>3</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>5</td>
            <td>PC660ITU23</td>
            <td>Machine Learning Lab</td>
            <td>June-2026</td>
            <td class="grade-aplus">A+</td>
            <td>1</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>6</td>
            <td>PW601ITU23</td>
            <td>Mini Project-I</td>
            <td>June-2026</td>
            <td class="grade-aplus">A+</td>
            <td>1</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>7</td>
            <td>OE601CEU23</td>
            <td>Disaster Management</td>
            <td>June-2026</td>
            <td class="grade-aplus">A+</td>
            <td>3</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>8</td>
            <td>PC616ITU23</td>
            <td>Network Security and Cryptography</td>
            <td>June-2026</td>
            <td class="grade-aplus">A+</td>
            <td>3</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>9</td>
            <td>PE608ITU23</td>
            <td>Cloud Computing</td>
            <td>June-2026</td>
            <td class="grade-a">A</td>
            <td>3</td>
            <td>Pass</td>
          </tr>
        </tbody>
      </table>

      <div class="summary-row">
        <div>SGPA : 9.71</div>
        <div>CGPA : 9.6</div>
        <div>RESULT : Promoted</div>
      </div>
    </div>
  </div>
</body>
</html>'''

out_path = r'd:\Portfolio_Final\public\certificates\Academic_Excellence_Grade_Report.jpg'

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe')
    page = browser.new_page(viewport={'width': 1080, 'height': 850}, device_scale_factor=2)
    page.set_content(html_content)
    page.wait_for_timeout(300)
    card_el = page.query_selector('.card')
    card_el.screenshot(path=out_path, type='jpeg', quality=95)
    browser.close()

print('Generated Grade Report:', os.path.exists(out_path), os.path.getsize(out_path))
