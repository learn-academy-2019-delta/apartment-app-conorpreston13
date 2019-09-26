Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
