# frozen_string_literal: true

module Types
  class RecipePhotosAttributesType < Types::BaseInputObject
    argument :id, ID, required: false
    argument :_destroy, Boolean, required: false
    argument :position, Integer, required: false
    argument :signed_id, String, required: false
  end
end
