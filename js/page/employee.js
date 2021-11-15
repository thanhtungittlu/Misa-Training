$(document).ready(function() {
    loadData()
})

async function loadData() {
    
    // Làm trống dữ liệu hiển thị.
    $('tbody').empty()

    // Lấy dữ liệu về.
    let dataEmp = []
    // // Sử dụng fetch trong js thuần
    // await fetch('http://cukcuk.manhnv.net/api/v1/Employees')
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => {
    //         dataEmp = data
    //     })
    //     .catch(response => {
    //         console.error(response)
    //     })

    // console.log("Data js thuần: ", dataEmp)
    // Sử dụng ajax trong jquery
    $.ajax({
        type: 'GET',
        url: 'http://cukcuk.manhnv.net/api/v1/Employees',
        async: false,
        // data: 'json', // Tham số truyền lên cho API nếu có
        dataType: 'json',
        success: function(response){
            dataEmp = response
        },
        error: function(response){
            console.log(response)
        }
    })
    // console.log("Data jquery: ",dataEmp)

    // Build dữ liệu hiển thị lên table


    //Mapping từng thông tin của từng đối tượng trong mảng vào HTML
    
    
    for (const emp of dataEmp){
        // Xác định thông tin dc thể hiện như thế nào dưới dạng HTML
        let triHTML = `
            <tr>
                <td class="text-align-left code">${emp.EmployeeCode}</td>
                <td class="text-align-left name">${emp.FullName}</td>
                <td class="text-align-left sex">${emp.GenderName}</td>
                <td class="text-align-center birhday">${emp.dateOfBirth}</td>
                <td class="text-align-left phonenumber">${emp.PhoneNumber}</td>
                <td class="text-align-left email">${emp.Email}</td>
                <td class="text-align-left position">${emp.PositionName}</td>
                <td class="text-align-left department">${emp.DepartmentName}</td>
                <td class="text-align-right salary">${emp.Salary}</td>
                <td class="text-align-left status">${emp.WorkStatus}</td>
            </tr>
        `
        $('tbody').append(triHTML)
    }

    // for (var i = 0; i < 20; i++ ){
    //     let triHTML = `
    //     <tr>
    //         <td class="text-align-left code">NV43124</td>
    //         <td class="text-align-left name">Hải Phạm</td>
    //         <td class="text-align-left sex">null</td>
    //         <td class="text-align-center birhday">null</td>
    //         <td class="text-align-left phonenumber">0865286634</td>
    //         <td class="text-align-left email"></td>
    //         <td class="text-align-left position">null</td>
    //         <td class="text-align-left department">null</td>
    //         <td class="text-align-right salary">20000000</td>
    //         <td class="text-align-left status">null</td>
    //     </tr>
    //     `
    //     $('tbody').append(triHTML)
    // }

}


// JS object

