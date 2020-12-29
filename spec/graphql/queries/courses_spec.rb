# frozen_string_literal: true

require 'rails_helper'

module Queries
  RSpec.describe Courses do
    it 'returns all courses' do
      query = <<~GQL
        query {
          courses { databaseId }
        }
      GQL

      courses = create_list(:course, 3)
      response = query(query)

      expect(response.data['courses']).to include(
        { 'databaseId' => courses.first.id },
        { 'databaseId' => courses.second.id },
        { 'databaseId' => courses.third.id }
      )
    end
  end
end
