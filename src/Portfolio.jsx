// Fichier : src/components/Portfolio.jsx
import React from 'react';
import './Portfolio.css';

// --- NOUVEAU : Importation de votre image de profil ---
// Assurez-vous que le chemin d'accès est correct par rapport à ce fichier.
import profileImage from './assets/face.jpg';

// --- Les données de vos projets (retour à la version avec URL uniquement) ---
const donneesProjets = [
  {
    id: 1,
    titre: 'Merkat Déco',
    description: 'Site e-commerce WordPress élégant spécialisé dans la décoration et l\'ameublement, avec une expérience utilisateur soignée.',
    url: 'https://merkatdeco.com/',
  },
  {
    id: 3,
    titre: 'Hera Labs',
    description: 'Site Ecommerce pour une entreprise specialisé dans la vente des veilleuse luxs imprimé 3D.',
    url: 'https://heralabs.tn/',
  },
  {
    id: 2,
    titre: 'Webdo',
    description: 'Portail d\'actualités tunisien complet, développé sur WordPress, optimisé pour un trafic élevé et une lecture facile.',
    url: 'https://www.webdo.tn/fr/',
  },
  
];

// --- Vos compétences techniques, tirées du CV ---
const competences = {
    "Frontend": ["React", "Angular", "Vue.js"],
    "Backend": ["Node.js", "Spring Boot", "Express"],
    "Bases de Données": ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
    "Mobile": ["Flutter", "React Native"],
    "Fondamentaux & Outils": ["AI/ML", "Python", "WebSockets", "REST API", "LLM", "RAG Pipeline", "CD/CI", "Junit", "Mockito"]
};

function Portfolio() {
  return (
    <div className="portfolio-container">

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
          {/* --- MODIFIÉ : Utilisation de l'image importée --- */}
          <img src={profileImage} alt="Portrait de Boughrara" className="hero-image" />
        </div>
      </section>

     
      
      {/* ============== SECTION GALERIE DE PROJETS ============== */}
      <section className="projects-section">
        <div className="portfolio-header">
          <h1>La Galerie Digitale :Wordpress </h1>
          <p>Un aperçu de mon savoir-faire dans la création de sites WordPress sur-mesure, alliant design et performance.</p>
        </div>

        <div className="projects-grid">
          {donneesProjets.map((projet) => (
            <div key={projet.id} className="project-card">
              <div className="project-preview-wrapper">
                <div className="project-browser-bar">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                {/* --- MODIFIÉ : Retour à l'iframe pour l'aperçu en direct --- */}
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

    </div>
  );
}

export default Portfolio;