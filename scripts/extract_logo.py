import pypdf
import pdfplumber
from pypdf import PdfReader
from PIL import Image
import io
import os

# Open the PDF
pdf_path = r"KIMANI WAMBUA & COMPANY ADVOCATES_PROFILE_Heavier body text_Small.pdf"

print("Opening PDF...")
reader = PdfReader(pdf_path)

print(f"Found {len(reader.pages)} pages")

# Create directory for extracted images
os.makedirs("extracted_images", exist_ok=True)

# Extract images from first page (where logo likely is)
print("\nExtracting images from first page...")
page = reader.pages[0]

image_count = 0
if "/XObject" in page["/Resources"]:
    xObject = page["/Resources"]["/XObject"].get_object()
    
    for obj in xObject:
        if xObject[obj]["/Subtype"] == "/Image":
            size = (xObject[obj]["/Width"], xObject[obj]["/Height"])
            data = xObject[obj].get_data()
            
            # Save image
            if xObject[obj]["/ColorSpace"] == "/DeviceRGB":
                mode = "RGB"
            else:
                mode = "P"
            
            try:
                image = Image.frombytes(mode, size, data)
                output_path = f"extracted_images/logo_{image_count}.png"
                image.save(output_path)
                print(f"Saved: {output_path} - Size: {size}")
                
                # Analyze colors in this image
                colors = image.getcolors(maxcolors=10000)
                if colors:
                    # Get the most common colors
                    colors.sort(reverse=True)
                    print(f"  Top 5 colors in this image:")
                    for i, (count, color) in enumerate(colors[:5]):
                        if isinstance(color, tuple):
                            print(f"    {i+1}. RGB{color} - #{color[0]:02x}{color[1]:02x}{color[2]:02x} (count: {count})")
                        else:
                            print(f"    {i+1}. Color index: {color} (count: {count})")
                
                image_count += 1
            except Exception as e:
                print(f"Could not process image {obj}: {e}")

# Also use pdfplumber to check for images
print("\nUsing pdfplumber to check layout...")
with pdfplumber.open(pdf_path) as pdf:
    first_page = pdf.pages[0]
    
    # Get images
    images = first_page.images
    print(f"Found {len(images)} image objects with pdfplumber")
    
    # Get text to analyze
    text = first_page.extract_text()
    print(f"\nText from first page (first 500 characters):")
    print(text[:500] if text else "No text found")
    
    # Get page size
    print(f"\nPage dimensions: {first_page.width} x {first_page.height}")

print(f"\nTotal images extracted: {image_count}")
print("Check the 'extracted_images' folder for logo files")
