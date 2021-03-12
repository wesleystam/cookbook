# frozen_string_literal: true

module Mutations
  module Recipes
    class CreateRecipe < BaseMutation
      field :recipe, Types::RecipeType, null: true
      field :errors, [Types::ValidationErrorType], null: false

      argument :name, String, required: false
      argument :characteristic, String, required: false
      argument :comment, String, required: false
      argument :ingredients, String, required: false
      argument :preparation, String, required: false
      argument :vegetarian, Boolean, required: false
      argument :cooking_time, Integer, required: false
      argument :course_id, ID, required: false
      argument :season_id, ID, required: false
      argument :recipe_photos, [Types::RecipePhotosAttributesType], required: false

      def resolve(params)
        Helper.convert_to_attributes(params, :recipe_photos) if params[:recipe_photos].present?
        recipe = Recipe.new(params)

        if recipe.save
          { recipe: recipe, errors: [] }
        else
          { recipe: nil, errors: Helper.validation_messages(recipe) }
        end
      end
    end
  end
end
