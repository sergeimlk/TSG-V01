import React from "react";
import "../css/filtersTab.css";
import getSearchData from "../Shared/data";
import Tag from "./Tag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

function FiltersTab({
  visible,
  onClose,
  onSelect,
  setSearchQuery,
  setSearchResults,
  tags,
  searchQuery,
  onSearch
}) {

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
    <section className={'filtersTab shadow ' + (visible ? 'enabled' : 'disabled')}>

      
      {/* En-tête avec bouton "Filtres" */}
      <div className="filtersHeader">
        <button
          className={'filtersButton ' + (visible ? 'enabled' : 'disabled')}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faBars} />
          Filters
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="searchContainer">
        <input
          type="text"
          value={searchQuery}
          onChange={onSearch}
          placeholder="Search..."
          className="searchInput"
        />
      </div>

      {/* Tags de filtres */}
      <h3>Devices</h3>
      <div className="tagContainer">
        {getAllFilters()}
      </div>
    </section>
  );
}

export default FiltersTab;