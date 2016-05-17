using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FrontEndTechnologies.ViewModels;

namespace FrontEndTechnologies.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(new PersonViewModel { Name = "Diego", LastName = "Torres" });
        }
    }
}