// Fichier : src/components/Portfolio.jsx
import React from 'react';
import './Portfolio.css';

// --- Importation de votre image de profil ---
import profileImage from './assets/face.jpg';

// --- Importation des icônes pour les projets ---
import { FaRobot, FaFileInvoice, FaMobileAlt, FaBriefcase, FaBuilding, FaBrain, FaCube } from 'react-icons/fa';


// --- NOUVEAU : Données scindées en deux catégories ---

// 1. Projets d'Intelligence Artificielle
const projetsIA = [
  {
    id: 101,
    titre: "Meeting Intelligence (RAG)",
    description: "Plateforme d'analyse de réunions qui transcrit l'audio en temps réel (OpenAI Whisper) et permet de poser des questions sur le contenu via une IA conversationnelle (RAG).",
    technologies: ["RAG", "OpenAI-Whisper", "LangChain", "LLM"],
    icon: <FaBrain />,
  },
  {
    id: 102,
    titre: "RH Chatbot (LangChain Pipeline)",
    description: "Assistant IA intelligent conçu pour répondre aux questions des employés sur les politiques d'entreprise, les congés et les FAQs, en utilisant un pipeline RAG pour garantir la pertinence.",
    technologies: ["RAG", "LLM", "LangChain", "VectorDB"],
    icon: <FaRobot />,
  },
  {
    id: 103,
    titre: "Extraction de Données de Factures",
    description: "Flux de travail automatisé utilisant un modèle ML (LayoutLMv3) fine-tuné pour extraire avec précision les informations de factures, éliminant la saisie manuelle.",
    technologies: ["Machine Learning", "LayoutLMv3", "Python", "Fine-Tuning"],
    icon: <FaFileInvoice />,
  },
];

// 2. Projets de Développement Logiciel
const projetsDeveloppement = [
  {
    id: 107, // NOUVEAU PROJET AJOUTÉ
    titre: "E-commerce 3D Printing (Next.js)",
    description: "Site e-commerce performant pour une entreprise d'impression 3D, construit avec Next.js pour le rendu côté serveur (SSR) et une expérience utilisateur rapide.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe API"],
    icon: <FaCube />,
  },
  {
    id: 104,
    titre: "Suivi de Patients d'Alzheimer",
    description: "Application mobile (Flutter) permettant aux aidants de suivre la position d'un patient en temps réel et d'accéder à sa caméra, via une communication WebSocket sécurisée.",
    technologies: ["Flutter", "WebSocket", "Mobile", "Real-time"],
    icon: <FaMobileAlt />,
  },
  {
    id: 105,
    titre: "Plateforme d'Emploi Centralisée",
    description: "Solution full-stack (MERN) regroupant les offres d'emploi et de stage. Facilite la recherche pour les candidats et la publication pour les recruteurs.",
    technologies: ["MERN", "React", "Node.js", "MongoDB"],
    icon: <FaBriefcase />,
  },
  {
    id: 106,
    titre: "Plateforme de Recrutement LEONI",
    description: "Développement d'une plateforme de recrutement sur-mesure pour le département marketing, optimisant le processus de candidature et de sélection.",
    technologies: ["Full-Stack", "Junit", "Mockito", "CI/CD"],
    icon: <FaBuilding />,
  },
];


// --- Les données de vos projets WordPress (maintenues) ---
const donneesProjetsWordPress = [
  {
    id: 1,
    titre: 'Merkat Déco',
    description: 'Site e-commerce WordPress spécialisé dans la décoration, avec une expérience utilisateur soignée.',
    url: 'https://merkatdeco.com/',
  },
  {
    id: 2,
    titre: 'Hera Labs',
    description: 'Site e-commerce pour la vente de veilleuses de luxe imprimées en 3D.',
    url: 'https://heralabs.tn/',
  },
  {
    id: 3,
    titre: 'Webdo',
    description: 'Portail d\'actualités tunisien, optimisé pour un trafic élevé et une lecture facile.',
    url: 'https://www.webdo.tn/fr/',
  },
];

