import React from "react";

const ComingSoon = () => {
  const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  };

  const contentStyle = {
    animation: "fadeIn 2s ease-in-out",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    animation: "bounce 2s infinite",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    opacity: 0.9,
    animation: "fadeSlide 3s ease-in-out",
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div style={pageStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>🚧 Coming Soon 🚧</h1>
          <p style={subtitleStyle}>
            We’re working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
