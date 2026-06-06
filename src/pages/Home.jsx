import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import "./HomeCarousel.css";
import HeroCounter from '../components/HeroCounter';
import BackgroundParticles from '../components/BackgroundParticles';

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

  { name: "Dr. Sunita Gandhi", title: "Founder - Dignity Education Vision International (DEVI Sansthan)", img: "/Speakers2026/25.png", desc: "Founder of Dignity Education Vision International (DEVI Sansthan), dedicated to transforming education through innovative learning methodologies, literacy initiatives, and impactful social change." },

  { name: "Dr. Suneeta Mukherjee", title: "Retired IAS and ICS Officer", img: "/Speakers2026/26.png", desc: "Retired IAS and ICS Officer with extensive experience in public administration, governance, and policy implementation. Dedicated to leadership, public service, and contributing to social and institutional development through decades of administrative expertise." },

  { name: "Gayathri Vamsi", title: "Founder & CEO - Parenting Simplified", img: "/Speakers2026/2.png", desc: "Founder & CEO of Parenting Simplified, helping parents navigate child-rearing with effective and practical strategies." },

  { name: "Gurchetan Kaur", title: "Student - B.Tech Animal Biotechnology, GADVASU", img: "/Speakers2026/18.png", desc: "Student of B.Tech Animal Biotechnology at GADVASU, exploring the future of animal sciences and biotechnology." },

  { name: "Gurmukh Singh Bawa", title: "Former General Manager - Airports Authority of India | Chairman - PRSD", img: "/Speakers2026/22.png", desc: "Former General Manager at Airports Authority of India and Chairman of PRSD, bringing extensive experience in aviation and public relations." },

  { name: "Gurnoor Singh Bhangoo", title: "Student - B.Tech Biotechnology, GADVASU", img: "/Speakers2026/19.png", desc: "Biotechnology student at GADVASU, dedicated to learning and innovation in the biotech field." },

  { name: "Gurpreet Singh Kapoor", title: "Founder - BrilliED Career Technologies | Global Career Counsellor (UCLA)", img: "/Speakers2026/7.png", desc: "UCLA certified Global Career Counsellor and Founder of BrilliED, guiding students toward successful career paths." },

  { name: "Kunal Gupta", title: "Founder & CEO - Mount Talent Consulting | Rozgar.com", img: "/Speakers2026/5.png", desc: "Founder & CEO leading innovative talent acquisition and employment solutions at Mount Talent Consulting and Rozgar.com." },

  { name: "Mahira Juneja", title: "Youth Prodigy | Creative Genius | Inspiring Changemaker", img: "/Speakers2026/20.png", desc: "Youth prodigy and creative genius, inspiring change and bringing fresh perspectives to the community." },

  { name: "Majid Misger", title: "L&D Professional", img: "/Speakers2026/24.png", desc: "Learning & Development professional focused on talent growth, workforce capability building, and organizational learning. Passionate about empowering individuals and teams through training, leadership development, and continuous improvement initiatives." },

  { name: "Maninder Singh Nayyar", title: "Founder & CEO - CEF Group", img: "/Speakers2026/9.png", desc: "Founder & CEO of CEF Group, driving business growth and impactful organizational strategies." },

  { name: "Mudit Kumar", title: "Co-Founder & Chief Operating Officer - Ideabaaz", img: "/Speakers2026/16.png", desc: "Co-Founder & COO of Ideabaaz, driving operational excellence and innovative business solutions." },

  { name: "Renu Bohra", title: "CHRO - SYSTRA India", img: "/Speakers2026/6.png", desc: "Chief Human Resources Officer at SYSTRA India, specializing in organizational development and human capital management." },

  { name: "Shivani Joshi", title: "Cloud and AI Engineer - Microsoft", img: "/Speakers2026/27.png", desc: "Cloud and AI Engineer at Microsoft, specializing in cloud technologies, artificial intelligence solutions, and digital transformation. Passionate about leveraging emerging technologies to solve complex problems and drive innovation at scale." },

  { name: "Shubhaa Aditya", title: "Mindset & Manifestation Coach - Mindful Solution Studio", img: "/Speakers2026/1.png", desc: "Mindset & Manifestation Coach dedicated to helping individuals achieve their goals through mindfulness and positive psychology." },

  { name: "Tarun Kapoor", title: "Teaching Fellow - College of Animal Biotechnology, GADVASU", img: "/Speakers2026/17.png", desc: "Teaching Fellow at the College of Animal Biotechnology, GADVASU, passionate about education and advancing biotechnology research." },

  { name: "Vibha Kapoor", title: "Founder - VIC", img: "/Speakers2026/23.png", desc: "Founder of VIC, sharing entrepreneurial insights and leadership experience." }
];

