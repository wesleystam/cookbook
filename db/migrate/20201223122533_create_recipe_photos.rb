class CreateRecipePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_photos do |t|
      t.integer :position, default: 0
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
