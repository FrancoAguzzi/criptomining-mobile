import { getMetrics, getMonitorMetrics, getRigMetrics } from '../../api/fakeApiUser'

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const fetchUserSuccess = users => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  }
}

export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}

export const fetchDataMetrics = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const data = await getMetrics()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}

export const fetchMonitorMetrics = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const { data } = await getMonitorMetrics()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}

export const fetchRigMetrics = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const { data } = await getRigMetrics()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}