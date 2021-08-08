import React, { useState, SyntheticEvent } from 'react'
import { Props } from './SearchBar.props'
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { getOrganization, getReposOrganization } from '../../store/actions/organizationActions'

export const SearchBar = ({ onSearchOrganization }: Props): JSX.Element => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    onSearchOrganization(term)
    dispatch(getOrganization(term))
    dispatch(getReposOrganization(term))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        value={term}
        placeholder="Поиск по организации"
        onChange={handleInputChange}
      />
      <button className={styles.button} type="submit" disabled={!term}>
        Найти
      </button>
    </form>
  )
}
