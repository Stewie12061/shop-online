class Product < ApplicationRecord
  def short_title
    self.title[0..4]
  end
end
