using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            _context = context;

        }
        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(string username, string password) {
            using var hmac = new HMACSHA512();

            var user = new AppUser {
                UserName = username,
                PassHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
                PassSalt = hmac.Key
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

    }
}