import React from 'react';

class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.bench;
        this.update = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            console.log(e.target.value);
            return this.setState({
                [field]: e.target.value
            });
        }
    }

    render(){
        // debugger;
        return(
            <div className='form-container'>
                <form>
                    <input placeholder="description" type="text" value={this.state.description} onChange={this.update('description')}/>
                    <input placeholder="lat" type="text" value={this.state.lat} onChange={this.update('lat')}/>
                    <input placeholder="lng" type="text" value={this.state.lng} onChange={this.update('lng')}/>
                    <input placeholder="seating" type="text" value={this.state.seating} onChange={this.update('seating')}/>
            
                </form>
            </div>
        )
    }
}

export default BenchForm;