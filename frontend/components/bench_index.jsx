import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // add filter
        // this.props.fetchBenches()
    }

    render() {
       if (this.props.benches === undefined) {
           return <div>nothing yet</div>
       }
       let benches = this.props.benches;
       let benchItems = benches.map((bench,id) => <BenchIndexItem key={id} description={bench.description} lat={bench.lat} lng={bench.lng}/>)
    
        return (
            <div>
                    {benchItems}
            </div>
        )
    }
}

export default BenchIndex;