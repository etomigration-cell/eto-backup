using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class AIHWFormService
    {
        private readonly AIHWFormRepository _repository;

        public AIHWFormService(AIHWFormRepository repository)
        {
            _repository = repository;
        }

        public Task<List<AIHWFormModel>> GetAIHWFormAsync(int id)
        {
            return _repository.GetAIHWFormByIdAsync(id);
        }
    }
}
