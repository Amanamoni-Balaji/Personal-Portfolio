import re

def update_certs():
    with open('src/data/portfolioData.js', 'r', encoding='utf-8') as f:
        text = f.read()

    # Look for each certificate block
    # A block starts with { and has id: "..." and pdfUrl: "/certificates/..."
    # If it doesn't contain imageUrl:, we insert it right after pdfUrl:
    def replacer(match):
        block = match.group(0)
        pdf_match = re.search(r'pdfUrl:\s*"(/certificates/([^"]+)\.pdf)"', block)
        if not pdf_match:
            return block
        
        pdf_path = pdf_match.group(1)
        base_name = pdf_match.group(2)
        jpg_path = f"/certificates/{base_name}.jpg"

        if 'imageUrl:' in block:
            return block

        # Insert imageUrl right after pdfUrl
        old_pdf_str = pdf_match.group(0)
        new_pdf_str = f'{old_pdf_str},\n      imageUrl: "{jpg_path}"'
        return block.replace(old_pdf_str, new_pdf_str, 1)

    pattern = re.compile(r'\{\s*id:\s*"[^"]+"[^}]+?pdfUrl:\s*"/certificates/[^"]+\.pdf"[^}]*?\}', re.DOTALL)
    new_text = pattern.sub(replacer, text)

    with open('src/data/portfolioData.js', 'w', encoding='utf-8') as f:
        f.write(new_text)

    print("Successfully updated src/data/portfolioData.js!")

if __name__ == '__main__':
    update_certs()
