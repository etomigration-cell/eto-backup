using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class WdynService
    {
        private readonly WdynRepository _repository;

        public WdynService(WdynRepository repository)
        {
            _repository = repository;
        }

        public Task<List<Wdyn>> GetWdynByIdAsync(int id, int programCode)
        {
            return _repository.GetWdynByIdAsync(id, programCode);
        }
    }
}
