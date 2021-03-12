# frozen_string_literal: true

Rails.application.routes.draw do
  post '/graphql', to: 'graphql#execute'
  post '/rails/active_storage/direct_uploads' => 'direct_uploads#create'
end
