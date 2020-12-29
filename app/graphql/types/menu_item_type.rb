# frozen_string_literal: true

module Types
  class MenuItemType < Types::BaseObject
    field :id, ID, null: false
    field :day, GraphQL::Types::ISO8601Date, null: true
    field :position, Integer, null: true
    field :recipe_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
