class CreateLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :logs do |t|
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :logs, :channel_id 
  end
end
