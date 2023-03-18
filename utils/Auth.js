import * as jose from "jose";

export default class Auth {
  static SECRET_KEY = process.env.SECRET_KEY;

  static async generateToken(payload) {
    const secret = jose.base64url.decode(this.SECRET_KEY);
    const authToken = await new jose.EncryptJWT(payload)
      .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
      .setIssuedAt()
      .setExpirationTime("30m")
      .encrypt(secret);

    return authToken;
  }

  static async isAuthenticated(token) {
    try {
      const secret = jose.base64url.decode(this.SECRET_KEY);
      await jose.jwtDecrypt(token, secret);

      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
