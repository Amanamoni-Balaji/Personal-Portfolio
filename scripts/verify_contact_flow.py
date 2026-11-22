import time
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
        page.wait_for_timeout(1000)

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

        # 4. Test Valid Submission Workflow
        email_input.fill("alex.johnson@example.com")
        
        # Click submit and observe state
        submit_button.click()
        
        # Wait for submission to complete
        page.wait_for_timeout(800)

        # 5. Verify Success State
        success_title = page.locator("h3:has-text(\"Your message has been sent successfully! I'll get back to you soon.\")")
        assert success_title.count() >= 1, "Success message title mismatch or missing!"
        print("  [PASS] Success state displayed: \"Your message has been sent successfully! I'll get back to you soon.\"")

        # Verify sender details in summary card
        assert page.locator("text=Alex Johnson").count() >= 1, "Sender name in summary missing"
        assert page.locator("text=alex.johnson@example.com").count() >= 1, "Sender email in summary missing"
        assert page.locator("text=AI Collaboration").count() >= 1, "Subject in summary missing"
        print("  [PASS] Submission summary details verified.")

        # 6. Test 'Send another message' button
        reset_btn = page.locator("button:has-text('Send another message')")
        assert reset_btn.count() == 1, "'Send another message' button missing"
        reset_btn.click()
        page.wait_for_timeout(400)

        # Verify form is reset and ready
        assert page.locator("input[name='name']").count() == 1, "Form did not reset back"
        assert page.locator("input[name='name']").input_value() == "", "Name field was not cleared"
        print("  [PASS] 'Send another message' reset the form cleanly.")

        # 7. Mobile Viewport Check (390px)
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
