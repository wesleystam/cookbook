# frozen_string_literal: true

module Mutations
  module MenuItems
    class CreateMenuItem < BaseMutation
      field :menu_item, Types::MenuItemType, null: true
      field :errors, [Types::ValidationErrorType], null: false

      argument :day, String, required: false
      argument :position, Integer, required: false
      argument :recipe_id, Integer, required: false

      def resolve(params)
        menu_item = MenuItem.new(params)

        if menu_item.save
          { menu_item: menu_item, errors: [] }
        else
          { menu_item: nil, errors: Helper.validation_messages(menu_item) }
        end
      end
    end
  end
end
