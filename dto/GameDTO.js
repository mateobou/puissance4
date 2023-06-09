module.exports = class GameDTO {
    constructor(game, req) {
      this.game = game;
      this.req = req;
    }
  
    toJSON() {
      return {
        id: this.user.id,
        name: this.user.name,
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