// --- Vos compétences techniques, tirées du CV ---
const competences = {
    "Frontend": ["React", "Angular", "Vue.js", "Next.js"],
    "Backend": ["Node.js", "Spring Boot", "Express"],
    "Bases de Données": ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
    "Mobile": ["Flutter", "React Native"],
    "Fondamentaux & Outils": ["IA/ML", "Python", "WebSockets", "REST API", "LLM", "RAG", "CI/CD", "Junit", "Mockito"]
};

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="blob-container">
        <div className="background-blob1"></div>
        <div className="background-blob2"></div>
      </div>
      {/* ============== SECTION HÉROS ============== */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Elyes BOUGHRARA</h1>
          <h2>Software Engineer</h2>
          <p className="hero-subtitle">Spécialisé en IA, Machine Learning & Développement Full-Stack.</p>
          <p className="hero-quote">
            "Le code est comme une blague : si vous devez l'expliquer, ce n'est pas bon."
          </p>
        </div>
        <div className="hero-image-container">
          <img src={profileImage} alt="Portrait de Elyes Boughrara" className="hero-image" />
        </div>
      </section>
      
      {/* ============== NOUVELLE SECTION 1 : PROJETS D'IA ============== */}
      <section className="main-projects-section">
        <div className="portfolio-header">
            <h1>Projets d'Intelligence Artificielle</h1>
            <p>Exploration de solutions innovantes avec le Machine Learning, les LLMs et les pipelines RAG.</p>
        </div>
        <div className="main-projects-grid">
            {projetsIA.map((projet) => (
                <div key={projet.id} className="main-project-card">
                    <div className="project-icon-wrapper">
                        {projet.icon}
                    </div>
                    <h3>{projet.titre}</h3>
                    <p>{projet.description}</p>
                    <div className="project-tech-tags">
                        {projet.technologies.map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* ============== NOUVELLE SECTION 2 : PROJETS DE DÉVELOPPEMENT ============== */}
      <section className="main-projects-section">
        <div className="portfolio-header">
            <h1>Projets de Développement Logiciel</h1>
            <p>Création d'applications web et mobiles robustes, évolutives et centrées sur l'utilisateur.</p>
        </div>
        <div className="main-projects-grid">
            {projetsDeveloppement.map((projet) => (
                <div key={projet.id} className="main-project-card">
                    <div className="project-icon-wrapper">
                        {projet.icon}
                    </div>
                    <h3>{projet.titre}</h3>
                    <p>{projet.description}</p>
                    <div className="project-tech-tags">
                        {projet.technologies.map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>

       {/* ============== SECTION À PROPOS & COMPÉTENCES ============== */}
      <section className="about-skills-section">
        <div className="about-column">
          <h3>À Propos de Moi</h3>
          <p>
            Fraîchement diplômé de l'ENISo, je suis un ingénieur curieux et passionné, toujours prêt à relever de nouveaux défis. Mon parcours m'a permis de développer une expertise solide en architecture de solutions intelligentes, du concept au déploiement. Je combine une base profonde en IA (allant de l'apprentissage automatique aux modèles RAG) avec un développement web et mobile complet, me permettant de concevoir des applications complètes et centrées sur l'utilisateur.
          </p>
        </div>
        <div className="skills-column">
          <h3>Compétences Techniques</h3>
          <div className="skills-grid">
            {Object.entries(competences).map(([categorie, skills]) => (
              <div key={categorie} className="skill-category">
                <h4>{categorie}</h4>
                <div className="tags-container">
                  {skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SECTION GALERIE WORDPRESS (SECONDAIRE) ============== */}
      <section className="projects-section">
        <div className="portfolio-header">
          <h1>Autres Projets : Créations WordPress</h1>
          <p>Un aperçu de mon savoir-faire dans la création de sites WordPress sur-mesure, alliant design et performance.</p>
        </div>
        <div className="projects-grid">
          {donneesProjetsWordPress.map((projet) => (
            <div key={projet.id} className="project-card">
              <div className="project-preview-wrapper">
                <div className="project-browser-bar">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <iframe 
                    src={projet.url} 
                    className="project-iframe"
                    title={`Aperçu de ${projet.titre}`}
                    scrolling="no"
                    sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
              <div className="project-info">
                <h3>{projet.titre}</h3>
                <p>{projet.description}</p>
                <a href={projet.url} target="_blank" rel="noopener noreferrer" className="visit-button">
                  Visiter le site <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Portfolio;