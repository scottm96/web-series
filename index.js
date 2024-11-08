 // static keyword

 class User{
    static userCount = 0;
    static users = []

    constructor(username){
        this.username = username;
        User.users.push(username);
        User.userCount++
    }

    sayhello (){
        console.log(`hey, my username is ${this.username}`)
    }

    static getusercount(){
        console.log(`there are ${User.userCount} users online` )
    }
 }

 const user1 = new User('killua');
 const user2 = new User('pito');
 const user3 = new User('mixy');
 const user4 = new User('lily');
 const user5 = new User('zanpacuto');

 user2.sayhello()

 console.log(User.userCount)
 console.log(User.users)

 User.getusercount();