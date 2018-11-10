import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {

  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form onSubmit={this.goToStore} className='store-selector'>
        <h2>Select a store</h2>
        <input type="text" ref={this.myInput} required value={getFunName()} />
        <button type='submit'>Visit store →</button>
      </form>
    )
  }
}

export default StorePicker;