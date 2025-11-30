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
                    frm.IconsentforMicahtostoremyhousekeysindesignatedkeystorage_30828_ResponseChoiceID,
                    prg.ProgramName


                FROM form.f_490 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_25224
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
                    SubjectID = reader.IsDBNull(2) ? (int?)null : reader.GetInt32(2),
                    GroupID = reader.IsDBNull(3) ? (int?)null : reader.GetInt32(3),
                    FamilyID = reader.IsDBNull(4) ? (int?)null : reader.GetInt32(4),
                    ResponseSetID = reader.IsDBNull(5) ? (int?)null : reader.GetInt32(5),
                    FormID = reader.IsDBNull(6) ? (int?)null : reader.GetInt32(6),
                    CollectionTypeID = reader.IsDBNull(7) ? (int?)null : reader.GetInt32(7),
                    SubjectTypeID = reader.IsDBNull(8) ? (int?)null : reader.GetInt32(8),
                    CollectionID = reader.IsDBNull(9) ? (int?)null : reader.GetInt32(9),
                    ResponseCreatedDate = reader.IsDBNull(10) ? (DateTime?)null : reader.GetDateTime(10),
                    ProgramID = reader.IsDBNull(11) ? (int?)null : reader.GetInt16(11),
                    AuditStaffID = reader.IsDBNull(12) ? (int?)null : reader.GetInt32(12),
                    AuditDate = reader.IsDBNull(13) ? (DateTime?)null : reader.GetDateTime(13),
                    DataEnteredByID = reader.IsDBNull(14) ? (int?)null : reader.GetInt32(14),
                    DraftSavedOn = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    RemovedDate = reader.IsDBNull(16) ? (DateTime?)null : reader.GetDateTime(16),
                    MicahTeam_25224 = reader.IsDBNull(17) ? (int?)null : reader.GetInt32(17),
                    ConsenttorecordstoreinformationIunderstandthatcertaininformationcollectedbyMicahProjectsoranaf_25226 = reader.IsDBNull(18) ? null : reader.GetString(18),
                    ConsenttorecordstoreinformationIunderstandthatcertaininformationcollectedbyMicahProjectsoranaf_25226_ResponseChoiceID = reader.IsDBNull(19) ? (int?)null : reader.GetInt32(19),
                    Igiveconsentfordeidentifiedinformationtobeusedforadvocacypurposes_25227 = reader.IsDBNull(20) ? null : reader.GetString(20),
                    Igiveconsentfordeidentifiedinformationtobeusedforadvocacypurposes_25227_ResponseChoiceID = reader.IsDBNull(21) ? (int?)null : reader.GetInt32(21),
                    IconsenttoallowMicahProjectstoprovidemewithservicesasrequestedandrequiredIunderstandIamabletoa_25228 = reader.IsDBNull(22) ? null : reader.GetString(22),
                    IconsenttoallowMicahProjectstoprovidemewithservicesasrequestedandrequiredIunderstandIamabletoa_25228_ResponseChoiceID = reader.IsDBNull(23) ? (int?)null : reader.GetInt32(23),
                    IunderstandandgiveconsentforMicahProjectstoprovidemypersonalinformationtootherrelevantpersonso_25229 = reader.IsDBNull(24) ? null : reader.GetString(24),
                    IunderstandandgiveconsentforMicahProjectstoprovidemypersonalinformationtootherrelevantpersonso_25229_ResponseChoiceID = reader.IsDBNull(25) ? (int?)null : reader.GetInt32(25),
                    IconsenttoMicahProjectsemployeesaccessingtheTICAdatabaseonmybehalf_25230 = reader.IsDBNull(26) ? null : reader.GetString(26),
                    IconsenttoMicahProjectsemployeesaccessingtheTICAdatabaseonmybehalf_25230_ResponseChoiceID = reader.IsDBNull(27) ? (int?)null : reader.GetInt32(27),
                    Idonotconsenttomypersonalinformationbeingdisclosedtothepersonoragencieslistedbelow_25231 = reader.IsDBNull(28) ? null : reader.GetString(28),
                    listedbelowthechildrenandoradultswithimpaireddecisionmakingcapacity_25232 = reader.IsDBNull(29) ? null : reader.GetString(29),
                    IunderstandthattheconsentIhaveprovidedhereformyselfwillalsoapplytothefollowingchildrenandoradu_25233 = reader.IsDBNull(30) ? null : reader.GetString(30),
                    IunderstandthattheconsentIhaveprovidedhereformyselfwillalsoapplytothefollowingchildrenandoradu_25233_ResponseChoiceID = reader.IsDBNull(31) ? (int?)null : reader.GetInt32(31),
                    IacknowledgethatMicahProjectshasadvisedmeoftheWorkingTogetherwithMicahProjectsfactsheetwhichin_25235 = reader.IsDBNull(32) ? null : reader.GetString(32),
                    IacknowledgethatMicahProjectshasadvisedmeoftheWorkingTogetherwithMicahProjectsfactsheetwhichin_25235_ResponseChoiceID = reader.IsDBNull(33) ? (int?)null : reader.GetInt32(33),
                    IunderstandthattherearesomeexceptionswheremyconsentisnotrequiredtoshareinformationwithothersTh_25238 = reader.IsDBNull(34) ? null : reader.GetString(34),
                    IunderstandthattherearesomeexceptionswheremyconsentisnotrequiredtoshareinformationwithothersTh_25238_ResponseChoiceID = reader.IsDBNull(35) ? (int?)null : reader.GetInt32(35),
                    InabilitytogainconsentWorkertocomplete_25239 = reader.IsDBNull(36) ? null : reader.GetString(36),
                    InabilitytogainconsentWorkertocomplete_25239_ResponseChoiceID = reader.IsDBNull(37) ? (int?)null : reader.GetInt32(37),
                    Reasonforrefusalwithdrawal_25240 = reader.IsDBNull(38) ? null : reader.GetString(38),
                    Signedbypersonfamily_25241 = reader.IsDBNull(39) ? null : reader.GetString(39),
                    Signedbypersonfamily_25241_Signee = reader.IsDBNull(40) ? null : reader.GetString(40),
                    Signedbypersonfamily_25241_Image = reader.IsDBNull(41) ? null : reader.GetSqlBinary(41).Value,
                    DateofSignature_25242 = reader.IsDBNull(42) ? (DateTime?)null : reader.GetDateTime(42),
                    WorkerSignature_25243 = reader.IsDBNull(43) ? null : reader.GetString(43),
                    WorkerSignature_25243_Signee = reader.IsDBNull(44) ? null : reader.GetString(44),
                    WorkerSignature_25243_Image = reader.IsDBNull(45) ? null : reader.GetSqlBinary(45).Value,
                    WorkerDatesigned_25244 = reader.IsDBNull(46) ? (DateTime?)null : reader.GetDateTime(46),
                    VerbalConsentprovided_25246 = reader.IsDBNull(47) ? null : reader.GetString(47),
                    VerbalConsentprovided_25246_ResponseChoiceID = reader.IsDBNull(48) ? (int?)null : reader.GetInt32(48),
                    UploadScannedDocumenthereClickonUploadNavigatetofileandselectSelectandthenOpenfilewillautomati_25247 = reader.IsDBNull(49) ? (int?)null : reader.GetInt32(49),
                    Consentstatus_25257 = reader.IsDBNull(50) ? null : reader.GetString(50),
                    Consentstatus_25257_ResponseChoiceID = reader.IsDBNull(51) ? (int?)null : reader.GetInt32(51),
                    Workersignature_25274 = reader.IsDBNull(52) ? null : reader.GetString(52),
                    Workersignature_25274_Signee = reader.IsDBNull(53) ? null : reader.GetString(53),
                    Workersignature_25274_Image = reader.IsDBNull(54) ? null : reader.GetSqlBinary(54).Value,
                    IunderstandthatpersonalinformationwillbemanagedinaccordancewiththeInformationPrivacyAct2009QLD_29320 = reader.IsDBNull(55) ? null : reader.GetString(55),
                    IunderstandthatpersonalinformationwillbemanagedinaccordancewiththeInformationPrivacyAct2009QLD_29320_ResponseChoiceID = reader.IsDBNull(56) ? (int?)null : reader.GetInt32(56),
                    IconsenttobeinginvitedtoparticipateinresearchendorsedbyMicahProjectsIfIaminvitedtheprojectwill_29321 = reader.IsDBNull(57) ? null : reader.GetString(57),
                    IconsenttobeinginvitedtoparticipateinresearchendorsedbyMicahProjectsIfIaminvitedtheprojectwill_29321_ResponseChoiceID = reader.IsDBNull(58) ? (int?)null : reader.GetInt32(58),
                    IconsentforMicahtostoremyhousekeysindesignatedkeystorage_30828 = reader.IsDBNull(59) ? null : reader.GetString(59),
                    IconsentforMicahtostoremyhousekeysindesignatedkeystorage_30828_ResponseChoiceID = reader.IsDBNull(60) ? (int?)null : reader.GetInt32(60),
                    ProgramName = reader.IsDBNull(61) ? null : reader.GetString(61),

                });
            }

            return consent;
        }
    }
}