import { Reducer } from 'redux'
import { OrganizationActions, OrganizationActionTypes } from '../actions/organizationActions'

export interface IOrganization {
  name: string
  blog: string
  avatar_url: string
  description: string
  location: string
}

export interface IReposOrganization {
  id: number
  name: string
  language: string
  description: string
  stargazers_count: number
  forks: number
  watchers: number
  html_url: string
}

export interface IInitialState {
  general: IOrganization
  repos: IReposOrganization[]
  loading: boolean
}

const initialState: IInitialState = {
  general: {
    name: '',
    blog: '',
    avatar_url: '',
    description: '',
    location: '',
  },
  repos: [],
  loading: false,
}

export const organizationReducer: Reducer<IInitialState, OrganizationActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OrganizationActionTypes.GET_ORGANIZATION: {
      return {
        ...state,
        general: {
          name: action.payload.name,
          blog: action.payload.blog,
          avatar_url: action.payload.avatar_url,
          description: action.payload.description,
          location: action.payload.location,
        },
      }
    }
    case OrganizationActionTypes.GET_REPOS_ORGANIZATION: {
      return {
        ...state,
        repos: action.payload,
      }
    }
    case OrganizationActionTypes.LOADING_ORGANIZATION: {
      return {
        ...state,
        loading: action.payload,
      }
    }
    default:
      return state
  }
}
