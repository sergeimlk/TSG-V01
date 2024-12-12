import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import '../css/topbar.css';

function TopBar({ onOpenFilters, keycloak, seeFilters }) {
  const userName = keycloak?.tokenParsed?.given_name || 'Utilisateur';
  const profileImageUrl = keycloak?.tokenParsed?.picture || '/default-profile.png';

  return (
    <div className="topBar shadow">
      <div className="top reducedWidth">
        <h1>TROUBLESHOOTING GUIDE</h1>
        <div className="connect">
          <span>{userName}</span>
          <img 
            src={profileImageUrl} 
            alt="User profile" 
            className="profileImage" 
          />
          <FontAwesomeIcon 
            icon={faArrowRightFromBracket} 
            className="logoutIcon" 
            onClick={onOpenFilters}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
