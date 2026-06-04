const fs = require('fs');
let html = fs.readFileSync('three-roots-v4 (1).html', 'utf8');

// 1. Remove hero-dharma and retreat-hero-mountains
html = html.replace(/<svg class="hero-dharma"[\s\S]*?<\/svg>/, '');
html = html.replace(/<svg class="retreat-hero-mountains"[\s\S]*?<\/svg>/, '');

// 2. Waving flag divider
const newBorderCSS = `.tib-border-strip {
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,6 C10,12 10,0 20,6 C30,12 30,0 40,6' fill='none' stroke='%23C48828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.4'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  animation: waveFlag 4s linear infinite;
}
@keyframes waveFlag { from { background-position: 0 0; } to { background-position: 40px 0; } }`;
html = html.replace(/\/\* Tibetan ornamental border \*\/[\s\S]*?\.tib-border-strip\s*\{[\s\S]*?opacity:0\.65;\s*\}/, '/* Tibetan ornamental border */\n' + newBorderCSS);

// 3. Bright CTA
html = html.replace(/\.home-cta\s*\{[\s\S]*?background:var\(--earth\);/, '.home-cta {\n  background:var(--parchment);');
html = html.replace(/\.home-cta-text-col\s*\{[\s\S]*?background:var\(--earth\);/, '.home-cta-text-col {\n  padding:80px 64px;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  position:relative;\n  z-index:1;\n  background:var(--parchment);');
html = html.replace(/\.home-cta-title\s*\{[\s\S]*?color:var\(--parchment\);/, '.home-cta-title {\n  font-family:var(--serif);font-size:clamp(2.2rem,5vw,4.5rem);\n  font-weight:400;color:var(--earth);');
html = html.replace(/\.home-cta-sub\s*\{[\s\S]*?color:rgba\(240,240,236,0\.65\);/, '.home-cta-sub {font-size:1.05rem;color:var(--text-mid);');
html = html.replace(/<div class="home-cta-image-col">[\s\S]*?<img src="images\/meditation-cta.png"([^>]*)>[\s\S]*?<\/div>/, '<div class="home-cta-image-col">\n        <img src="images/cta-bright.png" $1 style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center">\n      </div>');
html = html.replace(/<div class="label-tag" style="color:rgba\(240,240,236,0\.7\)">A Rare Opportunity<\/div>/, '<div class="label-tag">A Rare Opportunity</div>');

// 4. Update Button CSS
const newBtnCSS = `.btn-saffron {
  display:inline-flex;align-items:center;gap:0.5rem;
  font-family:var(--sans);font-size:0.82rem;font-weight:700;
  letter-spacing:0.1em;text-transform:uppercase;
  color:var(--earth);background:var(--saffron);
  padding:0.9rem 2.2rem;border-radius:30px;text-decoration:none;
  box-shadow: 0 4px 14px rgba(252,211,84,0.3);
  transition:all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.btn-saffron:hover { background:var(--saffron-light); transform:translateY(-2px); box-shadow: 0 6px 20px rgba(252,211,84,0.4); }
.btn-earth {
  display:inline-flex;align-items:center;gap:0.5rem;
  font-family:var(--sans);font-size:0.82rem;font-weight:700;
  letter-spacing:0.1em;text-transform:uppercase;
  color:var(--earth);background:transparent;
  padding:0.9rem 2.2rem;border-radius:30px;text-decoration:none;
  border:1px solid rgba(44,42,36,0.25);
  transition:all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.btn-earth:hover { background:rgba(44,42,36,0.04); border-color:var(--earth); transform:translateY(-1px); }
.btn-outline-light {
  display:inline-flex;align-items:center;gap:0.5rem;
  font-family:var(--sans);font-size:0.82rem;font-weight:700;
  letter-spacing:0.08em;text-transform:uppercase;
  color:var(--earth);background:transparent;
  padding:0.9rem 2.2rem;border-radius:30px;text-decoration:none;
  border:1px solid var(--earth-mid);
  transition:all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.btn-outline-light:hover { background:rgba(44,42,36,0.04); transform:translateY(-1px); }`;
html = html.replace(/\.btn-saffron\s*\{[\s\S]*?\.btn-outline-light:hover\s*\{[\s\S]*?\}/, newBtnCSS);

// 5. Add generated backgrounds
// About Us
html = html.replace(/<section style="padding:160px 3\.5rem 80px;background:var\(--parchment\);position:relative;overflow:hidden">/, '<section style="padding:160px 3.5rem 80px;background:var(--parchment);position:relative;overflow:hidden">\n    <div style="position:absolute;inset:0;background-image:url(\'images/about-bg.png\');background-size:cover;background-position:center;opacity:0.6;z-index:0"></div>\n    <div style="position:absolute;inset:0;background:linear-gradient(to right, rgba(240,240,236,0.9) 0%, rgba(240,240,236,0.7) 100%);z-index:0"></div>');
// Retreats
html = html.replace(/<section class="retreat-hero" style="background:none;position:relative">/, '<section class="retreat-hero" style="background:none;position:relative">\n    <div style="position:absolute;inset:0;background-image:url(\'images/retreats-bg.png\');background-size:cover;background-position:center;z-index:0"></div>');
// Experience
html = html.replace(/<section class="experience" style="position:relative;overflow:hidden">[\s\S]*?<canvas id="experience-canvas"/, '<section class="experience" style="position:relative;overflow:hidden">\n    <div style="position:absolute;inset:0;background-image:url(\'images/experience-bg.png\');background-size:cover;background-position:center;opacity:0.5;z-index:0"></div>\n    <div style="position:absolute;inset:0;background:rgba(10,22,14,0.6);z-index:0"></div>\n    <canvas id="experience-canvas"');

fs.writeFileSync('three-roots-v4 (1).html', html);
console.log('UI updates applied successfully.');
