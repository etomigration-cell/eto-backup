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
        private readonly SupportPeriodService _supportPeriodService;
        private readonly ServiceActivitiesService _serviceActivitiesService;
        private readonly DocumentService _documentsService;

        // Inject all services via constructor
        public ParticipantController(FamilyService familyService, ParticipantService participantService, SupportPeriodService supportPeriodService, ServiceActivitiesService serviceActivitiesService, DocumentService documentsService )
        {
            _familyService = familyService;
            _participantService = participantService;
            _supportPeriodService = supportPeriodService;
            _serviceActivitiesService = serviceActivitiesService;
            _documentsService = documentsService;
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

        [HttpGet("support-period/{id}")]
        public async Task<ActionResult<List<SupportPeriod>>> GetSupportPeriods(int id)
        {
            var periods = await _supportPeriodService.GetSupportPeriodByIdAsync(id);
            if (periods == null || periods.Count == 0)
            {
                return NotFound();
            }
            return Ok(periods);
        }

        [HttpGet("service-activities/{id}")]
        public async Task<ActionResult<List<ServiceActivity>>> GetServiceActivities(int id)
        {
            var activities = await _serviceActivitiesService.GetServiceActivitiesByIdAsync(id);
            if (activities == null || activities.Count == 0)
            {
                return NotFound();
            }
            return Ok(activities);
        }

        [HttpGet("documents/{id}")]
        public async Task<ActionResult<List<Document>>> GetDocuments(int id)
        {
            var documents = await _documentsService.GetDocumentsByIdAsync(id);
            if (documents == null || documents.Count == 0)
            {
                return NotFound();
            }
            return Ok(documents);
        }
    }
}
