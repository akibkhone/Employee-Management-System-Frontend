import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/addEmployee`, employee);
  }

  fetchEmployees() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/getAllEmployees`);
  }

  deleteEmployee(id) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/deleteEmployee/${id}`);
  }

  fetchEmployeeById(id) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/getEmployee/${id}`);
  }

  updateEmployeeById(id, employee) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/updateEmployee/${id}`, employee);
  }
}
export default new EmployeeService();
