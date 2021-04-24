# frozen_string_literal: true

require 'rails_helper'

module Queries
  RSpec.describe RecipePagination do
    let!(:recipes) { create_list(:recipe, 3) }
    let(:args) { {} }

    subject { described_class.new(object: nil, field: nil, context: {}).resolve(args) }

    it 'returns all recipes' do
      expect(subject).to include(
        recipes: recipes.reverse,
        total_count: 3
      )
    end

    context 'when query param is present' do
      let(:args) { { query: 'Bloem' } }

      it 'finds the match recipe' do
        recipe = create(:recipe, name: 'Bloemkool')

        expect(subject).to include(
          recipes: [recipe],
          total_count: 1
        )
      end
    end

    context 'when the vegetarian param is present' do
      let(:args) { { vegetarian: true } }

      it 'finds the match recipe' do
        recipe = create(:recipe, vegetarian: true)

        expect(subject).to include(
          recipes: [recipe],
          total_count: 1
        )
      end
    end

    context 'when the sort_by and sort_direction are present' do
      let(:args) { { sort_by: 'created_at', sort_direction: 'asc' } }

      it 'sorts the recipes' do
        expect(subject).to include(
          recipes: recipes,
          total_count: 3
        )
      end
    end

    context 'when the course_id param is present' do
      let(:course) { create(:course) }
      let(:args) { { course_id: course.id } }

      it 'finds the match recipe' do
        recipe = create(:recipe, course: course)

        expect(subject).to include(
          recipes: [recipe],
          total_count: 1
        )
      end
    end

    context 'when the season_id param is present' do
      let(:season) { create(:season) }
      let(:args) { { season_id: season.id } }

      it 'finds the match recipe' do
        recipe = create(:recipe, season: season)

        expect(subject).to include(
          recipes: [recipe],
          total_count: 1
        )
      end
    end
  end
end
