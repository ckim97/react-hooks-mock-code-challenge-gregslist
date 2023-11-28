import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => setListings(data))
  }, [])

  function handleDelete(deleteItemId) {
    fetch(`http://localhost:6001/listings/${deleteItemId}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => {
        const newListings = listings.filter((listing) => listing.id !== deleteItemId);
        setListings(newListings);
      })
  }

 function handleSearch(textInput) {
  setSearch(textInput);
 }

 

  

  return (
    <div className="app">
      <Header onSearch={handleSearch} search={search} setSearch={setSearch}/>
      <ListingsContainer listings={listings} onHandleDelete={handleDelete} search={search}/>
    </div>
  );
}

export default App;
