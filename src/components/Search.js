import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

function Search({ setSearchText }) {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "10px" }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Patient by Room Number"
          aria-label="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}
export default Search;
