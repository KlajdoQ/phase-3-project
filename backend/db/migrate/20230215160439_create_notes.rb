class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :note
      t.integer :reader_id 
      t.integer :user_collection_id 
    end
  end
end
