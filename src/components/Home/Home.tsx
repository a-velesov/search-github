import React from 'react'
import styles from './Home.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { OrganizationInfo } from '../OrganizationInfo/OrganizationInfo'
import { OrganizationRepositories } from '../OrganizationRepositories/OrganizationRepositories'
import { Header } from '../Header/Header'

export const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <SearchBar />
      <div className={styles.content}>
        <OrganizationInfo />
        <OrganizationRepositories />
      </div>
    </>
  )
}
