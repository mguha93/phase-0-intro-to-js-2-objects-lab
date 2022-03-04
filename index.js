const employee = { name:"Mo", streetAddress:"33 park ave" };

function updateEmployeeWithKeyAndValue (employeeObject, key, value) {
    const newEmployee = {...employeeObject};
    newEmployee [key] = value;
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey (employeeObject, key) {
    const newEmployee = {...employeeObject};
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey (employeeObject, key) {
    delete employeeObject[key]
    return employeeObject
}