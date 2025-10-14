using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class IncomingReferralService
    {
        private readonly IncomingReferralRepository _repository;

        public IncomingReferralService(IncomingReferralRepository repository)
        {
            _repository = repository;
        }

        public Task<List<IncomingReferral>> GetIncomingReferralByIdAsync(int id)
        {
            return _repository.GetIncomingReferralByIdAsync(id);
        }
    }
}
