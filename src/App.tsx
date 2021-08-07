import React from 'react'
import { SearchBar } from './components/SearchBar/SearchBar'

export const App = (): JSX.Element => {
  return (
    <div>
      <SearchBar onSearchOrganization={(id) => console.log(id)} />
    </div>
  )
}
