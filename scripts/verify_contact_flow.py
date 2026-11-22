from playwright.sync_api import sync_playwright

def verify_contact_page_and_flow():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe',
            headless=True
        )
        context = browser.new_context(viewport={'width': 1280, 'height': 900})
        page = context.new_page()

        print("--- 1. NAVIGATING TO CONTACT PAGE ---")
        page.goto("http://localhost:3000/contact", wait_until="networkidle")
        page.wait_for_timeout(800)

        # 1. Verify Page Elements & Form Fields
        assert page.locator("h1:has-text('Get in Touch')").count() >= 1, "Page title missing"
        assert page.locator("h2:has-text('Send a Direct Message')").count() >= 1, "Form title missing"
        
        name_input = page.locator("input[name='name']")
        email_input = page.locator("input[name='email']")
        subject_input = page.locator("input[name='subject']")
        message_textarea = page.locator("textarea[name='message']")
        submit_button = page.locator("button[type='submit']")

        assert name_input.count() == 1, "Name input missing"
        assert email_input.count() == 1, "Email input missing"
        assert subject_input.count() == 1, "Subject input missing"
        assert message_textarea.count() == 1, "Message textarea missing"
        assert submit_button.count() == 1, "Submit button missing"
        assert "Send Message" in submit_button.inner_text(), "Submit button text mismatch"
        print("  [PASS] All 4 required form fields and Send Message button verified.")

        # 2. Test Validation Errors on Empty Submit
        submit_button.click()
        page.wait_for_timeout(400)
        
        err_banner = page.locator("text=Please correct the highlighted fields")
        assert err_banner.count() >= 1, "Expected validation error banner"
        assert page.locator("text=Your name is required.").count() >= 1, "Name error missing"
        assert page.locator("text=Email address is required.").count() >= 1, "Email error missing"
        assert page.locator("text=Subject is required.").count() >= 1, "Subject error missing"
        assert page.locator("text=Message details are required.").count() >= 1, "Message error missing"
        print("  [PASS] Client-side validation correctly caught all empty fields.")

        # 3. Test Invalid Email
        name_input.fill("Alex Johnson")
        email_input.fill("invalid-email-format")
        subject_input.fill("AI Collaboration")
        message_textarea.fill("Hello Balaji, this is a test message with sufficient length.")
        submit_button.click()
        page.wait_for_timeout(400)
        assert page.locator("text=Please enter a valid email address").count() >= 1, "Email format validation failed"
        print("  [PASS] Email format validation correctly rejected invalid email.")

        # 4. Test Submission when Email Service is awaiting configuration
        email_input.fill("alex.johnson@example.com")
        submit_button.click()
        page.wait_for_timeout(800)

        # Ensure FALSE SUCCESS is NEVER shown
        success_el = page.locator("h3:has-text('Your message has been sent successfully')")
        assert success_el.count() == 0, "CRITICAL: False success was displayed without verified email service!"
        print("  [PASS] Confirmed: No false success screen is displayed.")

        # Ensure explicit error notice is shown with mailto fallback
        assert page.locator("text=Email service is not yet connected").count() >= 1, "Unconfigured error missing"
        fallback_link = page.locator("a:has-text('Open in Default Mail Client')")
        assert fallback_link.count() >= 1, "Fallback mailto link missing"
        href = fallback_link.get_attribute("href")
        assert "mailto:amanamonibalaji1828@gmail.com" in href, "Mailto target wrong"
        print("  [PASS] Explicit configuration warning and 1-click mailto fallback verified.")

        # 5. Mobile Viewport Check (390px)
        page.set_viewport_size({"width": 390, "height": 844})
        page.wait_for_timeout(400)
        sw = page.evaluate("() => document.documentElement.scrollWidth")
        cw = page.evaluate("() => document.documentElement.clientWidth")
        assert sw == cw, f"Horizontal overflow on mobile! sw={sw}, cw={cw}"
        print(f"  [PASS] Mobile responsiveness verified (390px, sw={sw}, cw={cw}).")

        browser.close()
        print("\n>>> ALL CONTACT WORKFLOW & UI CHECKS PASSED 100% PERFECTLY! <<<")

if __name__ == '__main__':
    verify_contact_page_and_flow()
