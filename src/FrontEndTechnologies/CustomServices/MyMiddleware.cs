using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEndTechnologies.CustomServices
{
    public class MyMiddleware
    {
        private readonly RequestDelegate _next;

        public MyMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext ctx, IGreeter greeter)
        {
            greeter.Greet("::::::::::::::::: MyMiddleware class says: Hello =) :::::::::::::::::");
            await _next(ctx);
        }
    }
}
