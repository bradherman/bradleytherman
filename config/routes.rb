Bradleytherman::Application.routes.draw do
  root to: 'api#index'
  
  resources :api
  namespace :api do
    resources :resume
  end
end
