class AddSeatsToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :seating, :integer, :null => false, :default => 2
  end
end
