# frozen_string_literal: true

module Types
  class RecipePhotoType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :id
    field :database_id, Int, null: false, method: :id

    field :url, String, null: false
    field :url_thumb_1x, String, null: false
    field :url_thumb_2x, String, null: false
    field :url_large_1x, String, null: false
    field :url_large_2x, String, null: false
    field :position, Integer, null: true
    field :recipe_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def url
      Rails.application.routes.url_helpers.rails_blob_path(object.photo, only_path: true)
    end

    def url_thumb_1x
      Rails.application.routes.url_helpers.rails_representation_path(
        object.photo.variant(resize_to_limit: [285, 285]),
        only_path: true
      )
    end

    def url_thumb_2x
      Rails.application.routes.url_helpers.rails_representation_path(
        object.photo.variant(resize_to_limit: [570, 570]),
        only_path: true
      )
    end

    def url_large_1x
      Rails.application.routes.url_helpers.rails_representation_path(
        object.photo.variant(resize_to_limit: [1100, 1100]),
        only_path: true
      )
    end

    def url_large_2x
      Rails.application.routes.url_helpers.rails_representation_path(
        object.photo.variant(resize_to_limit: [2200, 2200]),
        only_path: true
      )
    end
  end
end
