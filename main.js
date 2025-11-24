<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Omar Ahmed Gouda – Embedded Systems Engineer</title>
    <meta name="description" content="Omar Ahmed Gouda - Embedded Systems & Control Engineer, Mechatronics, Robotics, Computer Vision">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="top-icons-nav">
      <button onclick="showSection('about')" title="About"><i class="fa-solid fa-user"></i></button>
      <button onclick="showSection('expertise')" title="Expertise"><i class="fa-solid fa-hammer"></i></button>
      <button onclick="showSection('education')" title="Education"><i class="fa-solid fa-graduation-cap"></i></button>
      <button onclick="showSection('certificates')" title="Certificates"><i class="fa-solid fa-award"></i></button>
      <button onclick="showSection('skills')" title="Skills"><i class="fa-solid fa-code"></i></button>
      <button onclick="showSection('projects')" title="Projects"><i class="fa-solid fa-robot"></i></button>
      <button onclick="showSection('experience')" title="Experience"><i class="fa-solid fa-briefcase"></i></button>
      <button onclick="showSection('languages')" title="Languages"><i class="fa-solid fa-language"></i></button>
      <button onclick="showSection('contact')" title="Contact"><i class="fa-solid fa-envelope"></i></button>
    </nav>

    <!-- Theme Toggle Button -->
    <button id="themeToggle" class="theme-toggle-btn" title="Toggle Theme">
      <i class="fa-solid fa-sun"></i>
    </button>

    <!-- Profile Section -->
    <div class="fibers-section">
      <img src="photo.jfif" alt="Omar Ahmed Gouda" class="fibers-img" id="profileImg" />
      <div class="fibers-def">
        <h2>Omar Ahmed Gouda</h2>
        <p>Embedded & Control Systems Engineer | Mechatronics | Robotics & Computer Vision</p>
      </div>
    </div>

    <!-- Image Modal Popup -->
    <div id="imgModal" class="img-modal">
      <span class="close-modal" id="closeModal">&times;</span>
      <img class="img-modal-content" id="modalImg" src="photo.jfif" alt="Profile Large" />
    </div>

    <main>
      <!-- About Me Section -->
      <section id="about" class="cv-section">
        <div class="about-header">
          <h1><i class="fa-solid fa-user"></i> About Me</h1>
          <div class="cv-buttons">
            <a href="ROAR_CV.pdf" target="_blank" class="cv-btn" title="View My CV">
              <i class="fa-solid fa-file-lines"></i> View CV
            </a>
            <a href="ROAR_CV.pdf" download class="cv-btn" title="Download CV">
              <i class="fa-solid fa-download"></i> Download
            </a>
          </div>
        </div>
        <p>
          Passionate <strong>Mechatronics & Embedded Systems</strong> student with over <strong>2 years</strong> of hands-on experience in robotics, control, and embedded development. Strong background in microcontrollers, PCB design, motor control, and power management, with proven ability to build and integrate autonomous robotic and electric vehicle prototypes.
        </p>
        <p>
          Currently expanding expertise into <strong>Computer Vision</strong> and perception systems for intelligent sensing and decision-making in autonomous robotics. Skilled in team leadership, system integration, and delivering reliable real-time embedded solutions.
        </p>
        
        <!-- Statistics Cards -->
        <div class="stats-container">
          <div class="stat-card">
            <i class="fa-solid fa-graduation-cap"></i>
            <span class="stat-number">3.7</span>
            <span class="stat-label">GPA / 4.0</span>
          </div>
          <div class="stat-card">
            <i class="fa-solid fa-code"></i>
            <span class="stat-number">7+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-card">
            <i class="fa-solid fa-award"></i>
            <span class="stat-number">3+</span>
            <span class="stat-label">Certifications</span>
          </div>
          <div class="stat-card">
            <i class="fa-solid fa-clock"></i>
            <span class="stat-number">2+</span>
            <span class="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      <!-- Expertise Section -->
      <section id="expertise" class="cv-section expertise-section" style="display:none;">
        <h1><i class="fa-solid fa-hammer"></i> My Expertise</h1>
        <div class="about-cards">
          <div class="about-card">
            <i class="fa-solid fa-microchip"></i>
            <span>Embedded Systems Development</span>
          </div>
          <div class="about-card">
            <i class="fa-solid fa-robot"></i>
            <span>Robotics & Control Systems</span>
          </div>
          <div class="about-card">
            <i class="fa-solid fa-eye"></i>
            <span>Computer Vision</span>
          </div>
          <div class="about-card">
            <i class="fa-solid fa-microchip"></i>
            <span>PCB Design & Hardware</span>
          </div>
          <div class="about-card">
            <i class="fa-solid fa-battery-full"></i>
            <span>Power Management</span>
          </div>
          <div class="about-card">
            <i class="fa-solid fa-gears"></i>
            <span>System Integration</span>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="cv-section" style="display:none;">
        <h1><i class="fa-solid fa-graduation-cap"></i> Education</h1>
        <div class="edu-card">
          <h2>B.Sc. in Mechatronics Engineering</h2>
          <h3>Egyptian Chinese University (ECU)</h3>
          <p><i class="fa-solid fa-calendar"></i> September 2023 – August 2028</p>
          <p><i class="fa-solid fa-chart-line"></i> GPA: 3.7 / 4.0 | Junior Student</p>
          <div class="coursework">
            <h4>Relevant Coursework:</h4>
            <div class="coursework-tags">
              <span>Control Systems</span>
              <span>Power Electronics</span>
              <span>Embedded Systems</span>
              <span>Robotics</span>
              <span>Mechatronics Design</span>
              <span>Sensors & Actuators</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Certificates Section -->
      <section id="certificates" class="cv-section" style="display:none;">
        <h1><i class="fa-solid fa-award"></i> Trainings & Certifications</h1>
        <div class="certs-list">
          <div class="cert-card">
            <i class="fa-solid fa-microchip"></i>
            <div class="cert-info">
              <h3>Embedded Systems Training</h3>
              <p>Egyptian Chinese University</p>
              <span class="cert-date"><i class="fa-solid fa-calendar"></i> Completed: July 2025 | Duration: 4 weeks</span>
            </div>
          </div>
          <div class="cert-card">
            <i class="fa-solid fa-certificate"></i>
            <div class="cert-info">
              <h3>Embedded Systems Diploma</h3>
              <p>EDGES Training Institute</p>
              <span class="cert-date"><i class="fa-solid fa-calendar"></i> Completed: September 2025 | Duration: 3.5 months</span>
            </div>
          </div>
          <div class="cert-card">
            <i class="fa-brands fa-linux"></i>
            <div class="cert-info">
              <h3>Linux Administration Course</h3>
              <p>Edges Academy</p>
              <span class="cert-date"><i class="fa-solid fa-calendar"></i> Expected: November 2025 | Duration: 1 month</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Languages Section -->
      <section id="languages" class="cv-section" style="display:none;">
        <h1><i class="fa-solid fa-language"></i> Languages</h1>
        <div class="lang-list">
          <div class="lang-card">
            <i class="fa-solid fa-globe"></i>
            <span class="lang-name">Arabic</span>
            <span class="lang-level">Native</span>
          </div>
          <div class="lang-card">
            <i class="fa-solid fa-globe"></i>
            <span class="lang-name">English</span>
            <span class="lang-level">Proficient</span>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="cv-section" style="display:none;">
        <h1><i class="fa-solid fa-code"></i> Technical Skills</h1>
        
        <div class="skills-category">
          <h3><i class="fa-solid fa-laptop-code"></i> Programming Languages</h3>
          <div class="skills-grid">
            <div class="skill-card"><i class="fa-solid fa-c"></i><span>C</span></div>
            <div class="skill-card"><i class="fa-solid fa-code"></i><span>C++</span></div>
            <div class="skill-card"><i class="fa-solid fa-microchip"></i><span>Embedded C</span></div>
          </div>
        </div>

        <div class="skills-category">
          <h3><i class="fa-solid fa-eye"></i> Computer Vision & Perception</h3>
          <div class="skills-grid">
            <div class="skill-card"><i class="fa-solid fa-camera"></i><span>OpenCV</span></div>
            <div class="skill-card"><i class="fa-solid fa-image"></i><span>Image Processing</span></div>
            <div class="skill-card"><i class="fa-solid fa-wifi"></i><span>ESP32-CAM</span></div>
            <div class="skill-card"><i class="fa-solid fa-robot"></i><span>Object Detection</span></div>
          </div>
        </div>

        <div class="skills-category">
          <h3><i class="fa-solid fa-robot"></i> Control & Robotics</h3>
          <div class="skills-grid">
            <div class="skill-card"><i class="fa-solid fa-gears"></i><span>Motor Control</span></div>
            <div class="skill-card"><i class="fa-solid fa-chart-line"></i><span>MATLAB/Simulink</span></div>
            <div class="skill-card"><i class="fa-solid fa-robot"></i><span>Robotic Arm</span></div>
            <div class="skill-card"><i class="fa-solid fa-sliders"></i><span>Sensors Integration</span></div>
          </div>
        </div>

        <div class="skills-category">
          <h3><i class="fa-solid fa-microchip"></i> Hardware & Embedded</h3>
          <div class="skills-grid">
            <div class="skill-card"><i class="fa-brands fa-arduino"></i><span>AVR (ATmega32)</span></div>
            <div class="skill-card"><i class="fa-solid fa-wifi"></i><span>ESP32</span></div>
            <div class="skill-card"><i class="fa-solid fa-circle-nodes"></i><span>PCB Design</span></div>
            <div class="skill-card"><i class="fa-solid fa-plug"></i><span>Proteus</span></div>
            <div class="skill-card"><i class="fa-solid fa-wrench"></i><span>KiCad</span></div>
            <div class="skill-card"><i class="fa-solid fa-clock"></i><span>RTOS</span></div>
            <div class="skill-card"><i class="fa-solid fa-bolt"></i><span>PWM</span></div>
            <div class="skill-card"><i class="fa-solid fa-signal"></i><span>ADC</span></div>
          </div>
        </div>

        <div class="skills-category">
          <h3><i class="fa-solid fa-network-wired"></i> Communication Protocols</h3>
          <div class="skills-grid">
            <div class="skill-card"><i class="fa-solid fa-car"></i><span>CAN</span></div>
            <div class="skill-card"><i class="fa-solid fa-signal"></i><span>UART</span></div>
            <div class="skill-card"><i class="fa-solid fa-circle-nodes"></i><span>SPI</span></div>
            <div class="skill-card"><i class="fa-solid fa-network-wired"></i><span>I2C</span></div>
            <div class="skill-card"><i class="fa-brands fa-bluetooth"></i><span>Bluetooth</span></div>
            <div class="skill-card"><i class="fa-solid fa-wifi"></i><span>Wi-Fi</span></div>
          </div>
        </div>

        <div class="skills-category">
          <h3><i class="fa-solid fa-battery-full"></i> Power & Energy</h3>
          <div class="skills-grid">
            <div class="skill-card"><i class="fa-solid fa-battery-full"></i><span>Battery Management</span></div>
            <div class="skill-card"><i class="fa-solid fa-plug"></i><span>Voltage Regulators</span></div>
            <div class="skill-card"><i class="fa-solid fa-shield-halved"></i><span>Protection Circuits</span></div>
          </div>
        </div>

        <div class="skills-category">
          <h3><i class="fa-brands fa-linux"></i> Tools & Environment</h3>
          <div class="skills-grid">
            <div class="skill-card"><i class="fa-brands fa-linux"></i><span>Linux CLI</span></div>
            <div class="skill-card"><i class="fa-solid fa-terminal"></i><span>Bash Scripting</span></div>
            <div class="skill-card"><i class="fa-brands fa-git-alt"></i><span>Git/GitHub</span></div>
            <div class="skill-card"><i class="fa-solid fa-hammer"></i><span>Makefile</span></div>
            <div class="skill-card"><i class="fa-solid fa-wrench"></i><span>CMake</span></div>
            <div class="skill-card"><i class="fa-solid fa-bug"></i><span>Logic Analyzer</span></div>
            <div class="skill-card"><i class="fa-solid fa-wave-square"></i><span>Oscilloscope</span></div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="cv-section" style="display:none;">
        <h1><i class="fa-solid fa-robot"></i> Projects Experience</h1>
        <div class="projects-grid">
          
          <div class="project-card">
            <span class="project-status in-progress">In Progress</span>
            <span class="project-icon"><i class="fa-solid fa-robot"></i></span>
            <h2>Autonomous Obstacle-Handling Robot Car</h2>
            <p>Line-following robot with robotic arm for autonomous obstacle handling using ESP32-CAM for real-time color detection and pick-and-place actions.</p>
            <div class="tech-stack">
              <span>ESP32</span>
              <span>ESP32-CAM</span>
              <span>MATLAB/Simulink</span>
              <span>Computer Vision</span>
              <span>Motor Control</span>
            </div>
            <ul class="project-highlights">
              <li>Designed mechanical structure and simulated motion</li>
              <li>Integrated ESP32-CAM for real-time color detection</li>
              <li>Developed pick-and-place automation system</li>
              <li>Led team and managed integration workflow</li>
            </ul>
          </div>

          <div class="project-card">
            <span class="project-status in-progress">In Progress</span>
            <span class="project-icon"><i class="fa-solid fa-car"></i></span>
            <h2>Vehicle Fault Detection & Logging System</h2>
            <p>Dual-ECU system monitoring vehicle subsystems and logging faults in EEPROM using ATmega32 microcontroller.</p>
            <div class="tech-stack">
              <span>ATmega32</span>
              <span>Embedded C</span>
              <span>UART</span>
              <span>I2C</span>
              <span>EEPROM</span>
            </div>
            <ul class="project-highlights">
              <li>Modular driver design (UART, I2C, ADC, Timer, PWM)</li>
              <li>Fault detection using LM35 & ultrasonic sensors</li>
              <li>Inter-ECU communication via UART</li>
              <li>Data logging through I2C EEPROM</li>
            </ul>
          </div>

          <div class="project-card">
            <span class="project-status completed">Completed</span>
            <span class="project-icon"><i class="fa-solid fa-stopwatch"></i></span>
            <h2>Stopwatch with Dual Mode</h2>
            <p>Embedded stopwatch with increment & countdown modes, featuring multiplexed 7-segment displays and real-time control.</p>
            <div class="tech-stack">
              <span>ATmega32</span>
              <span>Embedded C</span>
              <span>Proteus</span>
              <span>Timer/Interrupts</span>
            </div>
            <ul class="project-highlights">
              <li>Timer1 CTC mode @16MHz for accurate timekeeping</li>
              <li>Six multiplexed 7-segment displays</li>
              <li>10 push buttons for full control</li>
              <li>LED indicators and buzzer alarm</li>
            </ul>
          </div>

          <div class="project-card">
            <span class="project-status testing">Hardware Testing</span>
            <span class="project-icon"><i class="fa-solid fa-home"></i></span>
            <h2>Smart Home System</h2>
            <p>Automated home system controlling lights, fan, and door using sensors with password-based access and LCD interface.</p>
            <div class="tech-stack">
              <span>ATmega32</span>
              <span>Sensors</span>
              <span>LCD/Keypad</span>
              <span>Relays</span>
            </div>
            <ul class="project-highlights">
              <li>Layered driver design (MCAL-HAL-APP)</li>
              <li>Temperature, LDR, and flame sensors integration</li>
              <li>Password-based access control</li>
              <li>Currently validating on real hardware</li>
            </ul>
          </div>

          <div class="project-card">
            <span class="project-status completed">Completed</span>
            <span class="project-icon"><i class="fa-solid fa-futbol"></i></span>
            <h2>Striker-Volt: Electric Soccer Car</h2>
            <p>4-wheel electric robotic vehicle controlled via PS4 controller with custom PCB design and power management.</p>
            <div class="tech-stack">
              <span>ESP32</span>
              <span>PCB Design</span>
              <span>Li-ion Battery</span>
              <span>H-Bridge Drivers</span>
              <span>BMS</span>
            </div>
            <ul class="project-highlights">
              <li>Custom PCB for motor control & power distribution</li>
              <li>3S Li-ion battery with BMS & safety circuits</li>
              <li>Real-time control algorithms in Embedded C</li>
              <li>Integrated fuses and capacitors for reliability</li>
            </ul>
          </div>

          <div class="project-card">
            <span class="project-status completed">Completed</span>
            <span class="project-icon"><i class="fa-solid fa-users"></i></span>
            <h2>Student Management System</h2>
            <p>Console-based application for managing student records with GPA calculations using C programming and data structures.</p>
            <div class="tech-stack">
              <span>C Programming</span>
              <span>Data Structures</span>
              <span>Linked Lists</span>
            </div>
            <ul class="project-highlights">
              <li>Dynamic data handling with structs</li>
              <li>CRUD operations (Add, Search, Update, Delete)</li>
              <li>GPA calculation algorithms</li>
              <li>Proper memory management</li>
            </ul>
          </div>

          <div class="project-card">
            <span class="project-status completed">Completed</span>
            <span class="project-icon"><i class="fa-solid fa-dumbbell"></i></span>
            <h2>Health & Fitness Program</h2>
            <p>C++ application for calorie tracking and workout plan generation using OOP principles and advanced algorithms.</p>
            <div class="tech-stack">
              <span>C++</span>
              <span>OOP</span>
              <span>Algorithms</span>
            </div>
            <ul class="project-highlights">
              <li>Calorie & carbohydrate tracking</li>
              <li>7-day and 30-day projections</li>
              <li>Workout plan generation</li>
              <li>Dynamic user customization</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- Experience/Soft Skills Section -->
      <section id="experience" class="cv-section" style="display:none;">
        <h1><i class="fa-solid fa-briefcase"></i> Soft Skills</h1>
        <div class="soft-skills-grid">
          <div class="soft-skill-card">
            <i class="fa-solid fa-users-gear"></i>
            <h3>Leadership</h3>
            <p>Led multi-member teams in designing and implementing embedded and mechatronics projects with clear task delegation</p>
          </div>
          <div class="soft-skill-card">
            <i class="fa-solid fa-clock"></i>
            <h3>Time Management</h3>
            <p>Proven ability to handle multiple tasks simultaneously and meet tight project deadlines</p>
          </div>
          <div class="soft-skill-card">
            <i class="fa-solid fa-handshake"></i>
            <h3>Teamwork & Collaboration</h3>
            <p>Effective collaboration in multidisciplinary teams (electronics, mechanical, software)</p>
          </div>
          <div class="soft-skill-card">
            <i class="fa-solid fa-comments"></i>
            <h3>Communication</h3>
            <p>Strong written and verbal communication skills for technical documentation and presentations</p>
          </div>
          <div class="soft-skill-card">
            <i class="fa-solid fa-lightbulb"></i>
            <h3>Adaptability</h3>
            <p>Quick learner with ability to master new tools, technologies, and development environments</p>
          </div>
          <div class="soft-skill-card">
            <i class="fa-solid fa-brain"></i>
            <h3>Critical Thinking</h3>
            <p>Strong analytical skills for problem-solving and finding optimal engineering solutions</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="cv-section" style="display:none;">
        <h1><i class="fa-solid fa-envelope"></i> Contact Me</h1>
        <div class="contact-list">
          <div class="contact-card">
            <i class="fa-solid fa-envelope"></i>
            <div class="contact-info">
              <span class="contact-label">Email</span>
              <a href="mailto:oma2005r200@gmail.com">oma2005r200@gmail.com</a>
            </div>
          </div>
          <div class="contact-card">
            <i class="fa-solid fa-phone"></i>
            <div class="contact-info">
              <span class="contact-label">Phone</span>
              <a href="tel:+201096009904">+20 109 600 9904</a>
            </div>
          </div>
          <div class="contact-card">
            <i class="fa-solid fa-location-dot"></i>
            <div class="contact-info">
              <span class="contact-label">Location</span>
              <span>Cairo, Egypt</span>
            </div>
          </div>
          <div class="contact-card">
            <i class="fa-brands fa-linkedin"></i>
            <div class="contact-info">
              <span class="contact-label">LinkedIn</span>
              <a href="https://linkedin.com/in/omar-ahmed-2282602b2" target="_blank">omar-ahmed-2282602b2</a>
            </div>
          </div>
          <div class="contact-card">
            <i class="fa-brands fa-github"></i>
            <div class="contact-info">
              <span class="contact-label">GitHub</span>
              <a href="https://github.com/omarAhmed200-b" target="_blank">omarAhmed200-b</a>
            </div>
          </div>
        </div>

        <form class="contact-form" id="contactForm">
          <h3><i class="fa-solid fa-paper-plane"></i> Send me a message</h3>
          <input type="text" name="name" placeholder="Your Name" required>
          <input type="email" name="email" placeholder="Your Email" required>
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit"><i class="fa-solid fa-paper-plane"></i> Send Message</button>
        </form>

        <div class="social-icons">
          <a href="https://linkedin.com/in/omar-ahmed-2282602b2" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/omarAhmed200-b" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="mailto:oma2005r200@gmail.com" title="Email"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </section>
    </main>

    <!-- Back to Top Button -->
    <button id="toTopBtn" title="Back to Top"><i class="fa-solid fa-arrow-up"></i></button>

    <!-- Footer -->
    <footer>
      <div class="social-icons">
        <a href="https://linkedin.com/in/omar-ahmed-2282602b2" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/omarAhmed200-b" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="mailto:oma2005r200@gmail.com" title="Email"><i class="fa-solid fa-envelope"></i></a>
      </div>
      <p>&copy; <span id="year"></span> Omar Ahmed Gouda. All rights reserved.</p>
    </footer>

    <script src="main.js"></script>
    <script>
      document.getElementById('year').textContent = new Date().getFullYear();
    </script>
</body>
</html>
