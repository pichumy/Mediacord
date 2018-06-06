Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :sessions, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :channels, only: [:create, :destroy, :update]
  end

  root to: 'static_pages#root'
end
