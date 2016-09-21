import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Pinky from 'src/'

describe('Pinky', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('throws if promise prop is not a promise', () => (
    expect(() => (
      render(<Pinky />, node)
    )).toThrow(`prop 'promise' must be an instance of Promise`)
  ))

})
