const fs = require('fs');
let html = fs.readFileSync('three-roots-v4 (1).html', 'utf8');

// Replace CTA image back to meditation one, but brightened via CSS
html = html.replace(/<img src="images\/cta-bright\.png"[^>]*>/, '<img src="images/meditation-cta.png" alt="Tibetan Medical Anatomy - Chakra & Channel Diagram" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center; filter: brightness(1.4) contrast(1.05) saturate(0.8) sepia(0.1);">');

// Strip out the mountain drawing logic from hero-canvas
html = html.replace(/\/\/ Mountain silhouettes - distant range[\s\S]*?\/\/ Closer mountain range[\s\S]*?ctx\.fill\(\);\n\s*ctx\.restore\(\);/g, '// Mountains removed');

// Strip out the mountain drawing logic from experience-canvas
html = html.replace(/\/\/ Mountain silhouette at bottom[\s\S]*?ctx\.restore\(\);/g, '// Mountains removed');

// Strip out from origin-canvas as well if it exists
html = html.replace(/\/\/ Mountain peaks[\s\S]*?ctx\.fill\(\);\n\s*ctx\.restore\(\);/g, '// Mountains removed');

fs.writeFileSync('three-roots-v4 (1).html', html);
console.log('Fixed mountains and CTA image');
