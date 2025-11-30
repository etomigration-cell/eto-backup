using EtoApi.Models;

namespace EtoApi.Utils // or your chosen namespace
{
    public static class DemographicsUtils
    {
        public static Dictionary<string, object?> MapDemographicNamesToValues(
            IEnumerable<(int CDID, string DemographicName)> demographics, 
            DemographicsDetails clientDemographics)
        {
            var lookup = demographics.ToDictionary(d => d.CDID, d => d.DemographicName);

            var result = new Dictionary<string, object?>();
            var clientType = clientDemographics.GetType();

            foreach (var prop in clientType.GetProperties())
            {
                var name = prop.Name;
                if (name.StartsWith("CDID_") && int.TryParse(name.Substring(5), out int cdid))
                {
                    if (lookup.TryGetValue(cdid, out string demName))
                    {
                        var value = prop.GetValue(clientDemographics);
                        result[demName] = value;
                    }
                }
            }

            return result;
        }
    }
}
