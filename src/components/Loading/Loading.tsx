import React from 'react'
import styles from './Loading.module.css'
import loading from './../../assets/loading.gif'

export const Loading = (): JSX.Element => {
  return (
    <div className={styles.loading}>
      <img src={loading} alt="loading" />
    </div>
  )
}
