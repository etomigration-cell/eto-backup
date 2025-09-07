using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class ParticipantService
    {
        private readonly ParticipantRepository _repository;

        public ParticipantService(ParticipantRepository repository)
        {
            _repository = repository;
        }

        public Task<ParticipantDetails> GetParticipantByIdAsync(int id)
        {
            return _repository.GetParticipantByIdAsync(id);
        }
    }
}
