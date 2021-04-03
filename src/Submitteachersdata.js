import React, { Component } from 'react'
import service from './service';

class Submitteachersdata extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id:'',
            email: '',
            name: '',
            mother_name: '',
            address:'',
            city:'',
            pincode:'',
            phone_no:'',
            Gender:'',
            department:''
        }
        this.changeidHandler = this.changeidHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changemother_nameHandler = this.changemother_nameHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changecityHandler = this.changecityHandler.bind(this);

        this.changepincodeHandler = this.changepincodeHandler.bind(this);
        this.changephone_noHandler = this.changephone_noHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changedepartmentHandler = this.changedepartmentHandler.bind(this);

        this.saveOrUpidBook = this.saveOrUpidBook.bind(this);
    }
      
    
    saveOrUpidBook = (e) => {
        e.preventDefault();
        let attendance = {
            id: this.state.id, 
            email: this.state.email, 
            name: this.state.name,
            mother_name: this.state.mother_name,
            address: this.state.address,
            city: this.state.city,
            pincode: this.state.pincode,
            phone_no: this.state.phone_no,
            Gender: this.state.Gender,
            department: this.state.department
          };

        console.log('attendance => ' + JSON.stringify(attendance));
       
        service.Submitteachersdata(attendance).then( res => {
            });
        }
    
    
    changeidHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeemailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changemother_nameHandler= (event) => {
        this.setState({mother_name: event.target.value});
    }
    changeaddressHandler= (event) => {
      this.setState({address: event.target.value});
  }
  changecityHandler= (event) => {
    this.setState({city: event.target.value});
}
changepincodeHandler= (event) => {
  this.setState({pincode: event.target.value});
}
changephone_noHandler= (event) => {
  this.setState({phone_no: event.target.value});
}
changeGenderHandler= (event) => {
  this.setState({Gender: event.target.value});
}
changedepartmentHandler= (event) => {
  this.setState({department: event.target.value});
}

    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">

                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> id: </label>
                                            <input placeholder="id" 
                                            name="id"
                                             className="form-control" 
                                                value={this.state.id}
                                                 onChange={this.changeidHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> email: </label>
                                            <input placeholder="email"
                                             name="email"
                                              className="form-control" 
                                                value={this.state.email}
                                                 onChange={this.changeemailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> name: </label>
                                            <input placeholder="name" 
                                            name="name"
                                             className="form-control" 
                                                value={this.state.name}
                                                 onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> mother_name: </label>
                                            <input placeholder="mother_name" 
                                            name="mother_name" className="form-control" 
                                                value={this.state.mother_name}
                                                 onChange={this.changemother_nameHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> address: </label>
                                            <input placeholder="address" 
                                            name="address" className="form-control" 
                                                value={this.state.address}
                                                 onChange={this.changeaddressHandler}/>
                                        </div>
                                
                                        <div className = "form-group">
                                            <label>city: </label>
                                            <input placeholder="city" 
                                            name="city" className="form-control" 
                                                value={this.state.city}
                                                 onChange={this.changecityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> pincode: </label>
                                            <input placeholder="pincode" 
                                            name="pincode" className="form-control" 
                                                value={this.state.pincode}
                                                 onChange={this.changepincodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> phone_no: </label>
                                            <input placeholder="phone_no" 
                                            name="phone_no" className="form-control" 
                                                value={this.state.phone_no}
                                                 onChange={this.changephone_noHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" 
                                            name="Gender" className="form-control" 
                                                value={this.state.Gender}
                                                 onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> department: </label>
                                            <input placeholder="department" 
                                            name="department" className="form-control" 
                                                value={this.state.department}
                                                 onChange={this.changedepartmentHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpidBook}>Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Submitteachersdata