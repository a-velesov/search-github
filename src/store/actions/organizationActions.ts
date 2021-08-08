import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { IInitialState, IOrganization, IReposOrganization } from '../reducers/organizationReducer'

export enum OrganizationActionTypes {
  GET_ORGANIZATION = 'GET_ORGANIZATION',
  GET_REPOS_ORGANIZATION = 'GET_REPOS_ORGANIZATION',
  LOADING_ORGANIZATION = 'LOADING_ORGANIZATION',
}

export interface IGetOrganization {
  type: OrganizationActionTypes.GET_ORGANIZATION
  payload: IOrganization
}

export interface IGetReposOrganization {
  type: OrganizationActionTypes.GET_REPOS_ORGANIZATION
  payload: IReposOrganization[]
}

export interface ILoadingInterface {
  type: OrganizationActionTypes.LOADING_ORGANIZATION
  payload: boolean
}

export type OrganizationActions = IGetOrganization | ILoadingInterface | IGetReposOrganization

export const getOrganization: ActionCreator<
  ThunkAction<Promise<any>, IInitialState, null, IGetOrganization>
> = (organization: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loadingHandler(true))
      const response = await axios.get(`${process.env.REACT_APP_GITHUB_API}/${organization}`)
      dispatch({
        type: OrganizationActionTypes.GET_ORGANIZATION,
        payload: response.data,
      })
    } catch (e) {
    } finally {
      dispatch(loadingHandler(false))
    }
  }
}

export const getReposOrganization: ActionCreator<
  ThunkAction<Promise<any>, IInitialState, null, IGetReposOrganization>
> = (organization: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loadingHandler(true))
      const response = await axios.get(`${process.env.REACT_APP_GITHUB_API}/${organization}/repos`)
      console.log(response, 'res')
      dispatch({
        type: OrganizationActionTypes.GET_REPOS_ORGANIZATION,
        payload: response.data,
      })
    } catch (e) {
    } finally {
      dispatch(loadingHandler(false))
    }
  }
}

export const loadingHandler: ActionCreator<ILoadingInterface> = (boolean: boolean) => {
  return {
    type: OrganizationActionTypes.LOADING_ORGANIZATION,
    payload: boolean,
  }
}
