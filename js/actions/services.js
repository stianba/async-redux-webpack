import request from 'superagent'
import * as types from '../constants/ServicesActionTypes'

export const renameService = (service, name) => {
  return dispatch => {
    dispatch({type: types.RENAME_SERVICE, id: service._id, name: name})
    return dispatch(saveService({...service, name: name}))
  }
}

export const fetchServicesIfNeeded = () => {
  return (dispatch, getState) => {
    const state = getState()
    if (!state.fetchingServices) return dispatch(fetchServices())
  }
}

const receiveServices = services => {
  return {type: types.RECEIVE_SERVICES, services: services}
}

const fetchServices = () => {
  return dispatch => {
    dispatch({type: types.REQUEST_SERVICES})
    return request
      .get('https://dev-elektriker-api.herokuapp.com/services')
      .end((err, json) => dispatch(receiveServices(json.body)))
  }
}

const saveService = service => {
  return dispatch => {
    dispatch({type: types.SAVING_SERVICE, id: service._id})
    return request
      .put(`https://dev-elektriker-api.herokuapp.com/services/${service._id}`)
      .send(service)
      .set('x-admin-token', 'kasodASDnnmxcUhasdk')
      .set('Content-Type', 'application/json')
      .end((err, json) => {
        console.log(json)
        dispatch(serviceSaveRequestDone(err, service._id))
      })
  }
}

const serviceSaveRequestDone = (err, serviceID) => {
  const status = !err ? types.SERVICE_SAVED : types.SERVICE_NOT_SAVED
  return {type: status, id: serviceID}
}
