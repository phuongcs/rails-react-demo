class AddInitialCategories < ActiveRecord::Migration[7.0]
  def change
    Category.create name: 'Drink'
    Category.create name: 'Food'
    Category.create name: 'Travel'
  end
end
