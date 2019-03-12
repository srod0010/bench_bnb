import React from 'react';
import {withRouter} from 'react-router';

class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: '', seating: 2, lat: props.lat, lng: props.lng}
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    navigateToSearch() {
        this.props.history.push('/');
    }

    update(field) {
        return (e) => {
            console.log(e.target.value);
            return this.setState({
                [field]: e.target.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.createBench(this.state)
        this.navigateToSearch()
    }

    render(){
        // debugger;
        return(
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="description" type="text" value={this.state.description} onChange={this.update('description')}/>
                    <input placeholder="lat" type="text" disabled value={this.state.lat} onChange={this.update('lat')}/>
                    <input placeholder="lng" type="text" disabled value={this.state.lng} onChange={this.update('lng')}/>
                    <input placeholder="seating" type="text" value={this.state.seating} onChange={this.update('seating')}/>
                    <input type="submit" value="submit"/>
            
                </form>
            </div>
        )
    }
}

export default withRouter(BenchForm);