import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import '../css/topbar.css';

function TopBar({
  onOpenFilters,
  keycloak,
  seeFilters
}) {
  const profileImageUrl = keycloak?.tokenParsed?.picture || '/default-profile.png';

  const handleLogout = () => {
    keycloak.logout(); // Call the logout method from the keycloak object
  };

  return (
    <div className="topBar shadow">
      <div className="top reducedWidth">
        <button 
          className={'filtersButton ' + (seeFilters ? 'enabled' : 'disabled')}
          onClick={onOpenFilters}
        > 
          <FontAwesomeIcon icon={faBars} />
          Filters
        </button>
        <h1 className="title">
          TROUBLESHOOTING GUIDE 
        </h1>
        <div className="connect">
          {keycloak?.tokenParsed?.given_name || 'Utilisateur'} {/* Display the user's name */}
          <img 
            src={profileImageUrl} 
            alt="User  profile" 
            className="profileImage" 
          />
          <FontAwesomeIcon 
            icon={faArrowRightFromBracket} 
            className="logoutIcon" 
            onClick={handleLogout} // Add the logout functionality
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;