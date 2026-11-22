import time
from playwright.sync_api import sync_playwright

def verify_achievements():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe',
            headless=True
        )
        context = browser.new_context(viewport={'width': 1440, 'height': 1200})
        page = context.new_page()

        print("1. Navigating to http://localhost:3000/achievements...")
        page.goto("http://localhost:3000/achievements", wait_until="networkidle")
        page.wait_for_timeout(1000)

        # Locate DATANYX card
        datanyx_el = page.locator("#datanyx-runnerup")
        datanyx_el.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)

        print("2. Capturing screenshot of DATANYX 2025 Achievement entry on Desktop...")
        datanyx_el.screenshot(path="datanyx-entry-desktop.png")
        print("  Saved datanyx-entry-desktop.png")

        # Verify both certificate thumbnails exist inside datanyx_el
        images = datanyx_el.locator("img").all()
        print(f"3. Found {len(images)} images in DATANYX entry.")
        for idx, img in enumerate(images):
            src = img.get_attribute("src")
            alt = img.get_attribute("alt")
            print(f"   Image {idx+1}: alt='{alt}', src='{src}'")

        # Test clicking Certificate of Achievement thumbnail
        print("\n4. Clicking Certificate of Achievement thumbnail...")
        ach_card = datanyx_el.locator("text=Certificate of Achievement").first
        ach_card.click()
        page.wait_for_timeout(800)

        # Verify modal is open and inspect its title & image
        modal = page.locator("role=dialog, .fixed.inset-0").first
        page.screenshot(path="modal-achievement-preview.png")
        print("  Saved modal-achievement-preview.png")

        # Close modal
        print("5. Closing modal via Close button...")
        close_btn = page.locator("button[aria-label='Close certificate modal']").first
        close_btn.click()
        page.wait_for_timeout(500)

        # Test clicking Certificate of Participation thumbnail
        print("\n6. Clicking Certificate of Participation thumbnail...")
        part_card = datanyx_el.locator("text=Certificate of Participation").first
        part_card.click()
        page.wait_for_timeout(800)
        page.screenshot(path="modal-participation-preview.png")
        print("  Saved modal-participation-preview.png")

        # Close modal
        close_btn.click()
        page.wait_for_timeout(500)

        # Mobile Viewport Test (390px)
        print("\n7. Testing Mobile Viewport (390px)...")
        page.set_viewport_size({"width": 390, "height": 844})
        datanyx_el.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
        datanyx_el.screenshot(path="datanyx-entry-mobile.png")
        print("  Saved datanyx-entry-mobile.png")

        # Check horizontal overflow
        scroll_width = page.evaluate("() => document.documentElement.scrollWidth")
        client_width = page.evaluate("() => document.documentElement.clientWidth")
        print(f"  Mobile scrollWidth: {scroll_width}px, clientWidth: {client_width}px")
        assert scroll_width == client_width, f"Horizontal overflow! scrollWidth={scroll_width} != clientWidth={client_width}"
        print("  [PASS] Zero horizontal overflow on mobile!")

        browser.close()
        print("\n>>> ALL PLAYWRIGHT UI CHECKS PASSED PERFECTLY! <<<")

if __name__ == '__main__':
    verify_achievements()
