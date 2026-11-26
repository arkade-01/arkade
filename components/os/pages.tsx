"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, getProject, nextProject, hostOf, type Project } from "@/data/projects";
import { posts, getPost, formatDate } from "@/data/journal";
import {
  about,
  steps,
  timeline,
  clients,
  testimonials,
  faqs,
  services,
  servicesIntro,
  TELEGRAM,
  EMAIL,
  elsewhere,
} from "@/data/site";
import { resume } from "@/data/resume";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

// ---------------------------------------------------------------------------
// Work
// ---------------------------------------------------------------------------

export function WorkPage({ current }: { current?: string }) {
  return (
    <div className="cards">
      {projects.map((p) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className={`card${current === p.slug ? " card--on" : ""}`}
          aria-current={current === p.slug ? "page" : undefined}
        >
          <Thumb p={p} />
          <span className="card__name">{p.name}</span>
          <span className="card__type">{p.type}</span>
        </Link>
      ))}
    </div>
  );
}

function Thumb({ p }: { p: Project }) {
  return (
    <span className="thumb">
      {p.screenshot ? (
        <Image src={p.screenshot} alt="" fill sizes="(max-width: 720px) 50vw, 240px" style={{ objectFit: "cover" }} />
      ) : (
        <span className="px thumb__name">{p.name}</span>
      )}
    </span>
  );
}

export function ProjectPage({ slug }: { slug: string }) {
  const p = getProject(slug);
  if (!p) return null;
  const next = nextProject(slug);
  return (
    <article>
      <h1 className="px h-xl">{p.name}</h1>
      <p className="lede">{p.summary}</p>

      <dl className="kv">
        <div>
          <dt>Type</dt>
          <dd>{p.type}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{p.role}</dd>
        </div>
        <div>
          <dt>Live link</dt>
          <dd>
            <a href={p.live} {...ext}>
              {hostOf(p.live)}
            </a>
          </dd>
        </div>
      </dl>

      <Media p={p} />

      <h2 className="px h-m">The problem</h2>
      <Paras text={p.problem} />
      <h2 className="px h-m">What I built</h2>
      <Paras text={p.built} />

      <Link href={`/work/${next.slug}`} className="next">
        <span>
          <span className="next__label">Next project</span>
          <span className="px next__name">{next.name}</span>
        </span>
        <span aria-hidden="true">&gt;</span>
      </Link>
    </article>
  );
}

