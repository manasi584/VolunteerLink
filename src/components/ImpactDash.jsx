import React from "react";


const ImpactDash = () => {
  const cards = [
    { icon: "✔️", color: "#007bff", value: "8", label: "Tasks Completed" },
    { icon: "⌛", color: "#ffa500", value: "54", label: "Hours Contributed" },
    { icon: "🛡️", color: "#00c1c1", value: "4", label: "Badged Earned" },
  ];

  return (
    <>
    <h1 >Welcome user !</h1>
    <div className="dashboard">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="icon" style={{ color: card.color }}>
            {card.icon}
          </div>
          <div className="content">
            <h2>{card.value}</h2>
            <p>{card.label}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ImpactDash;
