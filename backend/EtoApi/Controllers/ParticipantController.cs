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
        private readonly IncomingReferralService _incomingReferralService;
        private readonly ProgramHistoryService _programHistoryService;
        private readonly LotusNotesService _lotusNotesService;
        private readonly LotusInitialFormService _lotusInitialFormService;
        private readonly RedressService _redressService;
        private readonly RedressNotesService _redressnotesService;

        // Inject all services via constructor
        public ParticipantController(FamilyService familyService, ParticipantService participantService, SupportPeriodService supportPeriodService, ServiceActivitiesService serviceActivitiesService, DocumentService documentsService, AddressBookService addressService, PlannedActionService plannedActionService, WdynService wdynService, SearchParticipantService searchParticipantService, AIHWFormService aIHWFormService, BrokeragePaymentService brokeragePaymentService, SafetyAlertsService safetyAlertsService, MSUService msuService, ConsentService consentService, IncomingReferralService incomingReferralService, ProgramHistoryService programHistoryService, LotusNotesService lotusNotesService, LotusInitialFormService lotusInitialFormService, RedressService redressService, RedressNotesService redressnotesService)
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
            _incomingReferralService = incomingReferralService;
            _programHistoryService = programHistoryService;
            _lotusNotesService = lotusNotesService;
            _lotusInitialFormService = lotusInitialFormService;
            _redressService = redressService;
            _redressnotesService = redressnotesService;
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

        [HttpGet("participant-details")]
        public async Task<ActionResult<ParticipantDetails>> GetParticipantDetails([FromQuery] int id)
        {
            var participant = await _participantService.GetParticipantByIdAsync(id);
            if (participant == null)
            {
                return NotFound();
            }
            return Ok(participant);
        }

        [HttpGet("search")]
        public async Task<ActionResult<List<ParticipantDetails>>> GetParticipantDetails([FromQuery] string query, [FromQuery] int? program)
        {
            var participant = await _searchParticipantService.GetSearchParticipantsAsync(query, program);
            if (participant == null)
            {
                return NotFound();
            }
            return Ok(participant);
        }

        [HttpGet("support-period")]
        public async Task<ActionResult<List<SupportPeriod>>> GetSupportPeriods([FromQuery] int id, [FromQuery] int programCode)
        {
            var periods = await _supportPeriodService.GetSupportPeriodByIdAsync(id, programCode);
            if (periods == null || periods.Count == 0)
            {
                return NotFound();
            }
            return Ok(periods);
        }

        [HttpGet("service-activities")]
        public async Task<ActionResult<List<ServiceActivity>>> GetServiceActivities([FromQuery] int id, [FromQuery] int programCode)
        {
            var activities = await _serviceActivitiesService.GetServiceActivitiesByIdAsync(id, programCode);
            if (activities == null || activities.Count == 0)
            {
                return NotFound();
            }
            return Ok(activities);
        }

        [HttpGet("address-book")]
        public async Task<ActionResult<List<AddressBook>>> GetAddressBook([FromQuery] int Id, [FromQuery] int programCode)
        {
            var activities = await _addressService.GetAddressBookByIdAsync(Id, programCode );
            if (activities == null || activities.Count == 0)
            {
                return NotFound();
            }
            return Ok(activities);
        }

        [HttpGet("planned-action")]
        public async Task<ActionResult<List<PlannedAction>>> GetPlannedAction([FromQuery] int Id, [FromQuery] int programCode)
        {
            var activities = await _plannedActionService.GetPlannedActionByIdAsync(Id, programCode);
            if (activities == null || activities.Count == 0)
            {
                return NotFound();
            }
            return Ok(activities);
        }

        [HttpGet("wdyn")]
        public async Task<ActionResult<List<Wdyn>>> GetWdyn([FromQuery] int Id, [FromQuery] int programCode)
        {
            var activities = await _wdynService.GetWdynByIdAsync(Id, programCode);
            if (activities == null || activities.Count == 0)
            {
                return NotFound();
            }
            return Ok(activities);
        }

        [HttpGet("documents")]
        public async Task<ActionResult<List<Document>>> GetDocuments([FromQuery] int Id, [FromQuery] int programCode)
        {
            var documents = await _documentsService.GetDocumentsByIdAsync(Id, programCode);
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

        [HttpGet("incoming-referral")]
        public async Task<ActionResult<List<IncomingReferral>>> GetIncomingReferral(int id, int programCode)
        {
            var incomingReferral = await _incomingReferralService.GetIncomingReferralByIdAsync(id, programCode);
            if (incomingReferral == null || incomingReferral.Count == 0)
            {
                return NotFound();
            }
            return Ok(incomingReferral);
        }

        [HttpGet("program-history")]
        public async Task<ActionResult<List<ParticipantProgramHistory>>> GetProgramHistory([FromQuery] int id)
        {
            var programHistory = await _programHistoryService.GetParticipantProgramHistoryByIdAsync(id);
            if (programHistory == null || programHistory.Count == 0)
            {
                return NotFound();
            }
            return Ok(programHistory);
        }

        [HttpGet("lotus-initial-form")]
        public async Task<ActionResult<List<LotusInitialForm>>> GetLotusInitialForm([FromQuery] int id)
        {
            var lotusInitialForm = await _lotusInitialFormService.GetLotusInitialFormByIdAsync(id);
            if (lotusInitialForm == null || lotusInitialForm.Count == 0)
            {
                return NotFound();
            }
            return Ok(lotusInitialForm);
        }

        [HttpGet("lotus-notes")]
        public async Task<ActionResult<List<LotusNotes>>> GetLotusNotes([FromQuery] int id)
        {
            var lotusNotes = await _lotusNotesService.GetLotusNotesByIdAsync(id);
            if (lotusNotes == null || lotusNotes.Count == 0)
            {
                return NotFound();
            }
            return Ok(lotusNotes);
        }

        [HttpGet("redress/{id}")]
        public async Task<ActionResult<List<RedressModel>>> GetRedress(int id)
        {

            var redress = await _redressService.GetRedressAsync(id);
            if (redress == null || redress.Count == 0)
            {
                return NotFound();
            }
            return Ok(redress);
        }



        [HttpGet("redress-notes/{id}")]
        public async Task<ActionResult<List<RedressNotesModel>>> GetRedressNotes(int id)
        {

            var redressnotes = await _redressnotesService.GetRedressNotesAsync(id);
            if (redressnotes == null || redressnotes.Count == 0)
            {
                return NotFound();
            }
            return Ok(redressnotes);
        }
    }
}