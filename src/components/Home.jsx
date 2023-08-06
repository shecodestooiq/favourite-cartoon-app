import React, { useState } from "react";

import Footer from "./Footer";
import CartoonsList from "./CartoonsList";

function Home() {
  const [query, setQuery] = useState(null);

  const handleSearch = (e) => {
    const searchInput = e.target.value;

    if (searchInput.length > 0) {
      setQuery(searchInput);
    } else {
      setQuery(null);
    }
  };

  return (
    <>
      <div className="home">
        <h1>Cartoons app</h1>
        <input
          type="text"
          name="search"
          placeholder="search..."
          onChange={(e) => handleSearch(e)}
          className="search-input"
        />
        <CartoonsList filterBy={query} />
        <br />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
