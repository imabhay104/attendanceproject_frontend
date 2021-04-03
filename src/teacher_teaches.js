import React, { Component } from 'react'
import service from './service';

class teacher_teaches extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id:'',
            department:'',
            semester: '',
            course_id:'',
        }
        this.changeidHandler = this.changeidHandler.bind(this);
        this.changesemesterHandler = this.changesemesterHandler.bind(this);
        this.changecourse_idHandler = this.changecourse_idHandler.bind(this);

    

        this.saveOrUpidBook = this.saveOrUpidBook.bind(this);
    }
      
    
    saveOrUpidBook = (e) => {
        e.preventDefault();
        let attendance = {
            id: this.state.id, 
            semester: this.state.semester,
            course_id: this.state.course_id,
            department: this.state.department
          };

        console.log('attendance => ' + JSON.stringify(attendance));
       
        service.Submitteachersteachingdata(attendance).then( res => {
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
    changesemesterHandler= (event) => {
        this.setState({semester: event.target.value});
    }
    changeaddressHandler= (event) => {
      this.setState({address: event.target.value});
  }
  changecourse_idHandler= (event) => {
    this.setState({course_id: event.target.value});
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
                                            <label> department: </label>
                                            <input placeholder="department" 
                                            name="department" className="form-control" 
                                                value={this.state.department}
                                                 onChange={this.changedepartmentHandler}/>
                                        </div>
                                       
                                    
                                        <div className = "form-group">
                                            <label> semester: </label>
                                            <input placeholder="semester" 
                                            name="semester" className="form-control" 
                                                value={this.state.semester}
                                                 onChange={this.changesemesterHandler}/>
                                        </div>
                                        
                                      
                                
                                        <div className = "form-group">
                                            <label>course_id: </label>
                                            <input placeholder="course_id" 
                                            name="course_id" className="form-control" 
                                                value={this.state.course_id}
                                                 onChange={this.changecourse_idHandler}/>
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

export default teacher_teaches