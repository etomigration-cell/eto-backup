using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;
using EtoApi.Utils;

namespace EtoApi.Services
{
    public class ParticipantService
    {
        private readonly ParticipantRepository _participantRepository;
        private readonly DemographicsRepository _demographicsRepository;

        public ParticipantService(
            ParticipantRepository participantRepository,
            DemographicsRepository demographicsRepository)
        {
            _participantRepository = participantRepository;
            _demographicsRepository = demographicsRepository;
        }

        public async Task<ParticipantDetails> GetParticipantByIdAsync(int id)
        {
            var demographicDefinitionsList = await _demographicsRepository.GetDemographics();

            var demographicDefinitions = demographicDefinitionsList
                .Where(d => d.CDID.HasValue) // skip null keys if needed
                .Select(d => (d.CDID.Value, d.DemographicName));

            var clientDemographics = await _demographicsRepository.GetDemographicDetailsByIdAsync(id);

            var mappedDemographics = DemographicsUtils.MapDemographicNamesToValues(
                demographicDefinitions, clientDemographics);       
            
            var participant = await _participantRepository.GetParticipantByIdAsync(id);
            participant.Demographics = mappedDemographics
            .ToDictionary(
                demographic => demographic.Key.Replace(' ', '_'),
                demographic => demographic.Value?.ToString()
            );

            return participant;
        }
    }
}
