import React,{useState} from "react";

function Search({onSearch, search}) {

  const[textInput, setTextInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(textInput);
  }

  function handleTextInput(e) {
    setTextInput(e.target.value);
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={textInput}
        onChange={handleTextInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
