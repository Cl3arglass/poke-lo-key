import React from 'react'
import { connect } from 'react-redux'
import Pokes from '../components/Pokes'




class PokesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {sorted: false, searchPoke: ""}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  sortPokes() {
    const filteredPokes = this.searchPokes()
    // return [...this.props.pokes].sort((a, b) => (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) ? 1 : -1)
    return filteredPokes.sort((a, b) => (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) ? 1 : -1)
}

searchPokes() {
  // if (this.state.searchPoke !== "") {
   return [...this.props.pokes].filter((poke) => poke.attributes.name.toLowerCase().includes(this.state.searchPoke.toLowerCase()))
 // } else {
 //  return [...this.props.pokes]
 // }
}

handleSortClick() {
  // this.setState(({ sorted }) => {
  //   return { sorted: !sorted }
  // })
this.setState({ sorted: !this.state.sorted })
}

handleInputChange(event) {
   console.log("hello")
   this.setState({ searchPoke: event.target.value})

}



	render() {
            // <button onClick={()=>this.sortPokes(this.state.pokes)}>Sort Pokes</button>
            // { this.state.sorted ? <p>{this.state.sorted}</p> : null }
// <Pokes pokes={this.state.sorted ? this.sortPokes() : this.props.pokes}/>
  const filteredPokes = this.searchPokes()
		return (
      
            <div>
              <input
                type="text"
                name="name"
                placeholder="Search Poke"
                onChange={this.handleInputChange}
                value={this.state.searchPoke}
              /><br/>
              <button onClick={this.handleSortClick}>Sort Pokes</button>
              <Pokes pokes={this.state.sorted ? this.sortPokes() : filteredPokes}/>
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