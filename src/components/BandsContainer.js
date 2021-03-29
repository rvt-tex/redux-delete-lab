import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  state = { bands:[] }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band => (
          <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
