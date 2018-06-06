class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.string :avatar_url, default: "discord-logo.png"
      t.boolean :private, default: false

      t.timestamps
    end
    add_index :servers, :name
    add_index :servers, :avatar_url
  end
end
