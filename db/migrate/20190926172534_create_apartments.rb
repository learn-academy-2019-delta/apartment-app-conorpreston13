class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :address
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
