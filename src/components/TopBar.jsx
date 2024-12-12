import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBars, faSearch, } from "@fortawesome/free-solid-svg-icons";
import '../css/topbar.css'

function TopBar({
  onOpenFilters,
  searchQuery,
  onSearch,
  keycloak,
  seeFilters
}){

  return(
    <div className="topBar shadow">
      <div className="top reducedWidth">
        <button 
          className={'filtersButton ' + (seeFilters ? 'enabled' : 'disabled')}
          onClick={onOpenFilters}
        > 
          <FontAwesomeIcon 
            icon={faBars} 
          />
          Filters
        </button>
        <h1>
          TROUBLESHOOTING GUIDE 
        </h1>
        <div className="connect">
          {keycloak.tokenParsed.given_name}
          
        </div>
      </div>

      <div className="bottom reducedWidth">
        <div className="searchbar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder={"Search"}
            value={searchQuery}
            onChange={onSearch}
          />
        </div>
       
        
      </div>
    </div>

  )
}

export default TopBar