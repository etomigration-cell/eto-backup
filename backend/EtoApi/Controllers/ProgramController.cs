using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EtoApi.Models;
using EtoApi.Services;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace EtoApi.Controllers
{
    [ApiController]
    [Route("program")]
    public class ProgramController : ControllerBase
    {

        private readonly TouchpointsService _touchpointsService;

        // Inject all services via constructor
        public ProgramController(TouchpointsService touchpointsService)
        {
            _touchpointsService = touchpointsService;
        }

         [HttpGet("touchpoints")]
        public async Task<ActionResult<List<Touchpoints>>> GetTouchPoints(int programId)
        {
            var touchPoints = await _touchpointsService.GetTouchpoints(programId);
            if (touchPoints == null || touchPoints.Count == 0)
            {
                return NotFound();
            }
            return Ok(touchPoints);
        }
    }
}