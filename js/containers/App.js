import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as ServiceActions from '../actions/services'
import Services from '../components/Services'
import oyvindSelleck from '../../images/langhals_borte.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleGetServices = this.handleGetServices.bind(this)
    this.handleRenameService = this.handleRenameService.bind(this)
  }

  handleGetServices() {
    this.props.actions.fetchServicesIfNeeded()
  }

  handleRenameService(serviceID, name) {
    this.props.actions.renameService(serviceID, name)
  }

  render() {
    const {services, fetchingServices} = this.props
    return(
      <div>
        <h1>Øyvind Selleck</h1>
        <img src={oyvindSelleck} />
        <Services
          services={services}
          onHandleFetchServices={this.handleGetServices}
          onHandleRenameService={this.handleRenameService}
          fetchingServices={fetchingServices}
        />
      </div>
    )
  }
}

App.propTypes = {
  services: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    services: state.services,
    fetchingServices: state.fetchingServices,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(ServiceActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
