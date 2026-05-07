// V2 Preprint — Cover Letter
// arXiv-inspired: dense, technical, monospace metadata, numbered sections

const Preprint = ({ tweaks }) => {
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
    compact: { lh: 1.4, vspace: 12, pad: 40 },
    comfortable: { lh: 1.55, vspace: 18, pad: 64 },
    airy: { lh: 1.7, vspace: 28, pad: 96 },
  };
  const d = densityMap[density];

  const textureBg = (() => {
    if (texture === "grid") return `linear-gradient(${palette.rule}30 1px, transparent 1px), linear-gradient(90deg, ${palette.rule}30 1px, transparent 1px)`;
    if (texture === "noise") return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;
    return "none";
  })();

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

        {/* arXiv-style ribbon */}
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
          <span>rfcosta.dev:2026.05/cover-letter [cs.SE; stat.AP]</span>
          <span>v3 · 6 May 2026</span>
        </div>

        {/* Title block — left aligned, dense */}
        <header style={{ marginBottom: d.vspace * 2.4 }}>
          <h1 style={{
            margin: 0,
            fontFamily: fonts.serif,
            fontSize: 38,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            maxWidth: 720,
          }}>
            On building data systems for problems that have not been<br/>fully specified yet:
            <span style={{ color: palette.muted, fontWeight: 400, fontStyle: "italic" }}> a self-introduction</span>
          </h1>

          <div style={{
            marginTop: d.vspace * 1.4,
            fontFamily: fonts.serif,
            fontSize: 16,
          }}>
            <span style={{ fontWeight: 600 }}>Ricardo Faria da Costa</span>
            <sup style={{ fontSize: 10, color: palette.accent, marginLeft: 4 }}>1,2,*</sup>
          </div>
          <div style={{
            marginTop: 6,
            fontFamily: fonts.mono,
            fontSize: 11,
            color: palette.muted,
            lineHeight: 1.7,
          }}>
            <div><sup>1</sup> Computer &amp; Data Engineering, independent practice</div>
            <div><sup>2</sup> M.Sc. candidate, Space Science &amp; Technology — Systems Engineering, INPE</div>
            <div><sup>*</sup> Correspondence: <a href="mailto:ricardofcosta0804@gmail.com" style={{ color: palette.accent, textDecoration: "none", borderBottom: `1px solid ${palette.accent}80` }}>ricardofcosta0804@gmail.com</a></div>
          </div>
        </header>

        {/* Abstract */}
        <section style={{
          marginBottom: d.vspace * 2,
          padding: `${d.vspace}px ${d.vspace * 1.2}px`,
          background: palette.paper,
          border: `1px solid ${palette.rule}`,
        }}>
          <div style={{
            fontFamily: fonts.mono,
            fontSize: 10.5,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: palette.muted,
            marginBottom: 10,
          }}>Abstract</div>
          <p style={{ margin: 0, fontSize: 14.5, textAlign: "justify" }}>
            We describe the trajectory of a computer engineer (graduated, 2023) currently
            pursuing the M.Sc. in Space Science &amp; Technology — Systems Engineering. The
            subject's research interests are situated at the intersection of <em>data
            engineering</em>, <em>statistical inference</em>, and <em>operational Linux
            systems</em>, with an emerging concentration in space-mission data handling.
            We argue that this combination is not coincidental but a coherent technical
            posture: prefer measurable systems, model uncertainty explicitly, and treat
            the operating system as a first-class collaborator. Available for full-time and
            consulting engagements; remote or São Paulo region.
          </p>
          <div style={{
            marginTop: 14,
            fontFamily: fonts.mono,
            fontSize: 10.5,
            color: palette.muted,
          }}>
            <strong style={{ color: palette.ink }}>Keywords:</strong> data engineering · statistics · machine learning · linux · space systems · CCSDS
          </div>
        </section>

        {/* §1 Introduction */}
        <Sec n="1" title="Introduction" fonts={fonts} palette={palette} d={d}>
          <p style={{ margin: `0 0 ${d.vspace * 0.7}px`, textAlign: "justify" }}>
            The work documented across the following sections is consistent in
            posture, even when it is heterogeneous in subject. Whether the
            problem is a deduplication job over months of telemetry or a coursework
            assignment in mission analysis, the method is the same: enumerate what
            is known, model what is uncertain, and design the smallest system that
            can be operated honestly.
          </p>
          <p style={{ margin: 0, textAlign: "justify" }}>
            The remainder of this document is organized as follows.
            §<a href="#sec2" style={linkStyle(palette)}>2</a> summarizes technical instruments.
            §<a href="#sec3" style={linkStyle(palette)}>3</a> describes formal training.
            §<a href="#sec4" style={linkStyle(palette)}>4</a> records professional experience.
            §<a href="#sec5" style={linkStyle(palette)}>5</a> describes current activity.
            Contact information is provided in §<a href="#sec6" style={linkStyle(palette)}>6</a>.
          </p>
        </Sec>

        {/* §2 Skills */}
        <Sec n="2" title="Methods &amp; instruments" fonts={fonts} palette={palette} d={d} id="sec2">
          <SkillTable fonts={fonts} palette={palette} d={d} />
        </Sec>

        {/* §3 Education */}
        <Sec n="3" title="Education" fonts={fonts} palette={palette} d={d} id="sec3">
          <Entry
            n="3.1"
            year="2024 — present"
            title="M.Sc., Space Science &amp; Technology — Systems Engineering"
            org="INPE — Instituto Nacional de Pesquisas Espaciais"
            note="Concentration: systems engineering for small-satellite missions; on-board data handling, mission analysis, V&amp;V."
            fonts={fonts} palette={palette} d={d}
          />
          <Entry
            n="3.2"
            year="2018 — 2023"
            title="B.Eng., Computer Engineering"
            org="Federal University"
            note="Emphasis: signal processing, distributed systems, applied statistics. Capstone: telemetry-driven anomaly detection."
            fonts={fonts} palette={palette} d={d}
          />
        </Sec>

        {/* §4 Experience */}
        <Sec n="4" title="Professional experience" fonts={fonts} palette={palette} d={d} id="sec4">
          <Entry
            n="4.1"
            year="2023 — present"
            title="Data Engineer"
            org="——"
            note="Pipeline architecture (batch + streaming); data-quality contracts; observability; cost-aware modeling. Stack: Python, dbt, Airflow, DuckDB, Postgres, Spark, Parquet."
            fonts={fonts} palette={palette} d={d}
          />
          <Entry
            n="4.2"
            year="2021 — 2023"
            title="Software Engineering Intern"
            org="——"
            note="Backend services and observability tooling. First production exposure to systemd, container orchestration, and on-call discipline."
            fonts={fonts} palette={palette} d={d}
          />
        </Sec>

        {/* §5 Now */}
        <Sec n="5" title="Current activity" fonts={fonts} palette={palette} d={d} id="sec5">
          <ol style={{ margin: 0, paddingLeft: 22, lineHeight: 1.8 }}>
            <li>Drafting M.Sc. dissertation on systems-engineering practices for small-mission ground-segment data handling.</li>
            <li>Maintaining a NixOS/Arch workstation; documenting reproducibility patterns publicly.</li>
            <li>Re-reading <em>Statistical Rethinking</em> (McElreath); working through exercises in PyMC.</li>
            <li>Publishing technical notes at <a href="blog.html" style={linkStyle(palette)}>/blog</a>.</li>
          </ol>
        </Sec>

        {/* §6 Contact */}
        <Sec n="6" title="Correspondence &amp; references" fonts={fonts} palette={palette} d={d} id="sec6">
          <div style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            rowGap: 4,
            columnGap: 16,
          }}>
            <div style={{ color: palette.muted }}>email</div><div><a href="mailto:ricardofcosta0804@gmail.com" style={linkStyle(palette)}>ricardofcosta0804@gmail.com</a></div>
            <div style={{ color: palette.muted }}>github</div><div><a href="https://github.com/ricardofariac" style={linkStyle(palette)}>github.com/ricardofariac</a></div>
            <div style={{ color: palette.muted }}>linkedin</div><div><a href="https://linkedin.com/in/ricardofaria" style={linkStyle(palette)}>linkedin.com/in/ricardofaria</a></div>
            <div style={{ color: palette.muted }}>blog</div><div><a href="blog.html" style={linkStyle(palette)}>rfcosta.dev/blog</a></div>
            <div style={{ color: palette.muted }}>pgp</div><div>0xA1B2 C3D4 · on request</div>
          </div>
        </Sec>

        {/* Footer / bibtex easter egg */}
        <details style={{
          marginTop: d.vspace * 2,
          fontFamily: fonts.mono,
          fontSize: 11,
          color: palette.muted,
          background: palette.paper,
          border: `1px solid ${palette.rule}`,
          padding: `10px 14px`,
        }}>
          <summary style={{ cursor: "pointer", userSelect: "none" }}>Cite this letter</summary>
          <pre style={{ margin: "10px 0 0", whiteSpace: "pre-wrap", fontSize: 11, color: palette.ink }}>
{`@misc{costa2026letter,
  author  = {Costa, Ricardo Faria da},
  title   = {On building data systems for problems
             that have not been fully specified yet},
  year    = {2026},
  note    = {Self-published cover letter, v3},
  url     = {https://rfcosta.dev}
}`}
          </pre>
        </details>

      </div>
    </div>
  );
};

