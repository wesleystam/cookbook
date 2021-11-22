# frozen_string_literal: true

module Types
  class MenuItemAttributesType < Types::BaseInputObject
    argument :id, ID, required: false
    argument :_destroy, Boolean, required: false
    argument :position, Integer, required: false
    argument :day, String, required: false
  end
end
