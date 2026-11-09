

const multiplyValue=(value:number, multiplier?:number)=>{
 if(multiplier !== undefined){
    return value*multiplier;
 }
return value*2;
    
}

const processInput=( value:number|boolean|string)=>{
    if(typeof(value)=="number" ){
       return value * 10
    }
    else if(typeof(value)=="string"){
      return  value.toLowerCase().trim();
    }

    else if(typeof(value)=="boolean"){
        if(value==true){
            return "Active"
        }
        else{
            return "Inactive"
        }        
    }    
}


const formatCoordinate=(value:readonly[number,number,string])=>{
    const[latitude, longitude, locationName]=value
    return `Location: ${locationName} (${latitude},${longitude})`

}


const concatenateArrays=<T>(...arrays:T[][]):T[]=>{
const answer:T[]=[]
for(const arr of arrays){
    for(const item of arr)
    {
        answer.push(item)
    }
    
}
 return answer;
}




interface Course{
    title:string
    students:number
    isPublished:boolean
}

const getPopularCourses=(courses:Course[],minStudents:number):Course[]=>{
   const result: Course[] = [];
   for(const course of courses){
    if(course.isPublished===true && course.students>= minStudents){
        result.push(course)
    }
   }
 return result;
}


const pluckValues=<T,K extends keyof T>(items: T[], key: K): T[K][] => {
    const answer:T[K][]=[]
    for(const item of items){
        answer.push(item[key])
    }

    return answer;
}


class Employee{
   protected name:string;
   private baseSalary:number;

    constructor(name:string, baseSalary:number){
        this.name=name;
        this.baseSalary=baseSalary;
    }
    getDetails():string{
        return`Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    private department: string;
    constructor(name:string, baseSalary:number, department:string){
        super(name,baseSalary)
        this.department=department
    }

    getRoleInfo(): string{
        return`Manager of ${this.department}: ${this.name}`
    }
}


const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};

