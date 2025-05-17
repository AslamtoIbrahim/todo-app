import React from "react";


const defaultFilter = {
     filter: "all",
     setFilterType: (filterType: string) => {}
}

const FilterMangerContext = React.createContext(defaultFilter);

export default FilterMangerContext;