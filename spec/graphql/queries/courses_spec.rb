# frozen_string_literal: true

require 'rails_helper'

module Queries
  RSpec.describe Courses do
    it 'returns all courses' do
      query = <<~GQL
        query {
          courses { id }
        }
      GQL

      courses = create_list(:course, 3)
      response = query(query)

      expect(response.data['courses']).to include(
        { 'id' => courses.first.id.to_s },
        { 'id' => courses.second.id.to_s },
        { 'id' => courses.third.id.to_s }
      )
    end
  end
end
