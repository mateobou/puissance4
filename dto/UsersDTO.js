// module.exports = class UsersDtos {
export default class UsersDTO {
    constructor(user, req) {
      this.user = user;
      this.req = req;
    }
  
    toJSON() {
      return {
        id: this.user.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        createdAt: this.user.createdAt,
        updatedAt: this.user.updatedAt,
        _links: {
          self: {
            href: `${this.req.protocol}://${this.req.get("host")}${
              this.req.baseUrl
            }/${this.user.id}`,
            type: "GET",
          },
          update: {
            href: `${this.req.protocol}://${this.req.get("host")}${
              this.req.baseUrl
            }/${this.user.id}`,
            type: "PUT",
          },
          delete: {
            href: `${this.req.protocol}://${this.req.get("host")}${
              this.req.baseUrl
            }/${this.user.id}`,
            type: "DELETE",
          },
          videos: {
            href: `${this.req.protocol}://${this.req.get("host")}${
              this.req.baseUrl
            }/${this.user.id}/videos`,
            type: "GET",
          },
        },
      };
    }
  };