Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resource :search, only: [:show]
    end
    resource :sessions, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resource :user_list, only: [:show]
      resource :join_server, only: [:create]
    end
    resources :channels, only: [:create, :destroy, :update, :show]
    resources :messages, only: [:show, :create]

    get '/searches/servers', to: 'searches#servers'
    get '/searches/users', to: 'searches/#users'
  end

  root to: 'static_pages#root'
  get '*path' => redirect('/')

end
