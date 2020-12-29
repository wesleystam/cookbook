# frozen_string_literal: true

require 'rails_helper'

module Mutations
  module Recipes
    RSpec.describe DestroyRecipe do
      let(:recipe) { create(:recipe) }
      subject { mutation(graphql, variables: variables).data['destroyRecipe'] }

      context 'when the params are valid' do
        let(:variables) { { id: recipe.id } }
        let(:graphql) do
          <<~GHL
            mutation DestroyRecipe($id: ID!) {
              destroyRecipe(input: { id: $id}) {
                recipe { id }
              }
            }
          GHL
        end

        it 'update the recipe' do
          subject
          expect(Recipe.find_by(id: recipe.id)).to be nil
        end
      end
    end
  end
end
