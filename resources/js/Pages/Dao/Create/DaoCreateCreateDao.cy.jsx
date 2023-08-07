import React from 'react'
import DaoCreate from './DaoCreate'

describe('<CreateDao />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DaoCreate />)
  })
})
