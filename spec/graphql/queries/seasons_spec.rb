# frozen_string_literal: true

require 'rails_helper'

module Queries
  RSpec.describe Seasons do
    it 'returns all seasons' do
      query = <<~GQL
        query {
          seasons { databaseId }
        }
      GQL

      seasons = create_list(:season, 3)
      response = query(query)

      expect(response.data['seasons']).to include(
        { 'databaseId' => seasons.first.id },
        { 'databaseId' => seasons.second.id },
        { 'databaseId' => seasons.third.id }
      )
    end
  end
end
