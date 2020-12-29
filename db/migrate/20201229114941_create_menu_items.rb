class CreateMenuItems < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_items do |t|
      t.date :day
      t.integer :position, default: 0
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
