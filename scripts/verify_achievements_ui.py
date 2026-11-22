import time
from playwright.sync_api import sync_playwright

def verify_reorganization():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe',
            headless=True
        )
        context = browser.new_context(viewport={'width': 1440, 'height': 1200})
        page = context.new_page()

        print("--- 1. VERIFYING ACHIEVEMENTS PAGE ---")
        page.goto("http://localhost:3000/achievements", wait_until="networkidle")
        page.wait_for_timeout(1000)

        page_content = page.content()
        # Verify removed entries are NOT present on Achievements page
        assert "Srinivasa Ramanujan" not in page_content, "ERROR: Srinivasa Ramanujan still found on Achievements page!"
        print("  [PASS] Srinivasa Ramanujan Mathematical Competitions completely removed from Achievements page.")

        assert "SCRSCC088" not in page_content, "ERROR: SCRSCC088 still found on Achievements page!"
        print("  [PASS] Soft Computing Research Society (SCRS) completely removed from Achievements page.")

        # Verify DATANYX 2025 is present as top featured achievement
        datanyx_el = page.locator("#datanyx-runnerup")
        assert datanyx_el.count() == 1, "ERROR: DATANYX 2025 entry not found on Achievements page!"
        print("  [PASS] DATANYX 2025 Runner-Up achievement entry verified.")

        # Verify both thumbnails exist
        images = datanyx_el.locator("img").all()
        assert len(images) == 2, f"ERROR: Expected 2 certificate thumbnails, found {len(images)}"
        print("  [PASS] Both DATANYX certificate thumbnails verified.")

        # Test clicking Certificate of Achievement thumbnail
        ach_card = datanyx_el.locator("text=Certificate of Achievement").first
        ach_card.click()
        page.wait_for_timeout(600)
        modal_title = page.locator("h3:has-text('DATANYX 2025')").first.inner_text()
        print(f"  [PASS] Modal opened: '{modal_title}'")
        close_btn = page.locator("button[aria-label='Close certificate modal']").first
        close_btn.click()
        page.wait_for_timeout(500)

        print("\n--- 2. VERIFYING CERTIFICATIONS PAGE ---")
        page.goto("http://localhost:3000/certifications", wait_until="networkidle")
        page.wait_for_timeout(1000)

        # Verify Ramanujan Level 2
        level2_card = page.locator("text=Srinivasa Ramanujan Mathematical Competitions 2024 – Level 2 (State Level)").first
        assert level2_card.count() == 1, "ERROR: Ramanujan Level 2 not found on Certifications page!"
        print("  [PASS] Ramanujan Level 2 (State Level) present on Certifications page.")

        # Verify Ramanujan Level 1
        level1_card = page.locator("text=Srinivasa Ramanujan Mathematical Competitions 2024 – Level 1 (Chapter Level)").first
        assert level1_card.count() == 1, "ERROR: Ramanujan Level 1 not found on Certifications page!"
        print("  [PASS] Ramanujan Level 1 (Chapter Level) present on Certifications page.")

        # Verify SCRS Course
        scrs_card = page.locator("text=Machine Learning using Python Programming Course").first
        assert scrs_card.count() == 1, "ERROR: SCRS Course not found on Certifications page!"
        print("  [PASS] Machine Learning using Python Programming Course present on Certifications page.")

        # Test opening modal on Certifications page
        level2_thumb = page.locator("img[alt*='Level 2']").first
        level2_thumb.scroll_into_view_if_needed()
        level2_thumb.click()
        page.wait_for_timeout(600)
        assert page.locator("h3:has-text('Level 2')").count() >= 1, "ERROR: Level 2 modal did not open!"
        print("  [PASS] Level 2 modal preview works perfectly.")
        close_btn = page.locator("button[aria-label='Close certificate modal']").first
        close_btn.click()
        page.wait_for_timeout(500)

        # Mobile check (390px)
        print("\n--- 3. MOBILE VIEWPORT OVERFLOW CHECK ---")
        page.set_viewport_size({"width": 390, "height": 844})
        for path in ["/achievements", "/certifications"]:
            page.goto(f"http://localhost:3000{path}", wait_until="networkidle")
            page.wait_for_timeout(600)
            sw = page.evaluate("() => document.documentElement.scrollWidth")
            cw = page.evaluate("() => document.documentElement.clientWidth")
            print(f"  Mobile {path}: scrollWidth={sw}px, clientWidth={cw}px")
            assert sw == cw, f"Horizontal overflow on {path}!"
            print(f"  [PASS] Zero horizontal overflow on {path}!")

        browser.close()
        print("\n>>> ALL REORGANIZATION CHECKS PASSED 100% PERFECTLY! <<<")

if __name__ == '__main__':
    verify_reorganization()
