import React from 'react'
import { shallow } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
	wrapped = shallow(<CommentBox />)
})

afterEach(() => {
	wrapped.unmount()
})

it('has a text area and a button', () => {
	expect(wrapped.find(`textarea`).length).toEqual(1)
	expect(wrapped.find(`button`).length).toEqual(1)
})

it(`has a text area that user can type in`, () => {
	wrapped.find(`textarea`).simulate(`change`, {
		target: { value: `new comment` },
	})
	wrapped.update()
	expect(wrapped.find(`textarea`).prop(`value`)).toEqual(`new comment`)
})

it(`when textarea is submitted, text area gets emptied`, () => {
	wrapped.find(`textarea`).simulate(`change`, {
		target: { value: `new comment` },
	})
	wrapped.update()
	wrapped.find(`form`).simulate(`submit`, {
		preventDefault: () => {},
	})
	wrapped.update()
	expect(wrapped.find(`textarea`).prop(`value`)).toEqual('')
})
