import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Registration.scss'
import { withRouter } from 'react-router-dom';

class Registration extends Component {

    state = {
        roomId: null
    }

    onInputChange = (event) => {
        const value = event.target.value
        this.setState({
            roomId: value
        })
    }

    submitRoomID = () => {
        this.props.history.push('/youtube-studio')
    }

    render() {
        const {roomId} = this.state;
        return (
            <div className='registration'>

            <h1>Enter room ID</h1>
            <div className="inline-form">
                <div>
            <input className='form-input' type="text" name="roomId" onChange={this.onInputChange} value={roomId}/>

                </div>
                <div className="px-2" />
                <div>
                    <button type="button" onClick={this.submitRoomID} disabled={!roomId}  className='btn'>
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

export default withRouter(Registration);