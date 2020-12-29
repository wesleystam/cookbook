# frozen_string_literal: true

module Mutations
  module Recipes
    class DestroyRecipe < BaseMutation
      field :recipe, Types::RecipeType, null: true

      argument :id, ID, required: true

      def resolve(id:)
        recipe = Recipe.find(id)
        recipe.destroy
        { recipe: recipe }
      end
    end
  end
end
