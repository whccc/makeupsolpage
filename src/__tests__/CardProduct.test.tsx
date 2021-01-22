// __tests__/hello_world.test.js
import { shallow } from 'enzyme'
import React from 'react'
import { CardProduct } from '../components/CardProduct'
describe('Hello, Enzyme!', () => {
  it('renders', async () => {
    const wrapper = await shallow(
      <CardProduct
        Img={null}
        _id={'000'}
        strName={'Producto'}
        strPrice={1000}
        strDescription={'Producto good'}
      />
    )
    expect(wrapper.find('p').html()).toMatch('Producto good')
  })

  /* it('renders snapshots, too', () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  }) */
})
