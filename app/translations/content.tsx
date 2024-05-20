"use client"

import React, { useState } from "react";
import { TranslationsList } from "./translations-list";
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
            <TranslationsList searchQuery={searchQuery} />
        </>
    );
}
