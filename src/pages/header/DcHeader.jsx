function DcHeader() {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "rgb(248 248 248 / 90%)",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png"
        style={{
          borderRadius: 0,
          minWidth: "60px",
          maxWidth: "7%",
          height: "auto",
          boxShadow: "none",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      />
    </div>
  );
}

export default DcHeader;
