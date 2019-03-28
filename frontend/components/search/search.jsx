import React from 'react';

import BenchMap from '../bench_map/bench_map';
import BenchIndex from '../bench_index';
import FilterForm from './filter_form';

const Search = ({benches, fetchBenches, updateBounds, updateFilter, minSeating, maxSeating}) => (
    <div>
        <BenchMap benches={benches} updateBounds={updateBounds} updateFilter={updateFilter} />
        <FilterForm minSeating={minSeating} maxSeating={maxSeating} updateFilter={updateFilter} />
        <BenchIndex benches={benches} fetchBenches={fetchBenches} />
    </div>
)

export default Search;