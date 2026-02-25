#!/usr/bin/env python3
"""Generate social media branding assets for all 4 companies."""

import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import cairosvg
from io import BytesIO

BASE = "/home/ubuntu/.openclaw/workspace/social-media"
LOGOS = "/home/ubuntu/.openclaw/workspace/assets/logos"

# Company brand definitions
COMPANIES = {
    "pulse-graphix": {
        "name": "Pulse Graphix",
        "tagline": "Creative Agency",
        "subtitle": "Design • Branding • Digital",
        "colors": {
            "primary": "#00FF00",
            "secondary": "#0A0A0A",
            "accent": "#00CC00",
            "dark": "#0D1117",
            "mid": "#1A2332",
            "light": "#E0FFE0",
            "glow": "#33FF33",
        },
        "logo_svg": f"{LOGOS}/pulse-graphix-logo.svg",
        "logo_png": f"{LOGOS}/pulse-graphix-logo.png",
    },
    "nexus-ai-academy": {
        "name": "Nexus AI Academy",
        "tagline": "AI-Powered Learning",
        "subtitle": "Learn • Grow • Innovate",
        "colors": {
            "primary": "#1171B6",
            "secondary": "#202F62",
            "accent": "#4A9FD9",
            "dark": "#0A1628",
            "mid": "#152238",
            "light": "#D4EAFF",
            "glow": "#5BB8F5",
        },
        "logo_svg": f"{LOGOS}/nexus-ai-academy-logo.svg",
        "logo_png": f"{LOGOS}/nexus-ai-academy-logo.png",
    },
    "invest-in-congo": {
        "name": "Invest in Congo",
        "tagline": "DRC Investment Platform",
        "subtitle": "Discover • Invest • Grow",
        "colors": {
            "primary": "#F1E8A4",
            "secondary": "#233042",
            "accent": "#D4A843",
            "dark": "#031B46",
            "mid": "#0E2A4F",
            "light": "#FFF8DC",
            "glow": "#FFD700",
        },
        "logo_svg": f"{LOGOS}/invest-in-congo-logo.svg",
        "logo_png": f"{LOGOS}/invest-in-congo-logo.png",
    },
    "pulse-architects": {
        "name": "Pulse Architects",
        "tagline": "Architectural Plans Marketplace",
        "subtitle": "Design • Build • Inspire",
        "colors": {
            "primary": "#07BE8A",
            "secondary": "#172023",
            "accent": "#79ADFF",
            "dark": "#0B1215",
            "mid": "#1A2B30",
            "light": "#D0FFF0",
            "glow": "#33FFBB",
        },
        "logo_svg": f"{LOGOS}/pulse-architects-logo.svg",
        "logo_png": f"{LOGOS}/pulse-architects-logo.png",
    },
}


def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))


def hex_to_rgba(h, a=255):
    return hex_to_rgb(h) + (a,)


def load_logo(company, size=None):
    """Load logo PNG, resize if needed."""
    png_path = company["logo_png"]
    if os.path.exists(png_path):
        img = Image.open(png_path).convert("RGBA")
        if size:
            img.thumbnail(size, Image.LANCZOS)
        return img
    return None


def get_font(size, bold=False):
    """Get available font."""
    if bold:
        paths = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            "/usr/share/fonts/opentype/urw-base35/NimbusSans-Bold.otf",
        ]
    else:
        paths = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-ExtraLight.ttf",
        ]
    for p in paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def get_light_font(size):
    p = "/usr/share/fonts/truetype/dejavu/DejaVuSans-ExtraLight.ttf"
    if os.path.exists(p):
        return ImageFont.truetype(p, size)
    return get_font(size)


