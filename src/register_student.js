import React, { Component } from 'react'
import service from './service';

class Submitteachersdata extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prn:'',
            roll_no:'',
            name:'',
            mother_name: '',
            DOB:'',
            email:'',
            address:'',
            pincode:'',
            phone_no:'',
            Gender:'',
            semester:'',
            department:''
        }
        this.changeprnHandler = this.changeprnHandler.bind(this);
        this.changeroll_noHandler = this.changeroll_noHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changemother_nameHandler = this.changemother_nameHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changepincodeHandler = this.changepincodeHandler.bind(this);
        this.changephone_noHandler = this.changephone_noHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changesemesterHandler = this.changesemesterHandler.bind(this);
        this.changedepartmentHandler = this.changedepartmentHandler.bind(this);

        this.saveOrUpidBook = this.saveOrUpidBook.bind(this);
    }
      
    
    saveOrUpidBook = (e) => {
        e.preventDefault();
        let attendance = {
            prn: this.state.prn, 
            roll_no: this.state.roll_no, 
            name: this.state.name,
            mother_name: this.state.mother_name,
            DOB: this.state.DOB,
            email: this.state.email,
            address: this.state.address,
            pincode: this.state.pincode,
            phone_no: this.state.phone_no,
            Gender: this.state.Gender,
            semester: this.state.semester,
            department: this.state.department
          };

        console.log('attendance => ' + JSON.stringify(attendance));
       
        service.Submittstudent(attendance).then( res => {
            });
        }
    
    
    changeprnHandler= (event) => {
        this.setState({prn: event.target.value});
    }

    changeroll_noHandler= (event) => {
        this.setState({roll_no: event.target.value});
    }

    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changemother_nameHandler= (event) => {
        this.setState({mother_name: event.target.value});
    }
    changeDOBHandler= (event) => {
        this.setState({DOB: event.target.value});
    }
    changeemailHandler= (event) => {
      this.setState({email: event.target.value});
  }
  changeaddressHandler= (event) => {
    this.setState({address: event.target.value});
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
changesemesterHandler= (event) => {
    this.setState({semester: event.target.value});
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
                                            <label> PRN: </label>
                                            <input placeholder="Enter your PRN number" 
                                            name="prn"
                                             className="form-control" 
                                                value={this.state.prn}
                                                 onChange={this.changeprnHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Roll No.: </label>
                                            <input placeholder="Roll number"
                                             name="roll_no"
                                              className="form-control" 
                                                value={this.state.roll_no}
                                                 onChange={this.changeroll_noHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> name: </label>
                                            <input placeholder="Your name" 
                                            name="name"
                                             className="form-control" 
                                                value={this.state.name}
                                                 onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> mother_name: </label>
                                            <input placeholder="Mother's name" 
                                            name="mother_name" className="form-control" 
                                                value={this.state.mother_name}
                                                 onChange={this.changemother_nameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> DOB: </label>
                                            <input placeholder="Date of Birth" 
                                            name="DOB"
                                             className="form-control" 
                                                value={this.state.DOB}
                                                 onChange={this.changeDOBHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" 
                                            name="email"
                                             className="form-control" 
                                                value={this.state.email}
                                                 onChange={this.changeemailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" 
                                            name="address"
                                             className="form-control" 
                                                value={this.state.address}
                                                 onChange={this.changeaddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Pincode: </label>
                                            <input placeholder="Pincode" 
                                            name="pincode"
                                             className="form-control" 
                                                value={this.state.pincode}
                                                 onChange={this.changepincodeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Phone No. </label>
                                            <input placeholder="Phone Number" 
                                            name="phone_no"
                                             className="form-control" 
                                                value={this.state.phone_no}
                                                 onChange={this.changephone_noHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" 
                                            name="Gender"
                                             className="form-control" 
                                                value={this.state.Gender}
                                                 onChange={this.changeGenderHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Semester: </label>
                                            <input placeholder="Semester" 
                                            name="semester"
                                             className="form-control" 
                                                value={this.state.semester}
                                                 onChange={this.changesemesterHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Department: </label>
                                            <input placeholder="Department" 
                                            name="department"
                                             className="form-control" 
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