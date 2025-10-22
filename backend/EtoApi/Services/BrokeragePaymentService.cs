using System.Threading.Tasks;
using EtoApi.Models;
using EtoApi.DataAccess;

namespace EtoApi.Services
{
    public class BrokeragePaymentService
    {
        private readonly BrokeragePaymentRepository _repository;

        public BrokeragePaymentService(BrokeragePaymentRepository repository)
        {
            _repository = repository;
        }

        public Task<List<BrokeragePaymentModel>> GetBrokeragePaymentAsync(int id)
        {
            return _repository.GetBrokeragePaymentByIdAsync(id);
        }
    }
}