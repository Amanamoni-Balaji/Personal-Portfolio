from playwright.sync_api import sync_playwright

def verify_projects_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe',
            headless=True
        )
        context = browser.new_context(viewport={'width': 1280, 'height': 900})
        page = context.new_page()

        print("--- 1. VERIFYING PROJECTS PAGE ---")
        page.goto("http://localhost:3000/projects", wait_until="networkidle")
        page.wait_for_timeout(800)

        # 1. Ensure 'Latest Flagship Healthcare Innovations' is completely gone
        page_html = page.content()
        assert "Latest Flagship Healthcare Innovations" not in page_html, "ERROR: Flagship section still found!"
        assert "Featured Releases" not in page_html, "ERROR: 'Featured Releases' tag still found!"
        print("  [PASS] 'Latest Flagship Healthcare Innovations' section is completely removed.")

        # 2. Ensure all 8 project cards are present in the grid
        expected_projects = [
            'CareFlow',
            'MediAssist AI',
            'KrishiAI',
            'TravelMate',
            'TimeTrackers',
            'Agro_Guardian',
            'RecallOps AI',
            'Personal Portfolio'
        ]
        for proj in expected_projects:
            loc = page.locator(f"h3:has-text('{proj}')")
            assert loc.count() >= 1, f"ERROR: Project {proj} missing from grid!"
            print(f"  [PASS] Verified project present in grid: {proj}")

        # 3. Test filter categories
        page.locator("button:has-text('Healthcare & AI Systems')").click()
        page.wait_for_timeout(400)
        assert page.locator("h3:has-text('CareFlow')").count() >= 1, "CareFlow not shown in Healthcare filter"
        assert page.locator("h3:has-text('MediAssist AI')").count() >= 1, "MediAssist not shown in Healthcare filter"
        assert page.locator("h3:has-text('KrishiAI')").count() == 0, "KrishiAI incorrectly shown in Healthcare filter"
        print("  [PASS] Category filtering continues to work accurately.")

        # Reset filter to 'All'
        page.locator("button:has-text('All (')").click()
        page.wait_for_timeout(400)

        # 4. Mobile Viewport Check (390px)
        page.set_viewport_size({"width": 390, "height": 844})
        page.wait_for_timeout(400)
        sw = page.evaluate("() => document.documentElement.scrollWidth")
        cw = page.evaluate("() => document.documentElement.clientWidth")
        assert sw == cw, f"Mobile overflow detected! sw={sw}, cw={cw}"
        print(f"  [PASS] Mobile responsiveness verified (390px, sw={sw}, cw={cw}).")

        browser.close()
        print("\n>>> ALL PROJECTS PAGE VERIFICATIONS PASSED 100%! <<<")

if __name__ == '__main__':
    verify_projects_page()
