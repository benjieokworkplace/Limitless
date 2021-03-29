class Config {

  static apiUrl(): string {
    return "http://ec2-18-222-109-113.us-east-2.compute.amazonaws.com"
  }

  static saveUserDetails(data: any) {
    sessionStorage.setItem("id", data["id"])
    sessionStorage.setItem("name", data["fullName"])
    sessionStorage.setItem("email", data["email"])
    sessionStorage.setItem("token", data["accessToken"])
  }

  static getName () {
    return sessionStorage.getItem("name")
  }
  static getEmail () {
    return sessionStorage.getItem("email")
  }

  static getId () {
    return sessionStorage.getItem("id")
  }

  static getToken () {
    return sessionStorage.getItem("token")
  }

  static userIsAuthenticated() : boolean {
    return sessionStorage.getItem("id") !== null;
  }

  static clear() {
    sessionStorage.clear();
  }

}

export { Config }
