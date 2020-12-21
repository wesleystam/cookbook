# frozen_string_literal: true

module Queries
  class Seasons < Queries::BaseQuery
    description 'Find all seasons'

    type [Types::SeasonType], null: false

    def resolve
      ::Season.all
    end
  end
end
