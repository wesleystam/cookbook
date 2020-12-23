# frozen_string_literal: true

class Recipe < ApplicationRecord
  belongs_to :course, optional: true
  belongs_to :season, optional: true
  has_many :recipe_photos, dependent: :destroy
  has_many :ordered_recipe_photos, -> { order(:position) }, class_name: 'RecipePhoto', inverse_of: :recipe

  validates :name, presence: true
end
