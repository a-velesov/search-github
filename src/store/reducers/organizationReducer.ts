import { Reducer } from 'redux'
import { OrganizationActions, OrganizationActionTypes } from '../actions/organizationActions'

export interface IOrganization {
  name: string
  url: string
  avatar_url: string
  description: string
  location: string
}

const initialState: IOrganization = {
  name: '',
  url: '',
  avatar_url: '',
  description: '',
  location: '',
}

export const organizationReducer: Reducer<IOrganization, OrganizationActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OrganizationActionTypes.GET_ORGANIZATION: {
      return {
        ...state,
        name: action.payload.name,
        url: action.payload.url,
        avatar_url: action.payload.avatar_url,
        description: action.payload.description,
        location: action.payload.location,
      }
    }
    default:
      return state
  }
}
