let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
{ id: 102, name: "Sonia Gandhi", sal: 55000 }]


let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
        console.log(employees.length)
    }, [4000])
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (employee of employees) {
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                            </tr>`
        }
        document.getElementById('abc').innerHTML = rows

    }, [1000])
}
createEmployee({ id: 103, name: "Priyanka", sal: 65000 }, getEmployees);