# frozen_string_literal: true

require 'rails_helper'

module Queries
  RSpec.describe Recipes do
    let!(:recipes) { create_list(:recipe, 3) }
    let(:graphql) { 'query { recipes { nodes { id } } }' }

    subject { query(graphql).data['recipes']['nodes'] }

    it 'returns all recipes' do
      expect(subject).to include(
        { 'id' => recipes.first.id.to_s },
        { 'id' => recipes.second.id.to_s },
        { 'id' => recipes.third.id.to_s }
      )
    end

    context 'when query param is present' do
      let(:graphql) { 'query { recipes(query: "Bloem") { nodes { id } } }' }

      it 'finds the match recipe' do
        recipe = create(:recipe, name: 'Bloemkool')

        expect(subject.size).to be 1
        expect(subject).to include(
          { 'id' => recipe.id.to_s }
        )
      end
    end

    context 'when the vegetarian param is present' do
      let(:graphql) { 'query { recipes(vegetarian: true) { nodes { id } } }' }

      it 'finds the match recipe' do
        recipe = create(:recipe, vegetarian: true)

        expect(subject.size).to be 1
        expect(subject).to include(
          { 'id' => recipe.id.to_s }
        )
      end
    end

    context 'when the sort_by and sort_direction are present' do
      let(:graphql) { 'query { recipes(sortBy: "created_at", sortDirection: "desc") { nodes { id } } }' }

      it 'sorts the recipes' do
        expect(subject.map { |r| r['id'] }).to eq(recipes.reverse.map { |r| r.id.to_s })
      end
    end

    context 'when the sort_by is not present' do
      let(:graphql) { 'query { recipes(sortBy: "", sortDirection: "desc") { nodes { id } } }' }

      it 'sorts the recipes' do
        expect(subject.map { |r| r['id'] }).to eq(recipes.reverse.map { |r| r.id.to_s })
      end
    end

    context 'when the course_id param is present' do
      let(:course) { create(:course) }
      let(:graphql) { "query { recipes(courseId: \"#{course.id}\") { nodes { id } } }" }

      it 'finds the match recipe' do
        recipe = create(:recipe, course: course)

        expect(subject.size).to be 1
        expect(subject).to include(
          { 'id' => recipe.id.to_s }
        )
      end
    end

    context 'when the season_id param is present' do
      let(:season) { create(:season) }
      let(:graphql) { "query { recipes(seasonId: \"#{season.id}\") { nodes { id } } }" }

      it 'finds the match recipe' do
        recipe = create(:recipe, season: season)

        expect(subject.size).to be 1
        expect(subject).to include(
          { 'id' => recipe.id.to_s }
        )
      end
    end
  end
end
