import React, { useState, useEffect } from "react";
import { performSearch } from "../Shared/settings";
import FiltersTab from "./FiltersTab";
import TopBar from "./TopBar";
import "../css/app.css";
import Article from "./Article";

function isChrome() {
  const userAgent = navigator.userAgent;
  return /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
}

function Homepage({ keycloak, isAuth }) {
  // console.log("kclogin", isAuth, keycloak.isTokenExpired(), keycloak);

  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Error");
  const [searchResults, setSearchResults] = useState(performSearch(searchQuery));
  const [selectedPage, setSelectedPage] = useState(false);
  const [seeFilters, setSeeFilters] = useState(false);
  const [isExpert, setIsExpert] = useState(true);

  useEffect(() => {
    const tokenExpert =
      keycloak?.tokenParsed?.["resource_access"]?.["winback-tsg"]?.["roles"]?.includes("expert");

    if (isExpert !== tokenExpert) {
      setIsExpert(tokenExpert);
    }
  }, [isExpert, keycloak?.tokenParsed]);

  const onSearch = (e) => {
    const query = e.target.value;
    setSelectedPage(false);
    setSearchQuery(query);
    setSearchResults([...performSearch(query, tags)]);
  };

  const onClose = () => {
    setSeeFilters(!seeFilters);
    setSelectedPage(-1);
  };

  const onOpen = (title) => {
    if (selectedPage !== title) {
      setSeeFilters(false);
      setSelectedPage(title);
    }
  };

  const onSelectTag = (value) => {
    const index = tags.indexOf(value);
    let newTags = [];
    if (index === -1) {
      newTags = [...tags, value];
    } else {
      newTags = tags.filter((tag) => tag !== value);
    }
    setTags(newTags);
    setSearchResults([...performSearch(searchQuery, newTags)]);
    setSelectedPage(false);
  };

  return (
    <main>
      <TopBar
        onOpenFilters={onClose}
        onSearch={onSearch}
        searchQuery={searchQuery}
        seeFilters={seeFilters}
        keycloak={keycloak}
      />
      <div className={`mainContent ${isChrome() && "chrome"}`}>
        <FiltersTab
          visible={seeFilters}
          onClose={onClose}
          onSelect={onSelectTag}
        />
        <div className="summary reducedWidth">
          <p>{searchResults.length + " results found"}</p>
          <p>Winback TSG V0.3.1</p>
        </div>
        {searchResults.map((item, id) => {
          let isBig = false;
          if (selectedPage === item.title) {
            isBig = true;
          }
          return (
            <Article
              isExpert={isExpert}
              page={item.title}
              id={id}
              key={id}
              isBig={isBig}
              onClose={() => setSelectedPage(false)}
              onOpen={() => onOpen(item.title)}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Homepage;
