# frozen_string_literal: true

module Types
  class RecipePhotoType < Types::BaseObject
    field :id, ID, null: false
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
