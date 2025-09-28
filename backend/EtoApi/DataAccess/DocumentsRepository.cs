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
                    fm.FormResponseID, fm.ResponseCreatedDate, fm.AuditDate, att.FileName, ac.Content, att.ContentType, fm.DocumentType_8896, 
                    fm.ShortDescription_13810, prg.ProgramName, s.FName, s.LName
                FROM 
                    form.f_226 fm
                INNER JOIN Attachments att ON att.FormResponseID = fm.FormResponseID
                INNER JOIN AttachmentContent ac ON ac.ContentID = att.ContentID
                JOIN Staff s ON fm.AuditStaffID = s.StaffID
                JOIN SubjectType sub ON sub.SubjectTypeID = fm.SubjectTypeID
                JOIN Programs prg ON prg.ProgramID = fm.ProgramID
                WHERE 
                    fm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var documents = new List<Document>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                byte[] pdfBytes = reader.GetSqlBytes(4).Value; // safely extracts binary PDF data

                string base64 = Convert.ToBase64String(pdfBytes); // encodes binary to base64 string
                documents.Add(new Document
                {
                    FormResponseID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ResponseCreatedDate = reader.IsDBNull(1) ? (DateTime?)null : reader.GetDateTime(1),
                    AuditDate = reader.IsDBNull(2) ? (DateTime?)null : reader.GetDateTime(2),
                    FileName = reader.IsDBNull(3) ? null : reader.GetString(3),
                    Content = base64,
                    ContentType = reader.IsDBNull(5) ? null : reader.GetString(5),
                    DocumentType_8896 = reader.IsDBNull(6) ? null : reader.GetString(6),
                    ShortDescription_13810 = reader.IsDBNull(7) ? null : reader.GetString(7),
                    ProgramName = reader.IsDBNull(8) ? null : reader.GetString(8),
                    fName = reader.IsDBNull(9) ? null : reader.GetString(9),
                    lName = reader.IsDBNull(10) ? null : reader.GetString(10),
                });
            }
            return documents;
        }
    }
}
