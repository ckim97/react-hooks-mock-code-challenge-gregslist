import React, {useState} from "react";

function ListingCard({indexNum, description, image, location, onHandleDelete}) {

  const [favorited, setFavorited] = useState(false);

  function renderFavorite() {
    setFavorited(!favorited);
  }

  function handleDelete() {
    onHandleDelete(indexNum);
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={renderFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={renderFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
