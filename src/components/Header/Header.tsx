import React from 'react'
import styles from './Header.module.css'

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Github Organization</div>
    </header>
  )
}
