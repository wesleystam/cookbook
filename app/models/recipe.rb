# frozen_string_literal: true

class Recipe < ApplicationRecord
  belongs_to :course, optional: true
  belongs_to :season, optional: true
  has_many :menu_items, dependent: :destroy
  has_many :recipe_photos, dependent: :destroy
  has_many :ordered_recipe_photos, -> { order(:position) }, class_name: 'RecipePhoto', inverse_of: :recipe

  validates :name, presence: true

  accepts_nested_attributes_for :menu_items, allow_destroy: true
  accepts_nested_attributes_for :recipe_photos, allow_destroy: true
end
