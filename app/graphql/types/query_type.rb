# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :courses, resolver: Queries::Courses
    field :recipes, resolver: Queries::Recipes
    field :seasons, resolver: Queries::Seasons
  end
end
