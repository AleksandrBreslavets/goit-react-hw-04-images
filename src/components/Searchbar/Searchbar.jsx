import { useState } from "react";
import PropTypes from "prop-types";
import { Searchform, Searchinput, Button } from "./Searchbar.styled";
import { BsSearch } from 'react-icons/bs';


export const Searchbar = ({onSubmit})=>{
    const[searchValue, setSearchValue]=useState('');
    
    const onInputChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchValue.trim());
        resetForm();
    };

    const resetForm = () => {
        setSearchValue('');
    };
    
    return (
        <header>
            <Searchform onSubmit={onFormSubmit}>
                <Button type="submit">
                    <BsSearch />
                </Button>
                <Searchinput
                    onChange={onInputChange}
                    value={searchValue}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </Searchform>
        </header>
    );
    
}

Searchbar.propTypes = {
    onSubmit:PropTypes.func.isRequired
}