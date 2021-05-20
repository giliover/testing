import React, { Component } from 'react'

class CommentBox extends Component {
	constructor() {
		super()
		this.state = {
			comment: ``,
		}
	}

	handleChange(event) {
		setState({ comment: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()

		setState({ comment: '' })
	}

	render() {
		return (
			<form>
				<h4>Add a Comment</h4>
				<textarea
					onChange={this.handleChange}
					value={this.state.comment}
				/>
				<button>Submit</button>
			</form>
		)
	}
}

export default CommentBox
