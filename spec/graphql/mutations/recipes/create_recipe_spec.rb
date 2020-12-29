# frozen_string_literal: true

require 'rails_helper'

module Mutations
  module Recipes
    RSpec.describe CreateRecipe do
      subject { mutation(graphql).data['createRecipe'] }

      context 'when the params are valid' do
        let(:graphql) { 'mutation { createRecipe(input: { name: "Boontjes" }) { recipe { id } } }' }

        it 'create the recipe' do
          expect { subject }.to change { Recipe.count }.by(1)
        end

        it 'return the recipe' do
          expect(subject['recipe']['id']).to be_present
        end
      end

      context 'when the params are invalid' do
        let(:graphql) { 'mutation { createRecipe(input: { name: "" }) { recipe { id } errors { field messages } } }' }

        it 'returns the validation errors' do
          expect(subject['errors']).to include(
            { 'field' => 'name', 'messages' => ["Name can't be blank"] }
          )
        end
      end
    end
  end
end
