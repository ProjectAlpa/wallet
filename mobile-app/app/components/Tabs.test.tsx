import { render } from '@testing-library/react-native'
import React from 'react'
import { Tabs } from './Tabs'

jest.mock('@shared-contexts/ThemeProvider')

describe('Tabs component', () => {
  it('should match snapshot with 2 tabs', async () => {
    const tabsList = [
      {
        id: 'BROWSE_LOANS',
        label: 'Browse loans',
        disabled: false,
        handleOnPress: jest.fn
      },
      {
        id: 'YOUR_VAULTS',
        label: 'Your vaults',
        disabled: true,
        handleOnPress: jest.fn
      }
    ]
    const rendered = render(<Tabs tabSections={tabsList} activeTabKey='BROWSE_LOANS' />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })

  it('should match snapshot with 5 tabs', async () => {
    const tabsList = [
      {
        id: 'BROWSE_LOANS',
        label: 'Browse loans',
        disabled: false,
        handleOnPress: jest.fn
      },
      {
        id: 'YOUR_VAULTS',
        label: 'Your vaults',
        disabled: false,
        handleOnPress: jest.fn
      },
      {
        id: 'COLLATERAL',
        label: 'Collateral',
        disabled: true,
        handleOnPress: jest.fn
      },
      {
        id: 'AUCTION',
        label: 'Auction',
        disabled: false,
        handleOnPress: jest.fn
      },
      {
        id: 'AUCTION2',
        label: 'Auction',
        disabled: false,
        handleOnPress: jest.fn
      }
    ]
    const rendered = render(<Tabs tabSections={tabsList} activeTabKey='BROWSE_LOANS' />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
