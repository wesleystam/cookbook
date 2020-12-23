# frozen_string_literal: true

class Recipe < ApplicationRecord
  belongs_to :course, optional: true
  belongs_to :season, optional: true

  validates :name, presence: true
end
