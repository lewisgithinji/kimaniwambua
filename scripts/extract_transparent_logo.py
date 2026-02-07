
import pypdfium2 as pdfium
from PIL import Image
import os
import numpy as np

def process_logo(pdf_path, output_path="public/images/logo-header.png"):
    # 1. Render PDF Page 1 High Res
    print("Rendering PDF...")
    pdf = pdfium.PdfDocument(pdf_path)
    page = pdf[0]
    bitmap = page.render(scale=4.0)
    pil_image = bitmap.to_pil()
    
    # 2. Crop to Logo Area
    width, height = pil_image.size
    print(f"Page size: {width}x{height}")
    
    # Header is roughly top 15%
    # Crop slightly generous to ensure we get it all, then trim
    header = pil_image.crop((0, 0, width, int(height * 0.15)))
    
    # 3. Remove Background (White to Transparent) using Numpy
    print("Removing background (White/Near-White -> Transparent)...")
    img_array = np.array(header.convert("RGBA"))
    
    # Define white threshold (e.g., > 240 for R, G, B)
    r, g, b, a = img_array.T
    white_areas = (r > 240) & (g > 240) & (b > 240)
    img_array[..., 3][white_areas.T] = 0
    
    result = Image.fromarray(img_array)
    
    # 4. Trim empty space
    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)
        
    # 5. Save
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    result.save(output_path)
    print(f"Saved transparent logo to {output_path}")

if __name__ == "__main__":
    pdf_path = "KIMANI WAMBUA & COMPANY ADVOCATES_PROFILE_Heavier body text_Small.pdf"
    process_logo(pdf_path)
