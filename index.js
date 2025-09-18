// // Write your solution in this file!

// // updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value.
// //  This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. 
// //  Hint: use the spread operator!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}


// // destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate 
// // the employee Object passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


// // deleteFromEmployeeByKey(): this function should take in a employee Object and a key. 
// // It should delete the property with that key from the employee Object. This should not mutate the original employee Object;
// //  it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}


// // destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the 
// // employee Object.

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


// Example employee object
const employee = {
    name: "Miguel",
    role: "Developer"
};

// Test updateEmployeeWithKeyAndValue (non-destructive)
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "role", "Manager");
console.log("Non-destructive update:", updatedEmployee); // { name: "Miguel", role: "Manager" }
console.log("Original:", employee); // { name: "Miguel", role: "Developer" }

// Test destructivelyUpdateEmployeeWithKeyAndValue
destructivelyUpdateEmployeeWithKeyAndValue(employee, "role", "Lead");
console.log("Destructive update:", employee); // { name: "Miguel", role: "Lead" }

// Test deleteFromEmployeeByKey (non-destructive)
const employeeWithoutRole = deleteFromEmployeeByKey(employee, "role");
console.log("Non-destructive delete:", employeeWithoutRole); // { name: "Miguel" }
console.log("Original after non-destructive delete:", employee); // { name: "Miguel", role: "Lead" }

// Test destructivelyDeleteFromEmployeeByKey
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Destructive delete:", employee); // { role: "Lead" }