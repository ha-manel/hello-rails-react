Rails.application.routes.draw do
  root 'root#index'

  get '/api/messages', to: 'root#greeting'
end