const linkStyle = (palette) => ({
  color: palette.accent,
  textDecoration: "none",
  borderBottom: `1px solid ${palette.accent}60`,
});

const Sec = ({ n, title, children, fonts, palette, d, id }) => (
  <section id={id} style={{ marginBottom: d.vspace * 2 }}>
    <h2 style={{
      margin: `0 0 ${d.vspace * 0.7}px`,
      fontFamily: fonts.serif,
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      paddingBottom: 6,
      borderBottom: `1px solid ${palette.rule}`,
    }}>
      <span style={{ color: palette.muted, marginRight: 12, fontWeight: 400 }}>{n}.</span>
      <span dangerouslySetInnerHTML={{ __html: title }} />
    </h2>
    <div>{children}</div>
  </section>
);

const Entry = ({ n, year, title, org, note, fonts, palette, d }) => (
  <div style={{
    marginBottom: d.vspace,
    paddingLeft: 18,
    borderLeft: `2px solid ${palette.rule}`,
  }}>
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 16,
      marginBottom: 2,
    }}>
      <div style={{ fontSize: 15, fontWeight: 600 }}>
        <span style={{ color: palette.muted, fontWeight: 400, marginRight: 8, fontFamily: "inherit" }}>§{n}</span>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div style={{ fontFamily: fonts.mono, fontSize: 11, color: palette.muted, whiteSpace: "nowrap" }}>{year}</div>
    </div>
    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: palette.muted, marginBottom: 6 }}>{org}</div>
    {note && <div style={{ fontSize: 14, color: palette.ink, opacity: 0.9 }} dangerouslySetInnerHTML={{ __html: note }} />}
  </div>
);

