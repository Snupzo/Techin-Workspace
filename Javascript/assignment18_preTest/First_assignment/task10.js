const employees = [
  { name: "Jonas", department: "IT", salary: 2000 },
  { name: "Ona", department: "HR", salary: 1800 },
  { name: "Petras", department: "IT", salary: 2200 },
  { name: "Greta", department: "HR", salary: 2100 }
];


let sortDept = (arr) =>{
    let resultArr = [];
    resultArr = arr.sort((a, b)=> a.department.localeCompare(b.department))
    return resultArr;
}

let sortSalaryDescend = (arr) =>{
    let resultArr = [];
    // Reminder to myself - this checks if b is bigger than a, then returns b if bigger. Works till it's all sorted
    resultArr = arr.sort((a, b)=> b.salary - a.salary)
    return resultArr;
}

console.log(sortDept(employees));

console.log(sortSalaryDescend(employees));