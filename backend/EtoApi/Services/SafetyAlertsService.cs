using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class SafetyAlertsService
    {
        private readonly SafetyAlertsRepository _repository;

        public SafetyAlertsService(SafetyAlertsRepository repository)
        {
            _repository = repository;
        }

        public Task<List<SafetyAlertsModel>> GetSafetyAlertsAsync(int id)
        {
            return _repository.GetSafetyAlertsByIdAsync(id);
        }
    }
}