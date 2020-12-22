import React from 'react';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

// import './FilterProjectComponent.css';

const FilterProjectsComponent = props => {
    const optionArray = props.optionArray   
    const filterName = props.filterName

    return <DropdownMultiselect class="buttonClass" options={optionArray} name={filterName} />;
}

export default FilterProjectsComponent;
