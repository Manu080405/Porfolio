import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [openApp, setOpenApp] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const hr = hours % 12 || 12;
    const min = minutes < 10 ? `0${minutes}` : minutes;
    return `${hr}:${min} ${ampm}`;
  };

  const gridApps = [
    { id: "skills", title: "Skills", img: "/icons/settings.png" },
    { id: "projects", title: "Projects", img: "/icons/folder.png" },
  ];

  const dockApps = [
    { id: "about", title: "About Me", img: "/icons/safari.png" },
    { id: "contact", title: "Contact", img: "/icons/phone-call.png" },
    { id: "experience", title: "Experience", img: "/icons/suitcase.png" },
    { id: "resume", title: "Resume", img: "/icons/resume.png" },
  ];

  const renderAppContent = () => {
    switch (openApp) {
      case "about":
        return (
          <div className="p-4 app-content">
            <h2 className="title">✨ About Me ✨</h2>
            <p>Hi, I'm Manu Rejimon</p>
            <p>👨‍🎓 I’m a Third-year Computer Science (Data Science) engineering student, passionate about 💡 using technology to solve complex challenges.</p>
            <p>📊 Exploring <b>Data Science</b> 📈 & <b>Ethical Hacking</b> 🛡️ — diving into emerging technologies 🚀 to create innovative solutions.</p>
            <p>📚 Committed to continuous learning 📖, eager to expand expertise and contribute to impactful projects 🌍.</p>
            <p>🤝 Open to connecting with professionals 👩‍💼👨‍💼 and collaborating on initiatives pushing the boundaries of technology ⚡.</p>
          </div>
        );

        case "skills":
  return (
    <div className="p-4 app-content">
      <h2 className="title"><img src="/icons/settings.png" className="inline-icon" /> Skills</h2>
      <div className="skills-list">
        <p>💻 <b>Python </b></p>
        <p>💻 <b>C ⚡</b></p>
        <p>💻 <b>MERN Stack 🌐</b></p>
        <p>💻 <b>HTML/CSS 🎨</b></p>
        <p>💻 <b>JavaScript ⚡</b></p>
        <p>💻 <b>UX Design 🖌️</b></p>
        <p>💻 <b>Ethical Hacking 🛡️</b></p>
        <p>🧠 <b>Problem-solving 🧐</b></p>
        <p>🧠 <b>Communication 🗣️</b></p>
        <p>🧠 <b>Teamwork 🤝</b></p>
        <p>🧠 <b>Adaptability 🔄</b></p>
        <p>🧠 <b>Time Management ⏱️</b></p>
        <p>🧠 <b>Creativity 🎨</b></p>
      </div>
    </div>
  );


      case "experience":
        return (
          <div className="p-4 app-content">
            <h2 className="title"><img src="/icons/suitcase.png" className="inline-icon" /> Experience</h2>
            <p>🏢 <b>ICT Academy</b> – MERN STACK Internship <br />📍 Koratty, Kerala (June 2024 – July 2024)</p>
            <ul className="list-disc list-inside">
              <li>Designed & developed a full-stack e-commerce website using MERN stack 🌐.</li>
              <li>Built user page for shopping + admin panel for inventory management 📦.</li>
              <li>Integrated JWT authentication 🔐, securing access for 50+ simulated users.</li>
            </ul>
          </div>
        );

      case "projects":
        return (
          <div className="p-4 app-content">
            <h2 className="title"><img src="/icons/folder.png" className="inline-icon" /> Projects</h2>
            <ul className="project-list">
              <li>
                🩺 <b>Student Health Management System</b> – MERN app for student BMI/health tracking. <br />
                <br/>
                <img src="/icons/github.png" className="inline-icon" /> <a href="https://github.com/Manu080405/Student-Health-Management-System" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <br/>
              </li>
              <li>
                📊 <b>Stock Analysis Tool</b> – Python app using yfinance. <br />
                <br/>
                <img src="/icons/github.png" className="inline-icon" /> <a href="https://github.com/Manu080405/Stock-Analysis" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <br/>
              </li>
              <li>
                🛒 <b>E-commerce Website</b> – Full-stack MERN CRUD e-commerce. <br />
                <br/>
                <img src="/icons/github.png" className="inline-icon" /> <a href="https://github.com/Manu080405/ECom-Project" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </li>
            </ul>
          </div>
        );

        case "resume":
  return (
    <div className="p-4 app-content">
      <h2 className="title"><img src="/icons/resume.png" className="inline-icon" /> Resume</h2>
      {/* PDF preview */}
      <div className="resume-preview">
        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          width="100%"
          height="300px"
        ></iframe>
      </div>
      <a href="/resume.pdf" download className="download-btn">📥 Download Resume</a>
    </div>
  );


      case "contact":
        return (
          <div className="p-4 app-content">
            <h2 className="title"><img src="/icons/phone-call.png" className="inline-icon" /> Contact</h2>
            <p><img src="/icons/gmail.png" className="inline-icon" /> Email: <a href="rmpnmanu12@gmail.com.com">rmpnmanu12@gmail.com</a></p>
            <p><img src="/icons/github.png" className="inline-icon" /> GitHub: <a href="https://github.com/Manu080405" target="_blank" rel="noopener noreferrer">Github</a></p>
            <p><img src="/icons/linkedin.png" className="inline-icon" /> LinkedIn: <a href="https://linkedin.com/in/manurejimon" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-bg">
      <div className="iphone-frame">
        {/* Status Bar */}
        <span className="time">{formatTime(currentTime)}</span>
        <div className="status-bar">
          <div className="status-icons">
            <img src="/icons/signal-status.png" alt="WiFi" className="status-icon" />
            <img src="/icons/wireless.png" alt="WiFi" className="status-icon" />
            <img src="/icons/power.png" alt="Battery" className="status-icon" />

          </div>
        </div>    

        <div className="iphone-screen">
          <br/>
          <br/>
          <br/>
          {openApp ? (
            <div className="absolute inset-0 overflow-y-auto">
              <button onClick={() => setOpenApp(null)}>⬅ Back</button>
              {renderAppContent()}
            </div>
          ) : (
            <>
              {/* App grid */}
              <div className="apps-grid">
                {gridApps.map((app) => (
                  <div key={app.id} className="app-icon" onClick={() => setOpenApp(app.id)}>
                    <img src={app.img} alt={app.title} className="icon-img" />
                    <p>{app.title}</p>
                  </div>
                ))}
              </div>

              {/* Dock */}
             {/* Dock */}
            <div className="dock">
            {dockApps.map((app) => (
            <div key={app.id} className="dock-item" onClick={() => setOpenApp(app.id)}>
              <img src={app.img} alt={app.title} className="dock-icon" />
              <p className="dock-label">{app.title}</p>
            </div>
            ))}
          </div>

            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
