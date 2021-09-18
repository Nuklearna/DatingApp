using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using API.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

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
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto) {

            if(await UserExists(registerDto.Username)) return BadRequest("Username is taken.");
                        
            using var hmac = new HMACSHA512();

            var user = new AppUser {
                UserName = registerDto.Username.ToLower(),
                PassHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PassSalt = hmac.Key
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private async Task<bool> UserExists(string username) => await _context.User.AnyAsync(x => x.UserName == username.ToLower());

    }
}