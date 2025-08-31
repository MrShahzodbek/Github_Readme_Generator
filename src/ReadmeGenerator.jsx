import React, { useMemo, useState } from "react";

  const ALL_ICONS = [
    { key: "php", label: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { key: "laravel", label: "Laravel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { key: "python", label: "Python", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { key: "javascript", label: "JavaScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { key: "typescript", label: "TypeScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { key: "vue", label: "Vue.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
    { key: "react", label: "React", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { key: "django", label: "Django", url: "https://cdn.worldvectorlogo.com/logos/django.svg" },
    { key: "flask", label: "Flask", url: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" },
    { key: "mysql", label: "MySQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
    { key: "postgres", label: "PostgreSQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
    { key: "mariadb", label: "MariaDB", url: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" },
    { key: "docker", label: "Docker", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
    { key: "kubernetes", label: "Kubernetes", url: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
    { key: "nginx", label: "Nginx", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" },
    { key: "git", label: "Git", url: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { key: "bash", label: "Bash", url: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" },
    { key: "linux", label: "Linux", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
    { key: "bootstrap", label: "Bootstrap", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
    { key: "tailwind", label: "TailwindCSS", url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { key: "node", label: "Node.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
  ];

  const THEMES = [
    "dracula",
    "radical",
    "tokyonight",
    "gruvbox",
    "onedark",
    "merko",
    "dark",
    "transparent",
  ];

  function Checkbox({ label, checked, onChange, id }) {
    return (
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer select-none">
        <input
          id={id}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span>{label}</span>
      </label>
    );
  }

  function TextInput({ label, value, onChange, placeholder, mono, helper }) {
    return (
      <div className="space-y-1">
        <div className="text-sm text-gray-700 font-medium">{label}</div>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${mono ? "font-mono" : ""}`}
        />
        {helper && <div className="text-xs text-gray-500">{helper}</div>}
      </div>
    );
  }

  function TextArea({ label, value, onChange, rows = 6, helper }) {
    return (
      <div className="space-y-1">
        {label && <div className="text-sm text-gray-700 font-medium">{label}</div>}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="w-full rounded-xl border border-gray-300 px-3 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {helper && <div className="text-xs text-gray-500">{helper}</div>}
      </div>
    );
  }

  function Section({ title, children, right }) {
    return (
      <div className="bg-white/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base md:text-lg font-semibold text-gray-800">{title}</h3>
          {right}
        </div>
        <div className="space-y-3">{children}</div>
      </div>
    );
  }

  export default function ReadmeGenerator() {
    const [displayName, setDisplayName] = useState("MrShahzodbek");
    const [headline, setHeadline] = useState("💻 Full Stack Developer | 🚀 Tech Enthusiast");
    const [company, setCompany] = useState("Uzhost Inc");
    const [projectsUrl, setProjectsUrl] = useState("https://uzhost.net");
    const [email, setEmail] = useState("ceo@uzhost.net");
    const [twitter, setTwitter] = useState("MrShahzodbek");
    const [telegram, setTelegram] = useState("MrShahzodbek");
    const [instagram, setInstagram] = useState("Shahzod_Rahmon");
    const [githubUser, setGithubUser] = useState("mrshahzodbek");
    const [gifUrl, setGifUrl] = useState(
      "https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47wlqb851jhx3hbd7kviw6g4dusbs9aq1xgtdfkoe3&rid=giphy.gif&ct=g"
    );

    const [aboutLines, setAboutLines] = useState(
      [
        "🌱 Currently working at **" + (company || "Your Company") + "**",
        "👨‍💻 All of my projects: [" + (projectsUrl || "https://example.com") + "](" + (projectsUrl || "https://example.com") + ")",
        "💬 Ask me about **Web Development, PHP/Laravel, Python, DevOps**",
        "📫 Reach me at **" + (email || "you@example.com") + "**",
      ].join("\n")
    );

    const [includeBadges, setIncludeBadges] = useState(true);
    const [includeConnectIcons, setIncludeConnectIcons] = useState(true);
    const [selectedIcons, setSelectedIcons] = useState(["php", "laravel", "python", "vue", "react", "mysql", "postgres", "docker", "nginx", "linux"]);
    const [featuredRepos, setFeaturedRepos] = useState("ielts-mock-test, ton-jetton, grammar-quiz, laravel-admin-panel");

    const [includeStats, setIncludeStats] = useState(true);
    const [includeTopLangs, setIncludeTopLangs] = useState(true);
    const [includeStreak, setIncludeStreak] = useState(true);
    const [includeTrophies, setIncludeTrophies] = useState(true);
    const [includeActivityGraph, setIncludeActivityGraph] = useState(false);
    const [includeSnake, setIncludeSnake] = useState(false);
    const [statsTheme, setStatsTheme] = useState("dracula");

    const iconObjects = useMemo(() => ALL_ICONS.filter(i => selectedIcons.includes(i.key)), [selectedIcons]);

    const md = useMemo(() => {
      const esc = (s) => (s || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      const badgeRow = includeBadges
        ? `\n<p align="center">\n  <a href="https://twitter.com/${esc(twitter)}" target="_blank"><img src="https://img.shields.io/badge/Twitter-@${esc(twitter)}-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" /></a>\n  <a href="https://t.me/${esc(telegram)}" target="_blank"><img src="https://img.shields.io/badge/Telegram-@${esc(telegram)}-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" /></a>\n  <a href="https://instagram.com/${esc(instagram)}" target="_blank"><img src="https://img.shields.io/badge/Instagram-@${esc(instagram)}-E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a>\n  <a href="${esc(projectsUrl)}" target="_blank"><img src="https://img.shields.io/badge/Website-${esc(projectsUrl).replace(/https?:\\/\\//, '')}-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" /></a>\n  <a href="mailto:${esc(email)}" target="_blank"><img src="https://img.shields.io/badge/Email-${esc(email)}-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>\n</p>\n`
        : "";

      const connectIcons = includeConnectIcons
        ? `\n### 🤝 Connect with me\n<p align="left">\n  <a href="https://twitter.com/${esc(twitter)}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="30" width="40" /></a>\n  <a href="https://instagram.com/${esc(instagram)}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="40" /></a>\n  <a href="https://t.me/${esc(telegram)}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/telegram.svg" alt="Telegram" height="30" width="40" /></a>\n</p>\n`
        : "";

      const icons = iconObjects
        .map((i) => `<img src="${i.url}" alt="${i.label}" width="40" height="40"/>`)
        .join("\n  ");

      const repos = (featuredRepos || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 6);

      const repoRows = repos
        .map((r) => `  <a href="https://github.com/${esc(githubUser)}/${esc(r)}">\n    <img src="https://github-readme-stats.vercel.app/api/pin/?username=${esc(githubUser)}&repo=${esc(r)}&theme=${esc(statsTheme)}" />\n  </a>`)
        .join("\n");

      const statsBlock = includeStats
        ? `<img src="https://github-readme-stats.vercel.app/api?username=${esc(githubUser)}&show_icons=true&theme=${esc(statsTheme)}" height="160"/>`
        : "";

      const langsBlock = includeTopLangs
        ? `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${esc(githubUser)}&layout=compact&theme=${esc(statsTheme)}" height="160"/>`
        : "";

      const streakBlock = includeStreak
        ? `<img src="https://streak-stats.demolab.com?user=${esc(githubUser)}&theme=${esc(statsTheme)}&hide_border=true" height="160"/>`
        : "";

      const trophiesBlock = includeTrophies
        ? `<a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${esc(githubUser)}&theme=onedark&row=1&column=7" /></a>`
        : "";

      const activityGraph = includeActivityGraph
        ? `<img src="https://github-readme-activity-graph.vercel.app/graph?username=${esc(githubUser)}&theme=${esc(statsTheme)}" alt="Contribution Graph"/>`
        : "";

      const snake = includeSnake
        ? `<img src="https://raw.githubusercontent.com/${esc(githubUser)}/${esc(githubUser)}/output/snake.svg" alt="Snake animation" />`
        : "";

      return `
<h1 align="center">Hi 👋, I'm ${esc(displayName)}</h1>
<h3 align="center">${esc(headline)}</h3>

---
${badgeRow}
---

<div align="center">
  <img src="${esc(gifUrl)}" width="400" alt="coding gif" />
</div>

---

### 🌟 About Me
${aboutLines}

---

### 🛠 Languages and Tools
<p>
  ${icons}
</p>

---

${repos.length ? `### 🚀 Featured Projects\n<p align="center">\n${repoRows}\n</p>\n\n---` : ""}

${connectIcons}

---

${(includeStats || includeTopLangs) ? `### 📊 GitHub Stats\n<p align="center">\n  ${statsBlock}\n  ${langsBlock}\n</p>\n\n---` : ""}

${includeStreak ? `### 🔥 Streak\n<p align="center">${streakBlock}</p>\n\n---` : ""}

${includeTrophies ? `### 🏆 Trophies\n<p align="center">${trophiesBlock}</p>\n\n---` : ""}

${includeActivityGraph ? `### 📈 Activity Graph\n<p align="center">${activityGraph}</p>\n\n---` : ""}

${includeSnake ? `### 🐍 Contribution Snake\n<p align="center">${snake}</p>` : ""}
`;
    }, [
      displayName,
      headline,
      company,
      projectsUrl,
      email,
      twitter,
      telegram,
      instagram,
      githubUser,
      gifUrl,
      aboutLines,
      includeBadges,
      includeConnectIcons,
      iconObjects,
      featuredRepos,
      includeStats,
      includeTopLangs,
      includeStreak,
      includeTrophies,
      includeActivityGraph,
      includeSnake,
      statsTheme,
    ]);

    const toggleIcon = (key) => {
      setSelectedIcons((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    };

    const copyToClipboard = async () => {
      await navigator.clipboard.writeText(md);
      alert("README copied to clipboard ✨");
    };

    const downloadFile = () => {
      const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "README.md";
      a.click();
      URL.revokeObjectURL(url);
    };

    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          <header className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">README Generator</h1>
            <p className="text-slate-600">Build a polished GitHub profile README in minutes. Fill the form → copy or download your Markdown.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Controls */}
            <div className="space-y-6">
              <Section title="Profile">
                <TextInput label="Display name" value={displayName} onChange={setDisplayName} placeholder="Your Name" />
                <TextInput label="Headline" value={headline} onChange={setHeadline} placeholder="Role • Interests" />
                <TextInput label="GitHub username" value={githubUser} onChange={setGithubUser} mono />
                <TextInput label="Company" value={company} onChange={setCompany} />
                <TextInput label="Projects / Portfolio URL" value={projectsUrl} onChange={setProjectsUrl} />
                <TextInput label="Email" value={email} onChange={setEmail} mono />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <TextInput label="Twitter" value={twitter} onChange={setTwitter} mono placeholder="handle" />
                  <TextInput label="Telegram" value={telegram} onChange={setTelegram} mono placeholder="handle" />
                  <TextInput label="Instagram" value={instagram} onChange={setInstagram} mono placeholder="handle" />
                </div>
                <TextInput label="Header GIF URL (optional)" value={gifUrl} onChange={setGifUrl} />
                <TextArea label="About section (Markdown supported)" value={aboutLines} onChange={setAboutLines} rows={6} />
              </Section>

              <Section title="Links & Sections">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Checkbox id="badges" label="Show badges row (social + website + email)" checked={includeBadges} onChange={setIncludeBadges} />
                  <Checkbox id="connect" label="Show 'Connect with me' icons" checked={includeConnectIcons} onChange={setIncludeConnectIcons} />
                </div>
              </Section>

              <Section title="Languages & Tools">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {ALL_ICONS.map((i) => (
                    <button
                      key={i.key}
                      type="button"
                      onClick={() => toggleIcon(i.key)}
                      className={`flex items-center gap-2 p-2 rounded-xl border text-sm transition ${selectedIcons.includes(i.key) ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"}`}
                      title={i.label}
                    >
                      <img src={i.url} alt={i.label} className="h-6 w-6" />
                      <span>{i.label}</span>
                    </button>
                  ))}
                </div>
              </Section>

              <Section title="Projects">
                <TextInput
                  label="Featured repositories (comma-separated)"
                  value={featuredRepos}
                  onChange={setFeaturedRepos}
                  helper="Example: repo-one, another-repo, cool-project"
                  mono
                />
              </Section>

              <Section
                title="Stats & Visuals"
                right={
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Theme</label>
                    <select className="rounded-lg border border-gray-300 px-2 py-1" value={statsTheme} onChange={(e) => setStatsTheme(e.target.value)}>
                      {THEMES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Checkbox id="stats" label="Show GitHub Stats" checked={includeStats} onChange={setIncludeStats} />
                  <Checkbox id="langs" label="Show Top Languages" checked={includeTopLangs} onChange={setIncludeTopLangs} />
                  <Checkbox id="streak" label="Show Streak" checked={includeStreak} onChange={setIncludeStreak} />
                  <Checkbox id="trophies" label="Show Trophies" checked={includeTrophies} onChange={setIncludeTrophies} />
                  <Checkbox id="graph" label="Show Activity Graph" checked={includeActivityGraph} onChange={setIncludeActivityGraph} />
                  <Checkbox id="snake" label="Show Snake (requires workflow)" checked={includeSnake} onChange={setIncludeSnake} />
                </div>
              </Section>
            </div>

            {/* Right: Output */}
            <div className="space-y-4">
              <Section
                title="Generated Markdown"
                right={
                  <div className="flex gap-2">
                    <button onClick={copyToClipboard} className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700">Copy</button>
                    <button onClick={downloadFile} className="px-3 py-1.5 rounded-xl bg-slate-900 text-white shadow hover:bg-slate-800">Download</button>
                  </div>
                }
              >
                <TextArea label="" value={md} onChange={() => {}} rows={24} />
                <p className="text-xs text-gray-500">Tip: paste into <code>README.md</code> in a repo named <code>{githubUser}/{githubUser}</code> to make it your profile README.</p>
              </Section>

              <Section title="Quick Notes">
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Badges and cards are external images; if they ever rate-limit, refresh later.</li>
                  <li>To enable the 🐍 Snake, add a GitHub Action that publishes <code>output/snake.svg</code> to your profile repo.</li>
                  <li>You can reorder or delete sections directly in the Markdown after download.</li>
                </ul>
              </Section>
            </div>
          </div>
        </div>
      </div>
    );
  }