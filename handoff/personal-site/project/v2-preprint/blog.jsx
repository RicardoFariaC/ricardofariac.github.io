// V2 Preprint — Blog
const PreprintBlog = ({ tweaks }) => {
  const t = tweaks || {};
  const dark = t.dark || false;
  const density = t.density || "comfortable";
  const texture = t.texture || "plain";
  const fontPair = t.fontPair || "computer";

  const fontMap = {
    computer: { serif: "'Computer Modern Serif', 'Latin Modern Roman', Georgia, serif", mono: "'JetBrains Mono', monospace", sans: "'Inter Tight', system-ui, sans-serif" },
    libertinus: { serif: "'Libre Caslon Text', Georgia, serif", mono: "'IBM Plex Mono', monospace", sans: "'IBM Plex Sans', system-ui, sans-serif" },
    stix: { serif: "'STIX Two Text', 'Times New Roman', serif", mono: "'JetBrains Mono', monospace", sans: "'Inter Tight', system-ui, sans-serif" },
  };
  const fonts = fontMap[fontPair];

  const palette = dark
    ? { bg: "#0e1014", paper: "#13161c", ink: "#dbe0ea", muted: "#7a8290", rule: "#2a2f3a", accent: "#c8412a", tag: "#1a1f2a" }
    : { bg: "#fbfaf6", paper: "#ffffff", ink: "#0d0d0d", muted: "#5a5a5a", rule: "#d8d4c6", accent: "#c8412a", tag: "#efece2" };

  const densityMap = {
    compact: { lh: 1.4, vspace: 12, pad: 40, entryGap: 14 },
    comfortable: { lh: 1.55, vspace: 18, pad: 64, entryGap: 22 },
    airy: { lh: 1.7, vspace: 28, pad: 96, entryGap: 36 },
  };
  const d = densityMap[density];

  const textureBg = (() => {
    if (texture === "grid") return `linear-gradient(${palette.rule}30 1px, transparent 1px), linear-gradient(90deg, ${palette.rule}30 1px, transparent 1px)`;
    if (texture === "noise") return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;
    return "none";
  })();

  const linkStyle = { color: palette.accent, textDecoration: "none", borderBottom: `1px solid ${palette.accent}60` };

  const posts = [
    { id: "2026.05/01", date: "2026-05-02", title: "Idempotent backfills, formally", read: 8, cat: "data", tags: ["airflow", "dbt", "patterns"],
      excerpt: "When a backfill fails halfway through, the cheapest recovery is the one you designed for before you ran it. A small grammar for partition-aware reruns, written down so I stop re-deriving it." },
    { id: "2026.04/02", date: "2026-04-22", title: "Bayesian bookkeeping for things you have never seen fail", read: 12, cat: "stat", tags: ["bayes", "pymc", "tutorial"],
      excerpt: "A from-scratch walk through prior, likelihood, and posterior using a single example I keep returning to: estimating the failure rate of a thing I've never seen fail." },
    { id: "2026.03/01", date: "2026-03-30", title: "NixOS as a thinking aid", read: 6, cat: "linux", tags: ["nixos", "reproducibility"],
      excerpt: "Reproducible machines force you to write down the implicit. After a year, the configuration file reads like a journal of every problem I ever convinced myself I had solved." },
    { id: "2026.02/03", date: "2026-02-14", title: "Notes on Kossiakoff, ch. 1–4", read: 9, cat: "msc", tags: ["systems-engineering", "reading-notes"],
      excerpt: "Marginalia from the first four chapters — what translated cleanly to data work, what did not, and where I think the discipline is most undervalued by software people." },
    { id: "2026.01/05", date: "2026-01-27", title: "DuckDB at the edge of a satellite ground station", read: 11, cat: "data", tags: ["duckdb", "ccsds", "edge"],
      excerpt: "A weekend prototype: parse CCSDS frames, normalize into Parquet, query with DuckDB, plot. The whole pipeline fits on a Raspberry Pi and costs nothing to run." },
    { id: "2025.12/02", date: "2025-12-19", title: "The variance you keep", read: 5, cat: "stat", tags: ["pca", "short"],
      excerpt: "Every dimensionality reduction is an editorial decision. A short note on what I have learned to leave in." },
    { id: "2025.11/01", date: "2025-11-05", title: "Class notes — Mission Analysis I", read: 14, cat: "msc", tags: ["orbits", "coursework"],
      excerpt: "Orbit determination, ground-track geometry, and the small unsexy arithmetic that turns out to dominate. Cleaned up from my own handwritten notes." },
    { id: "2025.10/03", date: "2025-10-12", title: "Why I stopped writing dashboards first", read: 7, cat: "data", tags: ["workflow", "essay"],
      excerpt: "The dashboard is the last artifact, not the first. A small change in workflow that made my data work less performative and more useful." },
  ];

  const catLabel = { data: "data", stat: "stat", linux: "linux", msc: "msc" };
  const catColor = { data: "#c8412a", stat: "#5b8def", linux: "#2f9e6e", msc: "#a065c8" };

  return (
    <div style={{
      width: "100%",
      minHeight: "100%",
      background: palette.bg,
      color: palette.ink,
      fontFamily: fonts.serif,
      fontSize: 15,
      lineHeight: d.lh,
      padding: `${d.pad}px 0`,
      backgroundImage: textureBg,
      backgroundSize: texture === "grid" ? "24px 24px" : texture === "noise" ? "200px 200px" : "auto",
    }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: `0 ${d.pad / 2}px` }}>
        {/* Ribbon */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: fonts.mono,
          fontSize: 10.5,
          color: palette.muted,
          paddingBottom: 8,
          borderBottom: `1px solid ${palette.rule}`,
          marginBottom: d.vspace * 2,
          letterSpacing: "0.02em",
        }}>
          <a href="cover.html" style={{ color: "inherit", textDecoration: "none", borderBottom: `1px dotted ${palette.muted}` }}>← rfcosta.dev/cover</a>
          <span>rfcosta.dev/blog · index of entries</span>
        </div>

        {/* Title block */}
        <header style={{ marginBottom: d.vspace * 2 }}>
          <h1 style={{
            margin: 0,
            fontFamily: fonts.serif,
            fontSize: 36,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
          }}>
            Working notes
            <span style={{ color: palette.muted, fontWeight: 400, fontStyle: "italic" }}> &nbsp;·&nbsp; vol. ii</span>
          </h1>
          <p style={{
            marginTop: d.vspace * 0.7,
            color: palette.muted,
            maxWidth: 620,
            fontSize: 14.5,
          }}>
            Long-form notes on data pipelines, statistics, Linux, and the
            slow accumulation of master's coursework. Drafts in public.
          </p>
        </header>

        {/* Filter row (decorative, all selected) */}
        <div style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          fontFamily: fonts.mono,
          fontSize: 11,
          marginBottom: d.vspace * 1.5,
          paddingBottom: d.vspace,
          borderBottom: `1px solid ${palette.rule}`,
          alignItems: "center",
        }}>
          <span style={{ color: palette.muted, marginRight: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>filter:</span>
          {["all", "data", "stat", "linux", "msc"].map((c, i) => (
            <span key={i} style={{
              padding: "3px 9px",
              border: `1px solid ${c === "all" ? palette.accent : palette.rule}`,
              color: c === "all" ? palette.accent : palette.ink,
              background: c === "all" ? `${palette.accent}10` : "transparent",
              cursor: "pointer",
            }}>{c}</span>
          ))}
          <span style={{ marginLeft: "auto", color: palette.muted }}>{posts.length} entries</span>
        </div>

        {/* Posts table-like list */}
        <div>
          {posts.map((p, i) => (
            <article key={i} style={{
              padding: `${d.entryGap}px 0`,
              borderBottom: `1px solid ${palette.rule}`,
              display: "grid",
              gridTemplateColumns: "110px 1fr 80px",
              gap: 20,
              alignItems: "baseline",
            }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 11, color: palette.muted }}>
                <div>{p.date}</div>
                <div style={{ marginTop: 4, fontSize: 10, opacity: 0.7 }}>id:{p.id}</div>
              </div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                  <span style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    padding: "2px 7px",
                    background: `${catColor[p.cat]}15`,
                    color: catColor[p.cat],
                    border: `1px solid ${catColor[p.cat]}40`,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>{catLabel[p.cat]}</span>
                  {p.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: fonts.mono,
                      fontSize: 10,
                      color: palette.muted,
                    }}>#{tag}</span>
                  ))}
                </div>
                <h2 style={{
                  margin: 0,
                  fontFamily: fonts.serif,
                  fontSize: 19,
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                  lineHeight: 1.25,
                }}>
                  <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{p.title}</a>
                </h2>
                <p style={{ margin: "6px 0 0", color: palette.ink, opacity: 0.85, fontSize: 14 }}>
                  {p.excerpt}
                </p>
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 11, color: palette.muted, textAlign: "right" }}>
                <div>{p.read} min</div>
                <a href="#" style={{ ...linkStyle, display: "inline-block", marginTop: 6, fontSize: 10.5 }}>read →</a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: d.vspace * 2.5,
          paddingTop: d.vspace,
          borderTop: `1px solid ${palette.rule}`,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: fonts.mono,
          fontSize: 10.5,
          color: palette.muted,
          letterSpacing: "0.04em",
        }}>
          <a href="cover.html" style={{ color: "inherit", textDecoration: "none", borderBottom: `1px dotted ${palette.muted}` }}>← back to cover letter</a>
          <span>subscribe: <a href="#" style={linkStyle}>rss</a> · <a href="#" style={linkStyle}>atom</a> · <a href="#" style={linkStyle}>email</a></span>
        </footer>
      </div>
    </div>
  );
};

window.PreprintBlog = PreprintBlog;
