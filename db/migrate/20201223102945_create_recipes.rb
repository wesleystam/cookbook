class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :characteristic
      t.text :comment
      t.text :ingredients
      t.text :preparation
      t.boolean :vegetarian, default: false
      t.integer :cooking_time, default: 0
      t.integer :book_number
      t.integer :page_number
      t.references :course, foreign_key: true
      t.references :season, foreign_key: true

      t.timestamps
    end
  end
end
