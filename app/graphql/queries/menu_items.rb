# frozen_string_literal: true

module Queries
  class MenuItems < Queries::BaseQuery
    description 'Find all menu_items'

    type [Types::MenuItemType], null: false

    def resolve
      ::MenuItem.all
    end
  end
end
