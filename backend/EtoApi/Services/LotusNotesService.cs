using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class LotusNotesService
    {
        private readonly LotusNotesRepository _repository;

        public LotusNotesService(LotusNotesRepository repository)
        {
            _repository = repository;
        }

        public Task<List<LotusNotes>> GetLotusNotesByIdAsync(int id)
        {
            return _repository.GetLotusNotesByIdAsync(id);
        }
    }
}