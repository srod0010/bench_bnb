import React from 'react';

class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchBenches()
    }

    render() {
       if (this.props.benches === undefined) {
           return <div>nothing yet</div>
       }

       let benches = this.props.benches;
    //    debugger;
        return (
            <div>
                <h1>{benches['description']}</h1>
            </div>
        )
    }
}

export default BenchIndex;