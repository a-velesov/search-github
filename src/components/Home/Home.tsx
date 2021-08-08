import React from 'react'
import styles from './Home.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { OrganizationInfo } from '../OrganizationInfo/OrganizationInfo'
import { OrganizationRepositories } from '../OrganizationRepositories/OrganizationRepositories'

export const Home = (): JSX.Element => {
  return (
    <>
      <SearchBar onSearchOrganization={() => console.log} />
      <div className={styles.content}>
        <OrganizationInfo />
        <OrganizationRepositories />
      </div>
    </>
  )
}
