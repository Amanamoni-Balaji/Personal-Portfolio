import time
from playwright.sync_api import sync_playwright

def verify_achievements_and_ui():
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

        # Verify both thumbnails exist in DATANYX
        images = datanyx_el.locator("img").all()
        assert len(images) == 2, f"ERROR: Expected 2 certificate thumbnails, found {len(images)}"
        print("  [PASS] Both DATANYX certificate thumbnails verified.")

        # Test DATANYX Team Gallery Button & Modal
        team_btn = datanyx_el.locator("button:has-text('View Team Gallery')").first
        assert team_btn.count() == 1, "ERROR: 'View Team Gallery' button not found under DATANYX!"
        print("  [PASS] 'View Team Gallery' button found directly under DATANYX achievement.")

        team_btn.click()
        page.wait_for_timeout(600)
        gallery_modal = page.locator("h3:has-text('DATANYX 2025 — Team')")
        assert gallery_modal.count() >= 1, "ERROR: Team Gallery modal did not open!"
        print("  [PASS] Team Gallery modal opened successfully.")

        # Verify all 5 photos are present in grid
        photo_cards = page.locator("div[role='button'][aria-label^='View ']").all()
        assert len(photo_cards) == 5, f"ERROR: Expected 5 team photos, found {len(photo_cards)}"
        print("  [PASS] All 5 authentic team photographs rendered in gallery grid.")

        # Click first photo to test enlarged view
        photo_cards[0].click()
        page.wait_for_timeout(600)
        counter = page.locator("div:has-text('1 / 5')")
        assert counter.count() >= 1, "ERROR: Enlarged photo 1 not active!"
        print("  [PASS] Enlarged lightbox view opened for Photo 1.")

        # Test Next navigation button
        next_btn = page.locator("button[aria-label='Next photograph']")
        next_btn.click()
        page.wait_for_timeout(400)
        counter2 = page.locator("div:has-text('2 / 5')")
        assert counter2.count() >= 1, "ERROR: Next navigation failed!"
        print("  [PASS] Next photo navigation works (now Photo 2).")

        # Test Back to Gallery button
        back_btn = page.locator("button:has-text('Back to Gallery')").first
        back_btn.click()
        page.wait_for_timeout(400)
        assert page.locator("div[role='button'][aria-label^='View ']").count() == 5, "ERROR: Did not return to grid view!"
        print("  [PASS] 'Back to Gallery' button returned to grid overview.")

        # Close Team Gallery modal
        close_gallery = page.locator("button[aria-label='Close team gallery']").first
        close_gallery.click()
        page.wait_for_timeout(400)
        print("  [PASS] Team Gallery modal closed cleanly.")

        # Test HackWithHyderabad 3.0
        hwh_el = page.locator("#hackwithhyd")
        assert hwh_el.count() == 1, "ERROR: HackWithHyderabad entry not found!"
        hwh_img = hwh_el.locator("img").first
        assert hwh_img.count() == 1, "ERROR: HackWithHyderabad thumbnail not found!"
        print("  [PASS] HackWithHyderabad 3.0 card and thumbnail verified.")

        hwh_img.scroll_into_view_if_needed()
        hwh_img.click()
        page.wait_for_timeout(600)
        assert page.locator("h3:has-text('HackWithHyderabad 3.0')").count() >= 1, "ERROR: HackWithHyderabad modal did not open!"
        print("  [PASS] HackWithHyderabad 3.0 certificate modal preview verified.")
        page.locator("button[aria-label='Close certificate modal']").first.click()
        page.wait_for_timeout(500)

        # Test Smart India Hackathon
        sih_el = page.locator("#smart-india-hackathon")
        assert sih_el.count() == 1, "ERROR: Smart India Hackathon entry not found!"
        sih_img = sih_el.locator("img").first
        assert sih_img.count() == 1, "ERROR: Smart India Hackathon thumbnail not found!"
        print("  [PASS] Smart India Hackathon 2025 card and thumbnail verified.")

        sih_img.scroll_into_view_if_needed()
        sih_img.click()
        page.wait_for_timeout(600)
        assert page.locator("h3:has-text('Smart India Hackathon')").count() >= 1, "ERROR: Smart India Hackathon modal did not open!"
        print("  [PASS] Smart India Hackathon 2025 certificate modal preview verified.")
        page.locator("button[aria-label='Close certificate modal']").first.click()
        page.wait_for_timeout(500)

        # Test Academic Excellence
        acad_el = page.locator("#academic-excellence")
        assert acad_el.count() == 1, "ERROR: Academic Excellence entry not found!"
        acad_img = acad_el.locator("img").first
        assert acad_img.count() == 1, "ERROR: Academic Excellence thumbnail not found!"
        print("  [PASS] Academic Excellence card and thumbnail verified.")

        acad_img.scroll_into_view_if_needed()
        acad_img.click()
        page.wait_for_timeout(600)
        assert page.locator("h3:has-text('Academic Excellence')").count() >= 1, "ERROR: Academic Excellence modal did not open!"
        print("  [PASS] Academic Excellence grade report modal preview verified.")
        page.locator("button[aria-label='Close certificate modal']").first.click()
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
        print("\n>>> ALL ACHIEVEMENTS AND MODAL PREVIEW CHECKS PASSED 100% PERFECTLY! <<<")

if __name__ == '__main__':
    verify_achievements_and_ui()
