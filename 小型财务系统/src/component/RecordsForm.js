import React, { Component } from 'react';

import *as RecordsAPI from '../utils/RecordsAPI';

class RecordsForm extends Component {
    constructor(props){
        super(props);
        this.state={
            date:"",
            title:"",
            amount:""
        }
    }
    handleChange(event){
        let name,obj;
        name=event.target.name;
        this.setState((
            obj={},
                obj[""+name]=event.target.value,
                obj
        ));
        console.log(event.target.value);
    }
    handleSubmit(e)
    {
        e.preventDefault();
        const data={date:this.state.date,title:this.state.title,amount:Number.parseInt(this.state.amount,0)};
        RecordsAPI.create(data).then(
            response=>{
                this.props.handleNewRocord(response.data);
                this.setState({
                    date:"",
                    title:"",
                    amount:""
                })
            }
        ).catch(
            error=>console.log(error.message)
        )
    }
    valid(){
        return this.state.date&&this.state.title&&this.state.amount;
    }
    render() {
        return (
            <form className="form-inline mb-3" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange.bind(this)}></input>
                </div>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" placeholder="Title" name="title"value={this.state.title}onChange={this.handleChange.bind(this)}></input>
                </div>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" placeholder="Amount" name="amount" value={this.state.amount}onChange={this.handleChange.bind(this)}></input>
                </div>
                <button className="btn btn-primary mr-1" disabled={!this.valid()}>Create Records</button>
            </form>
        );
    }
}

export default RecordsForm;