export default function Hero({ imageSrc, altText, captionText }) {
  return (
      <div className="hero">
          <img
              src={imageSrc}
              alt={altText}
          />
          <div className="caption">
              <h1 className="title">{captionText}</h1>
          </div>
      </div>
  );
}
