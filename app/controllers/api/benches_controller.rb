class Api::BenchesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        @benches = bounds ? Bench.in_bounds(bounds) : Bench.all
        render :index
    end

    def create
        @bench = Bench.new(bench_params)

        if @bench.save
            render :show
        else
            render json: @bench.errors.full_messages, status: 422
        end
    end

    private
    def bench_params
        params.require(:bench).permit(:description, :lat, :lng, :seating)
    end

    def bounds
        params[:bounds]
    end
end
