import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import '../css/topbar.css';
import logo from '../logo_3.png'; // Correct path to the image

function TopBar({
  onOpenFilters,
  keycloak,
  seeFilters
}) {

  const handleLogout = () => {
    keycloak.logout(); // Call the logout method from the keycloak object
  };

  return (
    <div className="topBar shadow">
      <div className="top reducedwidth">
        <img src={logo} alt="WB LOGO" className="wblogo" />
        <h1 className="title">TROUBLESHOOTING GUIDE</h1>
      </div>
        {/* <button 
          className={'filtersButton ' + (seeFilters ? 'enabled' : 'disabled')}
          onClick={onOpenFilters}
        > 
          <FontAwesomeIcon icon={faBars} />
          Filters
        </button> */}

        <div className="connect">
          {keycloak?.tokenParsed?.given_name} {/* Display the user's name */}

          <FontAwesomeIcon 
            icon={faArrowRightFromBracket} 
            className="logoutIcon" 
            onClick={handleLogout} // Add the logout functionality
          />
        </div>
      </div>
  );
}

export default TopBar;