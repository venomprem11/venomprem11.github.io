// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animate skill level bars on scroll
const levelBars = document.querySelectorAll('.level-fill');

const animateSkills = () => {
    levelBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('level-fill')) {
                animateSkills();
            }
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

levelBars.forEach(bar => observer.observe(bar));

// Project Details Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const projectButtons = document.querySelectorAll('.project-details-btn');

const projectDetails = {
    1: {
        title: "E-commerce DevOps Platform",
        description: "A complete DevOps implementation for a scalable e-commerce platform serving 10k+ daily users.",
        features: [
            "Multi-stage CI/CD pipeline with automated testing",
            "Kubernetes cluster with auto-scaling and service mesh",
            "Infrastructure as Code using Terraform",
            "Monitoring with Prometheus and Grafana",
            "Security scanning integrated in pipeline"
        ],
        technologies: ["Kubernetes", "Terraform", "AWS", "Jenkins", "Prometheus", "Grafana", "Istio"],
        github: "https://github.com/devopsalex/ecommerce-platform",
        demo: "https://demo.devopsportfolio.com"
    },
    2: {
        title: "Multi-Cloud Kubernetes Cluster",
        description: "Hybrid cloud Kubernetes deployment across multiple cloud providers with centralized management.",
        features: [
            "Kubernetes clusters on AWS, Azure, and GCP",
            "GitOps workflow with ArgoCD",
            "Cross-cloud networking with VPN",
            "Centralized logging and monitoring",
            "Disaster recovery across regions"
        ],
        technologies: ["Multi-Cloud", "ArgoCD", "Helm", "Prometheus", "Calico", "ExternalDNS"],
        github: "https://github.com/devopsalex/multi-cloud-k8s",
        demo: "https://multicloud.devopsportfolio.com"
    },
    3: {
        title: "DevSecOps Pipeline",
        description: "Security-first CI/CD pipeline with automated security scanning and compliance checks.",
        features: [
            "SAST/DAST security scanning",
            "Secret management with HashiCorp Vault",
            "Container vulnerability scanning",
            "Policy as Code with Open Policy Agent",
            "Compliance reporting and auditing"
        ],
        technologies: ["Vault", "SonarQube", "Trivy", "OPA", "Jenkins", "Anchore"],
        github: "https://github.com/devopsalex/devsecops-pipeline",
        demo: "https://security.devopsportfolio.com"
    },
    4: {
        title: "Observability Stack",
        description: "Complete monitoring, logging, and tracing solution for microservices architecture.",
        features: [
            "Metrics collection with Prometheus",
            "Dashboard visualization with Grafana",
            "Distributed tracing with Jaeger",
            "Centralized logging with Loki",
            "Alerting and notification system"
        ],
        technologies: ["Prometheus", "Grafana", "Loki", "Jaeger", "AlertManager", "Node Exporter"],
        github: "https://github.com/devopsalex/observability-stack",
        demo: "https://monitoring.devopsportfolio.com"
    }
};

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projectDetails[projectId];
        
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p class="modal-description">${project.description}</p>
            
            <h3>Key Features</h3>
            <ul class="modal-features">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <h3>Technologies Used</h3>
            <div class="modal-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <div class="modal-links">
                <a href="${project.github}" class="btn-primary" target="_blank">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
                <a href="${project.demo}" class="btn-secondary" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        `;
        
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Terminal Animation
const terminalCursor = document.querySelector('.cursor');
let cursorVisible = true;

setInterval(() => {
    cursorVisible = !cursorVisible;
    terminalCursor.style.opacity = cursorVisible ? 1 : 0;
}, 500);

// Add some dynamic typing effect to terminal
const terminalLines = [
    "$ kubectl get nodes",
    "NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;ROLES&nbsp;&nbsp;AGE&nbsp;&nbsp;VERSION",
    "node-1&nbsp;&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;master&nbsp;&nbsp;45d&nbsp;&nbsp;v1.27.3",
    "node-2&nbsp;&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;worker&nbsp;&nbsp;45d&nbsp;&nbsp;v1.27.3",
    "node-3&nbsp;&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;worker&nbsp;&nbsp;45d&nbsp;&nbsp;v1.27.3"
];

let currentLine = 0;
const terminalBody = document.querySelector('.terminal-body');

function typeTerminalLine() {
    if (currentLine < terminalLines.length) {
        const line = document.createElement('p');
        terminalBody.insertBefore(line, terminalBody.lastElementChild);
        
        let i = 0;
        const text = terminalLines[currentLine];
        
        function typeChar() {
            if (i < text.length) {
                line.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeChar, 50);
            } else {
                currentLine++;
                setTimeout(typeTerminalLine, 1000);
            }
        }
        
        typeChar();
    }
}

// Start typing after page load
setTimeout(typeTerminalLine, 2000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});