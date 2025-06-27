import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className={`sidebar${sidebarOpen ? "" : " collapsed"}`}>
        <div className="sidebar-header">
          {sidebarOpen && (
            <span className="sidebar-title">UNIVERSITY OF UTAH PA</span>
          )}
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label={sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          >
            {sidebarOpen ? "×" : "☰"}
          </button>
        </div>
        {sidebarOpen && (
          <nav className="sidebar-menu">
            <div className="nav-section">
              <h3>Quick Access</h3>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📚</span> Course Materials
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📅</span> Class Schedule
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Grades & Progress
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">👥</span> Classmates
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📢</span> Announcements
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📅</span> Important Dates
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Program Requirements
              </a>
            </div>

            <div className="nav-section">
              <h3>Academic Resources</h3>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📚</span> Library Access
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">👥</span> Study Groups
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Research Opportunities
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Clinical Rotations
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Exam Prep
              </a>
            </div>

            <div className="nav-section">
              <h3>Student Life</h3>
              <a href="#" className="sidebar-link">
                <span className="link-icon">👥</span> Student Organizations
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📢</span> Events & Activities
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">💪</span> Wellness Programs
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">👥</span> Peer Mentoring
              </a>
            </div>

            <div className="nav-section">
              <h3>Professional Development</h3>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Career Services
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Resume Help
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Interview Prep
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Job Board
              </a>
            </div>

            <div className="nav-section">
              <h3>Support Services</h3>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Academic Advising
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Tutoring
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Financial Aid
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Health Services
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Counseling
              </a>
            </div>

            <div className="nav-section">
              <h3>Tools & Resources</h3>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📱</span> UU PA App
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📄</span> Student Handbook
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Forms & Documents
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> FAQ
              </a>
              <a href="#" className="sidebar-link">
                <span className="link-icon">📊</span> Contact Us
              </a>
            </div>
          </nav>
        )}
      </aside>

      {/* Main Dashboard */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="dashboard-logo">■ DASHBOARD</div>
          <div className="dashboard-search">
            <label>Looking for something specific?</label>
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <button>
                <span role="img" aria-label="search">🔍</span>
              </button>
            </div>
          </div>
          <h1>Welcome to your University of Utah PA dashboard.</h1>
        </header>

        {/* Cards */}
        <section className="dashboard-cards">
          {/* Status Card */}
          <div className="dashboard-card status-card">
            <div className="profile-pic"></div>
            <h2>Student Name</h2>
            <button className="edit-btn">Edit Profile</button>
            <div className="membership">
              <span>PROGRAM STATUS</span>
              <span className="active">Active</span>
            </div>
            <div className="credited-seasons">
              <span>SEMESTERS COMPLETED</span>
              <span className="seasons-count">04</span>
              <div className="season-bars">
                <div className="bar filled"></div>
                <div className="bar filled"></div>
                <div className="bar filled"></div>
                <div className="bar filled"></div>
              </div>
            </div>
            <span className="info-link">Is this information incorrect?</span>
          </div>

          {/* Benefits Card */}
          <div className="dashboard-card benefits-card">
            <span className="card-label">RESOURCES</span>
            <h3>Student Resources</h3>
            <p>
              Explore the resources available to you at <a href="#">uuparesources.com</a>.
            </p>
            <button className="view-btn">View Resources</button>
          </div>

          {/* Complete Profile Card */}
          <div className="dashboard-card profile-card">
            <span className="card-label">PROFILE</span>
            <h3>Complete Your Profile</h3>
            <p>
              These details help us customize the resources and opportunities we show you.
            </p>
            <p className="overhaul-warning">
              This section is undergoing an update – statuses here may not be completely accurate. If you have entered and saved information, please know that it is on file and you do not need to worry about the profile complete status.
            </p>
            <div className="completeness-list">
              <div className="complete-item"><span>✔️</span> Contact Info completed</div>
              <div className="complete-item"><span>✔️</span> Student Profile completed</div>
              <div className="complete-item"><span>✔️</span> Public Profile associated</div>
            </div>
          </div>
        </section>

        {/* Additional Content */}
        <section className="dashboard-extras">
          {/* Recent News */}
          <div className="extra-card news-card">
            <h4>Recent News</h4>
            <ul>
              <li><a href="#">University announces new wellness programs for 2025</a></li>
              <li><a href="#">Upcoming student events on campus</a></li>
              <li><a href="#">Spotlight: Student success stories</a></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="extra-card quicklinks-card">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Update Contact Info</a></li>
              <li><a href="#">Request Student ID</a></li>
              <li><a href="#">Access Health Resources</a></li>
            </ul>
          </div>
          {/* Announcements */}
          <div className="extra-card announcements-card">
            <h4>Announcements</h4>
            <p>
              <strong>June 2025:</strong> The dashboard will undergo scheduled maintenance on June 25th. Expect brief downtime.
            </p>
            <p>
              <strong>Reminder:</strong> Check your university email for the latest updates!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
