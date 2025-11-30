using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class ProgramHistoryService
    {
        private readonly ProgramHistoryRepository _repository;

        public ProgramHistoryService(ProgramHistoryRepository repository)
        {
            _repository = repository;
        }

        public Task<List<ParticipantProgramHistory>> GetParticipantProgramHistoryByIdAsync(int id)
        {
            return _repository.GetParticipantProgramHistoryByIdAsync(id);
        }
    }
}