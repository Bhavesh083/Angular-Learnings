using BackEndFor_Angular.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Any;
using System.Collections;
using System.Numerics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEndFor_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {

        public static List<Employee> Employees_list = new List<Employee>()
            {
                new Employee(1,"Joseph",999,22,""),
                new Employee(2,"Jhon",456,23,""),
                new Employee(3,"Alex",788,34,""),
                new Employee(4,"Stefan",1021,29,""),
                new Employee(5,"Robert",1100,36,""),
                new Employee(6,"Julia",990,37,""),
                new Employee(7,"Rose",699,31,""),
            };

        public EmployeesController()
        {
        }

        // GET: api/<EmployeesController>
        [HttpGet]
        public List<Employee> Get()
        {
            return Employees_list;
        }

        // GET api/<EmployeesController>/5
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            var employee = Employees_list.Find(element => element.employee_id == id);
            return employee;
        }

        // POST api/<EmployeesController>
        [HttpPost]
        public Employee Post([FromBody] Employee emp)
        {
            Employees_list.Add(emp);
            return emp;
        }

        // PUT api/<EmployeesController>/5
        [HttpPut("{id}")]
        public Employee Put(int id, [FromBody] Employee emp)
        {
            var employee = Employees_list.Find(element => element.employee_id == id);
            employee = emp;
            Employees_list.Add(employee);
            return emp;
        }

        // DELETE api/<EmployeesController>/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            var index = Employees_list.FindIndex(element => element.employee_id == id);
            Employees_list.RemoveAt(index);
            return id;
        }
    }
}
