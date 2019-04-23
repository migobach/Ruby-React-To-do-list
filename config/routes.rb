Rails.application.routes.draw do
  namespace :api do
    resources :items, only: [:index, :create, :update, :destroy]
  end


  get '*other', to: 'static#index'
end
