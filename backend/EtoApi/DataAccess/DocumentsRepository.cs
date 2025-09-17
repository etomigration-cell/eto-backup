using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class DocumentsRepository
    {
        private readonly string _connectionString;

        public DocumentsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<List<Document>> GetDocumentsByIdAsync(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                SELECT 
                    att.FileName, ac.Content
                FROM 
                    form.f_226 fm
                INNER JOIN Attachments att ON att.FormResponseID = fm.FormResponseID
                INNER JOIN AttachmentContent ac ON ac.ContentID = att.ContentID
                WHERE 
                    fm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var documents = new List<Document>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                byte[] pdfBytes = reader.GetSqlBytes(1).Value; // safely extracts binary PDF data
                string base64 = Convert.ToBase64String(pdfBytes); // encodes binary to base64 string
                Console.WriteLine(base64);
                documents.Add(new Document
                {
                    FileName = reader.GetString(0),
                    Content = base64
                });
            }
            return documents;
        }
    }
}
