using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class DocumentService
    {
        private readonly DocumentsRepository _repository;
        
        public DocumentService(DocumentsRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<Document>> GetDocumentsByIdAsync(int id, int programCode)
        {
            var docs = await _repository.GetDocumentsByIdAsync(id, programCode);
            foreach (var document in docs)
            {
                File.WriteAllBytes(document.FileName, Convert.FromBase64String(document.Content));
            }
            return docs;
        }
    }
}
