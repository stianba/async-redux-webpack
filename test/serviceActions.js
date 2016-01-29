import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as types from '../js/constants/ServicesActionTypes'
import * as actions from '../js/actions/services'

const mockStore = configureMockStore([thunk])

describe('services api communications', done => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates a RECEIVE_SERVICES action when fetching of services is complete', done => {
    nock('https://dev-elektriker-api.herokuapp.com')
      .get('/services')
      .reply(200, [{
        _id: '5697bd1b4c75ffb00cdf33db',
        name: 'dævensteike',
      }])

    const expectedActions = [{
      type: types.REQUEST_SERVICES
    },{
      type: types.RECEIVE_SERVICES,
      services: [{
        _id: '5697bd1b4c75ffb00cdf33db',
        name: 'dævensteike',
      }],
    }]

    const store = mockStore({
        fetchingServices: false,
        services: []
      },
      expectedActions,
      done
    )

    store.dispatch(actions.fetchServicesIfNeeded())
  })
})
