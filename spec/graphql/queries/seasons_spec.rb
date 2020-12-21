# frozen_string_literal: true

require 'rails_helper'

module Queries
  RSpec.describe Seasons do
    it 'returns all seasons' do
      query = <<~GQL
        query {
          seasons { id }
        }
      GQL

      seasons = create_list(:season, 3)
      response = query(query)

      expect(response.data['seasons']).to include(
        { 'id' => seasons.first.id.to_s },
        { 'id' => seasons.second.id.to_s },
        { 'id' => seasons.third.id.to_s }
      )
    end
  end
end
