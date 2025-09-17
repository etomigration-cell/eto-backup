using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class ServiceActivitiesService
    {
        private readonly ServiceActivitiesRepository _repository;

        public ServiceActivitiesService(ServiceActivitiesRepository repository)
        {
            _repository = repository;
        }

        public Task<List<ServiceActivity>> GetServiceActivitiesByIdAsync(int id)
        {
            return _repository.GetServiceActivitiesByIdAsync(id);
        }
    }
}
