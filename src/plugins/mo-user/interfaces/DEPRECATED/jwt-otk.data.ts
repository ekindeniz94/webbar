export interface IJWTOtkData {
  key: string;
  user: string;
  /**
   * https://github.com/auth0/node-jsonwebtoken#token-expiration-exp-claim
   */
  // NumericDate
  exp: number;
  // NumericDate
  iat: number;
}
