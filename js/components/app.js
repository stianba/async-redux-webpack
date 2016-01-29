import React, {Component, PropTypes} from 'react';
import '../../scss/master.scss';

class Master extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServices(() => {
      console.log('Request done');
    });
  }

  render() {
    const services = this.props.services.map(service => {
      return <li key={service._id}>{service.name}</li>;
    });

    return(
      <div>
        <button onClick={this.props.click}>Click measdadsdy</button>
        <p>Clicked: {this.props.clicked ? 'true' : 'false'}</p>
        <input ref='textInput' type='input' placeholder='Write something' onChange={() => {
          this.props.write(this.refs.textInput.value);
        }} />
        <p>{this.props.text}</p>
        {this.props.services.length > 0 ? <ul>{services}</ul> : null}
      </div>
    );
  }
}

Master.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default Master;
