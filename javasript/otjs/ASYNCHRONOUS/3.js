let createEmployee = (emp, callback) => {
    //insert data into data source ie array
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, [4000])
}
let getEmployees = () => {
    //display inton html table
    console.log("Test Case 123")
    var rows = ""
    setTimeout(() => {

        employees.forEach((employee) => {
            rows = rows + `<tr> 
                            <td> ${employee.id}</td>
                            <td> ${employee.name}</td>
                            <td> ${employee.sal}</td>
                            </tr>`
        });
        document.getElementById('tbody_Data').innerHTML = rows
    }, [1000])
    console.log("Test 1234")

}

createEmployee({ id: 103, name: "priyanka", sal: 650000 }, getEmployees)