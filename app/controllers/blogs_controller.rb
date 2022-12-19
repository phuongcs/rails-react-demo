class BlogsController < ApplicationController
  before_action :set_blog, only: %i[ show update ]

  def index
    @blogs = Blog.all
  end

  def new

  end

  def create
    @blog = Blog.create permitted_params
    render :index
  end

  def update
    Blog.update permitted_params
  end

  def show

  end

  def set_blog
    @blog = Blog.find params[:id]
  end

  def permitted_params
    params.require(:blog).permit(:title, :content)
  end
end
