using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class PlannedActionService
    {
        private readonly PlannedActionRepository _repository;

        public PlannedActionService(PlannedActionRepository repository)
        {
            _repository = repository;
        }

        public Task<List<PlannedAction>> GetPlannedActionByIdAsync(int id)
        {
            return _repository.GetPlannedActionByIdAsync(id);
        }
    }
}
