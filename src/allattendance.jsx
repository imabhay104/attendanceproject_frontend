import React, { Component } from 'react'
import service from './service';
import {Button,FormControl,Form} from 'react-bootstrap';

class UpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
           attendance:[],
           value: '',
             value1:''
        }
        this.searchbyprn=this.searchbyprn.bind(this);
        this.searchbycourseid=this.searchbycourseid.bind(this);
    }

 
    componentDidMount(){
        service.getattendance().then( (res) =>{
            this.setState({ attendance: res.data });
    

             });
             
     }      
     searchbyprn(event)
    {
        this.setState({value: event.target.value});
        service.getbyprn(this.state.value).then((res) => {
            this.setState({ attendance: res.data });
        }
        );

    }
    searchbycourseid(event1)
    {
        this.setState({value1: event1.target.value});
        service.getbycourse_id(this.state.value1).then((res) => {
            this.setState({ attendance: res.data });
        }
        );

    }
   
    
    render() {
        return (
            <div>
                  <Form inline>
                <label>
    Search by PRn:  
      <FormControl type="text" placeholder="Search" value={this.state.value}  onChange={this.searchbyprn} className="mr-sm-2" />
      </label>

    </Form>
           
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th>PRN</th>
                                <th>DATE</th>
                                <th>COURSE_ID</th>
                                <th>TIME</th>
                                <th>ATTENDANCE</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.attendance.map(
                                    attendance =>
                                        <tr> {attendance.prn}
                                            <td> {attendance.date} </td>
                                            <td> {attendance.course_id} </td>
                                            <td> {attendance.time} </td>
                                            <td> {attendance.present.toString()} </td>
                                           


                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default UpdateComponent