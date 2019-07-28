import React,{Component}  from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  deleteHandler(message){
    alert(message);
  }
  render(){
    let subscribers = [
      {
        id: 1,
        name: "Sandy",
        phone: 6787888988
      },
      {
        id: 2,
        name: "Akshay",
        phone: "8498989008"
      }
    ];
    return (
      <div>
        <Header heading="Phone Directory"/>
        <button className="add-btn">Add</button>
        <div>
        <div className="column-heading">
          <span className="grid-item">Name</span>
        
        <br/>
          <span className="grid-item">Phone</span>
        </div>
        {
          subscribers.map(subscriber => {
          return <div className="column-heading" key={subscriber.id}>
          <span className="grid-item">{subscriber.name}</span>
        
        <br/>
          <span className="grid-item">{subscriber.phone}</span>
          <span><button className="delete-btn" onClick={this.deleteHandler.bind(this, "Delete Clicked Handler")}>Delete</button></span>
        </div>
        }
        )
        }

        </div>
      </div>
    );
  };
  
}

export default App;
