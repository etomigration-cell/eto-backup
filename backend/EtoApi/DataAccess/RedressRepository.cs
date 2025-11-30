using EtoApi.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace EtoApi.DataAccess
{
    public class RedressRepository
    {
        
        private readonly ISqlConnectionFactory _connectionFactory;
        

        public RedressRepository(ISqlConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public async Task<List<RedressModel>> GetRedressByIdAsync(int id)
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
                    frm.ContactMethod_28645,
                    frm.ContactMethod_28645_ResponseChoiceID,
                    frm.ContactLocation_28646,
                    frm.ContactLocation_28646_ResponseChoiceID,
                    frm.PhoneContactType_28647,
                    frm.PhoneContactType_28647_ResponseChoiceID,
                    frm.Ifcontactlocationisotherpleasespecify_28648,
                    frm.HowmanystaffdidthistogetherAtmost4_28649,
                    frm.TimespentwithparticipantPerstaffmember_28650,
                    frm.TimespentonbehalfofparticipantPerstaffmember_28651,
                    frm.TimespenttravellingNotwithparticipantPerstaffmember_28652,
                    frm.Totaltimespentwithparticipant_28653,
                    frm.Totaltimespentonbehalfofparticipant_28654,
                    frm.Totaltimespenttravelling_28655,
                    frm.Totalefforttimeforparticipant_28656,
                    frm.Selectyourname_28657,
                    frm.MicahTeam_28658,
                    frm.Selectthe2ndstaffperson_28659,
                    frm.Whatotherteamassisted_28660,
                    frm.Howdidyoufindoutaboutourservice_28664,
                    frm.Howdidyoufindoutaboutourservice_28664_ResponseChoiceID,
                    frm.Preferredmethodofsupportvia_28665,
                    frm.Preferredmethodofsupportvia_28665_ResponseChoiceID,
                    frm.Doyouhaveanydisabilities_28667,
                    frm.Doyouhaveanydisabilities_28667_ResponseChoiceID,
                    frm.Disabilityimpairmentorconditionindicator_28668,
                    frm.Disabilityimpairmentorconditionindicator_28668_ResponseChoiceID,
                    frm.LanguageSpokenatHomeotherthanEnglish_28669,
                    frm.Mainsourceofincome_28670,
                    frm.Mainsourceofincome_28670_ResponseChoiceID,
                    frm.Selectyourlocation_28672,
                    frm.Selectyourlocation_28672_ResponseChoiceID,
                    frm.MailingList_28674,
                    frm.MailingList_28674_ResponseChoiceID,
                    frm.Areyouworkingwithanyotherservices_28675,
                    frm.Referredby_28676,
                    frm.Name_28688,
                    frm.ContactDetails_28690,
                    frm.EducationStatus_28698,
                    frm.EducationStatus_28698_ResponseChoiceID,
                    frm.DoestheParticipantspeakalanguageotherthanEnglishathome_28701,
                    frm.DoestheParticipantspeakalanguageotherthanEnglishathome_28701_ResponseChoiceID,
                    frm.AreyouaForgottenAustralian_28702,
                    frm.AreyouaForgottenAustralian_28702_ResponseChoiceID,
                    frm.Howwastheparticipantreferredtoourservice_28703,
                    frm.Howwastheparticipantreferredtoourservice_28703_ResponseChoiceID,
                    frm.Internalreference_28704,
                    frm.Internalreference_28704_ResponseChoiceID,
                    frm.Externalreference_28705,
                    frm.Externalreference_28705_ResponseChoiceID,
                    frm.OtherReference_28706,
                    frm.Istheparticipantapriority_28708,
                    frm.Istheparticipantapriority_28708_ResponseChoiceID,
                    frm.Selectthereasonsforprioritising_28709,
                    frm.Selectthereasonsforprioritising_28709_ResponseChoiceID,
                    frm.HaveyouspokentoanyotherserviceaboutRedress_28710,
                    frm.HaveyouspokentoanyotherserviceaboutRedress_28710_ResponseChoiceID,
                    frm.Services_28711,
                    frm.Services_28711_ResponseChoiceID,
                    frm.ServicesOther_28712,
                    frm.IstheparticipanteligibletoapplytoNRS_28714,
                    frm.IstheparticipanteligibletoapplytoNRS_28714_ResponseChoiceID,
                    frm.Selectallreasonsforseekingassistance_28715,
                    frm.Selectallreasonsforseekingassistance_28715_ResponseChoiceID,
                    frm.Historyasachild_28722,
                    frm.Historyasachild_28722_ResponseChoiceID,
                    frm.Detailsonhistoryofbeinginstitutionalizedasachild_28723,
                    frm.Historyasanadult_28724,
                    frm.Historyasanadult_28724_ResponseChoiceID,
                    frm.Detailsonhistoryofbeinginstitutionalizedasanadult_28725,
                    frm.Isthereapublictrusteeoranadultguardian_28847,
                    frm.Isthereapublictrusteeoranadultguardian_28847_ResponseChoiceID,
                    frm.Namepublictrustee_28848,
                    frm.Contactdetailspublictrustee_28849,
                    frm.Whichregionistheparticipanttobeallocatedto_29325,
                    frm.Whichregionistheparticipanttobeallocatedto_29325_ResponseChoiceID,
                    frm.Pleaselistotherinternalreferrer_33336,

                    s.FName,
                    s.LName,
                    sub.Name,
                    prg.ProgramName,
                    e.EntityName

                FROM form.f_547 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_28658
                JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
                JOIN Programs prg ON prg.ProgramID = frm.ProgramID
                WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var redressrepo = new List<RedressModel>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                redressrepo.Add(new RedressModel
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
                    ContactMethod_28645 = reader.IsDBNull(17) ? null : reader.GetString(17),
                    ContactMethod_28645_ResponseChoiceID = reader.IsDBNull(18) ? (int?)null : reader.GetInt32(18),
                    ContactLocation_28646 = reader.IsDBNull(19) ? null : reader.GetString(19),
                    ContactLocation_28646_ResponseChoiceID = reader.IsDBNull(20) ? (int?)null : reader.GetInt32(20),
                    PhoneContactType_28647 = reader.IsDBNull(21) ? null : reader.GetString(21),
                    PhoneContactType_28647_ResponseChoiceID = reader.IsDBNull(22) ? (int?)null : reader.GetInt32(22),
                    Ifcontactlocationisotherpleasespecify_28648 = reader.IsDBNull(23) ? null : reader.GetString(23),
                    HowmanystaffdidthistogetherAtmost4_28649 = reader.IsDBNull(24) ? (decimal?)null : reader.GetDecimal(24),
                    TimespentwithparticipantPerstaffmember_28650 = reader.IsDBNull(25) ? (int?)null : reader.GetInt32(25),
                    TimespentonbehalfofparticipantPerstaffmember_28651 = reader.IsDBNull(26) ? (int?)null : reader.GetInt32(26),
                    TimespenttravellingNotwithparticipantPerstaffmember_28652 = reader.IsDBNull(27) ? (int?)null : reader.GetInt32(27),
                    Totaltimespentwithparticipant_28653 = reader.IsDBNull(28) ? (int?)null : reader.GetInt32(28),
                    Totaltimespentonbehalfofparticipant_28654 = reader.IsDBNull(29) ? (int?)null : reader.GetInt32(29),
                    Totaltimespenttravelling_28655 = reader.IsDBNull(30) ? (int?)null : reader.GetInt32(30),
                    Totalefforttimeforparticipant_28656 = reader.IsDBNull(31) ? (int?)null : reader.GetInt32(31),
                    Selectyourname_28657 = reader.IsDBNull(32) ? (int?)null : reader.GetInt32(32),
                    MicahTeam_28658 = reader.IsDBNull(33) ? (int?)null : reader.GetInt32(33),
                    Selectthe2ndstaffperson_28659 = reader.IsDBNull(34) ? (int?)null : reader.GetInt32(34),
                    Whatotherteamassisted_28660 = reader.IsDBNull(35) ? (int?)null : reader.GetInt32(35),
                    Howdidyoufindoutaboutourservice_28664 = reader.IsDBNull(36) ? null : reader.GetString(36),
                    Howdidyoufindoutaboutourservice_28664_ResponseChoiceID = reader.IsDBNull(37) ? (int?)null : reader.GetInt32(37),
                    Preferredmethodofsupportvia_28665 = reader.IsDBNull(38) ? null : reader.GetString(38),
                    Preferredmethodofsupportvia_28665_ResponseChoiceID = reader.IsDBNull(39) ? (int?)null : reader.GetInt32(39),
                    Doyouhaveanydisabilities_28667 = reader.IsDBNull(40) ? null : reader.GetString(40),
                    Doyouhaveanydisabilities_28667_ResponseChoiceID = reader.IsDBNull(41) ? (int?)null : reader.GetInt32(41),
                    Disabilityimpairmentorconditionindicator_28668 = reader.IsDBNull(42) ? null : reader.GetString(42),
                    Disabilityimpairmentorconditionindicator_28668_ResponseChoiceID = reader.IsDBNull(43) ? (int?)null : reader.GetInt32(43),
                    LanguageSpokenatHomeotherthanEnglish_28669 = reader.IsDBNull(44) ? (int?)null : reader.GetInt32(44),
                    Mainsourceofincome_28670 = reader.IsDBNull(45) ? null : reader.GetString(45),
                    Mainsourceofincome_28670_ResponseChoiceID = reader.IsDBNull(46) ? (int?)null : reader.GetInt32(46),
                    Selectyourlocation_28672 = reader.IsDBNull(47) ? null : reader.GetString(47),
                    Selectyourlocation_28672_ResponseChoiceID = reader.IsDBNull(48) ? (int?)null : reader.GetInt32(48),
                    MailingList_28674 = reader.IsDBNull(49) ? null : reader.GetString(49),
                    MailingList_28674_ResponseChoiceID = reader.IsDBNull(50) ? (int?)null : reader.GetInt32(50),
                    Areyouworkingwithanyotherservices_28675 = reader.IsDBNull(51) ? null : reader.GetString(51),
                    Referredby_28676 = reader.IsDBNull(52) ? null : reader.GetString(52),
                    Name_28688 = reader.IsDBNull(53) ? null : reader.GetString(53),
                    ContactDetails_28690 = reader.IsDBNull(54) ? null : reader.GetString(54),
                    EducationStatus_28698 = reader.IsDBNull(55) ? null : reader.GetString(55),
                    EducationStatus_28698_ResponseChoiceID = reader.IsDBNull(56) ? (int?)null : reader.GetInt32(56),
                    DoestheParticipantspeakalanguageotherthanEnglishathome_28701 = reader.IsDBNull(57) ? null : reader.GetString(57),
                    DoestheParticipantspeakalanguageotherthanEnglishathome_28701_ResponseChoiceID = reader.IsDBNull(58) ? (int?)null : reader.GetInt32(58),
                    AreyouaForgottenAustralian_28702 = reader.IsDBNull(59) ? null : reader.GetString(59),
                    AreyouaForgottenAustralian_28702_ResponseChoiceID = reader.IsDBNull(60) ? (int?)null : reader.GetInt32(60),
                    Howwastheparticipantreferredtoourservice_28703 = reader.IsDBNull(61) ? null : reader.GetString(61),
                    Howwastheparticipantreferredtoourservice_28703_ResponseChoiceID = reader.IsDBNull(62) ? (int?)null : reader.GetInt32(62),
                    Internalreference_28704 = reader.IsDBNull(63) ? null : reader.GetString(63),
                    Internalreference_28704_ResponseChoiceID = reader.IsDBNull(64) ? (int?)null : reader.GetInt32(64),
                    Externalreference_28705 = reader.IsDBNull(65) ? null : reader.GetString(65),
                    Externalreference_28705_ResponseChoiceID = reader.IsDBNull(66) ? (int?)null : reader.GetInt32(66),
                    OtherReference_28706 = reader.IsDBNull(67) ? null : reader.GetString(67),
                    Istheparticipantapriority_28708 = reader.IsDBNull(68) ? null : reader.GetString(68),
                    Istheparticipantapriority_28708_ResponseChoiceID = reader.IsDBNull(69) ? (int?)null : reader.GetInt32(69),
                    Selectthereasonsforprioritising_28709 = reader.IsDBNull(70) ? null : reader.GetString(70),
                    Selectthereasonsforprioritising_28709_ResponseChoiceID = reader.IsDBNull(71) ? (int?)null : reader.GetInt32(71),
                    HaveyouspokentoanyotherserviceaboutRedress_28710 = reader.IsDBNull(72) ? null : reader.GetString(72),
                    HaveyouspokentoanyotherserviceaboutRedress_28710_ResponseChoiceID = reader.IsDBNull(73) ? (int?)null : reader.GetInt32(73),
                    Services_28711 = reader.IsDBNull(74) ? null : reader.GetString(74),
                    Services_28711_ResponseChoiceID = reader.IsDBNull(75) ? (int?)null : reader.GetInt32(75),
                    ServicesOther_28712 = reader.IsDBNull(76) ? null : reader.GetString(76),
                    IstheparticipanteligibletoapplytoNRS_28714 = reader.IsDBNull(77) ? null : reader.GetString(77),
                    IstheparticipanteligibletoapplytoNRS_28714_ResponseChoiceID = reader.IsDBNull(78) ? (int?)null : reader.GetInt32(78),
                    Selectallreasonsforseekingassistance_28715 = reader.IsDBNull(79) ?null : reader.GetString(79),
                    Selectallreasonsforseekingassistance_28715_ResponseChoiceID = reader.IsDBNull(80) ? (int?)null : reader.GetInt32(80),
                    Historyasachild_28722 = reader.IsDBNull(81) ? null : reader.GetString(81),
                    Historyasachild_28722_ResponseChoiceID = reader.IsDBNull(82) ? (int?)null : reader.GetInt32(82),
                    Detailsonhistoryofbeinginstitutionalizedasachild_28723 = reader.IsDBNull(83) ? null : reader.GetString(83),
                    Historyasanadult_28724 = reader.IsDBNull(84) ? null : reader.GetString(84),
                    Historyasanadult_28724_ResponseChoiceID = reader.IsDBNull(85) ? (int?)null : reader.GetInt32(85),
                    Detailsonhistoryofbeinginstitutionalizedasanadult_28725 = reader.IsDBNull(86) ? null : reader.GetString(86),
                    Isthereapublictrusteeoranadultguardian_28847 = reader.IsDBNull(87) ? null : reader.GetString(87),
                    Isthereapublictrusteeoranadultguardian_28847_ResponseChoiceID = reader.IsDBNull(88) ? (int?)null : reader.GetInt32(88),
                    Namepublictrustee_28848 = reader.IsDBNull(89) ? null : reader.GetString(89),
                    Contactdetailspublictrustee_28849 = reader.IsDBNull(90) ? null : reader.GetString(90),
                    Whichregionistheparticipanttobeallocatedto_29325 = reader.IsDBNull(91) ? null : reader.GetString(91),
                    Whichregionistheparticipanttobeallocatedto_29325_ResponseChoiceID = reader.IsDBNull(92) ? (int?)null : reader.GetInt32(92),
                    Pleaselistotherinternalreferrer_33336 = reader.IsDBNull(93) ? null : reader.GetString(93),
                    FName = reader.IsDBNull(94) ? null : reader.GetString(94),
                    LName = reader.IsDBNull(95) ? null : reader.GetString(95),
                    SubjectName = reader.IsDBNull(96) ? null : reader.GetString(96),
                    ProgramName = reader.IsDBNull(97) ? null : reader.GetString(97),
                    EntityName = reader.IsDBNull(98) ? null : reader.GetString(98),                   

                });
            }

            return redressrepo;
        }
    }
}