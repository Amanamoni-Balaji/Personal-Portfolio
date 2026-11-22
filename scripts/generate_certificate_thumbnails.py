import os
import re
import pypdfium2 as pdfium

def generate_thumbnails():
    certs_dir = 'public/certificates'
    files = [f for f in os.listdir(certs_dir) if f.endswith('.pdf')]
    print(f"Found {len(files)} PDF files in {certs_dir}")

    generated = 0
    skipped = 0

    for f in sorted(files):
        pdf_path = os.path.join(certs_dir, f)
        jpg_name = os.path.splitext(f)[0] + '.jpg'
        jpg_path = os.path.join(certs_dir, jpg_name)

        # Even if exists, let's make sure it's valid, but let's check size
        if os.path.exists(jpg_path) and os.path.getsize(jpg_path) > 1000:
            print(f"[EXISTS] {jpg_name} ({os.path.getsize(jpg_path):,} bytes)")
            skipped += 1
            continue

        try:
            pdf = pdfium.PdfDocument(pdf_path)
            # Render first page at scale 2.0 (approx 144 DPI)
            page = pdf[0]
            pil_image = page.render(scale=2.0).to_pil()
            # Convert RGBA to RGB if necessary
            if pil_image.mode != 'RGB':
                pil_image = pil_image.convert('RGB')
            pil_image.save(jpg_path, 'JPEG', quality=90, optimize=True)
            print(f"[GENERATED] {jpg_name} - {pil_image.width}x{pil_image.height}")
            generated += 1
        except Exception as e:
            print(f"[ERROR] {f}: {e}")

    print(f"\nDone: {generated} generated, {skipped} already existed.")

if __name__ == '__main__':
    generate_thumbnails()
