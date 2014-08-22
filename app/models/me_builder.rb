class MeBuilder
  attr_accessor :age

  def initialize(age)
    @age = age
  end

  def build
    {
      meta: {
        self: 'http://www.bradleytherman.com'
      },
      version:      '0.0.2',
      source:       'http://github.com/bradherman/bradleytherman',
      name:         'Bradley Thomas Herman',
      description:  TAGLINES.sample,
      age:          age,
      contact: {
        email: [
          {
            username: 'bradley.t.herman',
            provider: 'gmail.com'  
          },
          {
            username: 'bherman',
            provider: 'bleacherreport.com'
          },
          {
            username: 'carinishead',
            provider: 'gmail.com'
          }
        ],
        chat: [
          {
            type:     'google talk',
            name:     'bradley.t.herman',
            provider: 'gmail.com'
          },
          {
            type:     'google talk',
            name:     'carinishead',
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
          },
          {
            type:     'yahoo',
            name:     'thehelpingphriendlybook'
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
      posts:    []
    }
  end
end