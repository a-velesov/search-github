import React from 'react'
import { Props } from './OrganizationRepository.props'
import styles from './OrganizationRepository.module.css'
import { ReactComponent as ForkSvg } from './../../assets/forks.svg'
import { ReactComponent as StarSvg } from './../../assets/star.svg'
import { ReactComponent as WatchSvg } from './../../assets/watch.svg'

export const OrganizationRepository = ({
  language,
  forks,
  stargazers_count,
  watchers,
  html_url,
  name,
  description,
}: Props): JSX.Element => {
  return (
    <div className={styles.repository}>
      <a className={styles.url} href={html_url} target="_blank" rel="noreferrer">
        {name}
      </a>
      <span>{description}</span>
      <div className={styles.info}>
        {language && <span className={styles.language}>{language}</span>}
        <span className={styles.forks}>
          <ForkSvg />
          {forks}
        </span>
        <span className={styles.stargazers}>
          <StarSvg /> {stargazers_count}
        </span>
        <span className={styles.watchers}>
          <WatchSvg />
          {watchers}
        </span>
      </div>
    </div>
  )
}
