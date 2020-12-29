# frozen_string_literal: true

module Types
  class SeasonType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id
    field :database_id, Int, null: false, method: :id

    field :name, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
