"use strict";
const multiplyValue = (value, multiplier) => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    return value * 2;
};
const processInput = (value) => {
    if (typeof (value) == "number") {
        return value * 10;
    }
    else if (typeof (value) == "string") {
        return value.toLowerCase().trim();
    }
    else if (typeof (value) == "boolean") {
        if (value == true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
};
const formatCoordinate = (value) => {
    const [latitude, longitude, locationName] = value;
    return `Location: ${locationName} (${latitude},${longitude})`;
};
const concatenateArrays = (...arrays) => {
    const answer = [];
    for (const arr of arrays) {
        for (const item of arr) {
            answer.push(item);
        }
    }
    return answer;
};
const getPopularCourses = (courses, minStudents) => {
    const result = [];
    for (const course of courses) {
        if (course.isPublished === true && course.students >= minStudents) {
            result.push(course);
        }
    }
    return result;
};
const pluckValues = (items, key) => {
    const answer = [];
    for (const item of items) {
        answer.push(item[key]);
    }
    return answer;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};

