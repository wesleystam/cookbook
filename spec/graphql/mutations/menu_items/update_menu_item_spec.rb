# frozen_string_literal: true

require 'rails_helper'

module Mutations
  module MenuItems
    RSpec.describe UpdateMenuItem do
      let(:menu_item) { create(:menu_item) }
      subject { mutation(graphql, variables: variables).data['updateMenuItem'] }

      context 'when the params are valid' do
        let(:graphql) do
          'mutation x($input: UpdateMenuItemInput!) { updateMenuItem(input: $input) { menuItem { id } } }'
        end
        let(:variables) do
          {
            input: {
              id: menu_item.id,
              day: '20-07-2020'
            }
          }
        end

        it 'update the menu_item' do
          subject
          expect(menu_item.reload).to have_attributes(
            day: Date.parse('20-07-2020')
          )
        end

        it 'return the menu_item' do
          expect(subject['menuItem']['id']).to be_present
        end
      end

      context 'when the params are invalid' do
        let(:graphql) do
          <<~GHL
            mutation x($input: UpdateMenuItemInput!) {
              updateMenuItem(input: $input) {
                menuItem { id }
                errors { field messages }
              }
            }
          GHL
        end
        let(:variables) do
          {
            input: {
              id: menu_item.id,
              day: '',
              position: 0
            }
          }
        end

        it 'returns the validation errors' do
          expect(subject['errors']).to include(
            { 'field' => 'day', 'messages' => ["Day can't be blank"] }
          )
        end
      end
    end
  end
end
