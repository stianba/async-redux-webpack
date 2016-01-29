import {
  REQUEST_SERVICES,
  RECEIVE_SERVICES,
  RENAME_SERVICE,
} from '../constants/ServicesActionTypes'

const initialState = {
  fetchingServices: false,
  services: [],
}

export default function services(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SERVICES:
      return {
        ...state,
        fetchingServices: true,
      }
    case RECEIVE_SERVICES:
      return {
        ...state,
        fetchingServices: false,
        services: action.services,
      }
    case RENAME_SERVICE:
      return {
        ...state,
        services: state.services.map(service => {
          if (service._id === action.id) {
            return {
              ...service,
              name: action.name,
            }
          }

          return service
        }),
      }
    default:
      return state
  }
}
