# frozen_string_literal: true

class RecipePhoto < ApplicationRecord
  belongs_to :recipe

  has_one_attached :photo
end
