using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class SearchParticipantService
    {
        private readonly SearchParticipantRepository _repository;

        public SearchParticipantService(SearchParticipantRepository repository)
        {
            _repository = repository;
        }

        public Task<List<ParticipantDetails>> GetSearchParticipantsAsync(string query, int? program)
        {
            return _repository.GetSearchParticipantsAsync(query, program);
        }
    }
}
