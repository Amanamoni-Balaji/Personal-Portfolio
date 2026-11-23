import os, sys, time
from playwright.sync_api import sync_playwright

def test_project_galleries():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=True,
            executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe'
        )
        
        # Test 1: Desktop Viewport
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        print('Navigating to http://localhost:3000/projects...')
        page.goto('http://localhost:3000/projects', wait_until='networkidle')
        page.wait_for_timeout(1000)
        
        # Verify all 8 projects
        gallery_buttons = page.locator('button:has-text("View Project Gallery")')
        btn_count = gallery_buttons.count()
        print(f'Found {btn_count} "View Project Gallery" buttons on Projects page')
        assert btn_count == 8, f'Expected 8 gallery buttons, found {btn_count}'
        
        project_ids = [
            'CareFlow',
            'MediAssist AI',
            'KrishiAI',
            'TravelMate',
            'TimeTrackers',
            'Agro_Guardian',
            'RecallOps AI',
            'Personal Portfolio'
        ]
        
        for idx in range(btn_count):
            btn = gallery_buttons.nth(idx)
            btn_text = btn.inner_text()
            print(f'\n--- Testing Project Card {idx + 1}: {btn_text} ---')
            assert '8 Screens' in btn_text, f'Button should display 8 Screens: {btn_text}'
            
            # Click the gallery button
            btn.click()
            page.wait_for_timeout(600)
            
            # Check modal open
            modal = page.locator('div[role="dialog"], div.fixed.inset-0.z-\\[100\\]').first
            assert modal.is_visible(), 'Gallery modal should be open'
            
            # Check modal title
            modal_title = modal.locator('h3').first.inner_text()
            print(f'  Modal Title: {modal_title}')
            
            # Check verified screenshots count
            grid_items = modal.locator('img')
            img_count = grid_items.count()
            print(f'  Modal images rendered: {img_count}')
            assert img_count >= 8, f'Expected at least 8 images in modal grid, got {img_count}'
            
            # Click the 1st screenshot to open high-resolution preview
            first_thumb = modal.locator('div.group.cursor-pointer').first
            first_thumb.click()
            page.wait_for_timeout(400)
            
            # Verify high-res preview mode
            counter = modal.locator('text=Screenshot 1 of 8').first
            assert counter.is_visible(), 'Preview counter should display Screenshot 1 of 8'
            print('  PASSED: High-res preview opened, showing Screenshot 1 of 8')
            
            # Click Next arrow
            next_btn = modal.locator('button[aria-label="Next screenshot"]').first
            next_btn.click()
            page.wait_for_timeout(300)
            counter2 = modal.locator('text=Screenshot 2 of 8').first
            assert counter2.is_visible(), 'Next button should advance to Screenshot 2 of 8'
            print('  PASSED: Advanced to Screenshot 2 of 8')
            
            # Press Left Arrow key
            page.keyboard.press('ArrowLeft')
            page.wait_for_timeout(300)
            counter_back = modal.locator('text=Screenshot 1 of 8').first
            assert counter_back.is_visible(), 'ArrowLeft should navigate back to Screenshot 1 of 8'
            print('  PASSED: ArrowLeft navigated back to Screenshot 1 of 8')
            
            # Return to grid view
            back_to_grid = modal.locator('button:has-text("Back to all 8 screenshots")').first
            back_to_grid.click()
            page.wait_for_timeout(300)
            assert modal.locator('div.group.cursor-pointer').count() >= 8, 'Grid view restored'
            print('  PASSED: Returned to Grid Overview')
            
            # If CareFlow or MediAssist, take desktop screenshot
            if idx == 0:
                page.screenshot(path='scripts/careflow_gallery_desktop.png')
            
            # Close modal via close button
            close_btn = modal.locator('button[aria-label*="Close"]').first
            close_btn.click()
            page.wait_for_timeout(400)
            print('  PASSED: Closed gallery modal successfully')
            
        print('\n=== All 8 Project Galleries Desktop Tests PASSED! ===')
        
        # Test 2: Mobile Viewport (390x844)
        print('\nTesting Mobile Viewport (390x844)...')
        page_mobile = browser.new_page(viewport={'width': 390, 'height': 844})
        page_mobile.goto('http://localhost:3000/projects', wait_until='networkidle')
        page_mobile.wait_for_timeout(1000)
        
        # Check no overflow
        overflow = page_mobile.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth')
        assert not overflow, 'Mobile page must not have horizontal overflow'
        print('PASSED: No horizontal overflow on mobile Projects page')
        
        # Open 1st project gallery on mobile
        m_btn = page_mobile.locator('button:has-text("View Project Gallery")').first
        m_btn.click()
        page_mobile.wait_for_timeout(500)
        
        m_modal = page_mobile.locator('div.fixed.inset-0.z-\\[100\\]').first
        assert m_modal.is_visible(), 'Modal visible on mobile'
        
        page_mobile.screenshot(path='scripts/project_gallery_mobile.png')
        print('PASSED: Captured mobile gallery screenshot')
        
        browser.close()
        print('\n>>> ALL TEST CASES PASSED WITH 100% SUCCESS! <<<')

if __name__ == '__main__':
    test_project_galleries()
