using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEndTechnologies.ViewModels
{
    public class PersonViewModel
    {
        [Display(Name ="Name:")]
        public string Name { get; set; }

        [Display(Name="Last Name:")]
        public string LastName { get; set; }
    }
}
