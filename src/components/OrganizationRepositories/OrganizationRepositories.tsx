import React from 'react'
import { useSelector } from 'react-redux'
import { IAppState } from '../../store/Store'
import { OrganizationRepository } from '../OrganizationRepository/OrganizationRepository'

export const OrganizationRepositories = (): JSX.Element => {
  const repos = useSelector((state: IAppState) => state.organization.repos)

  return (
    <>
      {repos.length > 0 && <h2>Репозитории</h2>}
      {repos.map((r) => (
        <OrganizationRepository
          key={r.id}
          forks={r.forks}
          language={r.language}
          watchers={r.watchers}
          stargazers_count={r.stargazers_count}
          html_url={r.html_url}
          name={r.name}
          description={r.description}
        />
      ))}
    </>
  )
}
