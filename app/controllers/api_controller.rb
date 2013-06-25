class ApiController < ApplicationController
  def index
    render json: {
      name:         'Bradley Thomas Herman',
      age:          27,
      description:  "I'm fairly awesome.",
      contact_info: {
        email: {
          username: 'bradley.t.herman',
          provider: 'gmail.com'
        }    
      }
    }
  end
end