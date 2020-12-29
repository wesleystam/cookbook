# frozen_string_literal: true

require 'rails_helper'

module Queries
  RSpec.describe Recipes do
    let!(:recipe) { create(:recipe, recipe_photos: build_list(:recipe_photo, 2)) }
    let(:graphql) do
      <<~GQL
        query {
          recipe(id: "#{recipe.id}") {
            databaseId
            recipePhotos { position }
          }
        }
      GQL
    end

    subject { query(graphql).data['recipe'] }

    it 'return the recipe' do
      expect(subject).to include(
        { 'databaseId' => recipe.id }
      )
    end
  end
end
