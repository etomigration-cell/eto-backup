using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class MSUService
    {
        private readonly MSURepository _repository;

        public MSUService(MSURepository repository)
        {
            _repository = repository;
        }

        public Task<List<MSUModel>> GetMSUAsync(int id)
        {
            return _repository.GetMSUByIdAsync(id);
        }
    }
}
