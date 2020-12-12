import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'David Hwang',
    email: 'david@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Brian Kang',
    email: 'brian@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
