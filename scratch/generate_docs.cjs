const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Create a professional HTML document styled for printing / Saving as PDF
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MaxxedTech Ltd — Deployment, Git, and Architecture Guide</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
    
    @page {
      size: A4;
      margin: 20mm;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1a202c;
      background: #ffffff;
      margin: 0;
      padding: 30px;
    }

    .header {
      border-bottom: 3px solid #35bdb5;
      padding-bottom: 20px;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-text {
      font-size: 26px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .logo-text span {
      color: #35bdb5;
    }

    .doc-badge {
      background: #f0fdfa;
      border: 1px solid #ccfbf1;
      color: #0f766e;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    h1 {
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
      margin-top: 0;
      margin-bottom: 8px;
    }

    .subtitle {
      color: #64748b;
      font-size: 14px;
      margin-bottom: 25px;
    }

    h2 {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      border-left: 4px solid #35bdb5;
      padding-left: 12px;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 15px;
      font-weight: 600;
      color: #334155;
      margin-top: 20px;
      margin-bottom: 8px;
    }

    p, li {
      font-size: 13.5px;
      color: #334155;
    }

    ul, ol {
      padding-left: 20px;
      margin-bottom: 15px;
    }

    li {
      margin-bottom: 6px;
    }

    pre {
      background: #0f172a;
      color: #e2e8f0;
      padding: 14px 16px;
      border-radius: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12.5px;
      overflow-x: auto;
      margin: 12px 0;
      border: 1px solid #1e293b;
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      background: #f1f5f9;
      color: #0f766e;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }

    pre code {
      background: transparent;
      color: inherit;
      padding: 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
      font-size: 12.5px;
    }

    th, td {
      border: 1px solid #e2e8f0;
      padding: 9px 12px;
      text-align: left;
    }

    th {
      background: #f8fafc;
      font-weight: 600;
      color: #0f172a;
    }

    .callout {
      background: #f8fafc;
      border-left: 4px solid #0284c7;
      padding: 12px 16px;
      border-radius: 0 6px 6px 0;
      margin: 15px 0;
    }

    .callout-title {
      font-weight: 700;
      font-size: 13px;
      color: #0369a1;
      margin-bottom: 4px;
    }

    .footer-note {
      margin-top: 40px;
      border-top: 1px solid #e2e8f0;
      padding-top: 15px;
      font-size: 11px;
      color: #94a3b8;
      text-align: center;
    }

    @media print {
      body { padding: 0; }
      pre { white-space: pre-wrap; word-break: break-all; }
    }
  </style>
</head>
<body>

  <div class="header">
    <div class="logo-text">MAXXED<span>TECH</span> LTD</div>
    <div class="doc-badge">Production Guide</div>
  </div>

  <h1>Complete GitHub to Vercel Deployment & Codebase Architecture Guide</h1>
  <div class="subtitle">Official setup, repository management, CI/CD pipeline, and environmental configuration documentation.</div>

  <h2>Part 1: Push from VS Code to GitHub</h2>
  <p>Run the following commands inside your VS Code terminal (<code>Ctrl + \`</code>):</p>

  <h3>Step 1: Check, Stage & Commit Changes</h3>
  <pre><code># 1. Check changed files
git status

# 2. Stage all files (logos, routes, animations, preloader)
git add .

# 3. Commit changes with a descriptive message
git commit -m "feat: complete MaxxedTech Ltd showcase modernization with custom logos, animations, and zero-404 routes"</code></pre>

  <h3>Step 2: Push to GitHub</h3>
  <p><strong>If you already have a GitHub repository connected:</strong></p>
  <pre><code>git branch -M main
git push -u origin main</code></pre>

  <p><strong>If creating a brand new GitHub repository:</strong></p>
  <ol>
    <li>Visit <a href="https://github.com/new">github.com/new</a> in your browser.</li>
    <li>Enter repository name: <code>maxxedtech-showcase</code>.</li>
    <li>Leave unchecked <em>"Add README"</em> and <em>".gitignore"</em>.</li>
    <li>Click <strong>Create repository</strong>.</li>
    <li>Run the linking commands in your VS Code terminal:</li>
  </ol>
  <pre><code>git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main</code></pre>

  <h2>Part 2: Deploy to Vercel</h2>

  <h3>Step 1: Import Repository</h3>
  <ol>
    <li>Navigate to <a href="https://vercel.com">vercel.com</a> and sign in.</li>
    <li>Click <strong>Add New...</strong> &rarr; <strong>Project</strong>.</li>
    <li>Locate your GitHub repo (<code>maxxedtech-showcase</code>) and click <strong>Import</strong>.</li>
  </ol>

  <h3>Step 2: Verify Build Configuration</h3>
  <table>
    <thead>
      <tr>
        <th>Setting</th>
        <th>Recommended Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Framework Preset</td>
        <td><code>Vite</code> or <code>Other</code></td>
      </tr>
      <tr>
        <td>Root Directory</td>
        <td><code>./</code> (default)</td>
      </tr>
      <tr>
        <td>Build Command</td>
        <td><code>npm run build</code></td>
      </tr>
      <tr>
        <td>Output Directory</td>
        <td><code>.output/public</code> (or default)</td>
      </tr>
      <tr>
        <td>Install Command</td>
        <td><code>npm install</code></td>
      </tr>
    </tbody>
  </table>

  <h3>Step 3: Add Environmental Variables</h3>
  <p>In Vercel project settings, add the following variables:</p>
  <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Value / Recommended Setting</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>RESEND_API_KEY</code></td>
        <td><code>re_...</code> (from resend.com)</td>
        <td>Sends contact form emails to contact@maxxedtech.com</td>
      </tr>
      <tr>
        <td><code>SUPABASE_URL</code></td>
        <td><code>https://bvqwjxjbrbxnelitjlhr.supabase.co</code></td>
        <td>Supabase database / API endpoint</td>
      </tr>
      <tr>
        <td><code>SUPABASE_PROJECT_ID</code></td>
        <td><code>bvqwjxjbrbxnelitjlhr</code></td>
        <td>Supabase Project ID</td>
      </tr>
      <tr>
        <td><code>SUPABASE_PUBLISHABLE_KEY</code></td>
        <td><code>sb_publishable_oiPFss1YZ6S1K8aCT7LcDg_uKObyzCl</code></td>
        <td>Public Client Access Key</td>
      </tr>
      <tr>
        <td><code>VITE_SUPABASE_URL</code></td>
        <td><code>https://bvqwjxjbrbxnelitjlhr.supabase.co</code></td>
        <td>Client-exposed Supabase URL</td>
      </tr>
      <tr>
        <td><code>VITE_SUPABASE_PROJECT_ID</code></td>
        <td><code>bvqwjxjbrbxnelitjlhr</code></td>
        <td>Client-exposed Project ID</td>
      </tr>
      <tr>
        <td><code>VITE_SUPABASE_PUBLISHABLE_KEY</code></td>
        <td><code>sb_publishable_oiPFss1YZ6S1K8aCT7LcDg_uKObyzCl</code></td>
        <td>Client-exposed Publishable Key</td>
      </tr>
    </tbody>
  </table>

  <div class="callout">
    <div class="callout-title">Resend Demo Fallback</div>
    If <code>RESEND_API_KEY</code> is omitted, the contact form safely logs submissions to the console and provides positive feedback without throwing runtime errors.
  </div>

  <h3>Step 4: Deploy & Live Updates</h3>
  <p>Click <strong>Deploy</strong>. Vercel automatically deploys your site to an HTTPS URL. Every subsequent <code>git push</code> will trigger an automatic production deployment.</p>

  <h2>Part 3: Codebase Architecture</h2>
  <pre><code>maxxed-tech-showcase-main/
├── public/
│   ├── favicon.png                  # Browser favicon
│   └── images/
│       └── logo/
│           ├── loading-logo.png     # Logo 1: Vertical lockup (Preloader)
│           ├── navbar-logo.png      # Logo 2: Horizontal lockup (Brand navbar/footer)
│           ├── favicon-logo.png     # Logo 3: Striped icon (Favicon & hero badge)
│           └── badge-logo.png       # Logo 4: Square teal badge (CTA & PWA)
│
├── src/
│   ├── components/site/
│   │   ├── Brand.tsx                # Responsive vector logo wrapper
│   │   ├── Preloader.tsx            # 750ms cyberpunk telemetry splash screen
│   │   ├── ProjectCard.tsx          # 3D tilt card + In Development badge
│   │   ├── Primitives.tsx           # InnerHero, SectionHeading & CTA band
│   │   └── SiteLayout.tsx           # Sticky nav, spring indicator, WhatsApp FAB, footer
│   │
│   ├── data/
│   │   └── site.ts                  # Central content: projects, services, blog articles
│   │
│   ├── lib/
│   │   ├── contact-schema.ts        # Zod validation schema
│   │   ├── contact.functions.ts     # Resend email server action
│   │   └── seo.ts                   # OpenGraph & SEO metadata generator
│   │
│   ├── routes/
│   │   ├── __root.tsx               # Root application shell
│   │   ├── index.tsx                # Home page
│   │   ├── about.tsx                # About MaxxedTech Ltd
│   │   ├── services.tsx             # Service breakdowns
│   │   ├── portfolio.tsx            # Project showcase with filters & modals
│   │   ├── blog.tsx                 # Blog archive & article reader
│   │   ├── contact.tsx              # Contact form
│   │   ├── privacy.tsx              # Privacy policy
│   │   └── terms.tsx                # Terms of service
│   │
│   ├── routeTree.gen.ts             # Auto-generated TanStack Router tree
│   └── styles.css                   # Tailwind CSS v4 design tokens & keyframes
│
└── package.json                     # Vite + React 19 + TanStack Start dependencies</code></pre>

  <h2>Part 4: Quick Reference Commands</h2>
  <table>
    <thead>
      <tr>
        <th>Action</th>
        <th>Command</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Start Local Dev Server</td>
        <td><code>npm run dev</code> &rarr; opens <code>http://localhost:3000</code></td>
      </tr>
      <tr>
        <td>Verify Full Build</td>
        <td><code>npm run build</code></td>
      </tr>
      <tr>
        <td>Push Updates to GitHub & Vercel</td>
        <td><code>git add .</code><br><code>git commit -m "update message"</code><br><code>git push</code></td>
      </tr>
    </tbody>
  </table>

  <div class="footer-note">
    &copy; 2026 MaxxedTech Ltd. All rights reserved. Confidential & Proprietary Technical Guide.
  </div>

</body>
</html>
`;

// Write HTML file (Printable to PDF directly)
const htmlPath = path.join(__dirname, '..', 'MaxxedTech_Deployment_and_Architecture_Guide.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('HTML Guide created at:', htmlPath);

// Create Markdown file
const mdPath = path.join(__dirname, '..', 'MaxxedTech_Deployment_and_Architecture_Guide.md');
const mdContent = `# MaxxedTech Ltd — GitHub to Vercel Deployment & Architecture Guide

## Part 1: Push from VS Code to GitHub
Run the following commands in your VS Code terminal (\`Ctrl + \`\`):

\`\`\`pwsh
# 1. Stage and commit all changes
git status
git add .
git commit -m "feat: complete MaxxedTech Ltd showcase modernization with custom logos, animations, and zero-404 routes"

# 2. Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

*(If new repository: \`git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git\` then push)*

---

## Part 2: Deploy to Vercel
1. Log in to [vercel.com](https://vercel.com) &rarr; **Add New...** &rarr; **Project**.
2. Select your repository and click **Import**.
3. **Build Settings**:
   - Framework Preset: \`Vite\`
   - Build Command: \`npm run build\`
   - Output Directory: \`.output/public\`
4. **Environment Variables**:
   - \`RESEND_API_KEY\`: \`re_...\` (from [resend.com](https://resend.com))
   - \`SUPABASE_URL\`: \`https://bvqwjxjbrbxnelitjlhr.supabase.co\`
   - \`SUPABASE_PROJECT_ID\`: \`bvqwjxjbrbxnelitjlhr\`
   - \`SUPABASE_PUBLISHABLE_KEY\`: \`sb_publishable_oiPFss1YZ6S1K8aCT7LcDg_uKObyzCl\`
   - \`VITE_SUPABASE_URL\`: \`https://bvqwjxjbrbxnelitjlhr.supabase.co\`
   - \`VITE_SUPABASE_PROJECT_ID\`: \`bvqwjxjbrbxnelitjlhr\`
   - \`VITE_SUPABASE_PUBLISHABLE_KEY\`: \`sb_publishable_oiPFss1YZ6S1K8aCT7LcDg_uKObyzCl\`
5. Click **Deploy**.

---

## Part 3: Codebase Structure
- \`public/images/logo/\`: 4 official logos (loading-logo, navbar-logo, favicon-logo, badge-logo).
- \`src/components/site/\`: Preloader (750ms telemetry), Brand, ProjectCard (3D tilt), SiteLayout.
- \`src/data/site.ts\`: Central content definitions for all projects, services, and articles.
- \`src/routes/\`: Full SSR routes with zero-404 pages (\`/blog\`, \`/privacy\`, \`/terms\`).
`;
fs.writeFileSync(mdPath, mdContent, 'utf8');
console.log('Markdown Guide created at:', mdPath);
