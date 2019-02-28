class PostController < ApplicationController
  def home
    render(plain: "Occam Razor")
  end
end
