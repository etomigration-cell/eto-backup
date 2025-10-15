using EtoApi.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace EtoApi.DataAccess
{
    public class ConsentRepository
    {
        
        private readonly ISqlConnectionFactory _connectionFactory;
        

        public ConsentRepository(ISqlConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public async Task<List<ConsentModel>> GetConsentByIdAsync(int id)
        {
            
            using var connection = await _connectionFactory.CreateOpenConnectionAsync();

            var query = @"
                SELECT    
                    frm.FormResponseID,
                    frm.FormIdentifier,
                    frm.SubjectID,
                    frm.GroupID,
                    frm.FamilyID,
                    frm.ResponseSetID,
                    frm.FormID,
                    frm.CollectionTypeID,
                    frm.SubjectTypeID,
                    frm.CollectionID,
                    frm.ResponseCreatedDate,
                    frm.ProgramID,
                    frm.AuditStaffID,
                    frm.AuditDate,
                    frm.DataEnteredByID,
                    frm.DraftSavedOn,
                    frm.RemovedDate,
                    frm.MicahTeam_25224,
                    frm.ConsenttorecordstoreinformationIunderstandthatcertaininformationcollectedbyMicahProjectsoranaf_25226,
                    frm.ConsenttorecordstoreinformationIunderstandthatcertaininformationcollectedbyMicahProjectsoranaf_25226_ResponseChoiceID,
                    frm.Igiveconsentfordeidentifiedinformationtobeusedforadvocacypurposes_25227,
                    frm.Igiveconsentfordeidentifiedinformationtobeusedforadvocacypurposes_25227_ResponseChoiceID,
                    frm.IconsenttoallowMicahProjectstoprovidemewithservicesasrequestedandrequiredIunderstandIamabletoa_25228,
                    frm.IconsenttoallowMicahProjectstoprovidemewithservicesasrequestedandrequiredIunderstandIamabletoa_25228_ResponseChoiceID,
                    frm.IunderstandandgiveconsentforMicahProjectstoprovidemypersonalinformationtootherrelevantpersonso_25229,
                    frm.IunderstandandgiveconsentforMicahProjectstoprovidemypersonalinformationtootherrelevantpersonso_25229_ResponseChoiceID,
                    frm.IconsenttoMicahProjectsemployeesaccessingtheTICAdatabaseonmybehalf_25230,
                    frm.IconsenttoMicahProjectsemployeesaccessingtheTICAdatabaseonmybehalf_25230_ResponseChoiceID,
                    frm.Idonotconsenttomypersonalinformationbeingdisclosedtothepersonoragencieslistedbelow_25231,
                    frm.listedbelowthechildrenandoradultswithimpaireddecisionmakingcapacity_25232,
                    frm.IunderstandthattheconsentIhaveprovidedhereformyselfwillalsoapplytothefollowingchildrenandoradu_25233,
                    frm.IunderstandthattheconsentIhaveprovidedhereformyselfwillalsoapplytothefollowingchildrenandoradu_25233_ResponseChoiceID,
                    frm.IacknowledgethatMicahProjectshasadvisedmeoftheWorkingTogetherwithMicahProjectsfactsheetwhichin_25235,
                    frm.IacknowledgethatMicahProjectshasadvisedmeoftheWorkingTogetherwithMicahProjectsfactsheetwhichin_25235_ResponseChoiceID,
                    frm.IunderstandthattherearesomeexceptionswheremyconsentisnotrequiredtoshareinformationwithothersTh_25238,
                    frm.IunderstandthattherearesomeexceptionswheremyconsentisnotrequiredtoshareinformationwithothersTh_25238_ResponseChoiceID,
                    frm.InabilitytogainconsentWorkertocomplete_25239,
                    frm.InabilitytogainconsentWorkertocomplete_25239_ResponseChoiceID,
                    frm.Reasonforrefusalwithdrawal_25240,
                    frm.Signedbypersonfamily_25241,
                    frm.Signedbypersonfamily_25241_Signee,
                    frm.Signedbypersonfamily_25241_Image,
                    frm.DateofSignature_25242,
                    frm.WorkerSignature_25243,
                    frm.WorkerSignature_25243_Signee,
                    frm.WorkerSignature_25243_Image,
                    frm.WorkerDatesigned_25244,
                    frm.VerbalConsentprovided_25246,
                    frm.VerbalConsentprovided_25246_ResponseChoiceID,
                    frm.UploadScannedDocumenthereClickonUploadNavigatetofileandselectSelectandthenOpenfilewillautomati_25247,
                    frm.Consentstatus_25257,
                    frm.Consentstatus_25257_ResponseChoiceID,
                    frm.Workersignature_25274,
                    frm.Workersignature_25274_Signee,
                    frm.Workersignature_25274_Image,
                    frm.IunderstandthatpersonalinformationwillbemanagedinaccordancewiththeInformationPrivacyAct2009QLD_29320,
                    frm.IunderstandthatpersonalinformationwillbemanagedinaccordancewiththeInformationPrivacyAct2009QLD_29320_ResponseChoiceID,
                    frm.IconsenttobeinginvitedtoparticipateinresearchendorsedbyMicahProjectsIfIaminvitedtheprojectwill_29321,
                    frm.IconsenttobeinginvitedtoparticipateinresearchendorsedbyMicahProjectsIfIaminvitedtheprojectwill_29321_ResponseChoiceID,
                    frm.IconsentforMicahtostoremyhousekeysindesignatedkeystorage_30828,
                    frm.IconsentforMicahtostoremyhousekeysindesignatedkeystorage_30828_ResponseChoiceID


                FROM form.f_490 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_11292
                JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
                JOIN Programs prg ON prg.ProgramID = frm.ProgramID
                WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var consent = new List<ConsentModel>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                consent.Add(new ConsentModel
                {

                    FormResponseID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    FormIdentifier = reader.IsDBNull(1) ? null : reader.GetString(1),
                    SubjectID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    GroupID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    FamilyID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ResponseSetID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    FormID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    CollectionTypeID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    SubjectTypeID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    CollectionID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ResponseCreatedDate = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    ProgramID = reader.IsDBNull(11) ? (int?)null : reader.GetInt16(11),
                    AuditStaffID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AuditDate = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    DataEnteredByID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    DraftSavedOn = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    RemovedDate = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    MicahTeam_25224 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ConsenttorecordstoreinformationIunderstandthatcertaininformationcollectedbyMicahProjectsoranaf_25226 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    ConsenttorecordstoreinformationIunderstandthatcertaininformationcollectedbyMicahProjectsoranaf_25226_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Igiveconsentfordeidentifiedinformationtobeusedforadvocacypurposes_25227 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Igiveconsentfordeidentifiedinformationtobeusedforadvocacypurposes_25227_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IconsenttoallowMicahProjectstoprovidemewithservicesasrequestedandrequiredIunderstandIamabletoa_25228 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IconsenttoallowMicahProjectstoprovidemewithservicesasrequestedandrequiredIunderstandIamabletoa_25228_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IunderstandandgiveconsentforMicahProjectstoprovidemypersonalinformationtootherrelevantpersonso_25229 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IunderstandandgiveconsentforMicahProjectstoprovidemypersonalinformationtootherrelevantpersonso_25229_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IconsenttoMicahProjectsemployeesaccessingtheTICAdatabaseonmybehalf_25230 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IconsenttoMicahProjectsemployeesaccessingtheTICAdatabaseonmybehalf_25230_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Idonotconsenttomypersonalinformationbeingdisclosedtothepersonoragencieslistedbelow_25231 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    listedbelowthechildrenandoradultswithimpaireddecisionmakingcapacity_25232 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IunderstandthattheconsentIhaveprovidedhereformyselfwillalsoapplytothefollowingchildrenandoradu_25233 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IunderstandthattheconsentIhaveprovidedhereformyselfwillalsoapplytothefollowingchildrenandoradu_25233_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IacknowledgethatMicahProjectshasadvisedmeoftheWorkingTogetherwithMicahProjectsfactsheetwhichin_25235 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IacknowledgethatMicahProjectshasadvisedmeoftheWorkingTogetherwithMicahProjectsfactsheetwhichin_25235_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IunderstandthattherearesomeexceptionswheremyconsentisnotrequiredtoshareinformationwithothersTh_25238 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IunderstandthattherearesomeexceptionswheremyconsentisnotrequiredtoshareinformationwithothersTh_25238_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    InabilitytogainconsentWorkertocomplete_25239 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    InabilitytogainconsentWorkertocomplete_25239_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Reasonforrefusalwithdrawal_25240 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Signedbypersonfamily_25241 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Signedbypersonfamily_25241_Signee = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Signedbypersonfamily_25241_Image = reader.IsDBNull(75) ? null : reader.GetSqlBinary(75).Value,
                    DateofSignature_25242 = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    WorkerSignature_25243 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    WorkerSignature_25243_Signee = reader.IsDBNull(1) ? null : reader.GetString(1),
                    WorkerSignature_25243_Image = reader.IsDBNull(75) ? null : reader.GetSqlBinary(75).Value,
                    WorkerDatesigned_25244 = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    VerbalConsentprovided_25246 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    VerbalConsentprovided_25246_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    UploadScannedDocumenthereClickonUploadNavigatetofileandselectSelectandthenOpenfilewillautomati_25247 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Consentstatus_25257 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Consentstatus_25257_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Workersignature_25274 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Workersignature_25274_Signee = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Workersignature_25274_Image = reader.IsDBNull(75) ? null : reader.GetSqlBinary(75).Value,
                    IunderstandthatpersonalinformationwillbemanagedinaccordancewiththeInformationPrivacyAct2009QLD_29320 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IunderstandthatpersonalinformationwillbemanagedinaccordancewiththeInformationPrivacyAct2009QLD_29320_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IconsenttobeinginvitedtoparticipateinresearchendorsedbyMicahProjectsIfIaminvitedtheprojectwill_29321 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IconsenttobeinginvitedtoparticipateinresearchendorsedbyMicahProjectsIfIaminvitedtheprojectwill_29321_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IconsentforMicahtostoremyhousekeysindesignatedkeystorage_30828 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IconsentforMicahtostoremyhousekeysindesignatedkeystorage_30828_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),

                });
            }

            return consent;
        }
    }
}
