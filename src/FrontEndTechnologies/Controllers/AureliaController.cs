﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace FrontEndTechnologies.Controllers
{
    public class AureliaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Modules()
        {
            return View();
        }
    }
}
