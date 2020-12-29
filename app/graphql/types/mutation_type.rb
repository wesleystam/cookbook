# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_recipe, mutation: Mutations::Recipes::CreateRecipe
    field :destroy_recipe, mutation: Mutations::Recipes::DestroyRecipe
    field :update_recipe, mutation: Mutations::Recipes::UpdateRecipe
  end
end
