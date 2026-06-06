import React, { useState } from "react";
import "./Speakers.css"; // Make sure to import the CSS file!

export default function Speakers() {
  const [activeYear, setActiveYear] = useState(2026);

  const speakers2025 = [
    {
      name: "Adv. Heena Khurana Nagpal",
      title: "Founder & Managing Partner - HK Associates",
      img: "/Speakers/Adv.HeenaKhuranaNagpal.jpg",
      desc: "Legal expert and founder of HK Associates, specializing in corporate law and business advisory services."
    },
    {
      name: "Anil Sharma",
      title: "Chief Supply Chain Officer - Genus Power Infrastructure Limited",
      img: "/Speakers/AnilSharma.jpg",
      desc: "Supply chain expert with extensive experience in power infrastructure and strategic operations management."
    },
    {
      name: "Anoushka Atri",
      title: "Student, B.V.Sc. & A.H - College of Veterinary Science, GADVASU",
      img: "/Speakers/AnoushkaAtri.jpg",
      desc: "Passionate veterinary student at GADVASU, dedicated to animal welfare and veterinary medicine advancement."
    },
    {
      name: "Avirat Jain",
      title: "CEO – BizAlchemy",
      img: "/Speakers/AviratJain.jpg",
      desc: "Entrepreneurial leader and CEO of BizAlchemy, driving business transformation and strategic growth."
    },
    {
      name: "Dishha Dhhaka",
      title: "Founder - AskDishaa",
      img: "/Speakers/DIshhaDhhaka.jpg",
      desc: "Innovative founder of AskDishaa, creating solutions for modern business challenges and opportunities."
    },
    {
      name: "Dr. Arvind Dhingra",
      title: "Executive Director – Science & Technology Entrepreneurs Park - GNDEC, Ludhiana",
      img: "/Speakers/Dr.ArvindDhingra.jpg",
      desc: "Leading technology entrepreneurship initiatives and fostering innovation in science and engineering education."
    },
    {
      name: "Dr. Arvind Kumar",
      title: "Director & Consultant Medical Oncologist - Buddha Cancer Centre, Patna",
      img: "/Speakers/Dr.ArvindKumar.jpg",
      desc: "Renowned medical oncologist dedicated to cancer treatment and patient care at Buddha Cancer Centre."
    },
    {
      name: "Dr. Nancy Juneja",
      title: "Dir. Gen. - Lucr8 Ventures",
      img: "/Speakers/Dr.NancyJuneja.jpg",
      desc: ""
    },
    {
      name: "Dr. Reshma Khan",
      title: "Psychotherapist - H3-Holistic Healing Healthcare",
      img: "/Speakers/Dr.ReshmaKhan.jpg",
      desc: "Experienced psychotherapist providing holistic mental health care and therapeutic interventions."
    },
    {
      name: "Geetanjali Sial Khurana",
      title: "CEO - Geetanjali's Success Academy",
      img: "/Speakers/GeetanjaliSialKhurana.jpg",
      desc: "Leadership coach and CEO of Geetanjali's Success Academy, empowering individuals to achieve their potential."
    },
    {
      name: "Poonam Budhiraja",
      title: "HOD Social Science - Manav Rachna International School",
      img: "/Speakers/PoonamBudhiraja.jpg",
      desc: "Head of Social Science Department, shaping young minds through innovative educational approaches."
    },
    {
      name: "Riya",
      title: "Life & Business Coach - Divapreneur by Passion",
      img: "/Speakers/Riya.jpg",
      desc: "Passionate life and business coach helping entrepreneurs and individuals achieve personal and professional success."
    },
    {
      name: "Sanjeev Garg",
      title: "Founder - Evolv Life Coaching",
      img: "/Speakers/SanjeevGarg.jpg",
      desc: "Founder of Evolv Life Coaching, dedicated to personal development and transformational life coaching."
    },
    {
      name: "Sayali Bhagat",
      title: "Co-Founder - Altawon Media House | Former Miss India-Actor",
      img: "/Speakers/SayaliBhagat.jpg",
      desc: "Former Miss India and accomplished actor, now co-founding Altawon Media House to create impactful content."
    },
    {
      name: "Srishti Sharma",
      title: "Student, B.V.Sc. & A.H. - GADVASU",
      img: "/Speakers/SrishtiSharma.jpg",
      desc: "Dedicated veterinary student at GADVASU, passionate about animal health and veterinary science advancement."
    },
    {
      name: "Sunny Nagpal",
      title: "Brain & Business Coach - Align N Thrive Tribe",
      img: "/Speakers/SunnyNagpal.jpg",
      desc: "Expert brain and business coach helping individuals and organizations align their potential and thrive."
    }
  ];

 const speakers2026 = [
  { name: "Aarohi Jain", title: "Student - DL DAV Model School, Delhi", img: "/Speakers2026/15.png", desc: "Student at DL DAV Model School, bringing youthful perspectives and inspiring ideas to the stage." },
  { name: "Aditi Singh", title: "Senior Healthcare Consultant - ICG Medical", img: "/Speakers2026/13.png", desc: "Senior Healthcare Consultant at ICG Medical, bringing expertise and strategic insights to the global healthcare sector." },
  { name: "Ajay Rawat", title: "Creative Director - Genpact", img: "/Speakers2026/4.png", desc: "Creative Director at Genpact, driving creative strategies and innovative design solutions." },
  { name: "Atul Khanna", title: "Founder & Curator - Vivaana Heritage Hotels | Kathika Cultural Centre & Museum", img: "/Speakers2026/8.png", desc: "Founder & Curator dedicated to preserving heritage and promoting art through Vivaana Heritage Hotels and Kathika Cultural Centre." },
  { name: "Avika Jain", title: "Scholar - MENTORx Global School, India", img: "/Speakers2026/21.png", desc: "Scholar at MENTORx Global School, representing the next generation of bright minds and future leaders." },
  { name: "Debalina Chatterjee", title: "Entrepreneur & Mind Training Coach - Semicolon ITES | Silva Method India", img: "/Speakers2026/3.png", desc: "Entrepreneur and Mind Training Coach empowering individuals through the Silva Method and Semicolon ITES." },
  { name: "Dr. Atul Bhhardwaj", title: "Founder & Director - Global Education and Consulting | Astro Numero World", img: "/Speakers2026/14.png", desc: "Founder & Director guiding individuals through education consulting and astrological insights." },
  { name: "Dr. Harleen Kaur", title: "CEO - Healing Urja Institute of Cosmic Sciences, Dehradun", img: "/Speakers2026/10.png", desc: "CEO of Healing Urja Institute, specializing in holistic wellness and cosmic sciences." },
  { name: "Dr. Preeti Chitkara", title: "Professor & Head PR - KIET (Deemed to be University), Delhi-NCR", img: "/Speakers2026/11.png", desc: "Professor and Head of Public Relations at KIET, specializing in strategic communication and academic leadership." },
  { name: "Dr. Shalini Mehta", title: "Director - Sai Kiran Institute of Vedic Sciences Private Limited", img: "/Speakers2026/12.png", desc: "Director at Sai Kiran Institute of Vedic Sciences, dedicated to the study, research, and promotion of Vedic knowledge." },
  { name: "Gayathri Vamsi", title: "Founder & CEO - Parenting Simplified", img: "/Speakers2026/2.png", desc: "Founder & CEO of Parenting Simplified, helping parents navigate child-rearing with effective and practical strategies." },
  { name: "Gurchetan Kaur", title: "Student - B.Tech Animal Biotechnology, GADVASU", img: "/Speakers2026/18.png", desc: "Student of B.Tech Animal Biotechnology at GADVASU, exploring the future of animal sciences and biotechnology." },
  { name: "Gurmukh Singh Bawa", title: "Former General Manager - Airports Authority of India | Chairman - PRSD", img: "/Speakers2026/22.png", desc: "Former General Manager at Airports Authority of India and Chairman of PRSD, bringing extensive experience in aviation and public relations." },
  { name: "Gurnoor Singh Bhangoo", title: "Student - B.Tech Biotechnology, GADVASU", img: "/Speakers2026/19.png", desc: "Biotechnology student at GADVASU, dedicated to learning and innovation in the biotech field." },
  { name: "Gurpreet Singh Kapoor", title: "Founder - BrilliED Career Technologies | Global Career Counsellor (UCLA)", img: "/Speakers2026/7.png", desc: "UCLA certified Global Career Counsellor and Founder of BrilliED, guiding students toward successful career paths." },
  { name: "Kunal Gupta", title: "Founder & CEO - Mount Talent Consulting | Rozgar.com", img: "/Speakers2026/5.png", desc: "Founder & CEO leading innovative talent acquisition and employment solutions at Mount Talent Consulting and Rozgar.com." },
  { name: "Mahira Juneja", title: "Youth Prodigy | Creative Genius | Inspiring Changemaker", img: "/Speakers2026/20.png", desc: "Youth prodigy and creative genius, inspiring change and bringing fresh perspectives to the community." },
  { name: "Maninder Singh Nayyar", title: "Founder & CEO - CEF Group", img: "/Speakers2026/9.png", desc: "Founder & CEO of CEF Group, driving business growth and impactful organizational strategies." },
  { name: "Mudit Kumar", title: "Co-Founder & Chief Operating Officer - Ideabaaz", img: "/Speakers2026/16.png", desc: "Co-Founder & COO of Ideabaaz, driving operational excellence and innovative business solutions." },
  { name: "Renu Bohra", title: "CHRO - SYSTRA India", img: "/Speakers2026/6.png", desc: "Chief Human Resources Officer at SYSTRA India, specializing in organizational development and human capital management." },
  { name: "Shubhaa Aditya", title: "Mindset & Manifestation Coach - Mindful Solution Studio", img: "/Speakers2026/1.png", desc: "Mindset & Manifestation Coach dedicated to helping individuals achieve their goals through mindfulness and positive psychology." },
  { name: "Tarun Kapoor", title: "Teaching Fellow - College of Animal Biotechnology, GADVASU", img: "/Speakers2026/17.png", desc: "Teaching Fellow at the College of Animal Biotechnology, GADVASU, passionate about education and advancing biotechnology research." },
  { name: "Vibha Kapoor", title: "Founder - VIC", img: "/Speakers2026/23.png", desc: "Founder of VIC, sharing entrepreneurial insights and leadership experience." }
];

  const currentSpeakers = activeYear === 2025 ? speakers2025 : speakers2026;

  return (
    <div className="speakers-page">
      <div className="speakers-container">
        
        {/* Header */}
        <div className="speakers-header">
          <div className="speakers-subtitle">
            Meet the Change Makers
          </div>
          <h1 className="speakers-title">
            Our Eminent Speakers
          </h1>
          <div className="speakers-divider" />
        </div>

        {/* Sub Menu */}
        <div className="speakers-tabs">
          {[2025, 2026].map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`tab-btn ${activeYear === year ? "active" : ""}`}
            >
              {year} Speakers
            </button>
          ))}
        </div>
        
        {/* Grid */}
        <div className="speakers-grid">
          {currentSpeakers.map((sp, i) => (
            <div key={`${activeYear}-${i}`} className="speaker-card">
              
              {/* Image Container */}
              <div className="speaker-img-container">
                <div className="speaker-overlay" />
                <img 
                  src={sp.img} 
                  alt={sp.name} 
                  className="speaker-img" 
                  loading="lazy"
                />
              </div>

              {/* Info Container */}
              <div className="speaker-info">
                <div className="speaker-accent"></div>
                <div style={{ marginTop: "0.5rem" }}>
                    <h3 className="speaker-name">
                      {sp.name}
                    </h3>
                    <p className="speaker-title">
                      {sp.title}
                    </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}