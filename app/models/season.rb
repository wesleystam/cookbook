# frozen_string_literal: true

class Season < ApplicationRecord
  validates :name, presence: true
end
