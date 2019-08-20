import React, { Component } from 'react';

class SearchBar extends Component {

SubmitHandhler = (e)=>{
    e.preventDefault();
  const userName= document.getElementById("in").value
  this.props.getrespos(userName)
}
    render() {
        return (
           <div>
                <form onSubmit={this.SubmitHandhler}>
                    <input type="text" placeholder="Write the userName" id="in" />
                    <button type="submit" className="btn btn-danger" >Submit</button>
                </form>

           </div>


        )
    }
}

export default SearchBar;