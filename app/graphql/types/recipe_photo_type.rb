# frozen_string_literal: true

module Types
  class RecipePhotoType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id
    field :database_id, Int, null: false, method: :id

    field :url, String, null: false
    field :position, Integer, null: true
    field :recipe_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def url
      Rails.application.routes.url_helpers.rails_blob_url(object.file)
    end
  end
end
