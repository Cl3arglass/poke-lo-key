import React from 'react'
import { connect } from 'react-redux'
import Pokes from '../components/Pokes'




class PokesContainer extends React.Component {

	render() {
		return (
            <div>
              <Pokes pokes={this.props.pokes}/>
            </div>
			)
	}
}

const mapStateToProps = state => {
   return {
      pokes: state.pokes
   }
}

export default connect(mapStateToProps)(PokesContainer)