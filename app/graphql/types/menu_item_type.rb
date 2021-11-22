# frozen_string_literal: true

module Types
  class MenuItemType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id
    field :database_id, Int, null: false, method: :id

    field :day, GraphQL::Types::ISO8601Date, null: true
    field :position, Integer, null: true
    field :recipe_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :recipe, RecipeType, null: false
  end
end
