class User{

    constructor( name, surname){
        this.name = name
        this.surname = surname


    }

    print(){
        console.log(`name - ${this.name}; фамилия - ${this.surname}`);

    }
}


// let user = new User("Odilbek", "Abdugafurov")
// console.log(user);
class Student extends User{
    #password
    constructor(name,surname, username, password){
super(name, surname)
this.username = username
this.#password = password
}
print(password){
    if (password === this.#password) {
        console.log ( `name-${this.username},  username-${this.username}`);
  }  
}
}
let student = new Student("Odilbek", "Abdugafurov", "Odil", '12345')
// console.log(student);
student.print('12345');