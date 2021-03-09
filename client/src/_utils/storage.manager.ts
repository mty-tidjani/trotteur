import { User } from '../_types/model';

const USER_COOKIE_KEY = "sohqrzyn", USER_DATA_KEY = "jFuqM";

export default class StorageManager {
  /**
   * Set user token in the cookie
   *
   * @param {User} user
   *
   * @return void
   */
  static setUserData(user: User): void {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  }

  /**
   * Get users full data from localstorage
   *
   * @return User|null
   */
  static getUserData(): User | null {
    const user: string | null = localStorage.getItem(USER_DATA_KEY);

    try {
      if (user) {
        return JSON.parse(user);
      }
    } catch (e) {
      // console.log('User Data Parsing Error => ', e.toString());
    }

    return null;
  }

  /**
   * Clears user data from cokkie and local storage
   *
   * @return void
   */
  static logoutUser(): void {
    // Todo clear storag
    localStorage.removeItem(USER_DATA_KEY);
    StorageManager.setUserToken('');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  /**
   * Set user token in the cookie
   *
   * @param {string} token
   *
   * @return void
   */
  public static setUserToken(token: string): void {
    StorageManager.setCookie(USER_COOKIE_KEY, token, 7);
  }

  /**
   * Set users token in cookies
   *
   * @return string|null
   */
  public static getUserToken(): string | null {
    return StorageManager.getCookie(USER_COOKIE_KEY);
  }

  /**
   * Set a value in the cookie
   *
   * @param {string} cookieName
   * @param {string} cookieValue
   * @param {number} expireDays
   *
   * @return void
   */
  public static setCookie(
    cookieName: string,
    cookieValue: string,
    expireDays: number
  ): void {
    const d: Date = new Date();

    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires: string = `expires=${d.toUTCString()}`;

    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  /**
   * Get a cookie
   *
   * @param {string} cookieName
   *
   * @return string|null
   */
  public static getCookie(cookieName: string): string | null {
    const name: string = `${cookieName}=`;
    const ca: string[] = document.cookie.split(';');

    for (let i: number = 0; i < ca.length; i += 1) {
      let c: string = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    return null;
  }
}
