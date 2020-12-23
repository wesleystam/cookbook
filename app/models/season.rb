# frozen_string_literal: true

class Season < ApplicationRecord
  has_many :recipes, dependent: :nullify

  validates :name, presence: true
end
