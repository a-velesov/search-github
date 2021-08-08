import React from 'react'
import styles from './Home.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { OrganizationInfo } from '../OrganizationInfo/OrganizationInfo'
import { OrganizationRepositories } from '../OrganizationRepositories/OrganizationRepositories'
import { Header } from '../Header/Header'
import { useSelector } from 'react-redux'
import { IAppState } from '../../store/Store'
import { Loading } from '../Loading/Loading'

export const Home = (): JSX.Element => {
  const loading = useSelector((state: IAppState) => state.organization.loading)

  return (
    <>
      <Header />
      <SearchBar />
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.content}>
          <OrganizationInfo />
          <OrganizationRepositories />
        </div>
      )}
    </>
  )
}
