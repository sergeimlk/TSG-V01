import React from "react";
import "../css/filtersTab.css";
import getSearchData from "../Shared/data";
import Tag from "./Tag";
import { performSearch } from '../Shared/settings';

function FiltersTab({
  visible,
  onClose,
  onSelect,
  setSelectedPage,
  setSearchQuery,
  setSearchResults,
  tags,
  searchQuery,
  onSearch
}) {

  const getAllFilters = () => {
    const allFilters = [];

    getSearchData().map((data, id) => {
      if (data.filters) {
        data.filters.map((filter, id) => {
          const filterTag = <Tag
            key={id}
            value={filter}
            onClick={onSelect}
          />

          if (allFilters.every((elem) => elem.key !== id.toString())) {
            allFilters.push(filterTag);
          }
        });
      }
    });

    return allFilters;
  }

  return (
    <section className={'filtersTab shadow ' + (visible ? 'enabled' : 'disabled')}>
      <div className="filtersHeader">
        <button onClick={onClose} className="closeButton">Close Filters</button>
        <input
          type="text"
          value={searchQuery}
          onChange={onSearch}
          placeholder="Search..."
          className="searchInput"
        />
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </div>
      <h3>Devices</h3>
      <div className="tagContainer">
        {getAllFilters()}
      </div>
    </section>
  );
}

export default FiltersTab;
