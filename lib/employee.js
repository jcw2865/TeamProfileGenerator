class Employee {
    constructor(name, id, role, ghusername, school) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.ghusername = ghusername;
        this.school = school;
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getRole() {
        return this.role;
    }
    getGhusername() {
        return this.ghusername;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Employee;