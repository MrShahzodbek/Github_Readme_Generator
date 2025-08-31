import React, { useMemo, useState, useEffect } from "react";

/** ---------------- Icons & Themes ---------------- */
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

/** ---------------- Small UI helpers ---------------- */
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
        className={`w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          mono ? "font-mono" : ""
        }`}
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

/** ---------------- Main Component ---------------- */
export default function ReadmeGenerator() {
  // Profile
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

  // Content
  const [aboutLines, setAboutLines] = useState(
    [
      "🌱 Currently working at **" + (company || "Your Company") + "**",
      "👨‍💻 All of my projects: [" + (projectsUrl || "https://example.com") + "](" + (projectsUrl || "https://example.com") + ")",
      "💬 Ask me about **Web Development, PHP/Laravel, Python, DevOps**",
      "📫 Reach me at **" + (email || "you@example.com") + "**",
    ].join("\n")
  );

  // Toggles
  const [includeBadges, setIncludeBadges] = useState(true);
  const [includeConnectIcons, setIncludeConnectIcons] = useState(true);
  const [includeVisitor, setIncludeVisitor] = useState(true);
  const [includeTyping, setIncludeTyping] = useState(false);
  const [typingLines, setTypingLines] = useState("Full Stack Developer;Open Source Contributor;Tech Enthusiast");

  const [selectedIcons, setSelectedIcons] = useState(["php", "laravel", "python", "vue", "react", "mysql", "postgres", "docker", "nginx", "linux"]);
  const [featuredRepos, setFeaturedRepos] = useState("ielts-mock-test, ton-jetton, grammar-quiz, laravel-admin-panel");

  const [includeStats, setIncludeStats] = useState(true);
  const [includeTopLangs, setIncludeTopLangs] = useState(true);
  const [includeStreak, setIncludeStreak] = useState(true);
  const [includeTrophies, setIncludeTrophies] = useState(true);
  const [includeActivityGraph, setIncludeActivityGraph] = useState(false);
  const [includeSnake, setIncludeSnake] = useState(false);
  const [statsTheme, setStatsTheme] = useState("dracula");

  const [activePreviewTab, setActivePreviewTab] = useState("markdown");

  // Derived
  const iconObjects = useMemo(() => ALL_ICONS.filter((i) => selectedIcons.includes(i.key)), [selectedIcons]);

  /** -------- URL state (Permalinks) -------- */
  // Load state from URL (if present)
  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const s = search.get("s");
    if (!s) return;
    try {
      const json = JSON.parse(decodeURIComponent(atob(s)));
      // Only patch known keys
      for (const [k, v] of Object.entries(json)) {
        switch (k) {
          case "displayName": setDisplayName(v); break;
          case "headline": setHeadline(v); break;
          case "company": setCompany(v); break;
          case "projectsUrl": setProjectsUrl(v); break;
          case "email": setEmail(v); break;
          case "twitter": setTwitter(v); break;
          case "telegram": setTelegram(v); break;
          case "instagram": setInstagram(v); break;
          case "githubUser": setGithubUser(v); break;
          case "gifUrl": setGifUrl(v); break;
          case "aboutLines": setAboutLines(v); break;
          case "includeBadges": setIncludeBadges(Boolean(v)); break;
          case "includeConnectIcons": setIncludeConnectIcons(Boolean(v)); break;
          case "includeVisitor": setIncludeVisitor(Boolean(v)); break;
          case "includeTyping": setIncludeTyping(Boolean(v)); break;
          case "typingLines": setTypingLines(v); break;
          case "selectedIcons": Array.isArray(v) && setSelectedIcons(v); break;
          case "featuredRepos": setFeaturedRepos(v); break;
          case "includeStats": setIncludeStats(Boolean(v)); break;
          case "includeTopLangs": setIncludeTopLangs(Boolean(v)); break;
          case "includeStreak": setIncludeStreak(Boolean(v)); break;
          case "includeTrophies": setIncludeTrophies(Boolean(v)); break;
          case "includeActivityGraph": setIncludeActivityGraph(Boolean(v)); break;
          case "includeSnake": setIncludeSnake(Boolean(v)); break;
          case "statsTheme": setStatsTheme(v); break;
        }
      }
    } catch {
      // ignore invalid state
    }
  }, []);

  const buildPermalink = () => {
    const state = {
      displayName, headline, company, projectsUrl, email,
      twitter, telegram, instagram, githubUser, gifUrl,
      aboutLines, includeBadges, includeConnectIcons, includeVisitor,
      includeTyping, typingLines,
      selectedIcons, featuredRepos,
      includeStats, includeTopLangs, includeStreak, includeTrophies, includeActivityGraph, includeSnake,
      statsTheme,
    };
    const s = btoa(encodeURIComponent(JSON.stringify(state)));
    const url = new URL(window.location.href);
    url.searchParams.set("s", s);
    return url.toString();
  };

  /** -------- Markdown builder (safe escapes; no stray backslashes) -------- */
  const md = useMemo(() => {
    const esc = (s) => (s || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const hostOnly = (projectsUrl || "").replace(/^https?:\/\/(www\.)?/, "");

    const typingBlock = includeTyping
      ? `
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=24&pause=1000&color=F75C7E&center=true&vCenter=true&random=false&width=500&lines=${encodeURIComponent(
    typingLines
  )}" />
</p>`
      : "";

    const badgeRow = includeBadges
      ? `
<p align="center">
  <a href="https://twitter.com/${esc(twitter)}" target="_blank"><img src="https://img.shields.io/badge/Twitter-@${esc(
          twitter
        )}-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
  <a href="https://t.me/${esc(telegram)}" target="_blank"><img src="https://img.shields.io/badge/Telegram-@${esc(
          telegram
        )}-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white"/></a>
  <a href="https://instagram.com/${esc(instagram)}" target="_blank"><img src="https://img.shields.io/badge/Instagram-@${esc(
          instagram
        )}-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/></a>
  <a href="${esc(projectsUrl)}" target="_blank"><img src="https://img.shields.io/badge/Website-${esc(
          hostOnly
        )}-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white"/></a>
  <a href="mailto:${esc(email)}" target="_blank"><img src="https://img.shields.io/badge/Email-${esc(
          email
        )}-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>
</p>`
      : "";

    const connectIcons = includeConnectIcons
      ? `
### 🤝 Connect with me
<p align="left">
  <a href="https://twitter.com/${esc(
    twitter
  )}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="30" width="40"/></a>
  <a href="https://instagram.com/${esc(
    instagram
  )}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="40"/></a>
  <a href="https://t.me/${esc(
    telegram
  )}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/telegram.svg" alt="Telegram" height="30" width="40"/></a>
</p>`
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
      .map(
        (r) => `  <a href="https://github.com/${esc(githubUser)}/${esc(r)}">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=${esc(githubUser)}&repo=${esc(r)}&theme=${esc(
          statsTheme
        )}"/>
  </a>`
      )
      .join("\n");

    const statsBlock = includeStats
      ? `<img src="https://github-readme-stats.vercel.app/api?username=${esc(
          githubUser
        )}&show_icons=true&theme=${esc(statsTheme)}" height="160"/>`
      : "";

    const langsBlock = includeTopLangs
      ? `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${esc(
          githubUser
        )}&layout=compact&theme=${esc(statsTheme)}" height="160"/>`
      : "";

    const streakBlock = includeStreak
      ? `<img src="https://streak-stats.demolab.com?user=${esc(githubUser)}&theme=${esc(
          statsTheme
        )}&hide_border=true" height="160"/>`
      : "";

    const trophiesBlock = includeTrophies
      ? `<a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${esc(
          githubUser
        )}&theme=onedark&row=1&column=7"/></a>`
      : "";

    const activityGraph = includeActivityGraph
      ? `<img src="https://github-readme-activity-graph.vercel.app/graph?username=${esc(
          githubUser
        )}&theme=${esc(statsTheme)}" alt="Contribution Graph"/>`
      : "";

    const snake = includeSnake
      ? `<img src="https://raw.githubusercontent.com/${esc(githubUser)}/${esc(
          githubUser
        )}/output/snake.svg" alt="Snake animation"/>`
      : "";

    const visitor = includeVisitor
      ? `<p align="center"><img src="https://komarev.com/ghpvc/?username=${esc(
          githubUser
        )}&style=for-the-badge&color=blue" alt="Profile views"/></p>`
      : "";

    return `
<h1 align="center">Hi 👋, I'm ${esc(displayName)}</h1>
<h3 align="center">${esc(headline)}</h3>

${typingBlock}

---
${badgeRow}
---

<div align="center">
  <img src="${esc(gifUrl)}" width="400" alt="coding gif"/>
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

${repos.length ? `### 🚀 Featured Projects
<p align="center">
${repoRows}
</p>

---` : ""}

${connectIcons}

---

${includeStats || includeTopLangs ? `### 📊 GitHub Stats
<p align="center">
  ${statsBlock}
  ${langsBlock}
</p>

---` : ""}

${includeStreak ? `### 🔥 Streak
<p align="center">${streakBlock}</p>

---` : ""}

${includeTrophies ? `### 🏆 Trophies
<p align="center">${trophiesBlock}</p>

---` : ""}

${includeActivityGraph ? `### 📈 Activity Graph
<p align="center">${activityGraph}</p>

---` : ""}

${includeSnake ? `### 🐍 Contribution Snake
<p align="center">${snake}</p>

---` : ""}

${visitor}
`;
  }, [
    displayName,
    headline,
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
    includeVisitor,
    includeTyping,
    typingLines,
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

  /** -------- Actions -------- */
  const toggleIcon = (key) => {
    setSelectedIcons((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
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

  const exportJSON = () => {
    const state = {
      displayName, headline, company, projectsUrl, email,
      twitter, telegram, instagram, githubUser, gifUrl,
      aboutLines, includeBadges, includeConnectIcons, includeVisitor,
      includeTyping, typingLines, selectedIcons, featuredRepos,
      includeStats, includeTopLangs, includeStreak, includeTrophies, includeActivityGraph, includeSnake,
      statsTheme,
    };
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "readme-generator-state.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = async (file) => {
    if (!file) return;
    const text = await file.text();
    try {
      const s = JSON.parse(text);
      // Only set known keys
      setDisplayName(s.displayName ?? displayName);
      setHeadline(s.headline ?? headline);
      setCompany(s.company ?? company);
      setProjectsUrl(s.projectsUrl ?? projectsUrl);
      setEmail(s.email ?? email);
      setTwitter(s.twitter ?? twitter);
      setTelegram(s.telegram ?? telegram);
      setInstagram(s.instagram ?? instagram);
      setGithubUser(s.githubUser ?? githubUser);
      setGifUrl(s.gifUrl ?? gifUrl);
      setAboutLines(s.aboutLines ?? aboutLines);
      setIncludeBadges(s.includeBadges ?? includeBadges);
      setIncludeConnectIcons(s.includeConnectIcons ?? includeConnectIcons);
      setIncludeVisitor(s.includeVisitor ?? includeVisitor);
      setIncludeTyping(s.includeTyping ?? includeTyping);
      setTypingLines(s.typingLines ?? typingLines);
      setSelectedIcons(Array.isArray(s.selectedIcons) ? s.selectedIcons : selectedIcons);
      setFeaturedRepos(s.featuredRepos ?? featuredRepos);
      setIncludeStats(s.includeStats ?? includeStats);
      setIncludeTopLangs(s.includeTopLangs ?? includeTopLangs);
      setIncludeStreak(s.includeStreak ?? includeStreak);
      setIncludeTrophies(s.includeTrophies ?? includeTrophies);
      setIncludeActivityGraph(s.includeActivityGraph ?? includeActivityGraph);
      setIncludeSnake(s.includeSnake ?? includeSnake);
      setStatsTheme(s.statsTheme ?? statsTheme);
      alert("Preset imported ✅");
    } catch {
      alert("Invalid JSON file.");
    }
  };

  const resetAll = () => {
    // simple reload is easiest, keeps code compact
    window.location.href = window.location.pathname;
  };

  /** -------- UI -------- */
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">README Generator</h1>
          <p className="text-slate-600">
            Build a polished GitHub profile README in minutes. Fill the form → copy or download your Markdown.
          </p>
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
                <Checkbox id="visitor" label="Show visitor counter" checked={includeVisitor} onChange={setIncludeVisitor} />
                <Checkbox id="typing" label="Show typing headline (animated)" checked={includeTyping} onChange={setIncludeTyping} />
              </div>
              {includeTyping && (
                <TextInput
                  label="Typing lines (semicolon-separated)"
                  value={typingLines}
                  onChange={setTypingLines}
                  helper="Example: Full Stack Developer;Open Source Contributor;Tech Enthusiast"
                />
              )}
            </Section>

            <Section title="Languages & Tools">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {ALL_ICONS.map((i) => (
                  <button
                    key={i.key}
                    type="button"
                    onClick={() => toggleIcon(i.key)}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-sm transition ${
                      selectedIcons.includes(i.key) ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                    }`}
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
                  <select
                    className="rounded-lg border border-gray-300 px-2 py-1"
                    value={statsTheme}
                    onChange={(e) => setStatsTheme(e.target.value)}
                  >
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

            <Section
              title="Share & Presets"
              right={
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const link = buildPermalink();
                      navigator.clipboard.writeText(link);
                      alert("Permalink copied 📎");
                    }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700"
                  >
                    Copy Permalink
                  </button>
                  <button onClick={exportJSON} className="px-3 py-1.5 rounded-xl bg-slate-900 text-white shadow hover:bg-slate-800">
                    Export JSON
                  </button>
                  <label className="px-3 py-1.5 rounded-xl bg-slate-200 text-slate-900 shadow hover:bg-slate-300 cursor-pointer">
                    Import
                    <input type="file" accept="application/json" className="hidden" onChange={(e) => importJSON(e.target.files?.[0])} />
                  </label>
                  <button onClick={resetAll} className="px-3 py-1.5 rounded-xl bg-rose-600 text-white shadow hover:bg-rose-700">
                    Reset
                  </button>
                </div>
              }
            >
              <p className="text-xs text-gray-500">Permalinks keep your current config in the URL. Export/Import lets you save multiple presets.</p>
            </Section>
          </div>

          {/* Right: Output & Preview */}
          <div className="space-y-4">
            <Section
              title="Generated Markdown"
              right={
                <div className="flex gap-2">
                  <button onClick={copyToClipboard} className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700">
                    Copy
                  </button>
                  <button onClick={downloadFile} className="px-3 py-1.5 rounded-xl bg-slate-900 text-white shadow hover:bg-slate-800">
                    Download
                  </button>
                </div>
              }
            >
              <div className="flex items-center gap-2 text-sm">
                <button
                  className={`px-2.5 py-1 rounded ${activePreviewTab === "markdown" ? "bg-indigo-600 text-white" : "bg-slate-200"}`}
                  onClick={() => setActivePreviewTab("markdown")}
                >
                  Markdown
                </button>
                <button
                  className={`px-2.5 py-1 rounded ${activePreviewTab === "render" ? "bg-indigo-600 text-white" : "bg-slate-200"}`}
                  onClick={() => setActivePreviewTab("render")}
                >
                  Rendered (approx)
                </button>
              </div>

              {activePreviewTab === "markdown" ? (
                <TextArea label="" value={md} onChange={() => {}} rows={24} />
              ) : (
                <div
                  className="rounded-xl border border-gray-300 bg-white p-4 overflow-auto text-sm"
                  // This is a light, approximate preview. GitHub may render some markdown differently.
                  dangerouslySetInnerHTML={{ __html: md }}
                />
              )}

              <p className="text-xs text-gray-500">
                Tip: paste into <code>README.md</code> in a repo named <code>{githubUser}/{githubUser}</code> to make it your profile README.
              </p>
            </Section>

            <Section title="Notes">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Badges and cards are external images; providers may rate-limit briefly.</li>
                <li>To enable the 🐍 Snake, add a GitHub Action to publish <code>output/snake.svg</code> in your profile repo.</li>
                <li>Use the “Rendered (approx)” tab as a quick preview. GitHub’s final rendering can differ slightly.</li>
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
