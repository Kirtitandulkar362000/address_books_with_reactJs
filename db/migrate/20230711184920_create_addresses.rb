class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :name, null: false
      t.integer :age, null: false
      t.string :gender, null: false
      t.integer :contact_number, null: false
      t.string :c_address, null: false

      t.timestamps
    end
  end
end
