"use client"

import React, { useState } from "react";
import { SearchList } from "./search-results";
import { SearchBar } from "./search-bar";

export function Content() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <>
            <SearchBar
                onSearch={onChangeSearch}
                searchTerm={searchQuery}
            />
            <SearchList searchQuery={searchQuery} />
        </>
    );
}
