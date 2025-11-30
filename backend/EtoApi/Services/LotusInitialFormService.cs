using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class LotusInitialFormService
    {
        private readonly LotusInitialFormRepository _repository;

        public LotusInitialFormService(LotusInitialFormRepository repository)
        {
            _repository = repository;
        }

        public Task<List<LotusInitialForm>> GetLotusInitialFormByIdAsync(int id)
        {
            return _repository.GetLotusInitialFormByIdAsync(id);
        }
    }
}