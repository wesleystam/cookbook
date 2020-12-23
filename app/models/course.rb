# frozen_string_literal: true

class Course < ApplicationRecord
  has_many :recipes, dependent: :nullify

  validates :name, presence: true
end
