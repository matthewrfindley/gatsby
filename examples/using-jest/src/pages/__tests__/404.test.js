import React from 'react'
import { render } from 'react-testing-library'
import { StaticQuery } from 'gatsby' // mocked

import FourOhFour from '../404'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`,
        },
      },
    })
  )
})

describe(`404`, () => {
  it(`contains NOT FOUND text`, () => {
    const { getByText } = render(<FourOhFour />)

    const el = getByText(`NOT FOUND`)

    expect(el).toBeInTheDocument()
  })
})
