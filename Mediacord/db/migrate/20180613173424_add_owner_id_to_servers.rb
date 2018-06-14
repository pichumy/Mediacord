class AddOwnerIdToServers < ActiveRecord::Migration[5.1]
  def change
    add_column :servers, :owner_id, :integer 
  end
end
