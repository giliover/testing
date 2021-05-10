import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

it('show a Comment Box', () => {
	const wrapper = shallow(<App />)

	expect(wrapper.find(CommentBox).length).toEqual(1)
})

it('show a Comment List', () => {
	const wrapper = shallow(<App />)

	expect(wrapper.find(CommentList).length).toEqual(1)
})
