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
        private readonly AddressBookService _addressService;
        private readonly PlannedActionService _plannedActionService;
        private readonly WdynService _wdynService;
        private readonly SearchParticipantService _searchParticipantService;
        private readonly AIHWFormService _aIHWFormService;
        private readonly BrokeragePaymentService _brokeragePaymentService;
        private readonly SafetyAlertsService _safetyAlertsService;
        private readonly MSUService _msuService;
        private readonly ConsentService _consentService;

        // Inject all services via constructor
        public ParticipantController(FamilyService familyService, ParticipantService participantService, SupportPeriodService supportPeriodService, ServiceActivitiesService serviceActivitiesService, DocumentService documentsService, AddressBookService addressService, PlannedActionService plannedActionService, WdynService wdynService, SearchParticipantService searchParticipantService, AIHWFormService aIHWFormService, BrokeragePaymentService brokeragePaymentService, SafetyAlertsService safetyAlertsService, MSUService msuService, ConsentService consentService)
        {
            _familyService = familyService;
            _participantService = participantService;
            _supportPeriodService = supportPeriodService;
            _serviceActivitiesService = serviceActivitiesService;
            _documentsService = documentsService;
            _addressService = addressService;
            _plannedActionService = plannedActionService;
            _wdynService = wdynService;
            _searchParticipantService = searchParticipantService;
            _aIHWFormService = aIHWFormService;
            _brokeragePaymentService = brokeragePaymentService;
            _safetyAlertsService = safetyAlertsService;
            _msuService = msuService;
            _consentService = consentService;
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

        [HttpGet("search")]
        public async Task<ActionResult<List<ParticipantDetails>>> GetParticipantDetails([FromQuery] string query)
        {
            var participant = await _searchParticipantService.GetSearchParticipantsAsync(query);
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

        [HttpGet("address-book/{id}")]
        public async Task<ActionResult<List<AddressBook>>> GetSAddressBook(int id)
        {
            var activities = await _addressService.GetAddressBookByIdAsync(id);
            if (activities == null || activities.Count == 0)
            {
                return NotFound();
            }
            return Ok(activities);
        }

        [HttpGet("planned-action/{id}")]
        public async Task<ActionResult<List<PlannedAction>>> GetPlannedAction(int id)
        {
            var activities = await _plannedActionService.GetPlannedActionByIdAsync(id);
            if (activities == null || activities.Count == 0)
            {
                return NotFound();
            }
            return Ok(activities);
        }

        [HttpGet("wdyn/{id}")]
        public async Task<ActionResult<List<Wdyn>>> GetWdyn(int id)
        {
            var activities = await _wdynService.GetWdynByIdAsync(id);
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

        [HttpGet("aihwform/{id}")]
        public async Task<ActionResult<List<AIHWFormModel>>> GetAihwForm(int id)
        {
            var aihwForms = await _aIHWFormService.GetAIHWFormAsync(id);
            if (aihwForms == null || aihwForms.Count == 0)
            {
                return NotFound();
            }
            return Ok(aihwForms);
        }

        [HttpGet("brokerage-payment/{id}")]
        public async Task<ActionResult<List<BrokeragePaymentModel>>> GetBrokeragePaymentAsync(int id)
        {
            var brokeragePayments = await _brokeragePaymentService.GetBrokeragePaymentAsync(id);
            if (brokeragePayments == null || brokeragePayments.Count == 0)
            {
                return NotFound();
            }
            return Ok(brokeragePayments);
        }

        [HttpGet("safety-alerts/{id}")]
        public async Task<ActionResult<List<SafetyAlertsModel>>> GetSafetyAlerts(int id)
        {
            var safetyAlerts = await _safetyAlertsService.GetSafetyAlertsAsync(id);
            if (safetyAlerts == null || safetyAlerts.Count == 0)
            {
                return NotFound();
            }
            return Ok(safetyAlerts);
        }

        [HttpGet("msu/{id}")]
        public async Task<ActionResult<List<SafetyAlertsModel>>> GetMSU(int id)
        {
            var msu = await _msuService.GetMSUAsync(id);
            if (msu == null || msu.Count == 0)
            {
                return NotFound();
            }
            return Ok(msu);
        }

        [HttpGet("consent/{id}")]
        public async Task<ActionResult<List<ConsentModel>>> GetConsent(int id)
        {
            var consent = await _consentService.GetConsentAsync(id);
            if (consent == null || consent.Count == 0)
            {
                return NotFound();
            }
            return Ok(consent);
        }
    }
}
