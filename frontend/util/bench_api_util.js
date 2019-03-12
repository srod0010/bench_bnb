export const fetchBenches = filter => (
    $.ajax({
        method: 'GET',
        url: 'api/benches',
        data: filter
    })
);

export const createBench = bench => (
    $.ajax({
        method: 'POST',
        url: 'api/benches',
        data: {bench}
    })
)