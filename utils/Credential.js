import bcrypt from 'bcrypt'

export default class Credential {
  static SALT_ROUNDS = 10

  static hash(password) {
    return bcrypt.hash(password, this.SALT_ROUNDS);
  }

  static compare(password, hash) {
    return bcrypt.compare(password, hash)
  }
}