class ApiController < ApplicationController
  def index
    render json: {
      verion:       '0.0.1',
      source:       'http://github.com/bradherman/bradleytherman',
      name:         'Bradley Thomas Herman',
      description:  'I\'m fairly awesome.',
      age:          27,
      contact: {
        email: {
          username: 'bradley.t.herman',
          provider: 'gmail.com'
        },
        chat: [
          {
            type:     'google talk',
            name:     'bradley.t.herman',
            provider: 'gmail.com'
          },
          {
            type:     'google talk',
            name:     'bherman',
            provider: 'bleacherreport.com'
          },
          {
            type:     'aim',
            name:     'carinishead',
            provider: nil
          }
        ],
        social: [
          {
            type: 'github',
            href: 'http://www.github.com/bradherman'
          },
          {
            type: 'facebook',
            href: 'http://www.facebook.com/bradleyherman'
          },
          {
            type: 'linkedin',
            href: 'http://www.linkedin.com/in/bradleyherman'
          },
          {
            type: 'twitter',
            href: 'http://www.twitter.com/bradherman'
          },
          {
            type: 'instagram',
            href: 'http://instagram.com/bradleyherman'
          }
        ]
      },
      resume:   nil,
      links:    [],
      projects: [],
      posts:    []]
    }
  end
end