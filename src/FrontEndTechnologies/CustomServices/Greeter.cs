using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEndTechnologies.CustomServices
{
    public class Greeter : IGreeter
    {
        public void Greet(string msg)
        {
            System.Diagnostics.Debug.WriteLine(msg);
        }
    }

    public interface IGreeter
    {
        void Greet(string msg);
    }
}
