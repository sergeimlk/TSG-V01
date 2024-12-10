import React from "react"
import "../css/filtersTab.css";
import getSearchData from "../Shared/data";
import Tag from "./Tag";

function FiltersTab({
  visible,
  onClose,
  onSelect
}){

  const getAllFilters = () => {

    const allFilters = []

    getSearchData().map((data,id) => {
      if(data.filters){
        data.filters.map((filter,id) => {

          const filterTag = <Tag
            key={id}
            value={filter}
            onClick={onSelect}
          />

          if(allFilters.every( (elem) => elem.key !== id.toString())){
            allFilters.push(filterTag)
          }
        })
      }
    })

    return allFilters;
  }

  return(
    <section
      className={'filtersTab shadow ' + (visible ? 'enabled' : 'disabled')}
    >
      <h3>
        Devices
      </h3>
      <div
        className="tagContainer"
      >
        {
          getAllFilters()
        }
      </div>
    </section>
  )
}

export default FiltersTab

