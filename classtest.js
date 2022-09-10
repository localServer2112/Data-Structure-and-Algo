class Student{
    constructor(_name,_level,_age){
        this.name = _name;
        this.level = _level;
        this.age = _age;
        this.late_count = 0;
        this.admission_status = 'active';
        this.scores = [];
    }
    // this is an instance method
    getName(){
        return this.name;
    }
    setName(_name){
        this.name = _name; 
    }
    markAsLate(){
        this.late_count += 1;
        if(this.late_count >= 3){
            this.admission_status = 'expelled';
        }
    }
    getStatus(){
        return `${this.name} at level ${this.level} was late ${this.late_count} times and status is ${this.admission_status}`;
    }
    addScore(_score){
        this.scores.push(_score);
        return this.scores;
    }
    getScores(){
        return {name: this.name, score: this.scores}
    }
    calculateAVG(){
        let sum = this.scores.reduce(function (a,b){
            return a+b;
        })
        return sum/this.scores.length;
    }

    // class methods -- static methods
    // these are called without instantiating their class and cannot be called through a class instance. They re often used to create utility fucntions for an application.
    static enrollStudents(){
        return "Student enrollment complete";
    }

}

let wole = new Student("wole",2,23);
let shade = new Student("shade",4,12);