function Media({ p }: { p: Project }) {
  const m = p.media;
  if (m?.kind === "youtube") {
    return (
      <div className={`media${m.vertical ? " media--vertical" : ""}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${m.id}`}
          title={m.title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }
  if (m?.kind === "image") {
    return (
      <div className="media">
        <Image src={m.src} alt={m.alt} fill sizes="(max-width: 720px) 100vw, 700px" style={{ objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <div className="media media--empty">
      <span>[ screenshot coming soon ]</span>
    </div>
  );
}

function Paras({ text }: { text?: string[] }) {
  if (!text?.length) return <p className="body dim">Write-up coming soon.</p>;
  return (
    <>
      {text.map((t, i) => (
        <p key={i} className="body">
          {t}
        </p>
      ))}
    </>
  );
}

// ---------------------------------------------------------------------------
// About me
// ---------------------------------------------------------------------------

export function AboutPage() {
  return (
    <>
      <h1 className="px h-xl">About</h1>
      <p className="lede">{about.intro}</p>
      <div className="split">
        <div className="split__main">
          <p className="big">{about.paragraphs[0]}</p>
          {about.paragraphs.slice(1).map((t, i) => (
            <p key={i} className="body">
              {t}
            </p>
          ))}
        </div>
        <dl className="facts">
          {about.facts.map((f) => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h2 className="px h-l">How a project runs</h2>
      <Steps />

      <h2 className="px h-l">Timeline</h2>
      <ol className="timeline">
        {timeline.map((t) => (
          <li key={t.y}>
            <span className="px timeline__y">{t.y}</span>
            <span>{t.t}</span>
          </li>
        ))}
      </ol>

      <h2 className="px h-l">Clients</h2>
      <ul className="chips">
        {clients.map((c) => (
          <li key={c} className="ghost">
            {c}
          </li>
        ))}
      </ul>

      <h2 className="px h-l">Kind words</h2>
      <Inbox />

      <h2 className="px h-l">Questions</h2>
      <Faq />
    </>
  );
}

function Steps() {
  const [i, setI] = useState(0);
  const st = steps[i];
  const filled = ((i + 1) * 24) / steps.length;
  return (
    <div className="panel">
      <div className="panel__head">
        <span>Setup: your project</span>
        <span className="c2">
          Step {i + 1} of {steps.length}
        </span>
      </div>
      <div className="panel__split">
        <div className="panel__list" role="tablist" aria-label="Project steps">
          {steps.map((s, k) => (
            <button
              key={s.name}
              type="button"
              role="tab"
              aria-selected={k === i}
              className={`row${k === i ? " row--on" : ""}`}
              onClick={() => setI(k)}
            >
              <span className="row__l">
                <span className={`box${k < i ? " box--done" : ""}`} aria-hidden="true" />
                <span className="px">{s.name}</span>
              </span>
              {s.when && <span className="small">{s.when}</span>}
            </button>
          ))}
        </div>
        <div className="panel__detail" role="tabpanel">
          <div className="px h-s">{st.name}</div>
          {st.when && <div className="c2 small">{st.when}</div>}
          <p className="body">{st.body}</p>
          {st.get && (
            <div className="panel__get small">
              <span className="c2">You get</span> <b>{st.get}</b>
            </div>
          )}
        </div>
      </div>
      <div className="panel__foot">
        <div className="blocks" aria-hidden="true">
          {Array.from({ length: 24 }, (_, k) => (
            <span key={k} className={k < filled ? "on" : ""} />
          ))}
        </div>
        <button type="button" className="ghost" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}>
          Back
        </button>
        <button type="button" className="btn" onClick={() => setI(Math.min(steps.length - 1, i + 1))} disabled={i === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

function Inbox() {
  const [open, setOpen] = useState(0);
  return (
    <div className="panel">
      <div className="panel__head">
        <span>Inbox</span>
        <span className="c2">{testimonials.length} messages</span>
      </div>
      {testimonials.map((m, k) => (
        <div key={m.from}>
          <button type="button" className={`row msg${k === open ? " row--on" : ""}`} aria-expanded={k === open} onClick={() => setOpen(k)}>
            <span className="px msg__ini" aria-hidden="true">
              {m.initial}
            </span>
            <span className="msg__meta">
              <b>{m.from}</b> {m.org && <span className="msg__org">{m.org}</span>}
              <br />
              {m.subject}
            </span>
          </button>
          {k === open && <blockquote className="msg__body">&ldquo;{m.body}&rdquo;</blockquote>}
        </div>
      ))}
    </div>
  );
}

function Faq() {
  const [i, setI] = useState(0);
  const f = faqs[i];
  return (
    <div className="panel panel__split">
      <div className="panel__list" role="tablist" aria-label="Questions">
        {faqs.map((q, k) => (
          <button key={q.q} type="button" role="tab" aria-selected={k === i} className={`row row--q${k === i ? " row--on" : ""}`} onClick={() => setI(k)}>
            <span aria-hidden="true">?</span>
            <span>{q.q}</span>
          </button>
        ))}
      </div>
      <div className="panel__detail" role="tabpanel">
        <div className="px h-s">{f.q}</div>
        <p className="body">{f.a}</p>
        <div className="panel__get small">
          Something else?{" "}
          <a href={TELEGRAM.url} {...ext}>
            Message me
          </a>{" "}
          on Telegram.
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export function ServicesPage() {
  return (
    <>
      <h1 className="px h-xl">Services</h1>
      <p className="lede">{servicesIntro}</p>
      {services.map((s) => (
        <section key={s.name} className="service">
          <h2 className="px service__name">{s.name}</h2>
          <div className="service__main">
            <div>{s.desc}</div>
            <div className="service__price">{s.price}</div>
            <a className="btn" href={TELEGRAM.url} {...ext}>
              Book a call
            </a>
          </div>
          <ul className="service__items">
            {s.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

// ---------------------------------------------------------------------------
// Journal
// ---------------------------------------------------------------------------

export function JournalPage({ current }: { current?: string }) {
  if (posts.length === 0) {
    return (
      <div className="empty">
        <p className="px h-s">No posts yet.</p>
        <p className="body dim">Notes on backend work will show up here.</p>
      </div>
    );
  }
  return (
    <ul className="posts">
      {posts.map((p) => (
        <li key={p.slug}>
          <Link href={`/journal/${p.slug}`} className={`post${current === p.slug ? " row--on" : ""}`}>
            <span className="post__date">{formatDate(p.date)}</span>
            <span className="post__main">
              <b>{p.title}</b>
              <span className="post__sum">{p.summary}</span>
            </span>
            <span className="tag">{p.tag}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function PostPage({ slug }: { slug: string }) {
  const p = getPost(slug);
  if (!p) return null;
  return (
    <article>
      <div className="c2 small">
        {formatDate(p.date)} · {p.tag}
      </div>
      <h1 className="px h-l" style={{ marginTop: 6 }}>
        {p.title}
      </h1>
      <p className="lede">{p.summary}</p>
      {p.body.map((t, i) => (
        <p key={i} className="body">
          {t}
        </p>
      ))}
    </article>
  );
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

const TOPICS = ["Custom backend / API", "Real-time systems & bots", "Payments & integrations", "Something else"];

export function ContactPage() {
  const [from, setFrom] = useState("");
  const [mail, setMail] = useState("");
  const [topic, setTopic] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  function send(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${topic || "New project"}${from ? ` from ${from}` : ""}`;
    const body = `${msg}\n\n${from}${mail ? `\n${mail}` : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="contact">
      <form className="contact__form" onSubmit={send}>
        <div className="contact__to">
          <span className="contact__k">To</span>
          <b>arkade</b>
        </div>
        <div className="contact__row">
          <label htmlFor="cf-from" className="contact__k">
            From
          </label>
          <input id="cf-from" className="fld" placeholder="Your name" value={from} onChange={(e) => setFrom(e.target.value)} required />
        </div>
        <div className="contact__row">
          <label htmlFor="cf-mail" className="contact__k">
            Email
          </label>
          <input id="cf-mail" className="fld" type="email" placeholder="you@company.com" value={mail} onChange={(e) => setMail(e.target.value)} required />
        </div>
        <div className="contact__row">
          <label htmlFor="cf-about" className="contact__k">
            About
          </label>
          <select id="cf-about" className="fld" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">Pick one</option>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <label htmlFor="cf-msg" className="contact__k" style={{ marginTop: 6 }}>
          Message
        </label>
        <textarea
          id="cf-msg"
          className="fld"
          rows={7}
          placeholder="What you're building, what you need, and when you need it live."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
        />
        <div className="contact__send">
          <button className="btn" type="submit">
            Send
          </button>
          <span className="small c2" role="status">
            {sent ? "Opening your mail app…" : "Opens your mail app."}
          </span>
        </div>
      </form>
      <aside className="contact__side">
        <div>
          <div className="c2">Write to</div>
          <a href={TELEGRAM.url} {...ext} className="bold">
            {hostOf(TELEGRAM.url)}
          </a>
        </div>
        <div>
          <div className="c2">Based in</div>
          <b>Lagos, Nigeria</b>
        </div>
        <div>
          <div className="c2">Booking</div>
          <b>Open for new backend &amp; systems projects.</b>
        </div>
        <div>
          <div className="c2" style={{ marginBottom: 8 }}>
            Elsewhere
          </div>
          <div className="contact__links">
            {elsewhere.map((l) => (
              <a key={l.name} className="ghost" href={l.url} {...ext}>
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

// ---------------------------------------------------------------------------
// CV
// ---------------------------------------------------------------------------

export function CvPage() {
  const r = resume;
  return (
    <article className="cv">
      <h1 className="px h-xl">{r.name}</h1>
      <p className="cv__contact">
        <a href={`mailto:${r.email}`}>{r.email}</a>
        {r.links.map((l) => (
          <span key={l.name}>
            <span className="dim"> / </span>
            <a href={l.url} {...ext}>
              {l.name}
            </a>
          </span>
        ))}
      </p>
      <a className="btn" href={r.pdf} download>
        Download PDF
      </a>

      <h2 className="px h-m">Summary</h2>
      <p className="body">{r.summary}</p>

      <h2 className="px h-m">Technical skills</h2>
      <dl className="kv">
        {r.skills.map((s) => (
          <div key={s.k}>
            <dt>{s.k}</dt>
            <dd>{s.v}</dd>
          </div>
        ))}
      </dl>

      <h2 className="px h-m">Work experience</h2>
      <ol className="cv__list">
        {r.experience.map((e) => (
          <li key={e.role + e.org} className="cv__job">
            <div className="cv__jobhead">
              <span>
                <b>{e.role}</b> <span className="c2">· {e.org}</span>
              </span>
              <span className="c2 small">{e.when}</span>
            </div>
            <ul className="cv__points">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2 className="px h-m">Open-source contributions</h2>
      {r.openSource.map((o) => (
        <div key={o.title} className="cv__job">
          <b>{o.title}</b>
          <p className="body">
            {o.text}{" "}
            <a href={o.link.url} {...ext}>
              {o.link.label}
            </a>
          </p>
        </div>
      ))}

      <h2 className="px h-m">Hackathon wins</h2>
      <CvEntries items={r.hackathons} />

      <h2 className="px h-m">Education &amp; qualifications</h2>
      <CvEntries items={r.education} />

      <h2 className="px h-m">Speaker roles</h2>
      <CvEntries items={r.speaking.map((s) => ({ name: `${s.name} (${s.when})`, text: s.text }))} />

      <h2 className="px h-m">Projects</h2>
      <ul className="cv__projects">
        {r.projects.map((slug) => {
          const p = getProject(slug);
          if (!p) return null;
          return (
            <li key={slug}>
              <Link href={`/work/${slug}`} className="row">
                <span>
                  <b>{p.name}</b> <span className="c2 small">{p.type}</span>
                </span>
                <span aria-hidden="true">&gt;</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function CvEntries({ items }: { items: { name: string; text: string }[] }) {
  return (
    <ul className="cv__entries">
      {items.map((it) => (
        <li key={it.name}>
          <b>{it.name}</b> <span className="c3">— {it.text}</span>
        </li>
      ))}
    </ul>
  );
}
