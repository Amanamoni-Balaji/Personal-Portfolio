import sys
from playwright.sync_api import sync_playwright

def test_contact_channels():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=True,
            executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe'
        )
        
        # Test 1: Desktop Viewport
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.goto('http://localhost:3000/contact', wait_until='networkidle')
        page.wait_for_timeout(1000)
        
        # Check email display card
        email_text = page.locator('text=amanamonibalaji1828@gmail.com').first
        assert email_text.is_visible(), 'Email address text should be clearly visible'
        print('PASSED: Email address clearly visible:', email_text.inner_text())
        
        # Check copy button
        copy_btn = page.locator('button[aria-label="Copy email"]').first
        assert copy_btn.is_visible(), 'Copy email button should be visible'
        print('PASSED: Copy email button visible')
        
        # Check 4 buttons
        email_btn = page.locator('a[aria-label="Email Me"]').first
        assert email_btn.is_visible(), 'Email Me button should be visible'
        assert email_btn.get_attribute('href') == 'mailto:amanamonibalaji1828@gmail.com', 'Email href matches mailto'
        print('PASSED: Email Me button href:', email_btn.get_attribute('href'))
        
        wa_btn = page.locator('a[aria-label="Chat on WhatsApp"]').first
        assert wa_btn.is_visible(), 'WhatsApp button should be visible'
        assert 'wa.me' in wa_btn.get_attribute('href'), 'WhatsApp href contains wa.me'
        print('PASSED: WhatsApp button href:', wa_btn.get_attribute('href'))
        
        li_btn = page.locator('a[aria-label="Connect on LinkedIn"]').first
        assert li_btn.is_visible(), 'LinkedIn button should be visible'
        assert 'linkedin.com' in li_btn.get_attribute('href'), 'LinkedIn href contains linkedin.com'
        print('PASSED: LinkedIn button href:', li_btn.get_attribute('href'))
        
        gh_btn = page.locator('a[aria-label="View GitHub Profile"]').first
        assert gh_btn.is_visible(), 'GitHub button should be visible'
        assert 'github.com' in gh_btn.get_attribute('href'), 'GitHub href contains github.com'
        print('PASSED: GitHub button href:', gh_btn.get_attribute('href'))
        
        # Measure dimensions
        box_email = email_btn.bounding_box()
        box_wa = wa_btn.bounding_box()
        box_li = li_btn.bounding_box()
        box_gh = gh_btn.bounding_box()
        
        print('Desktop Bounding Boxes:')
        print(f'  Email: {box_email}')
        print(f'  WA:    {box_wa}')
        print(f'  LI:    {box_li}')
        print(f'  GH:    {box_gh}')
        
        # Verify alignment: Email and WA are in row 1, LI and GH are in row 2
        assert abs(box_email['y'] - box_wa['y']) < 2, 'Row 1 buttons vertically aligned'
        assert abs(box_li['y'] - box_gh['y']) < 2, 'Row 2 buttons vertically aligned'
        assert abs(box_email['width'] - box_wa['width']) < 2, 'Row 1 buttons equal width'
        assert abs(box_li['width'] - box_gh['width']) < 2, 'Row 2 buttons equal width'
        assert abs(box_email['height'] - box_wa['height']) < 2, 'Row 1 buttons equal height'
        assert abs(box_li['height'] - box_gh['height']) < 2, 'Row 2 buttons equal height'
        print('PASSED: Desktop 2x2 grid alignment and matching dimensions perfectly verified')
        
        # Test 2: Mobile Viewport (390x844)
        page_mobile = browser.new_page(viewport={'width': 390, 'height': 844})
        page_mobile.goto('http://localhost:3000/contact', wait_until='networkidle')
        page_mobile.wait_for_timeout(1000)
        
        # Check overflow
        overflow = page_mobile.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth')
        assert not overflow, 'Mobile page must not have horizontal overflow'
        print('PASSED: No horizontal overflow on 390px mobile')
        
        m_email = page_mobile.locator('a[aria-label="Email Me"]').first
        m_wa = page_mobile.locator('a[aria-label="Chat on WhatsApp"]').first
        m_li = page_mobile.locator('a[aria-label="Connect on LinkedIn"]').first
        m_gh = page_mobile.locator('a[aria-label="View GitHub Profile"]').first
        
        assert m_email.is_visible() and m_wa.is_visible() and m_li.is_visible() and m_gh.is_visible(), 'All 4 buttons visible on mobile'
        
        m_box_email = m_email.bounding_box()
        m_box_wa = m_wa.bounding_box()
        m_box_li = m_li.bounding_box()
        m_box_gh = m_gh.bounding_box()
        
        print('Mobile Bounding Boxes:')
        print(f'  Email: {m_box_email}')
        print(f'  WA:    {m_box_wa}')
        print(f'  LI:    {m_box_li}')
        print(f'  GH:    {m_box_gh}')
        
        assert abs(m_box_email['y'] - m_box_wa['y']) < 2, 'Mobile Row 1 vertically aligned'
        assert abs(m_box_li['y'] - m_box_gh['y']) < 2, 'Mobile Row 2 vertically aligned'
        assert abs(m_box_email['width'] - m_box_wa['width']) < 2, 'Mobile Row 1 equal width'
        assert abs(m_box_li['width'] - m_box_gh['width']) < 2, 'Mobile Row 2 equal width'
        print('PASSED: Mobile layout alignment and dimensions verified')
        
        browser.close()
        print('ALL TESTS PASSED SUCCESSFULLY!')

if __name__ == '__main__':
    test_contact_channels()
