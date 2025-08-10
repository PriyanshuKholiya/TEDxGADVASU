import React from "react";

export default function Rules() {
  const sectionHeadingStyle = {
    fontWeight: 900,
    fontSize: "2rem",
    textAlign: "center",
    margin: "0 0 1.2rem 0",
    letterSpacing: "1px",
    color: "#e62b1e"
  };

  const listBoxStyle = {
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto 2.2rem auto",
    fontSize: "1.08rem",
    color: "#222",
    textAlign: "left",
    lineHeight: 1.7,
    paddingLeft: "1.2rem",
    background: "rgba(255,255,255,0.97)",
    borderRadius: "12px",
    boxShadow: "0 2px 12px #e62b1e11",
    fontFamily: "Montserrat, Arial, sans-serif",
    padding: "1.1rem 1.2rem",
    listStyle: "none"
  };

  const bullet = (
    <span
      style={{
        display: "inline-block",
        width: "0.85em",
        height: "0.85em",
        background: "#e62b1e",
        borderRadius: "50%",
        marginRight: "1em",
        marginTop: "0.45em",
        flexShrink: 0
      }}
    />
  );

  const renderList = (items) => (
    <ul style={listBoxStyle}>
      {items.map((rule, idx) => (
        <li key={idx} style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.7rem" }}>
          {bullet}
          <span>{rule}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="page rules"
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        paddingLeft: "0.7rem",
        paddingRight: "0.7rem",
        fontFamily: "Montserrat, Arial, sans-serif",
        background: "#fff"
      }}
    >
      <h1 style={sectionHeadingStyle}>Event Rules & Guidelines</h1>
      {renderList([
        "All attendees must register prior to the event and carry a valid photo ID (students should carry their university ID).",
        "Please arrive on time and be seated 15 minutes before sessions begin. Entry may be restricted during talks.",
        "Maintain decorum and respect all speakers, performers and participants; keep phones on silent/vibrate.",
        "Photography is allowed only in designated areas. Flash, tripods or live streaming/recording require prior written permission.",
        "Follow instructions given by volunteers and staff. Queue discipline and designated entry/exit routes must be observed.",
        "Keep the campus clean. Use dustbins; do not deface or damage university property.",
        "Prohibited items: outside food/drinks, alcohol, tobacco/e‑cigarettes, sharp objects, banners/placards, laser pointers, drones and any illegal substances.",
      ])}

      <h1 style={{ ...sectionHeadingStyle, marginTop: "2.5rem" }}>Safety & Security</h1>
      {renderList([
        "Cooperate with university security and police personnel. Random bag checks may be conducted.",
        "Carry your student/employee ID or government-issued photo ID at all times and present it on request.",
        "Access to restricted/academic areas is not permitted unless authorised by the university.",
        "Keep emergency exits and corridors clear. In an emergency, follow public announcements and instructions from volunteers.",
        "First-aid and medical assistance are available on site. Inform a volunteer immediately if you feel unwell.",
        "Lost and Found is managed at the help desk; organisers are not responsible for loss/theft of personal belongings.",
        "The organisers reserve the right to refuse admission or ask any person to leave for security or behavioural reasons. Refunds will not be issued in such cases."
      ])}
    </div>
  );
}
