import React from "react";
import Search from "./Search";

function Header({onSearch, search, setSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} search={search} setSearch={setSearch}/>
    </header>
  );
}

export default Header;
