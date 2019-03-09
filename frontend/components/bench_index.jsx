import React from 'react';
import BenchIndexItem from './bench_index_item';

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
       let benchItems = benches.map(bench => <BenchIndexItem key={bench.id} description={bench.description} lat={bench.lat} lng={bench.lng}/>)
        return (
            <div>
                <ul>
                    {benchItems}
                </ul>
            </div>
        )
    }
}

export default BenchIndex;