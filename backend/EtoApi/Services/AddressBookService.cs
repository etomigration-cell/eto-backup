using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class AddressBookService
    {
        private readonly AddressBookRepository _repository;

        public AddressBookService(AddressBookRepository repository)
        {
            _repository = repository;
        }

        public Task<List<AddressBook>> GetAddressBookByIdAsync(int id)
        {
            return _repository.GetAddressBookByIdAsync(id);
        }
    }
}
