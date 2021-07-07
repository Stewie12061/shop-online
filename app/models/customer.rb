class Customer < ApplicationRecord
  def age
    Date.today.year-self.bod
  end
end
