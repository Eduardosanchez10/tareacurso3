interface UserPropiertis {
    readonly id: string;
    name: string;
    email: string;
    password: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  interface CreateUser {
    name: string;
    email: string;
    password: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  interface UpdateUser {
    name?: string;
    email?: string;
    password?: string;
    photo?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
class UsersServices {
     users:UserPropiertis[] = [ /** Tipar users */
      { id: "1", name: "oscar", email: "oscar@google.com", password: "123456", photo: "photo1.jpg", createdAt: new Date("2024-11-08"), updatedAt: new Date("2024-11-14") },
      { id: "2", name: "gregorio", email: "gregorio@google.com", password: "123456", photo: "photo2.jpg", createdAt: new Date("2024-11-10"), updatedAt: new Date("2024-11-14") },
      { id: "3", name: "samuel", email: "samuel@microsoft.com", password: "123456", photo: "photo3.jpg", createdAt: new Date("2024-11-12"), updatedAt: new Date("2024-11-14") },
      { id: "4", name: "marino", email: "marino@microsoft.com", password: "123456", photo: "photo4.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "5", name: "benny", email: "benny@google.com", password: "123456", photo: "photo5.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "6", name: "carlos", email: "carlos@microsoft.com", password: "123456", photo: "photo6.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "7", name: "luis", email: "luisR@microsoft.com", password: "123456", photo: "photo7.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "8", name: "ali", email: "ali@microsoft.com", password: "123456", photo: "photo8.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "9", name: "andres", email: "andres@microsoft.com", password: "123456", photo: "photo9.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "10", name: "misael", email: "misael@google.com", password: "123456", photo: "photo10.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "11", name: "robert", email: "robert@microsoft.com", password: "123456", photo: "photo11.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "12", name: "luis", email: "luisJ@google.com", password: "123456", photo: "photo12.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
      { id: "13", name: "luis", email: "luisC@microsoft.com", password: "123456", photo: "photo13.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
    ];
  
  
  
constructor(
    name: string,
    email: string,
    password: string,
    photo: string,
    createdAt: Date,
    updatedAt: Date

){}


    create( user: CreateUser/** Recibir parametros correspondientes y tiparlos **/ ){ /** Tipar retorno **/
        const newUser = { ...user, id: Date.now().toString() };
        if (newUser.email.endsWith("@google.com") || newUser.email.endsWith("@microsoft.com")) {
          if (newUser.photo.endsWith(".jpg")) {
            this.users.push(newUser);
            return newUser;
          }
        }
        return newUser;
      /** Retornar el registro creado **/
    }
  
    findAll(id?: string  , total?: number , data?: UserPropiertis[]){/** Tipar retorno */
      const users = this.users.filter((user) => user.id !== id);
      return { total: users.length, data: users };
      /**
       * Debes retornar: total, data
       **/
    }
  
    findOne( id: string /** Recibir parametros correspondientes y tiparlos */ ):UserPropiertis | string{ /** Tipar retorno **/
      const user = this.users.find((user) => user.id === id);
      if (!user) {
        return "User not found";
      }
      return user;
    }
  
    update( id:string  , updateUser: UpdateUser/** Recibir parametros correspondientes y tiparlos */ ){ /** Tipar retorno **/
        const user = this.findOne(id);
  if (typeof user === "string" || !user) {
    return "User not found";
  }
  this.users = this.users.map((user) => {
    if (user.id === id) {
      return { ...user, ...updateUser, updatedAt: new Date() };
    }
    return user;
  });
  return user;
    }
  
    remove(id: string /** Recibir parametros correspondientes y tiparlos **/ ):UserPropiertis | string{ /** Tipar retorno **/
      const user = this.findOne(id);
      if (typeof user === "string" || !user) {
        return "User not found";
      }
      this.users = this.users.filter((user) => user.id !== id);
      return user;
      /** Retornar el registro eliminado **/
    }
  
    findOneByEmail(email: string/** Recibir parametros correspondientes y tiparlos **/):UserPropiertis | string{ /** Tipar retorno **/
      const correo = this.users.find((correo) => correo.email === email);
      if (!correo) {
        return "email not found";
      }
      return correo;
    }
  
    microsoftUsers(email: string/** Recibir parametros correspondientes y tiparlos **/):UserPropiertis | string{ /** Tipar retorno */
      const microsof = this.users.find((microsof) => microsof.email === email);
      if (!microsof) {
        return "email de microsoft not found";
      }
      return microsof;
      /** Retornar solo los usuarios que tenga correo de miscrosoft **/
    }
  
    googleUsers(email: string/** Recibir parametros correspondientes y tiparlos **/):UserPropiertis | string{ /** Tipar retorno **/
      const google = this.users.find((google) => google.email === email);
      if (!google) {
        return "email de google not found";
      }
      return google;    
      /** Retornar solo los usuarios que tenga correo de google **/
    }
  
    firstTenUsers(id: string):UserPropiertis[] | string{ /** Tipar retorno **/
        const firstTen = this.users.filter((user) => user.id !== id).slice(0, 10);
        if (firstTen.length === 0) {
          return "No se encontraron registros";
        }
        return firstTen;
    /** Debes retornar los primeros 10 registros **/
    }
  }
  const user = new UsersServices( '', '', '', '', new Date(), new Date());

  user.create({ name: "javier", email: "javier@google.com", password: "123456", photo: "photo1.jpg", createdAt: new Date(), updatedAt: new Date() });

  console.log(`all users: ${user.findAll()}`);
  console.log(`buscar: ${user.findOne("2")}`);
  console.log(`actualizar: ${user.update("13", { name: "javier", email: "javier@google.com", password: "123456", photo: "photo1.jpg", createdAt: new Date(), updatedAt: new Date() })}}`);
  console.log(`borrar: ${user.remove("7")}`);
  console.log(`buscar correo: ${user.findOneByEmail("benny@google.com.com")}`);
  console.log(`usuarios de microsoft: ${user.microsoftUsers('carlos@microsoft.com')}`);
  console.log(`usuarios de google: ${user.googleUsers("misael@google.com")}`);
  console.log(`10 users: ${user.firstTenUsers("12")}`);


  
  