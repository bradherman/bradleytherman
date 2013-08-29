Bradleytherman::Application.routes.draw do
  root to: 'api#index'
  
  resources :api
end
