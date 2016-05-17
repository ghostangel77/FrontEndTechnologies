﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using FrontEndTechnologies.CustomServices;

namespace FrontEndTechnologies
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddSingleton<IGreeter, Greeter>();
        }

        
        public void Configure(IApplicationBuilder app)
        {
            app.Use(async (context, next) =>
            {
                IGreeter greeter = context.ApplicationServices.GetService<IGreeter>();
                greeter.Greet(":::::::::::::: Hello from App Services=) ::::::::::::::");
                await next.Invoke();
            });

            app.UseMiddleware<MyMiddleware>();


            app.UseIISPlatformHandler();

            app.UseMvc();
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();

        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
