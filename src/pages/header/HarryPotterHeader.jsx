function HarryPotterHeader() {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "rgba(15, 0, 30, 0.9)",
      }}
    >
      <img
        src="https://www.harrypotter.com/assets/_next/static/images/logo-gold-600-7a7e89b6db1ffeaab025f2091d21b645.png"
        style={{
          borderRadius: 0,
          minWidth: "150px",
          maxWidth: "20%",
          height: "auto",
          boxShadow: "none",
          paddingTop: "5px",
        }}
      />
    </div>
  );
}

export default HarryPotterHeader;
