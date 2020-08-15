import React, { Component } from "react";

export default class SearchBar extends Component {

    state={
        term:''
    }

    onInputChange(event){
        console.log(event.target.value)
    }
    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <form onSubmit={this.onFormSubmit}>
        <div className="field">
          <div className="center">
          <div className="ui large icon input">
  <input type="text"  className='input' name="search" onChange={(e)=>this.setState({term:e.target.value})} placeholder="ex-car" />
  
</div>&nbsp;<img className="eye" alt="eye" onClick={this.onFormSubmit} src="https://img.icons8.com/office/40/000000/visible.png"/>
            
          </div>
        </div>
        </form>
        
      </div>
    );
  }
}
