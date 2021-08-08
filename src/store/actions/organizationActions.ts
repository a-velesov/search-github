import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { IInitialState, IOrganization, IReposOrganization } from '../reducers/organizationReducer'

export enum OrganizationActionTypes {
  GET_ORGANIZATION = 'GET_ORGANIZATION',
  GET_REPOS_ORGANIZATION = 'GET_REPOS_ORGANIZATION',
  LOADING_ORGANIZATION = 'LOADING_ORGANIZATION',
  LOADING_FAILED = 'LOADING_FAILED',
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

export interface ILoadingFailed {
  type: OrganizationActionTypes.LOADING_FAILED
  payload: string
}

export type OrganizationActions =
  | IGetOrganization
  | ILoadingInterface
  | IGetReposOrganization
  | ILoadingFailed

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
      dispatch(loadingFailed(e?.message))
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
      dispatch({
        type: OrganizationActionTypes.GET_REPOS_ORGANIZATION,
        payload: response.data,
      })
    } catch (e) {
      dispatch(loadingFailed(e?.message))
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

export const loadingFailed: ActionCreator<ILoadingFailed> = (message: string) => {
  return {
    type: OrganizationActionTypes.LOADING_FAILED,
    payload: message,
  }
}
