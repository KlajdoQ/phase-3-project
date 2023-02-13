class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
 
  #enpoints 
  get "/books" do
    books = Book.all
    books.to_json()
  end

  post "/books" do
		books = Book.create(
			title: params[:title],
      author: params[:author],
      published_year: params[:published_year],
      description: params[:description],
			image_url: params[:image_url],
		)
		books.to_json
	end
end
