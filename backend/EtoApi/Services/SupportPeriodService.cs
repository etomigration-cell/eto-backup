using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class SupportPeriodService
    {
        private readonly SupportPeriodRepository _repository;

        public SupportPeriodService(SupportPeriodRepository repository)
        {
            _repository = repository;
        }

        public Task<List<SupportPeriod>> GetSupportPeriodByIdAsync(int id, int programCode)
        {
            return _repository.GetSupportPeriodByIdAsync(id, programCode);
        }
    }
}
