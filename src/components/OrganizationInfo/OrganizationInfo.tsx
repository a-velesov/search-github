import React from 'react'
import styles from './OrganizationInfo.module.css'
import { useSelector } from 'react-redux'
import { IAppState } from '../../store/Store'
import { Loading } from '../Loading/Loading'
import { ReactComponent as LocationSvg } from './../../assets/location.svg'
import { ReactComponent as LinkSvg } from './../../assets/url.svg'

export const OrganizationInfo = (): JSX.Element => {
  const organization = useSelector((state: IAppState) => state.organization.general)

  return (
    <section className={styles.section}>
      {organization.name ? (
        <>
          <div className={styles.logo}>
            {organization.avatar_url && (
              <img
                className={styles.logo__img}
                src={organization.avatar_url}
                alt={`logo ${organization.name}`}
              />
            )}
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{organization.name}</span>
            <span className={styles.description}>{organization.description}</span>
            {organization.blog && (
              <span>
                <LinkSvg className={styles.svg} />
                <a className={styles.url} href={organization.blog} target="_blank" rel="noreferrer">
                  {organization.blog}
                </a>
              </span>
            )}
            {organization.location && (
              <span>
                <LocationSvg className={styles.svg} /> {organization.location}
              </span>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  )
}
