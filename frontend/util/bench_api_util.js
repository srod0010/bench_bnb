export const fetchBenches = filter => (
    $.ajax({
        method: 'GET',
        url: 'api/benches',
        data: filter
    })
);