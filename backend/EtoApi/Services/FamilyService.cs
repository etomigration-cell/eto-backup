using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class FamilyService
    {
        private readonly FamilyRepository _repository;

        public FamilyService(FamilyRepository repository)
        {
            _repository = repository;
        }

        public Task<List<FamilyMember>> GetFamilyMembersByIdAsync(int id)
        {
            return _repository.GetFamilyMembersByIdAsync(id);
        }
    }
}
