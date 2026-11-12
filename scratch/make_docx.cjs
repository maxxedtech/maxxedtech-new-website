const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const temp = path.join(process.env.TEMP, 'docx_node_' + Date.now());
fs.mkdirSync(path.join(temp, '_rels'), { recursive: true });
fs.mkdirSync(path.join(temp, 'word'), { recursive: true });

fs.writeFileSync(
  path.join(temp, '[Content_Types].xml'),
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
  '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
  '<Default Extension="xml" ContentType="application/xml"/>' +
  '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
  '</Types>'
);

fs.writeFileSync(
  path.join(temp, '_rels', '.rels'),
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
  '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
  '</Relationships>'
);

const docXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="48"/><w:color w:val="0F766E"/></w:rPr><w:t>MAXXEDTECH LTD</w:t></w:r></w:p>
    <w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="28"/><w:color w:val="334155"/></w:rPr><w:t>GitHub to Vercel Deployment &amp; Codebase Guide</w:t></w:r></w:p>
    <w:p><w:r><w:t></w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:b/><w:sz w:val="28"/><w:color w:val="0F766E"/></w:rPr><w:t>PART 1: PUSH FROM VS CODE TO GITHUB</w:t></w:r></w:p>
    <w:p><w:r><w:t>Run in your VS Code terminal (Ctrl + \`):</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:rFonts w:ascii="Consolas"/><w:color w:val="0F172A"/></w:rPr><w:t>git status</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:rFonts w:ascii="Consolas"/><w:color w:val="0F172A"/></w:rPr><w:t>git add .</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:rFonts w:ascii="Consolas"/><w:color w:val="0F172A"/></w:rPr><w:t>git commit -m "feat: complete MaxxedTech Ltd showcase modernization"</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:rFonts w:ascii="Consolas"/><w:color w:val="0F172A"/></w:rPr><w:t>git branch -M main</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:rFonts w:ascii="Consolas"/><w:color w:val="0F172A"/></w:rPr><w:t>git push -u origin main</w:t></w:r></w:p>
    <w:p><w:r><w:t></w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:b/><w:sz w:val="28"/><w:color w:val="0F766E"/></w:rPr><w:t>PART 2: DEPLOYMENT TO VERCEL</w:t></w:r></w:p>
    <w:p><w:r><w:t>1. Sign in to vercel.com &gt; Add New... &gt; Project.</w:t></w:r></w:p>
    <w:p><w:r><w:t>2. Import your GitHub repository (maxxedtech-showcase).</w:t></w:r></w:p>
    <w:p><w:r><w:t>3. Set Build Command to 'npm run build' and Output Directory to '.output/public'.</w:t></w:r></w:p>
    <w:p><w:r><w:t>4. Add Environmental Variables:</w:t></w:r></w:p>
    <w:p><w:r><w:t> - RESEND_API_KEY: re_... (from resend.com)</w:t></w:r></w:p>
    <w:p><w:r><w:t> - SUPABASE_URL: https://bvqwjxjbrbxnelitjlhr.supabase.co</w:t></w:r></w:p>
    <w:p><w:r><w:t> - SUPABASE_PROJECT_ID: bvqwjxjbrbxnelitjlhr</w:t></w:r></w:p>
    <w:p><w:r><w:t> - SUPABASE_PUBLISHABLE_KEY: sb_publishable_oiPFss1YZ6S1K8aCT7LcDg_uKObyzCl</w:t></w:r></w:p>
    <w:p><w:r><w:t> - VITE_SUPABASE_URL: https://bvqwjxjbrbxnelitjlhr.supabase.co</w:t></w:r></w:p>
    <w:p><w:r><w:t> - VITE_SUPABASE_PROJECT_ID: bvqwjxjbrbxnelitjlhr</w:t></w:r></w:p>
    <w:p><w:r><w:t> - VITE_SUPABASE_PUBLISHABLE_KEY: sb_publishable_oiPFss1YZ6S1K8aCT7LcDg_uKObyzCl</w:t></w:r></w:p>
    <w:p><w:r><w:t>5. Click Deploy to publish your live website.</w:t></w:r></w:p>
    <w:p><w:r><w:t></w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:b/><w:sz w:val="28"/><w:color w:val="0F766E"/></w:rPr><w:t>PART 3: CODEBASE STRUCTURE</w:t></w:r></w:p>
    <w:p><w:r><w:t>- public/images/logo/: 4 official high-res brand logos</w:t></w:r></w:p>
    <w:p><w:r><w:t>- src/components/site/Preloader.tsx: 750ms telemetry cyberpunk splash screen</w:t></w:r></w:p>
    <w:p><w:r><w:t>- src/components/site/Brand.tsx: Responsive vector navbar logo</w:t></w:r></w:p>
    <w:p><w:r><w:t>- src/components/site/ProjectCard.tsx: 3D interactive tilt cards</w:t></w:r></w:p>
    <w:p><w:r><w:t>- src/data/site.ts: Central content, projects &amp; blog articles</w:t></w:r></w:p>
    <w:p><w:r><w:t>- src/routes/: Zero-404 routes (/blog, /privacy, /terms, /portfolio, /services)</w:t></w:r></w:p>
  </w:body>
</w:document>`;

fs.writeFileSync(path.join(temp, 'word', 'document.xml'), docXml, 'utf8');

const dest = path.resolve('MaxxedTech_Deployment_and_Architecture_Guide.docx');
if (fs.existsSync(dest)) fs.unlinkSync(dest);

execSync(`powershell -NoProfile -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('${temp.replace(/\\/g, '\\\\')}', '${dest.replace(/\\/g, '\\\\')}')"`);
fs.rmSync(temp, { recursive: true, force: true });
console.log('DOCX generated successfully at:', dest);
