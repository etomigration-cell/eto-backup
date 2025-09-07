using Microsoft.AspNetCore.Mvc;
using EtoApi.Models;
using EtoApi.Services;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace EtoApi.Controllers
{
    [ApiController]
    [Route("participant")]
    public class ParticipantController : ControllerBase
    {
        private readonly FamilyService _familyService;
        private readonly ParticipantService _participantService;

        // Inject both services via constructor
        public ParticipantController(FamilyService familyService, ParticipantService participantService)
        {
            _familyService = familyService;
            _participantService = participantService;
        }

        [HttpGet("family-details/{id}")]
        public async Task<ActionResult<List<FamilyMember>>> GetFamilyDetails(int id)
        {
            var members = await _familyService.GetFamilyMembersByIdAsync(id);
            if (members == null || members.Count == 0)
            {
                return NotFound();
            }
            return Ok(members);
        }

        [HttpGet("participant-details/{id}")]
        public async Task<ActionResult<ParticipantDetails>> GetParticipantDetails(int id)
        {
            var participant = await _participantService.GetParticipantByIdAsync(id);
            if (participant == null)
            {
                return NotFound();
            }
            return Ok(participant);
        }
    }
}
