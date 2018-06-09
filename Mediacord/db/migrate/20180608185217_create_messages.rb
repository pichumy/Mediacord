class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :text, null: false
      t.integer :log_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :messages, :log_id
    add_index :messages, :user_id
  end
end
