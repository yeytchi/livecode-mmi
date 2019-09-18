Rails.application.routes.draw do
  root to: 'pages#home'

  get '/structure', to: 'pages#structure'
  get '/author', to: 'pages#author'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
