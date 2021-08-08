import { Reducer } from 'redux'
import { OrganizationActions, OrganizationActionTypes } from '../actions/organizationActions'

export interface IOrganization {
  name: string
  url: string
  avatar_url: string
  description: string
  location: string
}

export interface IInitialState {
  general: IOrganization
  loading: boolean
}

const initialState: IInitialState = {
  general: {
    name: '',
    url: '',
    avatar_url: '',
    description: '',
    location: '',
  },
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
          url: action.payload.url,
          avatar_url: action.payload.avatar_url,
          description: action.payload.description,
          location: action.payload.location,
        },
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

export const loadingReducer: Reducer<IInitialState, OrganizationActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
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
