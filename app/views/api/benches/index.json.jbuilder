# json.benches do
#     json.array! @benches.each do |bench|
#         json.extract! bench, :description, :lat, :lng
#     end
# end

@benches.each do |bench|
    json.set! bench.id do
        json.extract! bench, :description, :lat, :lng, :seating
    end
end