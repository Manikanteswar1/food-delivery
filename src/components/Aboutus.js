const Aboutus = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>This project is part of my React learning journey.</p>

      <h2 style={{ marginTop: "2rem" }}>My Portfolio Website</h2>
      <iframe
        src="https://manikanteswar1.github.io/Portfolio/"
        title="Mani's Portfolio"
        width="100%"
        height="600"
        style={{
          border: "2px solid #ccc",
          borderRadius: "12px",
          marginTop: "1rem",
        }}
      ></iframe>
    </div>
  );
};

export default Aboutus;
