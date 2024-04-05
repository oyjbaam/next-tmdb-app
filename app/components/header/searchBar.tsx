'use client'

const SearchBar = () => {
  return (
    <input
      className="cursor-text rounded-full text-xs h-8 w-40 px-4 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-blue-300"
      type="text"
      placeholder="Search"
      name="search-input"
      aria-label="검색어 입력"
    />
  )
}

export default SearchBar
