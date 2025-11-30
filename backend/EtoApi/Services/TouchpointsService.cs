using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class TouchpointsService
    {
        private readonly TouchpointsRepository _repository;

        public TouchpointsService(TouchpointsRepository repository)
        {
            _repository = repository;
        }

        public Task<List<Touchpoints>> GetTouchpoints(int programId)
        {
            return _repository.GetTouchpoints(programId);
        }
    }
}
