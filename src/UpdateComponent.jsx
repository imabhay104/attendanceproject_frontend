import React, { Component } from 'react'
import service from './service';

class UpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            date:'',
            course_id: '',
            time: '',
          //  present: '',
        }
        this.changedateHandler = this.changedateHandler.bind(this);
        this.changecourse_idHandler = this.changecourse_idHandler.bind(this);
        this.changetimeHandler = this.changetimeHandler.bind(this);
       // this.changepresentHandler = this.changepresentHandler.bind(this);

        this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
    }

 
    componentDidMount(){


        service.getstudentsdata().then( (res) =>{
            let prn1 = res.data;
            console.log('prn1 => ' + JSON.stringify(prn1));
            service.submitprndetected(prn1).then( (res) =>{

                service.getdetected_prn().then( (res) =>{
                    let prn = res.data;
                    console.log('prn => ' + JSON.stringify(prn));
                    service.Submitdetected_prn(prn).then( (res) =>{
                    });
    
                 })
            });

         });
       ;
             
             
     }      
    
    saveOrUpdateBook = (e) => {
        e.preventDefault();
        
        let attendance = {
            date: this.state.date, 
            course_id: this.state.course_id, 
            time: this.state.time,
            //present: this.state.present

        };

        console.log('attendance => ' + JSON.stringify(attendance));
       
        service.SubmitAttendance(attendance).then( res => {
            });
        }
    
    
    changedateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changecourse_idHandler= (event) => {
        this.setState({course_id: event.target.value});
    }

    changetimeHandler= (event) => {
        this.setState({time: event.target.value});
       // this.setState({present: true});

    }
  //  changepresentHandler= (event) => {
    //    this.setState({present: event.target.value});
   //}
    

    
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
                                            <label> Date: </label>
                                            <input placeholder="date" 
                                            name="date"
                                             className="form-control" 
                                                value={this.state.date}
                                                 onChange={this.changedateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> course_id: </label>
                                            <input placeholder="course_id"
                                             name="course_id"
                                              className="form-control" 
                                                value={this.state.course_id}
                                                 onChange={this.changecourse_idHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> time: </label>
                                            <input placeholder="time" 
                                            name="time"
                                             className="form-control" 
                                                value={this.state.time}
                                                 onChange={this.changetimeHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateBook}>Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateComponent