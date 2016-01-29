import React, {PropTypes} from 'react'

const Services = ({services, fetchingServices, onHandleFetchServices, onHandleRenameService}) => {
  return(
    <div>
      <button
        onClick={onHandleFetchServices}
        autoFocus={true}
        disabled={fetchingServices}>
        {!fetchingServices ? 'Fetch services': 'Fetching services'}
      </button>
      {services.length > 0 ? <ul>{getServices(services, onHandleRenameService)}</ul> : null}
    </div>
  )
}

Services.propTypes = {
  services: PropTypes.array.isRequired,
  fetchingServices: PropTypes.bool.isRequired,
  onHandleFetchServices: PropTypes.func.isRequired,
  onHandleRenameService: PropTypes.func.isRequired,
}

const getServices = (services, onHandleRenameService) => {
  return services.map(service => {
    return <li key={service._id}>{service.name} <input type='text' onChange={(e) => onHandleRenameService(service, e.target.value)} value={service.name} /></li>
  })
}

export default Services
