export default function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      
      <div className="about-content">
        <h2>Background</h2>
        <p>
          I am a dedicated Software & Embedded Systems Engineer with a passion for 
          creating innovative solutions that make a difference. My journey in technology 
          began with a curiosity about how things work, which evolved into a career 
          focused on bridging the gap between hardware and software.
        </p>
        
        <h2>Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Embedded Systems</h3>
            <p>Microcontrollers, RTOS, ZephyrDevice Drivers, Hardware Integration</p>
          </div>
          <div className="skill-card">
            <h3>IoT Development</h3>
            <p>Sensor Networks, Cloud Integration, MQTT, REST APIs</p>
          </div>
          <div className="skill-card">
            <h3>Software Engineering</h3>
            <p>C/C++, Python, JavaScript, Full-Stack Development</p>
          </div>
        </div>
        
        <h2>Philosophy</h2>
        <p>
          I believe in creating solutions that are not only technically sound but also 
          practical and user-friendly. Every project I work on is an opportunity to 
          learn, innovate, and contribute to the advancement of technology in meaningful ways.
        </p>
        
        <h2>Interests</h2>
        <p>
          When I'm not coding or designing systems, you can find me exploring new 
          technologies, contributing to open-source projects, or sharing knowledge 
          with the developer community. I'm always excited to take on new challenges 
          and collaborate on interesting projects.
        </p>
      </div>
    </div>
  )
} 