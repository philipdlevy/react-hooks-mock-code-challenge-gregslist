import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";
import NewListingForm from "./NewListingForm";

// receieving state for searching
function ListingsContainer({ search }) {
  // state for all gregs listings
  const [listings, setListings] = useState([])
  const [sortBy, setSortBy] = useState("id")

  // this useEffect is fetching to display data upon entering website 
  // and getting initial data
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    // the resp back is the data, resp or listings. Get listings, set listings to listings. 
    .then((listings) => setListings(listings))
  }, [])

  // this callback function is for setting the new state when a card is deleted
  // we are taking in an id from ListingCard to know what is being deleted
  // this needs to be passed down to ListingCard 
  // we make and return new array, filter through the array, get each listing...
  // with each listing, we will check if that listing id (selected) doesnt equal the id that we are passing in 
  // then set state for the listings
  function handleDeleteListing(id) {
    const updatedListingsArray = listings.filter(listing => listing.id !== id)
    setListings(updatedListingsArray)
  }

  // Form callback function
  function handleAddListing(newListing) {
    const updatedListingsArray = [newListing, ...listings]
    setListings(updatedListingsArray);
  }

  //  filtering through the listings to match description and get back listings for search
  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  // sorting
  const sortedListings = filteredListings.sort((listingA, listingB) => {
    if (sortBy === "id") {
      return listingA.id - listingB.id
    } else {
      return listingA.location.localeCompare(listingB.location)
    }
  })


  // map through listings to make a card for each listing in listingCard
  // it was listings.map, but now we map through the searched listigs
  const listingCards = sortedListings.map(listingObj => {
    return <ListingCard 
    key={listingObj.id} 
    listing={listingObj} 
    // passed down to listing card so everything knows what happened when deleted
    onDeleteListing={handleDeleteListing} />
  })


  return (
    <main>
      {/* sorting props */}
      <NewListingForm onAddListing={handleAddListing} />
       {/* button for sorting by id */}
      <button onClick={() => setSortBy("id")}>Sort By Default</button>
      {/* button for sorting by location */}
      <button onClick={() => setSortBy("location")}>Sort By Location</button>
      {/* taking those mapped cards, and sending down to listingCards */}
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
