# frozen_string_literal: true

require 'rails_helper'

module Mutations
  module MenuItems
    RSpec.describe CreateMenuItem do
      subject { mutation(graphql, variables: variables).data['createMenuItem'] }

      context 'when the params are valid' do
        let(:recipe) { create(:recipe) }
        let(:graphql) do
          'mutation x($input: CreateMenuItemInput!) { createMenuItem(input: $input) { menuItem { id } } }'
        end
        let(:variables) do
          {
            input: {
              day: '20-07-2020',
              position: 0,
              recipe_id: recipe.id
            }
          }
        end

        it 'create the menu_item' do
          expect { subject }.to change { MenuItem.count }.by(1)
        end

        it 'return the menu_item' do
          expect(subject['menuItem']['id']).to be_present
        end
      end

      context 'when the params are invalid' do
        let(:graphql) do
          <<~GHL
            mutation x($input: CreateMenuItemInput!) {
              createMenuItem(input: $input) {
                menuItem { id }
                errors { field messages }
              }
            }
          GHL
        end
        let(:variables) do
          {
            input: {
              day: '',
              position: 0
            }
          }
        end

        it 'returns the validation errors' do
          expect(subject['errors']).to include(
            { 'field' => 'day', 'messages' => ["Day can't be blank"] },
            { 'field' => 'recipe', 'messages' => ['Recipe must exist'] }
          )
        end
      end
    end
  end
end
