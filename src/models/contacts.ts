interface Phone {
  countryCode: string
  areaCode: string
  number: string
}

interface Email {
  username: string
  provider: string
}

interface Contact {
  type: 'email' | 'phone'
  data: Phone | Email
}

export const contacts: Contact[] = [
  {
    type: 'email',
    data: {
      username: 'bradley.t.herman',
    provider: 'gmail.com'
    }

  },
  {
    type: 'email',
    data: {
      username: 'brad',
    provider: 'tryrelease.com'
    }
  },
  {
    type: 'email',
    data: {
      username: 'brad',
    provider: 'jeevz.com'
    }
  },
  {
    type: 'phone',
    data: {
      countryCode: '+1',
    areaCode: '317',
    number: '3319718'
    }
  },
]
