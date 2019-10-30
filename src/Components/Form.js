import React,{Component} from 'react';

class Titles extends Component{
  render(){
    return(
        
        <form onSubmit = {this.props.getWeather}>
            <div >
            <h4 >City</h4>
            {/* user inputs the city */}
            <input  type ="text" name ="city" placeholder = "Enter City"/>
           
            </div>
            <div >
                {/* user inputs the country */}
            <h4>Country</h4>
            <input  type ="text" name ="country" placeholder = "Enter Country"/>
            <button>Get Weather</button>
            </div>
          
            
        </form >
    )
  }
}

export default Titles;