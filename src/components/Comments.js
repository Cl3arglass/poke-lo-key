import React from 'react'

class Comments extends React.Component {
	constructor(props) {
		super(props)
		this.state = {comment: ""}
		this.state = {comments: []}
		this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
	}

	handleInputChange(event) {
	   console.log("hello")
	   this.setState({ comment: event.target.value})

	}

	handleCommentClick() {
	this.setState({ comments: [...this.state.comments, this.state.comment] })
}

render() {
	return (
		<div>
              <input
                type="text"
                name="name"
                placeholder="Comment"
                onChange={this.handleInputChange}
                value={this.state.comment}
              /><br/>
              <button onClick={this.handleCommentClick}>Submit Comment</button>
              <p>{this.state.comments}</p>
            </div>
		)
}
}

export default Comments