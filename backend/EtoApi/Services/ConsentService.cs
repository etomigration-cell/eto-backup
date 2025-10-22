using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class ConsentService
    {
        private readonly ConsentRepository _repository;

        public ConsentService(ConsentRepository repository)
        {
            _repository = repository;
        }

        public Task<List<ConsentModel>> GetConsentAsync(int id)
        {
            return _repository.GetConsentByIdAsync(id);
        }
    }
}