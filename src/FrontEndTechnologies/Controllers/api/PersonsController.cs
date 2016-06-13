using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FrontEndTechnologies.Models;

namespace FrontEndTechnologies.Controllers.api
{
    [Route("api/[controller]")]
    public class PersonsController : Controller
    {
        private static List<Person> _personList;

        static PersonsController()
        {
            _personList = new List<Person> {
                new Person {Id=1, FirstName="Diego", LastName="Torres", Phone="1234567890" },
                new Person {Id=2, FirstName="Juan", LastName="Perez", Phone="3454657566" }
            };
        }



        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return _personList;
        }


        [HttpGet("{id}")]
        public Person Get(int id)
        {
            return _personList.FirstOrDefault(p => p.Id.Equals(id));
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
