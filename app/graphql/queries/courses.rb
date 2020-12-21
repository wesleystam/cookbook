# frozen_string_literal: true

module Queries
  class Courses < Queries::BaseQuery
    description 'Find all courses'

    type [Types::CourseType], null: false

    def resolve
      ::Course.all
    end
  end
end
