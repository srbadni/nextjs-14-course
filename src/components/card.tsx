const Card = ({children}: any) => {
  const cardStyle = {
      padding: "100px",
      margin: "10px",
      border: "1px solid #ddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  }

  return <div style={cardStyle}>{children}</div>
};

export default Card;