import { belongsTo, createServer, Factory, hasMany, Model } from "miragejs";
import { AllUsers, GETALLDIARIES, GETALLENTRIES, GETUSERDIARIES, LoginRoute, SignupRoute } from "./Routes";

export const MirageServer = () => {
  createServer({

    models: {
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
      entry : Factory.extend({
        title : "empty",
        desc : "empty",
        date : Date.now()
      }),
      diary : Factory.extend({
        access : 'public',
        createdAt : '',
        updatedAt : '',
      })
    },

    seeds: (server): any => {
      const entry1 = server.create("entry", { title : "test Title", desc : "test Description", date : Date.now() })
      const diary1 = server.create("diary", { title : 'test diary', entry : [entry1], access : 'public', createdAt : Date.now().toString(),  })


     server.create("user", { diary : [ diary1 ], username : 'shakeel', password : 'bbg', email : 'shk@test.com' },   )
      
    },

    routes(): void {
      this.post("/api/signup", SignupRoute)
      this.post("/api/login", LoginRoute)
      this.get("/api/users", AllUsers)
      this.get("/api/diaries", GETALLDIARIES )
      this.get("/api/entries", GETALLENTRIES)
      this.get("/api/user/:username/diaries", GETUSERDIARIES)

    }

  })
}