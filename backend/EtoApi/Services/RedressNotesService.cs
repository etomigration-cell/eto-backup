using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class RedressNotesService
    {
        private readonly RedressNotesRepository _repository;

        public RedressNotesService(RedressNotesRepository repository)
        {
            _repository = repository;
        }

        public Task<List<RedressNotesModel>> GetRedressNotesAsync(int id)
        {
            return _repository.GetRedressNotesByIdAsync(id);
        }
        
    }
}