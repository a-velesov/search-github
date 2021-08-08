import React from 'react'
import { SearchBar } from './components/SearchBar/SearchBar'
import { OrganizationInfo } from './components/OrganizationInfo/OrganizationInfo'

export const App = (): JSX.Element => {
  return (
    <div>
      <SearchBar onSearchOrganization={(id) => console.log(id)} />
      <OrganizationInfo />
    </div>
  )
}
