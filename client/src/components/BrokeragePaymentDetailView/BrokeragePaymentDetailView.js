import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './BrokeragePaymentDetailView.css';

function BrokeragePaymentDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
   transactionDate_6525 : "Transaction Date",
	micahTeam_8276: "Micah Team",
	worker1_7379 : "Worker1",
	worker2_7380 : "Worker2",
	financeJobCode_16945 : "Finance Job Code",
        transactionAmount_6530 : "Transaction Amount",
        willthistransactionbenefitonlythisindividualorisitforanentirefamily_21917 : "Will this transaction benefit only this individual, or is it for an entire family",
        detailsofTransaction_6533 : "Details of Transaction",
        supplierProvider_8871 : "Supplier/Provider",
        aIHWpurpose_28341 : "Purpose",
        tenancyAccessorSustainment_13318 : "Tenancy Access or Maintain",
        paymentforAIHW_6535 : "Payment for (AIHW)",
        authorizedBy_16943 : "Authorized By-Only a Team Leader or their delegate may authorize",
        authorizedBy_16943 : "Authorized By",
        attachDocumentssuchasInvoicesorreceipts_23268 : "Attach Documents such as Invoices or receipts"
  };

return (
  <div className="BrokeragePaymentDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default BrokeragePaymentDetailView;
