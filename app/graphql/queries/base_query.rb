# frozen_string_literal: true

module Queries
  class BaseQuery < GraphQL::Schema::Resolver
    def scope_per_page(scope, params)
      limit = params[:limit] || 52
      page = params[:page] || 1

      offset = page > 1 ? limit * (page - 1) : 0
      scope.offset(offset).limit(limit)
    end
  end
end
