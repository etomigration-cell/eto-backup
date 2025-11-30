using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EtoApi.Models;
using EtoApi.Services;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace EtoApi.Controllers
{
    [ApiController]
    [Route("profile")]
    public class ProfileController : ControllerBase
    {

        private readonly ProfileService _profileService;

        // Inject all services via constructor
        public ProfileController(ProfileService profileService)
        {
            _profileService = profileService;
        }

         [HttpGet("profile")]
        public async Task<ActionResult<List<Profile>>> GetStaffProfileDetails(string email)
        {
            var profile = await _profileService.GetProfileDetails(email);
            if (profile == null || profile.Count == 0)
            {
                return NotFound();
            }
            return Ok(profile);
        }
    }
}