import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Registration.scss'

class Registration extends Component {

    state = {
        roomId: null
    }
    render() {
        return (
            <div className='registration'>

            <h1>Enter room ID</h1>
            <div className="inline-form">
                <div>
            <input className='form-input' type="text" name="roomId" onChange={this.onInputChange} value={this.state.roomId}/>

                </div>
                <div className="px-2" />
                <div>
                    <button type="button" className='btn'>
                        Go
                    </button>
                </div>
            </div>
                    
                
            </div>
        );
    }
}

Registration.propTypes = {

};

export default Registration;