import { useState } from "react";
import "./SimpleCarousel.css";

const slides = [
  {
    title: "Trading Solutions",
    text: "Data-driven strategies across global markets."
  },
  {
    title: "Investment Planning",
    text: "Long-term growth with disciplined risk management."
  },
  {
    title: "Market Analysis",
    text: "Advanced charts and trend identification."
  }
];

const SimpleCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>❮</button>

      <div className="carousel-card">
        <h3>{slides[index].title}</h3>
        <p>{slides[index].text}</p>
      </div>

      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default SimpleCarousel;
