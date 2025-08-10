export default function About() {
  return (
    <div className="page about" style={{minHeight: "70vh", maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: '1.2rem 0.5rem'}}>
      <div style={{position: "relative", zIndex: 1, width: "100%"}}>
        <div className="kicker" style={{ textAlign: 'center' }}>About</div>
        <h1 className="section-title" style={{ textAlign: 'center', color: '#e62b1e' }}>About TEDxGADVASU</h1>
        <div className="section-underline" />
        <div style={{ position: "relative", width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {/* Watermark logo in the center, behind About GADVASU content */}
          <img
            src="image3.jpg"
            alt="TEDxGADVASU Logo Watermark"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "240px",
              height: "240px",
              opacity: 0.13,
              pointerEvents: "none",
              zIndex: 0,
              objectFit: "contain",
              userSelect: "none"
            }}
          />
          <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '1.08rem',
            color: '#222',
            fontWeight: 400,
            lineHeight: 1.7,
            fontFamily: 'Montserrat, Arial, sans-serif',
            background: 'rgba(255,255,255,0.97)',
            borderRadius: '12px',
            padding: '1.2rem 0.7rem',
            boxShadow: '0 2px 12px #e62b1e11'
          }}>
            
            <p style={{marginBottom: '1.1rem', fontWeight: 600, color: '#e62b1e', fontSize: '1.13rem', letterSpacing: '0.5px'}}>About GADVASU</p>
            <p style={{marginBottom: '1.1rem'}}>
              Guru Angad Dev Veterinary and Animal Sciences University (GADVASU), established in Ludhiana, Punjab, is a premier institution dedicated to advancing veterinary, dairy, and animal sciences. With a mission rooted in improving rural livelihoods and livestock productivity, GADVASU combines academic excellence with hands-on learning through its cutting-edge infrastructure, including advanced laboratories, experimental farms, and a state-of-the-art veterinary hospital. The university is known for its impactful research, innovation-driven programs, and community outreach initiatives that empower both students and local farming communities.
            </p>
            <p style={{marginBottom: '1.1rem'}}>
              Beyond academics, GADVASU offers a student-centric environment enriched with scholarships, global collaborations, and real-world exposure. Its commitment to development, networking, and capacity-building ensures that students are not only well-prepared for their careers but also equipped to create meaningful change in the fields of animal health, food security, and sustainable farming. GADVASU stands as a model institution fostering knowledge, innovation, and societal impact.
            </p>
          </div>
        </div>
        <div style={{height: "2rem"}}></div>
        <div style={{color: "#e62b1e", fontWeight: "bold", fontSize: "1.1rem", textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: '1.5rem'}}>
          Join us in our journey on shaping tomorrow with the choices we make today!
        </div>
        <div style={{height: "2rem"}}></div> 
        <section className="theme-section">
          <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1.2rem', color: '#e62b1e', fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Theme: <span style={{ color: '#e62b1e' }}>Conscious Evolution</span>
          </h2>
          
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', fontSize: '1.08rem', color: '#222', fontWeight: 400, lineHeight: 1.7, fontFamily: 'Montserrat, Arial, sans-serif', background: 'rgba(255,255,255,0.97)', borderRadius: '12px', padding: '1.2rem 0.7rem', boxShadow: '0 2px 12px #e62b1e11' }}>
            Conscious Evolution is the idea that humanity has reached a stage where we can influence the course of our own development—not just biologically, but socially, emotionally, intellectually, and spiritually. Unlike natural evolution, which unfolds over millennia through external forces, conscious evolution is intentional. It’s about awakening to the fact that we are not just shaped by the world—we are shaping it, every day, through our choices, values, and visions.
            <br /><br />
            This theme urges us to examine how awareness and intention can guide progress in meaningful directions. It asks: What happens when we stop living on autopilot and begin living with purpose? How can we evolve our systems, our relationships, and our inner selves in ways that are compassionate, sustainable, and just?
            <br /><br />
            In today’s interconnected world, we face complex challenges—from climate change and mental health crises to technological disruption and social divides. Conscious Evolution challenges us not only to adapt but to transform—to reimagine what it means to thrive as individuals, communities, and as a global society. It is about aligning growth with wisdom, and innovation with ethics.
            <br /><br />
            Ultimately, this theme is a reminder that evolution is no longer something that merely happens to us—it is something we can consciously direct. It is an invitation to reflect, to reawaken, and to rise.
          </div>
        </section>
      </div>
    </div>
  );
}
