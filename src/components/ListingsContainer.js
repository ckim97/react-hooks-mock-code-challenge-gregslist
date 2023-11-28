import React, {useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onHandleDelete, search}) {

  // useEffect(() => {
  //   fetch("http://localhost:6001/listings")
  //     .then(r => r.json())
  //     .then(data => onRender(data))
  // }, [])
  const searchListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()));
  const renderListings = searchListings.map((listing) => <ListingCard key={listing.id} indexNum={listing.id} description={listing.description} image={listing.image} location={listing.location} onHandleDelete={onHandleDelete}/>)


  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
