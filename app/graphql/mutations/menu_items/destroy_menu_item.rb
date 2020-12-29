# frozen_string_literal: true

module Mutations
  module MenuItems
    class DestroyMenuItem < BaseMutation
      field :menu_item, Types::MenuItemType, null: true

      argument :id, ID, required: true

      def resolve(id:)
        menu_item = MenuItem.find(id)
        menu_item.destroy
        { menu_item: menu_item }
      end
    end
  end
end
