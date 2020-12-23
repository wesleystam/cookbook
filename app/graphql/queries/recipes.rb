# frozen_string_literal: true

module Queries
  class Recipes < Queries::BaseQuery
    description 'Find all recipes'

    type Types::RecipeType.connection_type, null: false

    argument :query, String, required: false
    argument :vegetarian, Boolean, required: false
    argument :sort_by, String, required: false
    argument :sort_direction, String, required: false
    argument :course_id, ID, required: false
    argument :season_id, ID, required: false

    def resolve(params = {})
      scope = ::Recipe.all
      scope = scope_filter(scope, params)
      scope_order(scope, params)
    end

    def scope_filter(scope, params)
      scope = scope.where('name LIKE ?', "%#{params[:query]}%") if params[:query].present?
      scope = scope.where(vegetarian: params[:vegetarian]) if params[:vegetarian].present?
      scope = scope.where(course_id: params[:course_id]) if params[:course_id].present?
      scope = scope.where(season_id: params[:season_id]) if params[:season_id].present?
      scope
    end

    def scope_order(scope, params)
      direction = params[:sort_direction] == 'asc' ? :asc : :desc
      attributes = params[:sort_by].presence || :id
      scope.order("#{attributes} #{direction}")
    end
  end
end
