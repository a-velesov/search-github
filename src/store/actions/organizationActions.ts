import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { IOrganization } from '../reducers/organizationReducer'

export enum OrganizationActionTypes {
  GET_ORGANIZATION = 'GET_ORGANIZATION',
}

export interface IGetOraganization {
  type: OrganizationActionTypes.GET_ORGANIZATION
  payload: IOrganization
}

export type OrganizationActions = IGetOraganization

export const getOrganization: ActionCreator<
  ThunkAction<Promise<any>, IOrganization, null, IGetOraganization>
> = (organization: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_GITHUB_API}/${organization}`)
      dispatch({
        type: OrganizationActionTypes.GET_ORGANIZATION,
        payload: response.data,
      })
    } catch (e) {}
  }
}
