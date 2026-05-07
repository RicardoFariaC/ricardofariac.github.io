// V1 Manuscript — Cover Letter
// Classic journal article aesthetic: warm paper, generous serifs, marginalia

const Manuscript = ({ tweaks }) => {
  const t = tweaks || {};
  const dark = t.dark || false;
  const density = t.density || "comfortable"; // compact | comfortable | airy
  const texture = t.texture || "plain"; // plain | grid | noise
  const fontPair = t.fontPair || "source"; // source | crimson | ebgaramond

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
    compact: { lh: 1.45, vspace: 14, pad: 56 },
    comfortable: { lh: 1.6, vspace: 22, pad: 80 },
    airy: { lh: 1.75, vspace: 32, pad: 110 },
  };
  const d = densityMap[density];

  const textureBg = (() => {
    if (texture === "grid") {
      return `linear-gradient(${palette.rule}40 1px, transparent 1px), linear-gradient(90deg, ${palette.rule}40 1px, transparent 1px)`;
    }
    if (texture === "noise") {
      return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;
    }
    return "none";
  })();

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
      <article style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: `0 ${d.pad / 2}px`,
        position: "relative",
      }}>
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
          <span>Vol. I &middot; No. 1</span>
          <span>R. F. Costa &middot; Personal Records</span>
          <span>São José dos Campos &middot; MMXXVI</span>
        </header>

        {/* Title block */}
        <div style={{ textAlign: "center", marginBottom: d.vspace * 2.2 }}>
          <div style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: palette.muted,
            marginBottom: d.vspace,
          }}>
            A letter of introduction
          </div>
          <h1 style={{
            fontFamily: fonts.serif,
            fontSize: 56,
            fontWeight: 400,
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: "-0.015em",
            fontStyle: "italic",
          }}>
            Ricardo Faria<br />da Costa
          </h1>
          <div style={{
            marginTop: d.vspace * 1.2,
            fontSize: 16,
            color: palette.muted,
            fontStyle: "italic",
          }}>
            Computer &amp; Data Engineer · Space Systems candidate
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: d.vspace * 1.8,
            fontFamily: fonts.mono,
            fontSize: 10,
            color: palette.muted,
            letterSpacing: "0.1em",
          }}>
            <span>—</span><span>§</span><span>—</span>
          </div>
        </div>

        {/* Abstract / drop-cap intro */}
        <section style={{ marginBottom: d.vspace * 2.4 }}>
          <div style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: palette.muted,
            marginBottom: d.vspace * 0.6,
          }}>
            Abstract
          </div>
          <p style={{ margin: 0, fontSize: 18, lineHeight: d.lh, textAlign: "justify" }}>
            <span style={{
              float: "left",
              fontSize: 64,
              lineHeight: 0.85,
              paddingRight: 10,
              paddingTop: 6,
              fontFamily: fonts.serif,
              fontWeight: 400,
            }}>I</span>
            am a computer engineer working at the seam where data infrastructure
            meets scientific instrumentation. Trained in software, sharpened by
            statistics, and presently rerouting through space systems engineering
            at the master's level — I build pipelines, models, and small Linux
            machines that turn noisy measurements into decisions.
          </p>
        </section>

        {/* Cover prose */}
        <Section label="§ I" title="On the work" fonts={fonts} palette={palette} d={d}>
          <p style={{ margin: `0 0 ${d.vspace}px`, textAlign: "justify" }}>
            My center of gravity is <em>data engineering</em>: designing the
            unglamorous but load-bearing systems that move measurements from
            sensor to insight. I am most useful when a problem mixes
            heterogeneous data sources, statistical modeling, and the discipline
            of running things reliably on Linux.
          </p>
          <p style={{ margin: 0, textAlign: "justify" }}>
            Lately I have been studying space systems engineering, which has
            forced a healthier respect for budgets — of mass, of power, of
            uncertainty. The translation back to terrestrial software has been
            generous: better failure modes, fewer assumptions, kinder telemetry.
          </p>
        </Section>

        <Section label="§ II" title="Skills &amp; instruments" fonts={fonts} palette={palette} d={d}>
          <SkillTable fonts={fonts} palette={palette} d={d} />
        </Section>

        <Section label="§ III" title="Education" fonts={fonts} palette={palette} d={d}>
          <Entry
            year="2024 — present"
            title="M.Sc., Space Science &amp; Technology — Systems Engineering"
            org="Instituto Nacional de Pesquisas Espaciais (INPE)"
            note="Focus on systems engineering for small satellite missions; on-board data handling, mission analysis, and verification."
            fonts={fonts} palette={palette} d={d}
          />
          <Entry
            year="2018 — 2023"
            title="B.Eng., Computer Engineering"
            org="Federal University"
            note="Emphasis on signal processing, distributed systems, and applied statistics. Final project on telemetry-driven anomaly detection."
            fonts={fonts} palette={palette} d={d}
          />
        </Section>

        <Section label="§ IV" title="Experience" fonts={fonts} palette={palette} d={d}>
          <Entry
            year="2023 — present"
            title="Data Engineer"
            org="——"
            note="Pipeline architecture, batch &amp; streaming workloads, data quality contracts, and the steady work of making dashboards trustworthy."
            fonts={fonts} palette={palette} d={d}
          />
          <Entry
            year="2021 — 2023"
            title="Software Engineering Intern"
            org="——"
            note="Backend services and observability tooling. First serious encounter with production Linux."
            fonts={fonts} palette={palette} d={d}
          />
        </Section>

        <Section label="§ V" title="Now" fonts={fonts} palette={palette} d={d}>
          <ul style={{ margin: 0, paddingLeft: 22, listStyle: "square" }}>
            <li style={{ marginBottom: d.vspace * 0.4 }}>
              Writing my dissertation on systems engineering applied to small mission data handling.
            </li>
            <li style={{ marginBottom: d.vspace * 0.4 }}>
              Maintaining a NixOS workstation; documenting the parts that hurt.
            </li>
            <li style={{ marginBottom: d.vspace * 0.4 }}>
              Reading <em>Statistical Rethinking</em> for the second time, slower.
            </li>
            <li>Posting essays at <a href="blog.html" style={{ color: palette.accent, textDecoration: "underline", textDecorationStyle: "dotted", textUnderlineOffset: 4 }}>the blog</a>.</li>
          </ul>
        </Section>

        {/* Colophon / contact */}
        <footer style={{
          marginTop: d.vspace * 3,
          paddingTop: d.vspace * 1.4,
          borderTop: `1px solid ${palette.rule}`,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: d.vspace,
          fontFamily: fonts.mono,
          fontSize: 11,
          color: palette.muted,
        }}>
          <div>
            <div style={{ marginBottom: 6, letterSpacing: "0.12em", textTransform: "uppercase" }}>Correspondence</div>
            <div style={{ color: palette.ink }}><a href="mailto:ricardofcosta0804@gmail.com" style={{ color: "inherit", textDecoration: "none", borderBottom: `1px dotted ${palette.muted}` }}>ricardofcosta0804@gmail.com</a></div>
            <div style={{ color: palette.ink, marginTop: 4 }}><a href="https://github.com/ricardofariac" style={{ color: "inherit", textDecoration: "none", borderBottom: `1px dotted ${palette.muted}` }}>github.com/ricardofariac</a></div>
            <div style={{ color: palette.ink, marginTop: 4 }}><a href="https://linkedin.com/in/ricardofaria" style={{ color: "inherit", textDecoration: "none", borderBottom: `1px dotted ${palette.muted}` }}>linkedin.com/in/ricardofaria</a></div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: 6, letterSpacing: "0.12em", textTransform: "uppercase" }}>Colophon</div>
            <div>Set in {fontPair === "source" ? "Source Serif" : fontPair === "crimson" ? "Crimson Pro" : "EB Garamond"}.</div>
            <div style={{ marginTop: 4 }}>Composed in plain HTML.</div>
            <div style={{ marginTop: 4 }}>Last revised, {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}.</div>
          </div>
        </footer>
      </article>
    </div>
  );
};

