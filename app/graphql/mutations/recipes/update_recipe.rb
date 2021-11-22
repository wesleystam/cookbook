# frozen_string_literal: true

module Mutations
  module Recipes
    class UpdateRecipe < BaseMutation
      field :recipe, Types::RecipeType, null: true
      field :errors, [Types::ValidationErrorType], null: false

      argument :id, ID, required: true, loads: Types::RecipeType, as: :recipe
      argument :name, String, required: false
      argument :characteristic, String, required: false
      argument :comment, String, required: false
      argument :ingredients, String, required: false
      argument :preparation, String, required: false
      argument :vegetarian, Boolean, required: false
      argument :cooking_time, Integer, required: false
      argument :course_id, ID, required: false
      argument :season_id, ID, required: false

      argument :menu_items, [Types::MenuItemAttributesType], required: false, as: :menu_items_attributes,
                                                             prepare: ->(x, _ctx) { x.map(&:to_h) }
      argument :recipe_photos, [Types::RecipePhotosAttributesType], required: false, as: :recipe_photos_attributes,
                                                                    prepare: ->(x, _ctx) { x.map(&:to_h) }

      def resolve(recipe:, **params)
        if recipe.update(params)
          { recipe: recipe, errors: [] }
        else
          { recipe: nil, errors: Helper.validation_messages(recipe) }
        end
      end
    end
  end
end
