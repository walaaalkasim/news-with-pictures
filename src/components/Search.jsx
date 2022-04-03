import React from "react";

const Search = ({ input, handleChange, handleSubmit, inputRef }) => {
  console.log(input);
  return (
    <div className="searchBtn">
      <form>
        <input
          placeholder="type somthing e.x: health"
          ref={inputRef}
          type="text"
          maxLength="200"
          value={input}
          onChange={(e) => handleChange(e)}
        />

        <button onClick={(e) => handleSubmit(e)}>search</button>
      </form>
    </div>
  );
};

export default Search;
