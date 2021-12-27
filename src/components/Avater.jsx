import "./Avater.css";
import rc from "randomcolor";

const Avater = ({ image, title, size = 50 }) => {
  const styles = {
    avater: {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: rc({
        luminosity: "dark",
      }),
      color: "white",
    },
  };

  return (
    <div className="Avater" style={styles.avater}>
      {image ? <img src={image} alt={title} /> : title.trim().charAt(0)}
    </div>
  );
};

export default Avater;
