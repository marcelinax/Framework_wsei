import React, { FC, useState } from "react";

import EntitiesList from "../components/EntitiesList/EntitiesList";
import EntitiesListButtons from "../components/EntitiesList/EntitiesListButtons";
import EntitiesListFilter from "../components/EntitiesList/EntitiesListFilter";

const EntitiesPage: FC = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  const toggleFiltersVisible = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div>
      <EntitiesListButtons
        onToogleFilters={toggleFiltersVisible}
        filterQuery={filter}
        onFilterChange={setFilter}
      />
      {showFilters ? <EntitiesListFilter /> : ""}

      <EntitiesList filterQuery={filter} />
    </div>
  );
};

export default EntitiesPage;