const SkillTable = ({ fonts, palette, d }) => {
  const rows = [
    ["L1", "Languages", "Python · SQL · Bash · TypeScript · Rust (learning)"],
    ["D1", "Data engineering", "dbt · Airflow · Spark · DuckDB · Postgres · Parquet"],
    ["S1", "Statistics", "Bayesian inference (PyMC) · time-series · A/B · causal"],
    ["A1", "AI / ML", "scikit-learn · PyTorch · embeddings · evaluation rigor"],
    ["O1", "Operating systems", "Linux (NixOS, Arch, Debian) · systemd · Nix · Docker"],
    ["X1", "Space systems", "Systems engineering · CCSDS · OBDH · mission analysis"],
  ];
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: fonts.mono }}>
      <thead>
        <tr style={{ borderTop: `1px solid ${palette.rule}`, borderBottom: `1px solid ${palette.rule}`, background: palette.tag }}>
          <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 600, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: palette.muted, width: 50 }}>Tag</th>
          <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 600, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: palette.muted, width: 160 }}>Domain</th>
          <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 600, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: palette.muted }}>Instruments</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([tag, dom, ins], i) => (
          <tr key={i} style={{ borderBottom: `1px solid ${palette.rule}` }}>
            <td style={{ padding: "8px 10px", color: palette.accent, fontWeight: 600 }}>{tag}</td>
            <td style={{ padding: "8px 10px", color: palette.ink }}>{dom}</td>
            <td style={{ padding: "8px 10px", color: palette.ink, fontFamily: fonts.serif, fontSize: 14 }}>{ins}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

window.Preprint = Preprint;
