using Microsoft.AspNetCore.Mvc;
using movieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp) {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(m => m.Edited == "yes")
                .OrderBy(m => m.Title)
                .ToArray();

            return x;
               
        }

    }
}