def draw_glass_rect(draw, bbox, fill_rgba, border_rgba=None, radius=20):
    """Draw a glassmorphism-style rounded rectangle."""
    x0, y0, x1, y1 = bbox
    overlay = Image.new("RGBA", (x1-x0, y1-y0), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rounded_rectangle((0, 0, x1-x0, y1-y0), radius=radius, fill=fill_rgba)
    if border_rgba:
        od.rounded_rectangle((0, 0, x1-x0, y1-y0), radius=radius, outline=border_rgba, width=2)
    return overlay, (x0, y0)


def add_grid_pattern(img, color, spacing=40, alpha=15):
    """Add subtle grid lines."""
    draw = ImageDraw.Draw(img)
    w, h = img.size
    c = hex_to_rgba(color, alpha)
    for x in range(0, w, spacing):
        draw.line([(x, 0), (x, h)], fill=c, width=1)
    for y in range(0, h, spacing):
        draw.line([(0, y), (w, y)], fill=c, width=1)


def add_dots_pattern(img, color, spacing=60, radius=2, alpha=30):
    """Add dot grid pattern."""
    draw = ImageDraw.Draw(img)
    w, h = img.size
    c = hex_to_rgba(color, alpha)
    for x in range(spacing//2, w, spacing):
        for y in range(spacing//2, h, spacing):
            draw.ellipse([x-radius, y-radius, x+radius, y+radius], fill=c)


def add_diagonal_lines(img, color, spacing=80, alpha=20):
    """Add diagonal accent lines."""
    draw = ImageDraw.Draw(img)
    w, h = img.size
    c = hex_to_rgba(color, alpha)
    for offset in range(-h, w+h, spacing):
        draw.line([(offset, 0), (offset+h, h)], fill=c, width=1)


def create_gradient(w, h, color1, color2, direction="vertical"):
    """Create a gradient image."""
    img = Image.new("RGBA", (w, h))
    c1 = hex_to_rgb(color1)
    c2 = hex_to_rgb(color2)
    for i in range(h if direction == "vertical" else w):
        ratio = i / (h if direction == "vertical" else w)
        r = int(c1[0] + (c2[0] - c1[0]) * ratio)
        g = int(c1[1] + (c2[1] - c1[1]) * ratio)
        b = int(c1[2] + (c2[2] - c1[2]) * ratio)
        draw = ImageDraw.Draw(img)
        if direction == "vertical":
            draw.line([(0, i), (w, i)], fill=(r, g, b, 255))
        else:
            draw.line([(i, 0), (i, h)], fill=(r, g, b, 255))
    return img


def add_glow_circle(img, center, radius, color, alpha=40):
    """Add a soft glowing circle."""
    glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    c = hex_to_rgb(color)
    for i in range(radius, 0, -2):
        a = int(alpha * (i / radius))
        d.ellipse([center[0]-i, center[1]-i, center[0]+i, center[1]+i], 
                   fill=c + (a,))
    img.paste(Image.alpha_composite(Image.new("RGBA", img.size, (0,0,0,0)), glow), (0,0), glow)


def add_accent_circles(img, colors, count=5):
    """Add decorative accent circles."""
    import random
    random.seed(42)
    w, h = img.size
    for _ in range(count):
        x = random.randint(0, w)
        y = random.randint(0, h)
        r = random.randint(50, min(w, h) // 4)
        color = random.choice(colors)
        add_glow_circle(img, (x, y), r, color, alpha=25)


# =============================================
# PROFILE PICTURE GENERATOR
# =============================================
def create_profile_picture(company_key, company, variation=1):
    """Create 800x800 profile picture."""
    size = 800
    c = company["colors"]
    
    if variation == 1:
        # Dark bg with centered logo + glow effect
        img = create_gradient(size, size, c["dark"], c["mid"])
        add_dots_pattern(img, c["primary"], spacing=40, radius=1, alpha=20)
        add_glow_circle(img, (size//2, size//2), 300, c["primary"], alpha=30)
        add_glow_circle(img, (size//2, size//2), 200, c["glow"], alpha=20)
        
        # Glass border circle
        draw = ImageDraw.Draw(img)
        draw.ellipse([60, 60, size-60, size-60], outline=hex_to_rgba(c["primary"], 60), width=3)
        draw.ellipse([40, 40, size-40, size-40], outline=hex_to_rgba(c["primary"], 30), width=1)
        
        logo = load_logo(company, (450, 450))
        if logo:
            lx = (size - logo.width) // 2
            ly = (size - logo.height) // 2
            img.paste(logo, (lx, ly), logo)
    
    elif variation == 2:
        # Solid primary color bg with white logo overlay
        img = create_gradient(size, size, c["primary"], c["accent"], "vertical")
        add_grid_pattern(img, "#FFFFFF", spacing=50, alpha=15)
        
        # Dark glass circle in center
        glass, pos = draw_glass_rect(ImageDraw.Draw(img), 
            [100, 100, size-100, size-100], 
            hex_to_rgba(c["dark"], 180), 
            hex_to_rgba("#FFFFFF", 40), radius=350)
        img.paste(glass, pos, glass)
        
        logo = load_logo(company, (380, 380))
        if logo:
            lx = (size - logo.width) // 2
            ly = (size - logo.height) // 2
            img.paste(logo, (lx, ly), logo)
    
    path = f"{BASE}/{company_key}/profile-picture-v{variation}.png"
    img.convert("RGB").save(path, quality=95)
    print(f"  ✓ {path}")
    return path


# =============================================
# BANNER / COVER IMAGE GENERATOR
# =============================================
def create_banner(company_key, company, variation=1):
    """Create banners for LinkedIn (1584x396), Facebook (851x315), YouTube (2560x1440)."""
    c = company["colors"]
    outputs = []
    
    sizes = {
        "linkedin": (1584, 396),
        "facebook": (851, 315),
        "youtube": (2560, 1440),
    }
    
    for platform, (w, h) in sizes.items():
        if variation == 1:
            img = create_gradient(w, h, c["dark"], c["mid"], "horizontal")
            add_diagonal_lines(img, c["primary"], spacing=120, alpha=15)
            add_glow_circle(img, (w//5, h//2), min(w,h)//2, c["primary"], alpha=25)
            add_glow_circle(img, (w*4//5, h//2), min(w,h)//3, c["accent"], alpha=20)
            
            # Glass panel on right side
            panel_w = int(w * 0.45)
            panel_h = int(h * 0.7)
            panel_x = w - panel_w - int(w * 0.05)
            panel_y = (h - panel_h) // 2
            glass, pos = draw_glass_rect(ImageDraw.Draw(img),
                [panel_x, panel_y, panel_x + panel_w, panel_y + panel_h],
                hex_to_rgba(c["primary"], 25),
                hex_to_rgba(c["primary"], 60), radius=15)
            img.paste(glass, pos, glass)
            
            draw = ImageDraw.Draw(img)
            
            # Company name
            fname_size = max(int(h * 0.18), 20)
            font_name = get_font(fname_size, bold=True)
            name_x = panel_x + 30
            name_y = panel_y + int(panel_h * 0.2)
            draw.text((name_x, name_y), company["name"].upper(), 
                      fill=hex_to_rgb(c["light"]), font=font_name)
            
            # Tagline
            ftag_size = max(int(h * 0.08), 14)
            font_tag = get_light_font(ftag_size)
            draw.text((name_x, name_y + fname_size + 10), company["tagline"],
                      fill=hex_to_rgba(c["primary"], 200), font=font_tag)
            
            # Subtitle
            fsub_size = max(int(h * 0.06), 12)
            font_sub = get_light_font(fsub_size)
            draw.text((name_x, name_y + fname_size + ftag_size + 25), company["subtitle"],
                      fill=hex_to_rgba("#FFFFFF", 120), font=font_sub)
            
            # Logo on left
            logo = load_logo(company, (int(h * 0.6), int(h * 0.6)))
            if logo:
                lx = int(w * 0.08)
                ly = (h - logo.height) // 2
                img.paste(logo, (lx, ly), logo)
        
        elif variation == 2:
            img = create_gradient(w, h, c["mid"], c["dark"], "vertical")
            add_dots_pattern(img, c["primary"], spacing=50, radius=2, alpha=18)
            
            # Multiple glow spots
            add_glow_circle(img, (w//3, h//3), min(w,h)//3, c["glow"], alpha=20)
            add_glow_circle(img, (w*2//3, h*2//3), min(w,h)//4, c["accent"], alpha=18)
            
            # Bottom accent line
            draw = ImageDraw.Draw(img)
            draw.rectangle([0, h-4, w, h], fill=hex_to_rgb(c["primary"]))
            
            # Centered layout
            fname_size = max(int(h * 0.2), 24)
            font_name = get_font(fname_size, bold=True)
            bbox = draw.textbbox((0, 0), company["name"].upper(), font=font_name)
            tw = bbox[2] - bbox[0]
            name_x = (w - tw) // 2
            name_y = int(h * 0.25)
            draw.text((name_x, name_y), company["name"].upper(),
                      fill="#FFFFFF", font=font_name)
            
            # Tagline centered below
            ftag_size = max(int(h * 0.09), 14)
            font_tag = get_light_font(ftag_size)
            bbox2 = draw.textbbox((0, 0), company["tagline"], font=font_tag)
            tw2 = bbox2[2] - bbox2[0]
            draw.text(((w - tw2) // 2, name_y + fname_size + 15), company["tagline"],
                      fill=hex_to_rgb(c["primary"]), font=font_tag)
            
            # Logo small on left
            logo = load_logo(company, (int(h * 0.4), int(h * 0.4)))
            if logo:
                lx = int(w * 0.05)
                ly = (h - logo.height) // 2
                img.paste(logo, (lx, ly), logo)
        
        path = f"{BASE}/{company_key}/banner-{platform}-v{variation}.png"
        img.convert("RGB").save(path, quality=95)
        outputs.append(path)
        print(f"  ✓ {path}")
    
    return outputs


# =============================================
# POST TEMPLATE GENERATOR (1080x1080)
# =============================================
def create_post_template(company_key, company, variation=1):
    """Create 1080x1080 post template."""
    size = 1080
    c = company["colors"]
    
    if variation == 1:
        img = create_gradient(size, size, c["dark"], c["mid"])
        add_grid_pattern(img, c["primary"], spacing=60, alpha=12)
        add_glow_circle(img, (200, 200), 300, c["primary"], alpha=20)
        add_glow_circle(img, (size-200, size-200), 250, c["accent"], alpha=18)
        
        # Top glass panel
        glass, pos = draw_glass_rect(ImageDraw.Draw(img),
            [60, 60, size-60, 300],
            hex_to_rgba(c["primary"], 20),
            hex_to_rgba(c["primary"], 50), radius=20)
        img.paste(glass, pos, glass)
        
        draw = ImageDraw.Draw(img)
        
        # Logo
        logo = load_logo(company, (120, 120))
        if logo:
            img.paste(logo, (90, 100), logo)
        
        # Company name next to logo
        font_name = get_font(42, bold=True)
        draw.text((230, 130), company["name"].upper(), fill="#FFFFFF", font=font_name)
        
        # Subtitle
        font_sub = get_light_font(22)
        draw.text((230, 185), company["tagline"], fill=hex_to_rgb(c["primary"]), font=font_sub)
        
        # Center area - placeholder text
        font_main = get_font(64, bold=True)
        text = "YOUR\nCONTENT\nHERE"
        bbox = draw.multiline_textbbox((0, 0), text, font=font_main)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        draw.multiline_text(((size-tw)//2, (size-th)//2 + 40), text,
                           fill=hex_to_rgba("#FFFFFF", 180), font=font_main, align="center")
        
        # Bottom accent bar
        draw.rectangle([60, size-80, size-60, size-76], fill=hex_to_rgb(c["primary"]))
        
        # Bottom text
        font_sm = get_light_font(18)
        draw.text((70, size-65), company["subtitle"], fill=hex_to_rgba("#FFFFFF", 150), font=font_sm)
    
    elif variation == 2:
        # Bold primary-colored header
        img = Image.new("RGBA", (size, size), hex_to_rgba(c["dark"], 255))
        draw = ImageDraw.Draw(img)
        
        # Top colored band
        band_h = 350
        band = create_gradient(size, band_h, c["primary"], c["accent"], "horizontal")
        img.paste(band, (0, 0))
        add_diagonal_lines(img, "#FFFFFF", spacing=60, alpha=20)
        
        draw = ImageDraw.Draw(img)
        
        # Logo in top band
        logo = load_logo(company, (160, 160))
        if logo:
            lx = (size - logo.width) // 2
            img.paste(logo, (lx, 60), logo)
        
        # Company name below band
        font_name = get_font(48, bold=True)
        bbox = draw.textbbox((0, 0), company["name"].upper(), font=font_name)
        tw = bbox[2] - bbox[0]
        draw.text(((size-tw)//2, band_h + 40), company["name"].upper(),
                  fill="#FFFFFF", font=font_name)
        
        # Divider line
        draw.rectangle([(size//2 - 100), band_h + 110, (size//2 + 100), band_h + 113],
                       fill=hex_to_rgb(c["primary"]))
        
        # Content placeholder
        font_content = get_font(36, bold=True)
        placeholder = "YOUR CONTENT\nGOES HERE"
        bbox2 = draw.multiline_textbbox((0, 0), placeholder, font=font_content)
        tw2 = bbox2[2] - bbox2[0]
        draw.multiline_text(((size-tw2)//2, 600), placeholder,
                           fill=hex_to_rgba("#FFFFFF", 150), font=font_content, align="center")
        
        # Bottom dots
        add_dots_pattern(img, c["primary"], spacing=40, radius=2, alpha=25)
        
        # Bottom bar
        draw = ImageDraw.Draw(img)
        draw.rectangle([0, size-6, size, size], fill=hex_to_rgb(c["primary"]))
    
    path = f"{BASE}/{company_key}/post-template-v{variation}.png"
    img.convert("RGB").save(path, quality=95)
    print(f"  ✓ {path}")
    return path


# =============================================
# STORY TEMPLATE GENERATOR (1080x1920)
# =============================================
def create_story_template(company_key, company, variation=1):
    """Create 1080x1920 story template."""
    w, h = 1080, 1920
    c = company["colors"]
    
    if variation == 1:
        img = create_gradient(w, h, c["dark"], c["mid"])
        add_diagonal_lines(img, c["primary"], spacing=100, alpha=12)
        add_glow_circle(img, (w//2, h//4), 400, c["primary"], alpha=25)
        add_glow_circle(img, (w//2, h*3//4), 350, c["accent"], alpha=20)
        
        draw = ImageDraw.Draw(img)
        
        # Top logo area with glass
        glass, pos = draw_glass_rect(ImageDraw.Draw(img),
            [60, 80, w-60, 280],
            hex_to_rgba(c["primary"], 18),
            hex_to_rgba(c["primary"], 45), radius=20)
        img.paste(glass, pos, glass)
        
        draw = ImageDraw.Draw(img)
        
        logo = load_logo(company, (140, 140))
        if logo:
            img.paste(logo, (90, 110), logo)
        
        font_name = get_font(36, bold=True)
        draw.text((250, 140), company["name"].upper(), fill="#FFFFFF", font=font_name)
        font_tag = get_light_font(20)
        draw.text((250, 190), company["tagline"], fill=hex_to_rgb(c["primary"]), font=font_tag)
        
        # Center content area
        font_big = get_font(72, bold=True)
        center_text = "YOUR\nSTORY\nHERE"
        bbox = draw.multiline_textbbox((0, 0), center_text, font=font_big)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        draw.multiline_text(((w-tw)//2, (h-th)//2), center_text,
                           fill=hex_to_rgba("#FFFFFF", 160), font=font_big, align="center")
        
        # Bottom CTA glass panel
        glass2, pos2 = draw_glass_rect(ImageDraw.Draw(img),
            [120, h-250, w-120, h-140],
            hex_to_rgba(c["primary"], 30),
            hex_to_rgba(c["primary"], 70), radius=55)
        img.paste(glass2, pos2, glass2)
        draw = ImageDraw.Draw(img)
        
        font_cta = get_font(28, bold=True)
        cta_text = "SWIPE UP →"
        bbox3 = draw.textbbox((0, 0), cta_text, font=font_cta)
        tw3 = bbox3[2] - bbox3[0]
        draw.text(((w-tw3)//2, h-215), cta_text, fill="#FFFFFF", font=font_cta)
        
        # Side accents
        draw.rectangle([0, 0, 4, h], fill=hex_to_rgb(c["primary"]))
        draw.rectangle([w-4, 0, w, h], fill=hex_to_rgb(c["primary"]))
    
    elif variation == 2:
        # Vibrant gradient story
        img = create_gradient(w, h, c["primary"], c["dark"])
        add_dots_pattern(img, "#FFFFFF", spacing=50, radius=2, alpha=20)
        
        draw = ImageDraw.Draw(img)
        
        # Top logo
        logo = load_logo(company, (200, 200))
        if logo:
            lx = (w - logo.width) // 2
            img.paste(logo, (lx, 150), logo)
        
        draw = ImageDraw.Draw(img)
        
        # Company name
        font_name = get_font(52, bold=True)
        bbox = draw.textbbox((0, 0), company["name"].upper(), font=font_name)
        tw = bbox[2] - bbox[0]
        draw.text(((w-tw)//2, 400), company["name"].upper(), fill="#FFFFFF", font=font_name)
        
        # Divider
        draw.rectangle([(w//2-80), 480, (w//2+80), 483], fill="#FFFFFF")
        
        # Center content
        font_content = get_font(48, bold=True)
        text = "YOUR\nSTORY\nCONTENT"
        bbox2 = draw.multiline_textbbox((0, 0), text, font=font_content)
        tw2 = bbox2[2] - bbox2[0]
        th2 = bbox2[3] - bbox2[1]
        draw.multiline_text(((w-tw2)//2, (h-th2)//2 + 100), text,
                           fill=hex_to_rgba("#FFFFFF", 140), font=font_content, align="center")
        
        # Bottom subtitle
        font_sub = get_light_font(22)
        bbox3 = draw.textbbox((0, 0), company["subtitle"], font=font_sub)
        tw3 = bbox3[2] - bbox3[0]
        draw.text(((w-tw3)//2, h-150), company["subtitle"],
                  fill=hex_to_rgba("#FFFFFF", 180), font=font_sub)
        
        # Top & bottom bars
        draw.rectangle([0, 0, w, 6], fill="#FFFFFF")
        draw.rectangle([0, h-6, w, h], fill="#FFFFFF")
    
    path = f"{BASE}/{company_key}/story-template-v{variation}.png"
    img.convert("RGB").save(path, quality=95)
    print(f"  ✓ {path}")
    return path


# =============================================
# MAIN GENERATION
# =============================================
def main():
    all_assets = []
    
    for key, company in COMPANIES.items():
        print(f"\n{'='*60}")
        print(f"  Generating assets for: {company['name']}")
        print(f"{'='*60}")
        
        outdir = f"{BASE}/{key}"
        os.makedirs(outdir, exist_ok=True)
        
        # Profile Pictures (2 variations)
        for v in [1, 2]:
            path = create_profile_picture(key, company, v)
            all_assets.append((key, "Profile Picture", "800×800", f"v{v}", path))
        
        # Banners (2 variations × 3 platforms)
        for v in [1, 2]:
            paths = create_banner(key, company, v)
            for p in paths:
                platform = p.split("banner-")[1].split("-v")[0]
                dims = {"linkedin": "1584×396", "facebook": "851×315", "youtube": "2560×1440"}
                all_assets.append((key, f"Banner ({platform})", dims[platform], f"v{v}", p))
        
        # Post Templates (2 variations)
        for v in [1, 2]:
            path = create_post_template(key, company, v)
            all_assets.append((key, "Post Template", "1080×1080", f"v{v}", path))
        
        # Story Templates (2 variations)
        for v in [1, 2]:
            path = create_story_template(key, company, v)
            all_assets.append((key, "Story Template", "1080×1920", f"v{v}", path))
    
    # Generate README
    print(f"\n{'='*60}")
    print("  Generating README.md")
    print(f"{'='*60}")
    
    readme = "# Social Media Branding Kit\n\n"
    readme += "Complete social media asset package for all 4 Kabundji companies.\n\n"
    readme += "## Specifications\n\nSee [SPECS.md](./SPECS.md) for platform dimension reference.\n\n"
    
    current_company = ""
    for key, asset_type, dims, var, path in all_assets:
        company_name = COMPANIES[key]["name"]
        if company_name != current_company:
            current_company = company_name
            colors = COMPANIES[key]["colors"]
            readme += f"\n---\n\n## {company_name}\n\n"
            readme += f"**Brand Colors:** Primary `{colors['primary']}` | Secondary `{colors['secondary']}` | Accent `{colors['accent']}`\n\n"
            readme += "| Asset | Dimensions | Variation | File | Description |\n"
            readme += "|---|---|---|---|---|\n"
        
        rel_path = path.replace(BASE + "/", "")
        desc_map = {
            "Profile Picture": "Dark gradient bg with logo, glow effects & glass accents" if "v1" in var else "Primary color gradient with glass overlay & centered logo",
            "Banner": "Dark bg, diagonal accents, glass panel with typography" if "v1" in var else "Centered layout with dot pattern & gradient",
            "Post Template": "Dark bg, grid pattern, glass header with content area" if "v1" in var else "Bold colored header band with structured layout",
            "Story Template": "Dark gradient, glass panels, CTA button area" if "v1" in var else "Vibrant gradient with centered logo & content",
        }
        base_type = asset_type.split(" (")[0]
        desc = desc_map.get(base_type, "Premium branded asset")
        readme += f"| {asset_type} | {dims} | {var} | `{rel_path}` | {desc} |\n"
    
    readme += "\n\n## Design System\n\n"
    readme += "All assets feature:\n"
    readme += "- **Glass-morphism** — Frosted glass panels with subtle borders\n"
    readme += "- **Gradient backgrounds** — Rich dark-to-mid tone gradients\n"
    readme += "- **Glow accents** — Soft radial color glows for depth\n"
    readme += "- **Grid/dot patterns** — Subtle geometric overlays\n"
    readme += "- **Bold typography** — DejaVu Sans Bold + ExtraLight pairing\n"
    readme += "- **Brand-consistent colors** — Each company's palette applied consistently\n"
    readme += "\n## Platforms Covered\n\n"
    readme += "- LinkedIn (profile, cover, posts)\n"
    readme += "- Instagram (profile, posts, stories, reels)\n"
    readme += "- TikTok (profile, stories/covers)\n"
    readme += "- YouTube (profile, channel banner)\n"
    readme += "- Facebook (profile, cover, posts, stories)\n"
    
    with open(f"{BASE}/README.md", "w") as f:
        f.write(readme)
    print(f"  ✓ {BASE}/README.md")
    
    print(f"\n{'='*60}")
    print(f"  DONE! Generated {len(all_assets)} assets total")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
