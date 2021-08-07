import { belongsTo, createServer, Factory, hasMany, Model } from "miragejs";
import { AllUsers, LoginRoute, SignupRoute } from "./Routes";

export const MirageServer = () => 
{
    createServer({

        models : {
            entry: Model.extend({
                diary: belongsTo(),
              }),
              diary: Model.extend({
                entry: hasMany(),
                user: belongsTo(),
              }),
              user: Model.extend({
                diary: hasMany(),
              }),
        },

        factories: {
            user: Factory.extend({
              username: 'test',
              password: 'password',
              email: 'test@email.com',
        }),
    },

    seeds: (server): any => {
        server.create('user', { username : 'test1', email : 'test1@email.com', password : 'password1' });
      },

        routes(): void {
            this.post("/api/signup", SignupRoute)
            this.post("/api/login", LoginRoute)
            this.get("/api/users", AllUsers)
        }

    })
}