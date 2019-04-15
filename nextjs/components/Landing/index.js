import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from '../Hero'
import ReadMore from '../ReadMore';
import Title from '../Title'
import Awards from './Awards'

export default class Landing extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <Hero text='Support Group Network'/>
        <Awards text="Awards"/>
        <ReadMore/>
      
      </div>
    )
  }
}
