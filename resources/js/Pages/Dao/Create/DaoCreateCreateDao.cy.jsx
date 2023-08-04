import React from 'react'
import CreateDao from './DaoCreate'

describe('<CreateDao />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateDao />)
  })
})