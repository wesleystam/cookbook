# frozen_string_literal: true

require 'rails_helper'

module Mutations
  module MenuItems
    RSpec.describe DestroyMenuItem do
      let(:menu_item) { create(:menu_item) }
      subject { mutation(graphql, variables: variables).data['destroyMenuItem'] }

      context 'when the params are valid' do
        let(:variables) { { id: menu_item.id } }
        let(:graphql) do
          <<~GHL
            mutation DestroyMenuItem($id: ID!) {
              destroyMenuItem(input: { id: $id}) {
                menuItem { id }
              }
            }
          GHL
        end

        it 'update the menu_item' do
          subject
          expect(MenuItem.find_by(id: menu_item.id)).to be nil
        end
      end
    end
  end
end
