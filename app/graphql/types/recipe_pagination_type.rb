# frozen_string_literal: true

module Types
  class RecipePaginationType < Types::BaseObject
    field :recipes, [Types::RecipeType], null: false
    field :total_count, Integer, null: false
  end
end
