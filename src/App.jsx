import { useState } from "react";
import "./App.css";
import {
  advantages,
  courseOptions,
  courseTabs,
  courses,
  rankings,
  stats,
  stories,
} from "./data";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="#top" aria-label="Online Aurelia home">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span className="brand-text">
            <strong>Online Aurelia</strong>
            <span>Aurelia University</span>
          </span>
        </a>
        <div className="header-actions">
          <a className="header-phone" href="tel:+917303000600">
            +91-730 3000 600
          </a>
          <a className="btn btn-primary" href="#apply">
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
          alt=""
        />
      </div>
      <div className="container hero-content">
        <h1 className="hero-brand">Online Aurelia</h1>
        <p className="hero-title">
          NAAC A++ accredited online degrees from Aurelia University
        </p>
        <p className="hero-copy">
          MBA, BBA, MCA, MSc programs and professional certificates — built for
          working learners across India.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#apply">
            Apply Now
          </a>
          <a className="btn btn-ghost" href="#courses">
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats" aria-label="University highlights">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Rankings() {
  return (
    <section className="section rankings" id="rankings">
      <div className="container">
        <div className="section-head">
          <h2>Rankings & accreditations</h2>
          <p>
            A globally recognized university credential — UGC-entitled, AICTE
            approved, and trusted by employers worldwide.
          </p>
        </div>
        <div className="rankings-grid">
          {rankings.map((item) => (
            <article className="rank-item" key={item.title + item.text}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Courses() {
  const [activeTab, setActiveTab] = useState(courseTabs[0]);
  const list = courses[activeTab] ?? [];

  return (
    <section className="section courses" id="courses">
      <div className="container">
        <div className="section-head">
          <h2>Explore our online degree courses</h2>
          <p>
            Choose a master&apos;s, bachelor&apos;s, or professional
            certification designed for flexible, career-focused learning.
          </p>
        </div>

        <div className="course-tabs" role="tablist" aria-label="Course categories">
          {courseTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`course-tab${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="course-grid">
          {list.map((course) => (
            <article className="course-card" key={course.title}>
              <span className="course-tag">{course.tag}</span>
              <h3>{course.title}</h3>
              <div className="course-meta">
                <span>★ {course.rating}</span>
                <span>{course.duration}</span>
                <span>{course.fee}</span>
              </div>
              <p>{course.note}</p>
              <a className="btn btn-dark" href="#apply">
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="section advantages" id="advantages">
      <div className="container">
        <div className="section-head">
          <h2>Online Aurelia advantages</h2>
          <p>
            A 360° learning experience — prestigious degree, industry-ready
            curriculum, scholarships, and easy financing.
          </p>
        </div>
        <div className="adv-grid">
          {advantages.map((item) => (
            <article className="adv-item" key={item.title}>
              <svg
                className="adv-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3l2.4 4.86L20 8.7l-4 3.9.94 5.5L12 15.9 7.06 18.1 8 12.6 4 8.7l5.6-.84L12 3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="section stories" id="stories">
      <div className="container">
        <div className="section-head">
          <h2>Real stories, real impact</h2>
          <p>
            Working professionals who upskilled without putting their careers on
            pause.
          </p>
        </div>
        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story" key={story.name}>
              <blockquote>“{story.quote}”</blockquote>
              <div className="story-meta">
                <img
                  className="story-avatar"
                  src={story.image}
                  alt=""
                  width={48}
                  height={48}
                />
                <div>
                  <strong>{story.name}</strong>
                  <span>{story.program}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section apply" id="apply">
      <div className="container apply-layout">
        <div className="apply-copy">
          <h2>Take the next step toward your academic goals</h2>
          <p>
            Submit your details and our counselling team will guide you through
            scholarships, financing, and the application process.
          </p>
          <ul className="apply-points">
            <li>Attractive scholarships up to 30%</li>
            <li>Easy financing with no-cost EMI options</li>
            <li>100% placement assistance support</li>
            <li>Exclusive Coursera access with select programs</li>
          </ul>
        </div>

        <form className="apply-form" onSubmit={handleSubmit}>
          <label>
            Full name *
            <input name="name" type="text" required placeholder="Your full name" />
          </label>
          <label>
            Email address *
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            Mobile number *
            <input
              name="mobile"
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
            />
          </label>
          <label>
            Course *
            <select name="course" required defaultValue="">
              <option value="" disabled>
                Select course applying for
              </option>
              {courseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="consent">
            <input type="checkbox" name="consent" required />
            <span>
              I authorize Online Aurelia and its associates to contact me via
              email, SMS, WhatsApp, and voice call.
            </span>
          </label>
          <button className="btn btn-primary" type="submit">
            Apply Now
          </button>
          {submitted && (
            <p className="form-success" role="status">
              Thanks! This is a demo form — in a live site you would receive an
              OTP and continue on the application portal.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-brand">
            <strong>Online Aurelia</strong>
            <span>Aurelia University Online Degrees</span>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="#courses">Courses</a>
            <a href="#rankings">Rankings</a>
            <a href="#advantages">Advantages</a>
            <a href="#stories">Stories</a>
            <a href="#apply">Apply</a>
          </nav>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} Online Aurelia. Demo front page inspired
          by Online Manipal / MAHE structure. Not affiliated with Manipal
          Academy of Higher Education.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Rankings />
        <Courses />
        <Advantages />
        <Stories />
        <ApplySection />
      </main>
      <Footer />
    </>
  );
}
