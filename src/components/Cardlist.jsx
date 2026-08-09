
const Cardlist = ({ data }) => {
  const { id, name, rating, description, genre, cast, watch_url, img_url } = data;

  return (
    <li className="nft-card">
      {/* Badge for Premium Look */}
      <span className="nft-badge">Trending</span>

      {/* Image Container with Zoom & Overlay Effect */}
      <div className="nft-img-container">
        <img className="nft-img" src={img_url} alt={name} />
        <div className="nft-overlay">
          <p className="nft-cast"><b>Cast:</b> {cast}</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="nft-content">
        <div className="nft-header">
          <h2 className="nft-title">{name}</h2>
          <span className="nft-rating">⭐ {rating}</span>
        </div>

        <p className="nft-genre"><span>{genre}</span></p>
        
        <p className="nft-description">{description}</p>

        {/* Modern Call to Action Button */}
        <a href={watch_url} target="_blank" rel="noopener noreferrer" className="nft-btn-link">
          <button className="nft-btn">
            <span>Watch Now</span>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="nft-btn-icon"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>
        </a>
      </div>
    </li>
  );
};

export default Cardlist;