const Section = ({ label, title, children, fonts, palette, d }) => (
  <section style={{ marginBottom: d.vspace * 2.4, position: "relative" }}>
    <div style={{
      display: "grid",
      gridTemplateColumns: "60px 1fr",
      gap: 24,
      alignItems: "baseline",
      marginBottom: d.vspace,
    }}>
      <div style={{
        fontFamily: fonts.mono,
        fontSize: 11,
        color: palette.muted,
        letterSpacing: "0.1em",
        textAlign: "right",
        paddingTop: 6,
      }}>{label}</div>
      <h2 style={{
        margin: 0,
        fontFamily: fonts.serif,
        fontSize: 26,
        fontWeight: 400,
        fontStyle: "italic",
        letterSpacing: "-0.01em",
      }} dangerouslySetInnerHTML={{ __html: title }} />
    </div>
    <div style={{ paddingLeft: 84 }}>{children}</div>
  </section>
);

const Entry = ({ year, title, org, note, fonts, palette, d }) => (
  <div style={{ marginBottom: d.vspace * 1.2, display: "grid", gridTemplateColumns: "120px 1fr", gap: 18 }}>
    <div style={{
      fontFamily: fonts.mono,
      fontSize: 11,
      color: palette.muted,
      letterSpacing: "0.05em",
      paddingTop: 4,
    }}>{year}</div>
    <div>
      <div style={{ fontSize: 17, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: title }} />
      <div style={{ fontSize: 14, color: palette.muted, marginTop: 2 }}>{org}</div>
      {note && <div style={{ fontSize: 15, marginTop: 6, color: palette.ink, opacity: 0.85 }} dangerouslySetInnerHTML={{ __html: note }} />}
    </div>
  </div>
);

const SkillTable = ({ fonts, palette, d }) => {
  const rows = [
    ["Languages", "Python · SQL · Rust (learning) · Bash · TypeScript"],
    ["Data", "dbt · Airflow · DuckDB · Postgres · Spark · Parquet"],
    ["Statistics", "Bayesian inference · time-series · A/B · causal basics"],
    ["AI / ML", "scikit-learn · PyTorch · embeddings · evaluation discipline"],
    ["Systems", "Linux (NixOS, Arch) · systemd · Docker · Nix · Terraform"],
    ["Space", "Systems engineering · CCSDS · on-board data handling"],
  ];
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
      <tbody>
        {rows.map(([k, v], i) => (
          <tr key={i} style={{ borderTop: i === 0 ? `1px solid ${palette.rule}` : "none", borderBottom: `1px solid ${palette.rule}` }}>
            <td style={{
              padding: `${d.vspace * 0.45}px 12px ${d.vspace * 0.45}px 0`,
              width: 130,
              verticalAlign: "top",
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: palette.muted,
            }}>{k}</td>
            <td style={{ padding: `${d.vspace * 0.45}px 0`, fontStyle: "italic" }}>{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

window.Manuscript = Manuscript;
