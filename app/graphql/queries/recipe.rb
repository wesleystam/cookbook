# frozen_string_literal: true

module Queries
  class Recipe < Queries::BaseQuery
    description 'Find the recipe by id'

    type Types::RecipeType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      ::Recipe.find(id)
    end
  end
end
