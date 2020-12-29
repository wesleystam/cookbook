# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_recipe, mutation: Mutations::Recipes::CreateRecipe
    field :destroy_recipe, mutation: Mutations::Recipes::DestroyRecipe
    field :update_recipe, mutation: Mutations::Recipes::UpdateRecipe

    field :create_menu_item, mutation: Mutations::MenuItems::CreateMenuItem
    field :destroy_menu_item, mutation: Mutations::MenuItems::DestroyMenuItem
    field :update_menu_item, mutation: Mutations::MenuItems::UpdateMenuItem
  end
end
