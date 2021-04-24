# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    add_field(GraphQL::Types::Relay::NodeField)
    add_field(GraphQL::Types::Relay::NodesField)

    field :courses, resolver: Queries::Courses
    field :menu_items, resolver: Queries::MenuItems
    field :recipe, resolver: Queries::Recipe
    field :recipes, resolver: Queries::Recipes
    field :recipe_pagination, resolver: Queries::RecipePagination
    field :seasons, resolver: Queries::Seasons
  end
end
