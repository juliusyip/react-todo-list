import React from 'react'

export default function SearchBar() {
    return (
        <div>
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search to-do items"
                name="s" 
            />
            <button type="submit">Search</button>
        </form>
        </div>
    )
}
