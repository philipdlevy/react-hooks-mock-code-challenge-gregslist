import React, { useState } from "react";

// Accepting the listing object to use for displaying content for each card below. 
// accepting onDelete which is the callback from listings container to delete an object with the correct id
function ListingCard({ listing, onDeleteListing }) {
  // state for favoritng a listing
  const [isFavorited, setIsFavorited] = useState(false)
  // let's destructure listing to get each part
  const { id, image, description, location, } = listing;

  // callback function for deleting listings below
  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then((resp) => resp.json())
      .then(() => {
        // console.log("deleted");
        // we need to pass the callback function with the id from listingsContainer, so we know what we are deleting
        onDeleteListing(id)
      });
  }
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
      {/* setting state here for favoriting*/}
        {isFavorited ? (
          <button onClick={() => setIsFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFavorited(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        {/* making a delete callback for an onClick event for deleting stuff */}
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
