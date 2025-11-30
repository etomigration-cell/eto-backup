using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class RedressService
    {
        private readonly RedressRepository _repository;

        public RedressService(RedressRepository repository)
        {
            _repository = repository;
        }

        public Task<List<RedressModel>> GetRedressAsync(int id)
        {
            return _repository.GetRedressByIdAsync(id);
        }
    }
}