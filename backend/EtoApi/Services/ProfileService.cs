using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class ProfileService
    {
        private readonly ProfileRepository _repository;

        public ProfileService(ProfileRepository repository)
        {
            _repository = repository;
        }

        public Task<List<Profile>> GetProfileDetails(string email)
        {
            return _repository.GetProfileDetails(email);
        }
    }
}