export default function Home() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const [fixedHero, setFixedHero] = useState(false);

    // Fade-in animation for hero
    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const obs = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) el.classList.add('fade-in');
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Sticky hero effect: fix hero image while text scrolls, then unfix when out of section
    useEffect(() => {
        const handleScroll = () => {
            const hero = heroRef.current;
            if (!hero) return;
            const rect = hero.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= 0 && rect.bottom > windowHeight + 60) {
                setFixedHero(true);
            } else {
                setFixedHero(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Repeat speakers 5x for longer, seamless carousel
    const repeatedSpeakers = useMemo(() => {
        return Array.from({ length: 5 }, () => speakers2026).flat();
    }, []);

    return (
        <>
            {/* Added custom styles to improve UI and slow down the carousel */}
            <style>{`
                .carousel-track {
                    animation-duration: 60s !important; /* Increase this number to slow it down further */
                }
                .hero-chip {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(230, 43, 30, 0.4);
                    color: #eee;
                    padding: 0.5rem 1.2rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                    letter-spacing: 0.5px;
                }
                .hero-chip:hover {
                    background: rgba(230, 43, 30, 0.15);
                    border-color: #e62b1e;
                    color: #fff;
                    transform: translateY(-2px);
                }
                .floating-card {
                    animation: floatCard 6s ease-in-out infinite;
                }
                @keyframes floatCard {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>

            <div className="page home home-centered modern-home light-theme" style={{ padding: 0, minHeight: 0 }}>
                <div
                    className={`home-hero-bg${fixedHero ? " home-hero-fixed" : ""}`}
                    ref={heroRef}
                    style={{
                        maxHeight: "none",
                        position: fixedHero ? "fixed" : "relative",
                        top: fixedHero ? 0 : undefined,
                        left: fixedHero ? 0 : undefined,
                        width: fixedHero ? "100vw" : undefined,
                        zIndex: fixedHero ? 20 : undefined,
                        transition: "box-shadow 0.3s",
                        boxShadow: fixedHero ? "0 8px 32px #0003" : undefined,
                        overflow: "hidden",
                        background: '#000'
                    }}
                >
                    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
                        <BackgroundParticles />
                        
                        <div style={{
                            position: "absolute",
                            left: 0, top: 0, width: "100%", height: "100%",
                            background: "radial-gradient(circle at 30% 50%, rgba(230,43,30,0.08) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%)",
                            zIndex: 2,
                            pointerEvents: "none"
                        }} />

                        <div className="home-hero-glass" style={{
                            background: "transparent",
                            backdropFilter: "none",
                            zIndex: 3
                        }}>
                            <div
                                className="home-hero-content"
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "4rem",
                                    maxWidth: "1300px",
                                    margin: "0 auto",
                                    padding: "0 2rem"
                                }}
                            >
                                <div className="home-hero-left" style={{ flex: 1.2, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <h1
                                        className="home-hero-title"
                                        style={{ fontSize: "4.5rem", lineHeight: "1.1", marginBottom: "1rem", fontWeight: "900" }}
                                    >
                                        <span style={{ color: "#fff", textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>Conscious<br/></span>
                                        <span style={{ 
                                            background: "linear-gradient(90deg, #ff4b2b, #e62b1e)", 
                                            WebkitBackgroundClip: "text", 
                                            WebkitTextFillColor: "transparent",
                                            textShadow: "0 0 30px rgba(230,43,30,0.3)" 
                                        }}>
                                            Evolution
                                        </span>
                                    </h1>
                                    <div className="home-hero-subtitle" style={{ color: '#e0e0e0', marginBottom: '2rem', fontSize: '1.4rem', fontWeight: '400', opacity: 0.9 }}>
                                        Shaping humane systems through conscious choice
                                    </div>
                                    <div className="chips" style={{ marginBottom: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                      <span className="hero-chip">Youth Event</span>
                                      <span className="hero-chip">University Edition</span>
                                      <span className="hero-chip">Ideas Worth Spreading</span>
                                    </div>
                                    <div className="home-hero-btns" style={{ gap: "1rem", display: "flex", flexWrap: "wrap" }}>
                                        <button className="btn-primary" onClick={() => navigate("/about")} style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                                            About Us
                                        </button>
                                        <button className="btn-primary" onClick={() => navigate('/speakers')} style={{ background: "transparent", border: "2px solid #e62b1e", padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                                            Explore Speakers
                                        </button>
                                    </div>
                                </div>
                                
                                <div
                                    className="white-card floating-card"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.98)",
                                        borderRadius: "24px",
                                        boxShadow: "0 20px 50px -10px rgba(230,43,30,0.2), 0 0 0 1px rgba(230,43,30,0.1)",
                                        padding: "3rem 2rem",
                                        maxWidth: 420,
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "1rem 0",
                                        backdropFilter: "blur(10px)"
                                    }}
                                >
                                    <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "#e62b1e", marginBottom: "0.5rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                        TEDxGADVASU Youth
                                    </div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#111", marginBottom: "1.5rem", textAlign: "center", fontFamily: "'Montserrat', 'Arial', sans-serif" }}>
                                        Conscious Evolution
                                    </div>
                                    <div style={{ width: "50px", height: "4px", background: "#e62b1e", borderRadius: "2px", marginBottom: "1.5rem" }} />
                                    <div style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem", textAlign: "center", lineHeight: "1.6" }}>
                                        <span style={{ fontWeight: 700, color: "#111" }}>Date:</span>  7 June 2026<br />
                                        <span style={{ fontWeight: 700, color: "#111" }}>Theme:</span> Conscious Evolution
                                    </div>
                                    <div style={{ fontSize: "1.05rem", color: "#666", marginBottom: "2rem", textAlign: "center", lineHeight: "1.5" }}>
                                        Join us for a day of visionary talks, bold ideas, and shared purpose—shaping the future we choose to live in.
                                    </div>
                                    <a
                                        href="#"
                                        style={{
                                            display: "inline-block",
                                            background: "#e62b1e",
                                            color: "#fff",
                                            borderRadius: "8px",
                                            padding: "1rem 2.5rem",
                                            fontWeight: 700,
                                            fontSize: "1.15rem",
                                            textDecoration: "none",
                                            letterSpacing: "0.5px",
                                            boxShadow: "0 4px 15px rgba(230,43,30,0.3)",
                                            transition: "all 0.3s ease",
                                            cursor: "pointer",
                                            width: "100%",
                                            textAlign: "center"
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.transform = "translateY(-3px)";
                                            e.currentTarget.style.boxShadow = "0 8px 25px rgba(230,43,30,0.4)";
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.transform = "none";
                                            e.currentTarget.style.boxShadow = "0 4px 15px rgba(230,43,30,0.3)";
                                        }}
                                        onClick={e => { e.preventDefault(); navigate("/nomination"); }}
                                    >
                                        Nominate Yourself
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {fixedHero && (
                    <div style={{ height: "92vh", width: "100%" }} />
                )}

                <div className="cta-banner">
                  <div className="cta-banner-inner">
                    <div className="cta-text">Be part of the conversation shaping tomorrow.</div>
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <button className="btn-primary" onClick={() => navigate('/nomination')}>Nominate a Speaker</button>                    
                    </div>
                  </div>
                </div>

                <div
                    style={{
                        width: "100%",
                        background: "#faf9f7",
                        padding: "0 0 3.5rem 0",
                        margin: 0
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1200,
                            margin: "0 auto",
                            padding: "0",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <h1 style={{
                            fontWeight: 700,
                            fontSize: "2.5rem",
                            color: "#181818",
                            margin: "3.5rem 0 0.5rem 0",
                            letterSpacing: "0.5px",
                            textAlign: "center"
                        }}>
                            What is TED?
                        </h1>
                        <div style={{
                            fontSize: "1.25rem",
                            color: "#888",
                            fontWeight: 400,
                            marginBottom: "2.8rem",
                            textAlign: "center",
                            fontFamily: "Montserrat, Arial, sans-serif"
                        }}>
                            An introduction.
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "2.5rem",
                                width: "100%",
                                maxWidth: 1100,
                                margin: "0 auto",
                                flexWrap: "wrap"
                            }}
                        >
                            <div style={{
                                flex: 1,
                                minWidth: 260,
                                maxWidth: 370,
                                textAlign: "center"
                            }}>
                                <div style={{
                                    fontWeight: 600,
                                    fontSize: "1.25rem",
                                    color: "#181818",
                                    marginBottom: "0.7rem"
                                }}>
                                    An Idea
                                </div>
                                <div style={{ fontSize: "1.7rem", marginBottom: "0.7rem", color: "#e62b1e" }}>🔔</div>
                                <div style={{
                                    fontSize: "1.08rem",
                                    color: "#222",
                                    lineHeight: 1.7,
                                    fontWeight: 400
                                }}>
                                    TED is a non-profit organization devoted to Ideas Worth Spreading. It started out in 1984 as a conference bringing together people from three worlds: Technology, Entertainment and Design.
                                </div>
                            </div>
                            <div style={{
                                flex: 1,
                                minWidth: 260,
                                maxWidth: 370,
                                textAlign: "center"
                            }}>
                                <div style={{
                                    fontWeight: 600,
                                    fontSize: "1.25rem",
                                    color: "#181818",
                                    marginBottom: "0.7rem"
                                }}>
                                    Success
                                </div>
                                <div style={{ fontSize: "1.7rem", marginBottom: "0.7rem", color: "#e62b1e" }}>👍</div>
                                <div style={{
                                    fontSize: "1.08rem",
                                    color: "#222",
                                    lineHeight: 1.7,
                                    fontWeight: 400
                                }}>
                                    Since then its scope has become ever broader. Along with two annual conferences - the TED Conference in Long Beach and Palm Springs each spring, and the TED Global Conference in Edinburgh UK each summer.
                                </div>
                            </div>
                            <div style={{
                                flex: 1,
                                minWidth: 260,
                                maxWidth: 370,
                                textAlign: "center"
                            }}>
                                <div style={{
                                    fontWeight: 600,
                                    fontSize: "1.25rem",
                                    color: "#181818",
                                    marginBottom: "0.7rem"
                                }}>
                                    An Award winner
                                </div>
                                <div style={{ fontSize: "1.7rem", marginBottom: "0.7rem", color: "#e62b1e" }}>★</div>
                                <div style={{
                                    fontSize: "1.08rem",
                                    color: "#222",
                                    lineHeight: 1.7,
                                    fontWeight: 400
                                }}>
                                    TED includes the award-winning TED Talks video site, the Open Translation Project and TED Conversations, the inspiring TED Fellows and TEDx programs, and the annual TED Prize.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        width: "100%",
                        background: "#ee4436",
                        padding: "0 0 3.5rem 0",
                        margin: 0
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1200,
                            margin: "0 auto",
                            padding: "0",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <h1 style={{
                            fontWeight: 700,
                            fontSize: "2.5rem",
                            color: "#fff",
                            margin: "3.5rem 0 0.5rem 0",
                            letterSpacing: "0.5px",
                            textAlign: "center"
                        }}>
                            TEDx
                        </h1>
                        <div style={{
                            fontSize: "1.25rem",
                            color: "#fff",
                            fontWeight: 400,
                            marginBottom: "2.8rem",
                            textAlign: "center",
                            fontFamily: "Montserrat, Arial, sans-serif",
                            fontStyle: "italic"
                        }}>
                            An expansion of the basic idea.
                        </div>
                        <div style={{
                            fontSize: "1.15rem",
                            color: "#fff",
                            fontWeight: 400,
                            maxWidth: 900,
                            margin: "0 auto",
                            textAlign: "center",
                            lineHeight: 1.7
                        }}>
                            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        width: "100%",
                        background: "#222",
                        padding: "0 0 3.5rem 0",
                        margin: 0
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1200,
                            margin: "0 auto",
                            padding: "0",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <h1 style={{
                            fontWeight: 700,
                            fontSize: "2.5rem",
                            color: "#fff",
                            margin: "3.5rem 0 0.5rem 0",
                            letterSpacing: "0.5px",
                            textAlign: "center"
                        }}>
                            TEDxGADVASU
                        </h1>
                        <div style={{
                            fontSize: "1.25rem",
                            color: "#fff",
                            fontWeight: 400,
                            marginBottom: "2.8rem",
                            textAlign: "center",
                            fontFamily: "Montserrat, Arial, sans-serif",
                            fontStyle: "italic"
                        }}>
                            About the institution
                        </div>
                        <div style={{
                            fontSize: "1.15rem",
                            color: "#fff",
                            fontWeight: 400,
                            maxWidth: 900,
                            margin: "0 auto",
                            textAlign: "center",
                            lineHeight: 1.7
                        }}>
                            Visionary, perpetually striving for excellence, that's how Guru Angad Dev Veterinary and Animal Sciences University (GADVASU) can be defined. A leader among its peers, it's among the finest institutions in the field of veterinary and animal sciences.
                        </div>
                        <div style={{
                            fontSize: "1.25rem",
                            color: "#fff",
                            fontWeight: 400,
                            margin: "3.5rem 0 1.2rem 0",
                            textAlign: "center",
                            fontFamily: "Montserrat, Arial, sans-serif",
                            fontStyle: "italic"
                        }}>
                            "Conscious Evolution", our theme
                        </div>
                        <div style={{
                            fontSize: "1.15rem",
                            color: "#fff",
                            fontWeight: 400,
                            maxWidth: 900,
                            margin: "0 auto",
                            textAlign: "center",
                            lineHeight: 1.7
                        }}>
                            Conscious Evolution is the idea that humanity has reached a stage where we can influence the course of our own development—not just biologically, but socially, emotionally, intellectually, and spiritually. Unlike natural evolution, which unfolds over millennia through external forces, conscious evolution is intentional. It’s about awakening to the fact that we are not just shaped by the world—we are shaping it, every day, through our choices, values, and visions.<br /><br />
                            This theme urges us to examine how awareness and intention can guide progress in meaningful directions. It asks: What happens when we stop living on autopilot and begin living with purpose? How can we evolve our systems, our relationships, and our inner selves in ways that are compassionate, sustainable, and just?<br /><br />
                            In today’s interconnected world, we face complex challenges—from climate change and mental health crises to technological disruption and social divides. Conscious Evolution challenges us not only to adapt but to transform—to reimagine what it means to thrive as individuals, communities, and as a global society. It is about aligning growth with wisdom, and innovation with ethics.<br /><br />
                            Ultimately, this theme is a reminder that evolution is no longer something that merely happens to us—it is something we can consciously direct. It is an invitation to reflect, to reawaken, and to rise.
                        </div>
                    </div>
                </div>

                <div
                    className="slim-animated-divider"
                    style={{
                        width: "100%",
                        maxWidth: "900px",
                        margin: "2.5rem auto 0 auto"
                    }}
                />
                <div
                    style={{
                        background: "linear-gradient(90deg, #fff 0%, #f9f9f9 100%)",
                        boxShadow: "0 4px 24px #e62b1e22",
                        borderRadius: "18px",
                        margin: "2.5rem auto 2.5rem auto",
                        padding: "2.5rem 1.5rem 2.5rem 1.5rem",
                        maxWidth: "92vw",
                        width: "calc(100% - 4vw)",
                        position: "relative"
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "-1.6rem",
                            left: "2.5rem",
                            background: "#e62b1e",
                            color: "#fff",
                            padding: "0.4rem 1.2rem",
                            borderRadius: "1rem",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            boxShadow: "0 2px 8px #e62b1e33",
                            letterSpacing: "1px"
                        }}
                    >
                        Our Speakers
                    </div>
                        <div className="carousel-container" style={{ background: "transparent", margin: 0 }}>
                            <div className="carousel-track">
                            {repeatedSpeakers.map((sp, i) => (
                                <div
                                    className="carousel-card"
                                        key={`spk-${i}`}
                                    tabIndex={0}
                                    onClick={() => navigate("/speakers")}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={sp.img} alt={sp.name} style={sp.objectPosition ? { objectPosition: sp.objectPosition } : undefined} />
                                    <div className="carousel-overlay">
                                        <span>{sp.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}