Rails.application.routes.draw do
  get '/contact', controller: :contact, action: :index
  get '/about', controller: :about, action: :index
  # get '/products', controller: :products, action: :index
  resources :products, only: [:index, :show]
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
