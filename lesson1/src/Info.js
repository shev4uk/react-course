import React, { Component } from 'react'
import './Info.css'
import Avatar from "./Avatar";

export default class Info extends Component {
  nameUser = "Test user";
  descUser = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake";
  render() {
    return (
        <div className='Info-wrap'>
            <h3 className='Info-name'>{this.nameUser}</h3>
            <p className='Info-description'>{this.descUser}</p>
            <Avatar size={'l'} />
        </div>
    )
  }
}
