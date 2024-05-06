import React from 'react';
import { Search } from '../common/search';

interface ISearchBarProps {
    onSearch: (searchTerm: string) => void;
    searchTerm: string;
}

export function SearchBar(props: ISearchBarProps) {
    return (
        <Search
            searchTerm={props.searchTerm}
            onSearch={(e) => props.onSearch(e)}
        />
    );
};
