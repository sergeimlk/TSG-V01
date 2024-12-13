import React, { useState } from "react";
import "../css/filtersTab.css";
import getSearchData from "../Shared/data";
import Tag from "./Tag";
import loupe from "../loupe.png"; // Chemin correct vers l'image

function FiltersTab({ onSelect, setSearchQuery, setSearchResults, tags, searchQuery, onSearch }) {
  const [visible, setVisible] = useState(false); // État local pour la visibilité

  const toggleFiltersVisibility = () => {
    setVisible(!visible);
  };

  const getAllFilters = () => {
    const allFilters = [];
    getSearchData().map((data) => {
      if (data.filters) {
        data.filters.map((filter, id) => {
          const filterTag = <Tag key={id} value={filter} onClick={onSelect} />;
          if (allFilters.every((elem) => elem.key !== id.toString())) {
            allFilters.push(filterTag);
          }
        });
      }
    });
    return allFilters;
  };

  return (
    <div className="filtersWrapper">
      {/* Loupe visible lorsque les filtres sont fermés */}
      <div
        className={`loupeContainer ${visible ? "hidden" : ""}`}
        onClick={toggleFiltersVisibility}
      >
        <img src={loupe} alt="loupe" className="loupe" />
      </div>

      {/* Section des filtres */}
      <div className={`filtersTab ${visible ? "open" : "closed"}`}>
        <div className="filtersHeader">
          <h3>Filters</h3>
          <button className="closeButton" onClick={toggleFiltersVisibility}>
            Close
          </button>
        </div>

        <div className="searchContainer">
          <input
            type="text"
            value={searchQuery}
            onChange={onSearch}
            placeholder="Search..."
            className="searchInput"
          />
        </div>

        {/* <h3>Devices</h3> */}
        <div className="tagContainer">{getAllFilters()}</div>
      </div>
    </div>
  );
}

export default FiltersTab;