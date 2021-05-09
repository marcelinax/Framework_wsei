import React, { FC, useState } from "react";

import EntitiesList from "../components/EntitiesList/EntitiesList";
import EntitiesListButtons from "../components/EntitiesList/EntitiesListButtons";
import EntitiesListFilter from "../components/EntitiesList/EntitiesListFilter";

const EntitiesPage: FC = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const [list, setList] = useState(false);

  const toggleFiltersVisible = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      <EntitiesListButtons
        toggleList={setList}
        onToogleFilters={toggleFiltersVisible}
        filterQuery={filter}
        isList={list}
        onFilterChange={setFilter}
      />
      {showFilters ? <EntitiesListFilter /> : ""}

      <EntitiesList list={list} filterQuery={filter} />
    </div>
  );
};

export default EntitiesPage;
