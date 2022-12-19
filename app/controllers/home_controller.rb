class HomeController < ApplicationController
  def index
    @category = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'blueberry', label: 'blue' }
    ]
  end


end
