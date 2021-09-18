using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context) => _context = context;
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUser(int ID) => await _context.User.ToListAsync();

        [Authorize]
        [HttpGet("{ID}")]
        public async Task<ActionResult<AppUser>> GetUsers(int ID) => await _context.User.FindAsync(ID);
    }
}