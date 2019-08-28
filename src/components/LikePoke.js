import React from 'react'

class LikePoke extends React.Component {
	constructor(props) {
		super(props);
		this.state = {likes: 0};
	}

	addLike() {
		this.setState({
			likes: this.state.likes + 1
		})
	}

	render() {
		return (
            <div>
               <p> { this.state.likes } Likes</p>
               <button onClick={()=>this.addLike()}>Like Poke</button>
            </div>
			)
	}
}

export default LikePoke