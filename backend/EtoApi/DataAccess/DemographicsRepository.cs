using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class DemographicsRepository
    {
        private readonly ISqlConnectionFactory _connectionFactory;

        public DemographicsRepository(ISqlConnectionFactory connectionFactory)
            {
                _connectionFactory = connectionFactory;
            }


        public async Task<List<Demographics>> GetDemographics()
        {
            using var connection = await _connectionFactory.CreateOpenConnectionAsync();

            var query = @"
                SELECT 
                    CDID, CxDemographicName
                FROM 
                    CxDemographics";

            using var command = new SqlCommand(query, connection);
    

            var demographics = new List<Demographics>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                demographics.Add(new Demographics
                {
                    CDID = reader.IsDBNull(0) ? (int?)null : reader.GetInt16(0),
                    DemographicName = reader.GetString(1)
                });
            }
            return demographics;
        }

        public async Task<DemographicsDetails?> GetDemographicDetailsByIdAsync(int id)
        {
             using var connection = await _connectionFactory.CreateOpenConnectionAsync();

            var query = @"
                SELECT
                    CLID,
                    CDID_3752,
                    CDID_3754,
                    CDID_3755,
                    CDID_3756,
                    CDID_3757,
                    CDID_3758,
                    CDID_3759,
                    CDID_3760,
                    CDID_3761,
                    CDID_3762,
                    CDID_3763,
                    CDID_3764,
                    CDID_3765,
                    CDID_3766,
                    CDID_3767,
                    CDID_3768,
                    CDID_3769,
                    CDID_3770,
                    CDID_3771,
                    CDID_3772,
                    CDID_3773,
                    CDID_3774,
                    CDID_3775,
                    CDID_3777,
                    CDID_3778,
                    CDID_3779,
                    CDID_3780,
                    CDID_3781,
                    CDID_3782,
                    CDID_3783,
                    CDID_3784,
                    CDID_3785,
                    CDID_3786,
                    CDID_3787,
                    CDID_3788,
                    CDID_3789,
                    CDID_3790,
                    CDID_3791,
                    CDID_3792,
                    CDID_3793,
                    CDID_3794,
                    CDID_3795,
                    CDID_3796,
                    CDID_3797,
                    CDID_3798,
                    CDID_3799,
                    CDID_3800,
                    CDID_3801,
                    CDID_3802,
                    CDID_3803,
                    CDID_3804,
                    CDID_3805,
                    CDID_3806,
                    CDID_3807,
                    CDID_3808,
                    CDID_3809,
                    CDID_3810,
                    CDID_3811,
                    CDID_3812,
                    CDID_3813,
                    CDID_3814,
                    CDID_3815,
                    CDID_3816,
                    CDID_3817,
                    CDID_3818,
                    CDID_3819,
                    CDID_3820,
                    CDID_3821,
                    CDID_3822,
                    CDID_3823,
                    CDID_3824,
                    CDID_3825,
                    CDID_3826,
                    CDID_3827,
                    CDID_3830,
                    CDID_3831,
                    CDID_3832,
                    CDID_3833,
                    CDID_3838,
                    CDID_3839,
                    CDID_3840,
                    CDID_3842
                FROM universe.ClientDemographicData_1
                WHERE CLID = @Id";
            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            using var reader = await command.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                return new DemographicsDetails
                {
                    CLID = reader.IsDBNull(0) ? null : reader.GetInt32(0),
                    CDID_3752 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    CDID_3754 = reader.IsDBNull(2) ? null : reader.GetString(2),
                    CDID_3755 = reader.IsDBNull(3) ? null : reader.GetString(3),
                    CDID_3756 = reader.IsDBNull(4) ? null : reader.GetString(4),
                    CDID_3757 = reader.IsDBNull(5) ? null : reader.GetString(5),
                    CDID_3758 = reader.IsDBNull(6) ? null : reader.GetString(6),
                    CDID_3759 = reader.IsDBNull(7) ? null : reader.GetString(7),
                    CDID_3760 = reader.IsDBNull(8) ? null : reader.GetString(8),
                    CDID_3761 = reader.IsDBNull(9) ? null : reader.GetString(9),
                    CDID_3762 = reader.IsDBNull(10) ? null : reader.GetString(10),
                    CDID_3763 = reader.IsDBNull(11) ? null : reader.GetString(11),
                    CDID_3764 = reader.IsDBNull(12) ? null : reader.GetString(12),
                    CDID_3765 = reader.IsDBNull(13) ? null : reader.GetString(13),
                    CDID_3766 = reader.IsDBNull(14) ? null : reader.GetString(14),
                    CDID_3767 = reader.IsDBNull(15) ? null : reader.GetString(15),
                    CDID_3768 = reader.IsDBNull(16) ? null : reader.GetString(16),
                    CDID_3769 = reader.IsDBNull(17) ? null : reader.GetString(17),
                    CDID_3770 = reader.IsDBNull(18) ? null : reader.GetString(18),
                    CDID_3771 = reader.IsDBNull(19) ? null : reader.GetString(19),
                    CDID_3772 = reader.IsDBNull(20) ? null : reader.GetString(20),
                    CDID_3773 = reader.IsDBNull(21) ? null : reader.GetString(21),
                    CDID_3774 = reader.IsDBNull(22) ? null : reader.GetString(22),
                    CDID_3775 = reader.IsDBNull(23) ? null : reader.GetString(23),
                    CDID_3777 = reader.IsDBNull(24) ? null : reader.GetString(24),
                    CDID_3778 = reader.IsDBNull(25) ? null : reader.GetString(25),
                    CDID_3779 = reader.IsDBNull(26) ? null : reader.GetString(26),
                    CDID_3780 = reader.IsDBNull(27) ? (DateTime?)null : reader.GetDateTime(27),
                    CDID_3781 = reader.IsDBNull(28) ? null : reader.GetString(28),
                    CDID_3782 = reader.IsDBNull(29) ? (decimal?)null : reader.GetDecimal(29),
                    CDID_3783 = reader.IsDBNull(30) ? null : reader.GetString(30),
                    CDID_3784 = reader.IsDBNull(31) ? null : reader.GetString(31),
                    CDID_3785 = reader.IsDBNull(32) ? null : reader.GetString(32),
                    CDID_3786 = reader.IsDBNull(33) ? null : reader.GetString(33),
                    CDID_3787 = reader.IsDBNull(34) ? null : reader.GetString(34),
                    CDID_3788 = reader.IsDBNull(35) ? null : reader.GetString(35),
                    CDID_3789 = reader.IsDBNull(36) ? null : reader.GetString(36),
                    CDID_3790 = reader.IsDBNull(37) ? null : reader.GetString(37),
                    CDID_3791 = reader.IsDBNull(38) ? null : reader.GetString(38),
                    CDID_3792 = reader.IsDBNull(39) ? null : reader.GetString(39),
                    CDID_3793 = reader.IsDBNull(40) ? null : reader.GetString(40),
                    CDID_3794 = reader.IsDBNull(41) ? null : reader.GetString(41),
                    CDID_3795 = reader.IsDBNull(42) ? null : reader.GetString(42),
                    CDID_3796 = reader.IsDBNull(43) ? null : reader.GetString(43),
                    CDID_3797 = reader.IsDBNull(44) ? null : reader.GetString(44),
                    CDID_3798 = reader.IsDBNull(45) ? null : reader.GetString(45),
                    CDID_3799 = reader.IsDBNull(46) ? null : reader.GetString(46),
                    CDID_3800 = reader.IsDBNull(47) ? null : reader.GetString(47),
                    CDID_3801 = reader.IsDBNull(48) ? null : reader.GetString(48),
                    CDID_3802 = reader.IsDBNull(49) ? null : reader.GetString(49),
                    CDID_3803 = reader.IsDBNull(50) ? null : reader.GetString(50),
                    CDID_3804 = reader.IsDBNull(51) ? null : reader.GetString(51),
                    CDID_3805 = reader.IsDBNull(52) ? null : reader.GetString(52),
                    CDID_3806 = reader.IsDBNull(53) ? null : reader.GetString(53),
                    CDID_3807 = reader.IsDBNull(54) ? (DateTime?)null : reader.GetDateTime(54),
                    CDID_3808 = reader.IsDBNull(55) ? null : reader.GetString(55),
                    CDID_3809 = reader.IsDBNull(56) ? null : reader.GetString(56),
                    CDID_3810 = reader.IsDBNull(57) ? null : reader.GetString(57),
                    CDID_3811 = reader.IsDBNull(58) ? null : reader.GetString(58),
                    CDID_3812 = reader.IsDBNull(59) ? (decimal?)null : reader.GetDecimal(59),
                    CDID_3813 = reader.IsDBNull(60) ? null : reader.GetString(60),
                    CDID_3814 = reader.IsDBNull(61) ? null : reader.GetString(61),
                    CDID_3815 = reader.IsDBNull(62) ? null : reader.GetString(62),
                    CDID_3816 = reader.IsDBNull(63) ? null : reader.GetString(63),
                    CDID_3817 = reader.IsDBNull(64) ? null : reader.GetString(64),
                    CDID_3818 = reader.IsDBNull(65) ? null : reader.GetString(65),
                    CDID_3819 = reader.IsDBNull(66) ? null : reader.GetString(66),
                    CDID_3820 = reader.IsDBNull(67) ? null : reader.GetString(67),
                    CDID_3821 = reader.IsDBNull(68) ? null : reader.GetString(68),
                    CDID_3822 = reader.IsDBNull(69) ? (DateTime?)null : reader.GetDateTime(69),
                    CDID_3823 = reader.IsDBNull(70) ? (decimal?)null : reader.GetDecimal(70),
                    CDID_3824 = reader.IsDBNull(71) ? null : reader.GetString(71),
                    CDID_3825 = reader.IsDBNull(72) ? null : reader.GetString(72),
                    CDID_3826 = reader.IsDBNull(73) ? null : reader.GetString(73),
                    CDID_3827 = reader.IsDBNull(74) ? null : reader.GetString(74),
                    CDID_3830 = reader.IsDBNull(75) ? null : reader.GetString(75),
                    CDID_3831 = reader.IsDBNull(76) ? null : reader.GetString(76),
                    CDID_3832 = reader.IsDBNull(77) ? null : reader.GetString(77),
                    CDID_3833 = reader.IsDBNull(78) ? null : reader.GetString(78),
                    CDID_3838 = reader.IsDBNull(79) ? null : reader.GetString(79),
                    CDID_3839 = reader.IsDBNull(80) ? null : reader.GetString(80),
                    CDID_3840 = reader.IsDBNull(81) ? null : reader.GetString(81),
                    CDID_3842 = reader.IsDBNull(82) ? null : reader.GetString(82),
                };
            }
            return null;
        }
    }
}
