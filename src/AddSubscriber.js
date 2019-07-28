import React, {Component} from 'react';
import Header from './Header';
import './common/common.css';
import './AddSubscriber.css';

class AddSubscriber extends Component{
    render(){
        return (
            <div>
                <Header heading="Add Subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control">Name</label><br/>
                        <input id="name" type="text" className="input-control" name="name"/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone</label><br/>
                        <input id="phone" type="text" className="input-control" name="phone"/><br/><br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading"></span>
                            <span className="subscriber-info"></span>
                            <span className="subscriber-info"></span>
                        </div>
                        <button className="custom-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;