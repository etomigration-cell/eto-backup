using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class SaftyAlertsService
    {
        private readonly SaftyAlertsRepository _repository;

        public SaftyAlertsService(SaftyAlertsRepository repository)
        {
            _repository = repository;
        }

        public Task<List<SaftyAlertsModel>> GetSaftyAlertsAsync(int id)
        {
            return _repository.GetSaftyAlertsByIdAsync(id);
        }
    }
}
