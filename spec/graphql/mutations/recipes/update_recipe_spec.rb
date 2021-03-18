# frozen_string_literal: true

require 'rails_helper'

module Mutations
  module Recipes
    RSpec.describe UpdateRecipe do
      let(:recipe) { create(:recipe) }
      subject { mutation(graphql, variables: variables).data['updateRecipe'] }

      context 'when the params are valid' do
        let(:variables) { { database_id: recipe.id } }
        let(:graphql) do
          <<~GHL
            mutation UpdateRecipe($databaseId: Int!) {
              updateRecipe(input: { databaseId: $databaseId name: "Boontjes" }) {
                recipe { databaseId }
              }
            }
          GHL
        end

        it 'update the recipe' do
          subject
          expect(recipe.reload).to have_attributes(
            name: 'Boontjes'
          )
        end

        it 'return the recipe' do
          expect(subject['recipe']['databaseId']).to be_present
        end
      end

      context 'when the params are invalid' do
        let(:variables) { { database_id: recipe.id } }
        let(:graphql) do
          <<~GHL
            mutation UpdateRecipe($databaseId: Int!) {
              updateRecipe(input: { databaseId: $databaseId name: "" }) {
                recipe { databaseId }
                errors { field messages }
              }
            }
          GHL
        end

        it 'returns the validation errors' do
          expect(subject['errors']).to include(
            { 'field' => 'name', 'messages' => ["Name can't be blank"] }
          )
        end
      end
    end
  end
end
