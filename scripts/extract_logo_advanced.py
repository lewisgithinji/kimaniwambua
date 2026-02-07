"""
Advanced PDF Logo and Color Extraction
Using pypdfium2 for high-quality rendering and color analysis
"""

import pypdfium2 as pdfium
from PIL import Image
import os
from collections import Counter
import colorsys

def rgb_to_hex(rgb):
    """Convert RGB tuple to hex color code"""
    return f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}"

def is_significant_color(rgb, min_darkness=50, max_darkness=240):
    """Filter out near-white and near-black colors"""
    brightness = sum(rgb) / 3
    return min_darkness < brightness < max_darkness

def extract_logo_and_colors(pdf_path, output_dir="extracted_assets"):
    """Extract logo and analyze color palette from PDF"""
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs(f"{output_dir}/pages", exist_ok=True)
    os.makedirs(f"{output_dir}/analysis", exist_ok=True)
    
    print(f"Opening PDF: {pdf_path}")
    pdf = pdfium.PdfDocument(pdf_path)
    
    print(f"Found {len(pdf)} pages")
    
    results = {
        "pages_rendered": [],
        "color_analysis": {},
        "recommendations": {}
    }
    
    # Render first 3 pages at high resolution
    for page_num in range(min(3, len(pdf))):
        print(f"\n--- Processing Page {page_num + 1} ---")
        page = pdf[page_num]
        
        # Render at 4x resolution for logo extraction
        print("Rendering at 4x resolution...")
        bitmap = page.render(scale=4.0, rotation=0)
        img = bitmap.to_pil()
        
        # Save high-res page
        output_path = f"{output_dir}/pages/page_{page_num + 1}_highres.png"
        img.save(output_path, "PNG")
        print(f"Saved: {output_path}")
        results["pages_rendered"].append(output_path)
        
        # Analyze colors from this page
        print("Analyzing colors...")
        
        # Get all colors with their frequency
        colors = img.getcolors(maxcolors=1000000)
        
        if colors:
            # Filter out whites and near-whites
            significant_colors = [
                (count, color[:3] if len(color) == 4 else color) 
                for count, color in colors
                if len(color) >= 3 and is_significant_color(color[:3])
            ]
            
            # Sort by frequency
            significant_colors.sort(reverse=True, key=lambda x: x[0])
            
            # Top 15 colors
            top_colors = significant_colors[:15]
            
            results["color_analysis"][f"page_{page_num + 1}"] = {
                "total_colors": len(colors),
                "significant_colors": len(significant_colors),
                "top_15": [
                    {
                        "hex": rgb_to_hex(color),
                        "rgb": color,
                        "count": count,
                        "percentage": round(count / sum(c[0] for c in colors) * 100, 2)
                    }
                    for count, color in top_colors
                ]
            }
            
            # Print top 10 colors for this page
            print(f"\nTop 10 colors on page {page_num + 1}:")
            for i, (count, color) in enumerate(top_colors[:10], 1):
                hex_color = rgb_to_hex(color)
                percentage = round(count / sum(c[0] for c in colors) * 100, 2)
                print(f"  {i}. {hex_color} RGB{color} - {percentage}% ({count:,} pixels)")
    
    # Aggregate colors across all pages
    print("\n--- Aggregating Colors Across All Pages ---")
    all_colors = {}
    for page_data in results["color_analysis"].values():
        for color_info in page_data["top_15"]:
            hex_code = color_info["hex"]
            if hex_code in all_colors:
                all_colors[hex_code]["count"] += color_info["count"]
            else:
                all_colors[hex_code] = {
                    "rgb": color_info["rgb"],
                    "count": color_info["count"]
                }
    
    # Sort aggregated colors
    sorted_colors = sorted(all_colors.items(), key=lambda x: x[1]["count"], reverse=True)
    
    print("\nAggregated Top 10 Colors Across Document:")
    for i, (hex_code, data) in enumerate(sorted_colors[:10], 1):
        print(f"  {i}. {hex_code} RGB{data['rgb']} - {data['count']:,} total pixels")
    
    # Identify primary brand colors
    print("\n--- Color Scheme Recommendations ---")
    
    # Look for dark colors (likely primary - navy/black)
    dark_colors = [
        (hex_code, data) for hex_code, data in sorted_colors
        if sum(data['rgb']) < 150
    ]
    
    # Look for gold/warm colors (likely secondary)
    gold_colors = [
        (hex_code, data) for hex_code, data in sorted_colors
        if (data['rgb'][0] > 150 and data['rgb'][1] > 120 and data['rgb'][2] < 150)
    ]
    
    # Look for blue/professional colors
    blue_colors = [
        (hex_code, data) for hex_code, data in sorted_colors
        if (data['rgb'][2] > data['rgb'][0] and data['rgb'][2] > data['rgb'][1])
    ]
    
    recommendations = {
        "primary_dark": dark_colors[:3] if dark_colors else [],
        "secondary_gold": gold_colors[:3] if gold_colors else [],
        "accent_blue": blue_colors[:3] if blue_colors else [],
        "top_10_overall": sorted_colors[:10]
    }
    
    print("\nRecommended Primary (Dark) Colors:")
    for hex_code, data in recommendations["primary_dark"]:
        print(f"  {hex_code} RGB{data['rgb']}")
    
    print("\nRecommended Secondary (Gold/Warm) Colors:")
    for hex_code, data in recommendations["secondary_gold"]:
        print(f"  {hex_code} RGB{data['rgb']}")
    
    print("\nRecommended Accent (Blue) Colors:")
    for hex_code, data in recommendations["accent_blue"]:
        print(f"  {hex_code} RGB{data['rgb']}")
    
    results["recommendations"] = recommendations
    
    # Save detailed analysis
    import json
    analysis_file = f"{output_dir}/analysis/color_analysis.json"
    with open(analysis_file, 'w') as f:
        # Convert tuples to lists for JSON serialization
        serializable_results = {
            "pages_rendered": results["pages_rendered"],
            "color_analysis": {
                page: {
                    "total_colors": data["total_colors"],
                    "significant_colors": data["significant_colors"],
                    "top_15": [
                        {
                            "hex": c["hex"],
                            "rgb": list(c["rgb"]),
                            "count": c["count"],
                            "percentage": c["percentage"]
                        }
                        for c in data["top_15"]
                    ]
                }
                for page, data in results["color_analysis"].items()
            },
            "recommendations": {
                "primary_dark": [(hex_code, {"rgb": list(data["rgb"]), "count": data["count"]}) for hex_code, data in recommendations["primary_dark"]],
                "secondary_gold": [(hex_code, {"rgb": list(data["rgb"]), "count": data["count"]}) for hex_code, data in recommendations["secondary_gold"]],
                "accent_blue": [(hex_code, {"rgb": list(data["rgb"]), "count": data["count"]}) for hex_code, data in recommendations["accent_blue"]],
                "top_10_overall": [(hex_code, {"rgb": list(data["rgb"]), "count": data["count"]}) for hex_code, data in sorted_colors[:10]]
            }
        }
        json.dump(serializable_results, f, indent=2)
    print(f"\nDetailed analysis saved to: {analysis_file}")
    
    return results

if __name__ == "__main__":
    pdf_file = r"KIMANI WAMBUA & COMPANY ADVOCATES_PROFILE_Heavier body text_Small.pdf"
    
    if not os.path.exists(pdf_file):
        print(f"Error: PDF file not found: {pdf_file}")
        exit(1)
    
    print("=" * 60)
    print("PDF Logo and Color Extraction Tool")
    print("=" * 60)
    
    results = extract_logo_and_colors(pdf_file)
    
    print("\n" + "=" * 60)
    print("Extraction Complete!")
    print("=" * 60)
    print(f"\nHigh-resolution pages saved to: extracted_assets/pages/")
    print(f"Color analysis saved to: extracted_assets/analysis/")
    print("\nNext steps:")
    print("1. Review extracted_assets/pages/page_1_highres.png for logo")
    print("2. Check color_analysis.json for complete color data")
    print("3. Update globals.css with recommended colors")
