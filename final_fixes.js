const fs = require('fs');
let html = fs.readFileSync('three-roots-v4 (1).html', 'utf8');

// 1. First image (Origin Quote) fixes:
// Change wrong. color from earth-mid to saffron-light or a lighter color
html = html.replace(/<em style='color:var\(--earth-mid\)'>wrong\.<\/em>/, "<em style='color:var(--saffron-light)'>wrong.</em>");
// Change .origin-attr color to be readable against dark background
html = html.replace(/\.origin-attr\s*\{[\s\S]*?color:var\(--earth-mid\);/, ".origin-attr {\n  font-family:var(--sans);font-size:0.72rem;font-weight:500;\n  letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,240,236,0.6);");

// 2. Second image (CTA Meditation Image)
// We replace the image in the home-cta-image-col with an Unsplash bright meditating person
html = html.replace(/<img src="images\/meditation-cta\.png"[^>]*>/, '<img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1800&auto=format&fit=crop" alt="Bright Meditating Person" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;">');

// 3. Third image (Retreats - Rooted in Tradition)
// Remove the green valley image so the beautiful sky image can be seen
html = html.replace(/<img src="https:\/\/images\.squarespace-cdn\.com[^>]*Bhutan_009\.jpg"[^>]*>/, '');

// Ensure text wraps cleanly in retreat-hero
html = html.replace(/\.retreat-hero-content\s*\{[\s\S]*?max-width:780px;/, ".retreat-hero-content {\n  position:relative;z-index:2;\n  padding:0 3.5rem 5rem;max-width:100%;width:100%;box-sizing:border-box;");
// Make the text readable against the sky background by ensuring it's dark
html = html.replace(/\.retreat-hero-title\s*\{[\s\S]*?color:var\(--earth\);/, ".retreat-hero-title {\n  font-family:var(--serif);font-size:clamp(3rem,6vw,6rem);\n  font-weight:300;line-height:1.05;color:var(--earth);\n  text-shadow: 0 0 20px rgba(255,255,255,0.7);");
html = html.replace(/\.retreat-hero-title em\s*\{[\s\S]*?\}/, ".retreat-hero-title em {color:var(--saffron);font-style:italic}");

fs.writeFileSync('three-roots-v4 (1).html', html);
console.log('Final fixes applied successfully.');
