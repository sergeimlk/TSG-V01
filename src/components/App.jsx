import React, { useState, useEffect } from 'react';
import FiltersTab from './FiltersTab';
import "../css/app.css";
import Article from './Article';
import { performSearch } from '../Shared/settings';
import TopBar from './TopBar';
import { faArrowRightFromBracket, faBars, faSearch, } from "@fortawesome/free-solid-svg-icons";


function isChrome() {
  const userAgent = navigator.userAgent;
  return /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
}

function Homepage({ keycloak, isAuth }) {
  console.log('kclogin', isAuth, keycloak.isTokenExpired(), keycloak);

  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Error 237");
  const [searchResults, setSearchResults] = useState(performSearch(searchQuery));
  const [selectedPage, setSelectedPage] = useState(false);
  const [seeFilters, setSeeFilters] = useState(false);
  const [isExpert, setIsExpert] = useState(false); // Initialisé à false

  useEffect(() => {
    const tokenExpert = keycloak?.tokenParsed?.["resource_access"]?.["winback-tsg"]?.['roles']?.includes('expert');

    if (isExpert !== tokenExpert) {
      setIsExpert(tokenExpert);
    }
  }, [keycloak?.tokenParsed]); // Dépendance uniquement sur keycloak.tokenParsed

  const onClose = () => {
    setSeeFilters(!seeFilters);
    setSelectedPage(-1);
  }

  const onOpen = (title) => {
    if (selectedPage !== title) {
      setSeeFilters(false);
      setSelectedPage(title);
    }
  }

  const onSelectTag = (value) => {
    const index = tags.indexOf(value);
    let newTags = [];
    if (index === -1) {
      newTags = [...tags, value];
    } else {
      newTags = tags.filter(tag => tag !== value);
    }
    setTags(newTags);
    setSearchResults([
      ...performSearch(searchQuery, newTags),
    ]);
    setSelectedPage(false);
  }

  const onSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSearchResults(performSearch(query, tags));
  }

  return (
    <main>
      {/* Barre de recherche en haut */}


      <TopBar
        onOpenFilters={onClose}
        searchQuery={searchQuery}
        seeFilters={seeFilters}
        keycloak={keycloak}
      />

      <div className={`mainContent ${isChrome() && 'chrome'}`}>
        {/* Section des filtres */}
        <FiltersTab
          visible={seeFilters}
          onClose={onClose}
          onSelect={onSelectTag}
          onSearch={onSearch}
          setSelectedPage={setSelectedPage}
          setSearchQuery={setSearchQuery}
          setSearchResults={setSearchResults}
          tags={tags}
          searchQuery={searchQuery}
        />

        {/* Résultats de la recherche */}
        <div className='summary reducedWidth'>
          <p>{searchResults.length + " results found"}</p>
          <p>Winback TSG V0.3.1</p>
        </div>
        {searchResults.map((item, id) => {
          let isBig = false;
          if (selectedPage === item.title) {
            isBig = true;
          }
          return <Article
            isExpert={isExpert}
            page={item.title}
            id={id}
            key={id}
            isBig={isBig}
            onClose={() => setSelectedPage(false)}
            onOpen={() => onOpen(item.title)}
          />
        })}
      </div>
    </main>
  );
};

export default Homepage;