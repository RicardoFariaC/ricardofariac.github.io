// V1 Manuscript — Blog
const ManuscriptBlog = ({ tweaks }) => {
  const t = tweaks || {};
  const dark = t.dark || false;
  const density = t.density || "comfortable";
  const texture = t.texture || "plain";
  const fontPair = t.fontPair || "source";

  const fontMap = {
    source: { serif: "'Source Serif 4', Georgia, serif", mono: "'JetBrains Mono', monospace" },
    crimson: { serif: "'Crimson Pro', Georgia, serif", mono: "'IBM Plex Mono', monospace" },
    ebgaramond: { serif: "'EB Garamond', Georgia, serif", mono: "'IBM Plex Mono', monospace" },
  };
  const fonts = fontMap[fontPair];

  const palette = dark
    ? { bg: "#15130f", paper: "#1c1a16", ink: "#ebe6db", muted: "#8a8478", rule: "#3a362e", accent: "#c8412a" }
    : { bg: "#ede7d8", paper: "#f5f1e8", ink: "#1a1816", muted: "#6b6557", rule: "#cfc7b3", accent: "#c8412a" };

  const densityMap = {
    compact: { lh: 1.45, vspace: 14, pad: 56, entryGap: 18 },
    comfortable: { lh: 1.6, vspace: 22, pad: 80, entryGap: 32 },
    airy: { lh: 1.75, vspace: 32, pad: 110, entryGap: 48 },
  };
  const d = densityMap[density];

  const textureBg = (() => {
    if (texture === "grid") return `linear-gradient(${palette.rule}40 1px, transparent 1px), linear-gradient(90deg, ${palette.rule}40 1px, transparent 1px)`;
    if (texture === "noise") return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;
    return "none";
  })();

  const posts = [
    { date: "2026-04-22", title: "Notes on idempotent backfills", read: "8 min", kind: "Essay",
      excerpt: "When a backfill fails halfway through, the cheapest recovery is the one you designed for before you ran it. A small grammar for partition-aware reruns, written down so I stop re-deriving it." },
    { date: "2026-03-30", title: "Bayes is just bookkeeping for the things you don't know yet", read: "12 min", kind: "Essay",
      excerpt: "A from-scratch walk through prior, likelihood, and posterior using a single example I keep returning to: estimating the failure rate of a thing I've never seen fail." },
    { date: "2026-03-08", title: "NixOS as a thinking aid", read: "6 min", kind: "Notebook",
      excerpt: "Reproducible machines force you to write down the implicit. After a year, the configuration file reads like a journal of every problem I ever convinced myself I had solved." },
    { date: "2026-02-14", title: "On reading 'Systems Engineering Principles and Practice'", read: "9 min", kind: "Notes",
      excerpt: "Marginalia from chapters one through four — what translated cleanly to data work, what did not, and where I think the discipline is most undervalued by software people." },
    { date: "2026-01-27", title: "DuckDB at the edge of a satellite ground station", read: "11 min", kind: "Essay",
      excerpt: "A weekend prototype: parse CCSDS frames, normalize into Parquet, query with DuckDB, plot. The whole pipeline fits on a Raspberry Pi and costs nothing to run." },
    { date: "2025-12-19", title: "The variance you keep", read: "5 min", kind: "Short",
      excerpt: "Every dimensionality reduction is an editorial decision. A short note on what I have learned to leave in." },
    { date: "2025-11-05", title: "Class notes — Mission Analysis I", read: "14 min", kind: "Coursework",
      excerpt: "Orbit determination, ground-track geometry, and the small unsexy arithmetic that turns out to dominate. Cleaned up from my own handwritten notes." },
    { date: "2025-10-12", title: "Why I stopped writing dashboards first", read: "7 min", kind: "Essay",
      excerpt: "The dashboard is the last artifact, not the first. A small change in workflow that made my data work less performative and more useful." },
  ];

  return (
    <div style={{
      width: "100%",
      minHeight: "100%",
      background: palette.bg,
      color: palette.ink,
      fontFamily: fonts.serif,
      fontSize: 17,
      lineHeight: d.lh,
      padding: `${d.pad}px 0`,
      backgroundImage: textureBg,
      backgroundSize: texture === "grid" ? "32px 32px" : texture === "noise" ? "200px 200px" : "auto",
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: `0 ${d.pad / 2}px` }}>
        {/* Masthead */}
        <header style={{
          borderBottom: `1px solid ${palette.rule}`,
          paddingBottom: d.vspace,
          marginBottom: d.vspace * 1.8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          fontFamily: fonts.mono,
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: palette.muted,
        }}>
          <a href="cover.html" style={{ color: "inherit", textDecoration: "none", borderBottom: `1px dotted ${palette.muted}` }}>← R. F. Costa</a>
          <span>The Blog</span>
          <span>Updated weekly, ish</span>
        </header>

        {/* Title */}
        <div style={{ marginBottom: d.vspace * 2.4 }}>
          <div style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: palette.muted,
            marginBottom: d.vspace * 0.6,
          }}>
            Periodical &middot; entries &amp; observations
          </div>
          <h1 style={{
            fontFamily: fonts.serif,
            fontSize: 56,
            fontWeight: 400,
            lineHeight: 1.0,
            margin: 0,
            letterSpacing: "-0.015em",
            fontStyle: "italic",
          }}>
            The Quiet<br />Notebook
          </h1>
          <p style={{
            marginTop: d.vspace,
            color: palette.muted,
            fontStyle: "italic",
            maxWidth: 540,
          }}>
            Long-form notes on data pipelines, statistics, Linux, and the
            slow accumulation of master's coursework. Written for myself,
            published in case it is useful to anyone else.
          </p>
        </div>

        {/* Posts list */}
        <div>
          {posts.map((p, i) => (
            <article key={i} style={{
              padding: `${d.entryGap}px 0`,
              borderTop: `1px solid ${palette.rule}`,
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 24,
              alignItems: "baseline",
            }}>
              <div style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: palette.muted,
                letterSpacing: "0.05em",
              }}>
                <div>{p.date}</div>
                <div style={{ marginTop: 4, opacity: 0.7 }}>{p.read}</div>
                <div style={{ marginTop: 8, fontStyle: "normal", color: palette.accent, textTransform: "uppercase", letterSpacing: "0.12em", fontSize: 10 }}>{p.kind}</div>
              </div>
              <div>
                <h2 style={{
                  margin: 0,
                  fontFamily: fonts.serif,
                  fontSize: 26,
                  fontWeight: 400,
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                }}>
                  <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{p.title}</a>
                </h2>
                <p style={{ margin: `${d.vspace * 0.5}px 0 0`, color: palette.ink, opacity: 0.85, fontSize: 16 }}>
                  {p.excerpt}
                </p>
                <a href="#" style={{
                  display: "inline-block",
                  marginTop: d.vspace * 0.6,
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: palette.accent,
                  textDecoration: "none",
                  borderBottom: `1px dotted ${palette.accent}`,
                }}>Read entry →</a>
              </div>
            </article>
          ))}
          <div style={{ borderTop: `1px solid ${palette.rule}`, paddingTop: d.vspace, fontFamily: fonts.mono, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: palette.muted, textAlign: "center" }}>
            — end of current volume —
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: d.vspace * 3,
          paddingTop: d.vspace,
          borderTop: `1px solid ${palette.rule}`,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: fonts.mono,
          fontSize: 11,
          color: palette.muted,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          <a href="cover.html" style={{ color: "inherit", textDecoration: "none", borderBottom: `1px dotted ${palette.muted}` }}>← Cover</a>
          <span>RSS · Atom · email</span>
        </footer>
      </div>
    </div>
  );
};

window.ManuscriptBlog = ManuscriptBlog;
