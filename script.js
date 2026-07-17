/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ===== EMAILJS INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Contact form ready - using Node.js backend');
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    
    if (link && scrollY >= top && scrollY < top + height) {
      navItems.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

/* ===== SKILL MODAL ===== */
const skillData = {
  kubernetes: {
    icon: '☸',
    title: 'Kubernetes Orchestration',
    subtitle: 'Container orchestration, application deployment, scaling, networking and cluster management.',
    sections: {
      'Cluster Architecture': ['Control Plane', 'API Server', 'etcd', 'Scheduler', 'Controller Manager', 'Worker Nodes', 'Kubelet', 'Kube Proxy', 'Containerd'],
      'Cluster Setup': ['Minikube', 'Kubeadm', 'AWS EKS'],
      'Kubernetes Objects': ['Pods', 'Namespaces', 'Labels', 'Selectors', 'Deployments', 'StatefulSets', 'DaemonSets', 'Jobs', 'CronJobs'],
      'Networking': ['ClusterIP', 'NodePort', 'LoadBalancer', 'Ingress', 'Nginx Ingress', 'Network Policies'],
      'Storage & Configuration': ['Persistent Volume (PV)', 'Persistent Volume Claim (PVC)', 'StorageClass', 'ConfigMaps', 'Secrets'],
      'Security': ['RBAC', 'Roles', 'ClusterRoles', 'RoleBindings', 'Service Accounts'],
      'Scaling & Monitoring': ['HPA', 'Metrics Server', 'Liveness Probe', 'Readiness Probe', 'Startup Probe'],
      'Kubernetes Tools': ['kubectl', 'Helm', 'Minikube', 'Kubeadm', 'EKS']
    },
    description: 'Deploying, managing and scaling containerized applications using Kubernetes.'
  },
  terraform: {
    icon: '🏗',
    title: 'Infrastructure as Code',
    subtitle: 'Provisioning and managing cloud infrastructure using reusable Terraform configurations.',
    sections: {
      'Core Concepts': ['HCL', 'Providers', 'Resources', 'Variables', 'Local Values', 'Outputs', 'Data Sources'],
      'Terraform Commands': ['terraform init', 'terraform plan', 'terraform apply', 'terraform destroy'],
      'State Management': ['Terraform State', 'Remote Backend', 'S3 Backend', 'DynamoDB State Locking'],
      'Modules & Reusability': ['Terraform Modules', 'Terraform Registry', 'Functions'],
      'Meta-Arguments': ['count', 'for_each', 'depends_on', 'lifecycle'],
      'Provisioners': ['local-exec', 'remote-exec'],
      'AWS Integration': ['EC2 Provisioning', 'VPC Creation', 'Subnets', 'Security Groups', 'S3', 'IAM']
    },
    description: 'Automating cloud infrastructure provisioning using Terraform and Infrastructure as Code principles.'
  },
  ansible: {
    icon: '⚙️',
    title: 'Configuration Management & Automation',
    subtitle: 'Automating server configuration, application setup and infrastructure management.',
    sections: {
      'Core Components': ['Control Node', 'Managed Nodes', 'SSH', 'Static Inventory', 'Dynamic Inventory'],
      'Playbooks & Execution': ['Ad-hoc Commands', 'YAML', 'Playbooks', 'Tasks', 'Handlers'],
      'Modules': ['apt', 'yum', 'copy', 'service', 'lineinfile'],
      'Advanced Features': ['Variables', 'Conditionals', 'Jinja2 Templates', 'Ansible Roles', 'Ansible Vault', 'Ansible Galaxy']
    },
    description: 'Automating Linux server configuration and application deployment using Ansible playbooks.'
  },
  docker: {
    icon: '🐳',
    title: 'Containerization',
    subtitle: 'Building and running portable containerized applications using Docker.',
    sections: {
      'Foundations': ['Containers', 'Virtual Machines vs Containers', 'Docker Engine', 'Docker Daemon', 'Docker CLI'],
      'Docker Images': ['Docker Images', 'Containers', 'Image Layers', 'Dockerfile', 'Multi-stage Builds', 'Image Tagging'],
      'Container Lifecycle': ['Container Lifecycle', 'Docker Volumes', 'Bind Mounts', 'Port Mapping'],
      'Dockerfile Instructions': ['FROM', 'RUN', 'CMD', 'ENTRYPOINT', 'COPY', 'ADD', 'ENV', 'WORKDIR'],
      'Networking & Compose': ['Docker Networks', 'Bridge Network', 'Host Network', 'Overlay Network', 'Docker Compose']
    },
    description: 'Containerizing applications with Docker and managing multi-container environments using Docker Compose.'
  },
  aws: {
    icon: '☁️',
    title: 'AWS Cloud Infrastructure',
    subtitle: 'Designing and managing scalable cloud infrastructure using Amazon Web Services.',
    sections: {
      'Compute': ['EC2', 'AMI', 'User Data', 'Auto Scaling Group', 'Launch Templates', 'AWS Lambda', 'AWS Fargate'],
      'Networking': ['VPC', 'Public Subnet', 'Private Subnet', 'Route Tables', 'Internet Gateway', 'NAT Gateway', 'Security Groups', 'Network ACL', 'VPC Peering'],
      'Load Balancing': ['Application Load Balancer', 'Network Load Balancer'],
      'Storage': ['S3', 'EBS', 'Snapshots'],
      'Database': ['RDS', 'Multi-AZ', 'Read Replicas', 'DynamoDB'],
      'Security': ['IAM', 'IAM Users', 'IAM Roles', 'IAM Policies', 'MFA'],
      'Monitoring': ['CloudWatch', 'CloudTrail'],
      'DNS': ['Route 53', 'Hosted Zones', 'Routing Policies']
    },
    description: 'Building secure, scalable and highly available cloud infrastructure using AWS services.'
  },
  cicd: {
    icon: '🔄',
    title: 'Continuous Integration & Deployment',
    subtitle: 'Automating software build, testing, security scanning and deployment workflows.',
    sections: {
      'GitHub Actions': ['Workflows', 'Jobs', 'Steps', 'Events', 'Triggers', 'Secrets', 'Environment Variables', 'GitHub Hosted Runners', 'Self Hosted Runners'],
      'Jenkins': ['Jenkins Installation', 'Plugins', 'Jenkins Pipeline', 'Jenkinsfile', 'Declarative Pipeline', 'Scripted Pipeline', 'Agent Nodes', 'Multi-branch Pipeline', 'Webhooks'],
      'GitOps': ['ArgoCD', 'Declarative Deployment', 'Git-based Deployment', 'Auto Sync', 'Prune', 'App of Apps'],
      'DevSecOps': ['SonarQube', 'Snyk', 'Trivy', 'Anchore']
    },
    description: 'Creating automated CI/CD pipelines using GitHub Actions, Jenkins and GitOps workflows.'
  },
  git: {
    icon: '🌿',
    title: 'Version Control',
    subtitle: 'Managing source code, branches and collaborative development workflows using Git.',
    sections: {
      'Local Workflow': ['Git Init', 'Git Config', 'Working Directory', 'Staging Area', 'Commits', 'Git Diff'],
      'Branching & Merging': ['Branching', 'Merging', 'Rebasing', 'Merge Conflict Resolution'],
      'Remote Collaboration': ['Git Remote', 'Git Fetch', 'Git Pull', 'Git Push', 'Pull Requests'],
      'Advanced Operations': ['Git Stash', 'Git Revert', 'Git Reset'],
      'Strategies': ['Gitflow', 'Trunk Based Development'],
      'Automation': ['Git Hooks', 'Submodules']
    },
    description: 'Managing source code and collaborative development workflows using Git and modern branching strategies.'
  },

};

const skillCards = document.querySelectorAll('.skill-card');
const skillModal = document.getElementById('skillModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

skillCards.forEach(card => {
  card.addEventListener('click', () => {
    const skillName = card.dataset.skill;
    const skill = skillData[skillName];
    
    if (skill) {
      let html = `
        <div class="modal-header">
          <div class="modal-icon">${skill.icon}</div>
          <div>
            <h2>${skill.title}</h2>
            <p>${skill.subtitle}</p>
          </div>
        </div>
      `;
      
      for (const [sectionName, items] of Object.entries(skill.sections)) {
        html += `
          <div class="modal-section">
            <h3>${sectionName}</h3>
            <div class="modal-items">
              ${items.map(item => `<div class="modal-item">${item}</div>`).join('')}
            </div>
          </div>
        `;
      }
      
      html += `
        <div class="modal-description">
          <p><strong>Portfolio line:</strong><br>${skill.description}</p>
        </div>
      `;
      
      modalBody.innerHTML = html;
      skillModal.classList.add('open');
    }
  });
});

modalClose.addEventListener('click', () => {
  skillModal.classList.remove('open');
});

skillModal.addEventListener('click', (e) => {
  if (e.target === skillModal) {
    skillModal.classList.remove('open');
  }
});

/* ===== PROJECT MODAL ===== */
const projectData = {
  asp: {
    title: 'ASP – A Space For Park 🚗',
    subtitle: 'A Smart Peer-to-Peer Urban Parking Platform',
    description: 'ASP (A Space For Park) is a smart parking platform inspired by the Uber business model. Instead of connecting riders with drivers, ASP connects drivers who need a safe parking space with nearby property owners who have unused parking areas.\n\nDrivers can search for available parking spaces in real time, compare options, and reserve a secure spot before reaching their destination. On the other hand, homeowners, shop owners, and private landowners can list their unused parking spaces and earn additional income whenever someone parks there.\n\nThe platform is designed to reduce the time spent searching for parking, decrease traffic congestion, and make urban parking safer, faster, and more convenient for everyone.',
    features: [
      '🚗 Real-time parking space discovery',
      '📍 Google Maps integration for nearby parking',
      '📅 Advance parking reservation',
      '💳 Secure online payments',
      '🔐 OTP-based parking verification',
      '⭐ Ratings and reviews',
      '👤 Verified parking providers with admin approval',
      '📊 Dashboard for managing bookings and earnings'
    ],
    techStack: ['React.js', 'Node.js & Express.js', 'MongoDB', 'JWT & OTP', 'Google Maps API', 'Razorpay', 'Vercel'],
    impact: 'ASP transforms unused private parking spaces into a shared resource, creating a safer and more efficient parking experience for drivers while providing a new source of income for property owners.',
    link: 'https://park-fbps-alen-nelsons-projects.vercel.app',
    linkText: 'Visit Website'
  }
};

const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.getElementById('projectModal');
const projectModalClose = document.getElementById('projectModalClose');
const projectModalBody = document.getElementById('projectModalBody');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectName = card.dataset.project;
    const project = projectData[projectName];
    
    if (project) {
      let html = `
        <div class="project-modal-header">
          <h2>${project.title}</h2>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>
        <div class="project-modal-description">
          <p>${project.description.replace(/\n/g, '</p><p>')}</p>
        </div>
        <div class="project-modal-section">
          <h3>✨ Key Features</h3>
          <ul class="project-features">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <div class="project-modal-section">
          <h3>🛠 Tech Stack</h3>
          <div class="tech-stack">
            ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
        </div>
        <div class="project-modal-section">
          <h3>💡 Impact</h3>
          <p>${project.impact}</p>
        </div>
        <div class="project-modal-footer">
          <a href="${project.link}" target="_blank" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i> ${project.linkText}
          </a>
        </div>
      `;
      
      projectModalBody.innerHTML = html;
      projectModal.classList.add('open');
    }
  });
});

projectModalClose.addEventListener('click', () => {
  projectModal.classList.remove('open');
});

projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) {
    projectModal.classList.remove('open');
  }
});
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Simple validation
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email');
    return;
  }
  
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  // Show success message
  btn.innerHTML = '✅ Message Prepared!';
  btn.disabled = true;
  
  // Create mailto link with the message
  const mailtoLink = `mailto:alennelson2004@gmail.com?subject=${encodeURIComponent('Portfolio Contact: ' + subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
  
  // Show instructions
  alert(`📧 Your message is ready!\n\nClick OK to open your email client and send:\n\nTo: alennelson2004@gmail.com\nSubject: ${subject}\n\nOr copy and send manually if email doesn't open.`);
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Reset form after a short delay
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
    contactForm.reset();
  }, 1000);
});

/* ===== YEAR IN FOOTER ===== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
