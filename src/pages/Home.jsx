import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import "./HomeCarousel.css";
import HeroCounter from '../components/HeroCounter';
import BackgroundParticles from '../components/BackgroundParticles';
import speakers from '../data/speakers';

export default function Home() {
	const navigate = useNavigate();
	const heroRef = useRef(null);
	const carouselTrackRef = useRef(null);
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
			// When hero top is at 0 and bottom is below viewport, fix the hero
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
		return Array.from({ length: 5 }, () => speakers).flat();
	}, []);

	const handleTellMeMore = () => {
		const section = document.getElementById("theme-section");
		if (section) section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
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
						{/* Use BackgroundParticles instead of hero image */}
						<BackgroundParticles />
						{/* Remove hero images and overlay logo */}
						{/* Light overlay for readability */}
						<div style={{
							position: "absolute",
							left: 0, top: 0, width: "100%", height: "100%",
							background: "linear-gradient(120deg, rgba(230,43,30,0.04) 0%, rgba(255,255,255,0.10) 100%)",
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
									gap: "2.5rem",
									maxWidth: "1200px",
									margin: "0 auto"
								}}
							>
								<div className="home-hero-left" style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
									<h1
										className="home-hero-title"
									>
										<span style={{ color: "#fff" }}>Conscious </span>
										<span style={{ color: "#e62b1e" }}>Evolution</span>
									</h1>
									<div className="home-hero-subtitle" style={{ color: '#e62b1e', marginBottom: '0.5rem' }}>
									Shaping humane systems through conscious choice
									</div>
									<div className="chips" style={{ marginBottom: '0.8rem' }}>
									  <span className="chip">Youth Event</span>
									  <span className="chip">University Edition</span>
									  <span className="chip">Ideas Worth Spreading</span>
									</div>
									<div className="home-hero-btns" style={{ gap: "0.8rem", display: "flex", flexWrap: "wrap", marginTop: '0.3rem' }}>
									    <button className="btn-primary" onClick={() => navigate("/about")}>
									        About Us
									    </button>
									    <button className="btn-primary" onClick={() => navigate('/speakers')}>Explore Speakers</button>
									</div>
								</div>
								{/* Centered Nomination Box, now right-aligned */}
								<div
									className="white-card"
									style={{
										background: "#fff",
										borderRadius: "20px",
										boxShadow: "0 6px 32px #e62b1e22",
										padding: "2.1rem 1.1rem 1.5rem 1.1rem",
										maxWidth: 400,
										width: "100%",
										border: "1.5px solid #e62b1e22",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										margin: "0.7rem 0 0.7rem 0"
									}}
								>
									<div style={{ fontWeight: 700, fontSize: "1.13rem", color: "#e62b1e", marginBottom: "0.5rem", letterSpacing: "1px" }}>
										TEDxGADVASU Youth
									</div>
									<div style={{ fontSize: "1.55rem", fontWeight: 900, color: "#181818", marginBottom: "0.5rem", textAlign: "center", fontFamily: "'Montserrat', 'Arial', sans-serif" }}>
										Conscious Evolution
									</div>
									<div style={{ fontSize: "1.08rem", color: "#444", marginBottom: "1.2rem", textAlign: "center" }}>
										<span style={{ fontWeight: 600 }}>Date:</span> 23 Aug 2025<br />
										<span style={{ fontWeight: 600 }}>Location:</span> Ludhiana, Punjab, India
									</div>
									<div style={{ fontSize: "1.01rem", color: "#888", marginBottom: "1.3rem", textAlign: "center" }}>
									Join us for a day of visionary talks, bold ideas, and shared purpose—shaping the future we choose to live in.
									</div>
									<a
										href="#"
										style={{
											display: "inline-block",
											background: "#e62b1e",
											color: "#fff",
											borderRadius: "6px",
											padding: "0.85rem 2.1rem",
											fontWeight: 700,
											fontSize: "1.13rem",
											textDecoration: "none",
											letterSpacing: ".5px",
											boxShadow: "0 2px 8px #e62b1e22",
											transition: "background 0.18s, transform 0.18s, box-shadow 0.18s",
											cursor: "pointer"
										}}
										onMouseOver={e => {
											e.currentTarget.style.background = "#fff";
											e.currentTarget.style.color = "#e62b1e";
											e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
											e.currentTarget.style.boxShadow = "0 4px 16px #e62b1e33";
											e.currentTarget.style.border = "2px solid #e62b1e";
										}}
										onMouseOut={e => {
											e.currentTarget.style.background = "#e62b1e";
											e.currentTarget.style.color = "#fff";
											e.currentTarget.style.transform = "none";
											e.currentTarget.style.boxShadow = "0 2px 8px #e62b1e22";
											e.currentTarget.style.border = "none";
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
				{/* Add a spacer div to prevent layout jump when hero is fixed */}
				{fixedHero && (
					<div style={{ height: "92vh", width: "100%" }} />
				)}

				{/* CTA banner */}
				<div className="cta-banner">
				  <div className="cta-banner-inner">
					<div className="cta-text">Be part of the conversation shaping tomorrow.</div>
					<div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
					  <button className="btn-primary" onClick={() => navigate('/nomination')}>Nominate a Speaker</button>					  
					</div>
				  </div>
				</div>

				{/* TED Section: Full-width rectangle */}
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
							{/* Column 1 */}
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
							{/* Column 2 */}
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
							{/* Column 3 */}
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

				{/* TEDx Section: Full-width rectangle, red background */}
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

				{/* TEDxGADVASU Section: Full-width rectangle, dark background */}
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
				{/* Divider above speakers */}
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
						maxWidth: "92vw", // restored to previous value for full carousel width
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

