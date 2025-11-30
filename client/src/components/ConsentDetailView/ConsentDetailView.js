import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './ConsentDetailView.css';

function ConsentDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
   consentstatus_25257 : "Consent status",
	consenttorecordstoreinformationIunderstandthatcertaininformationcollectedbyMicahProjectsoranaf_25226 : "I understand that there are some situations where my consent is not required to share information with others. These are usually situations where disclosure is required to be shared to manage a serious child protection, family and domestic violence risk, or to be kept accurate in exchange of information between Government and authorised staff (as in the drug trial release).",
	
  iunderstandthatpersonalinformationwillbemanagedinaccordancewiththeInformationPrivacyAct2009QLD_29320 : "I understand that personal information will be managed in accordance with the Information Privacy Act 2009 QLD and the Australian Privacy Principals.",
	igiveconsentfordeidentifiedinformationtobeusedforadvocacypurposes_25227 : "I give consent for de-identified information to be used for advocacy purposes",
	
  iconsenttoallowMicahProjectstoprovidemewithservicesasrequestedandrequiredIunderstandIamabletoa_25228: "I consent to allow Micah Projects to provide me with services as requested and required. I understand I am able to ask for services to be reviewed at any time and can refuse/discontinue the services provided to me at any time.",
  
  iunderstandandgiveconsentforMicahProjectstoprovidemypersonalinformationtootherrelevantpersonso_25229: "I understand and give consent for Micah Projects to provide my personal information to other relevant persons or organisations for the provision of housing, healthcare, community services or other relevant services e.g. legal services",
  
  iconsenttoMicahProjectsemployeesaccessingtheTICAdatabaseonmybehalf_25230: "I consent to Micah Projects employees accessing the TICA database on my behalf",

  iconsenttobeinginvitedtoparticipateinresearchendorsedbyMicahProjectsIfIaminvitedtheprojectwill_29321:"I consent to being invited to participate in research endorsed by Micah Projects. If I am invited, the project will be explained to me and I will be given the option to participate if I want to.",

  idonotconsenttomypersonalinformationbeingdisclosedtothepersonoragencieslistedbelow_25231:"I do not consent to my personal information being disclosed to the person or agencies listed below",

  iunderstandthattheconsentIhaveprovidedhereformyselfwillalsoapplytothefollowingchildrenandoradu_25233 :"I understand that the consent I have provided here for myself will also apply to the following children and/or adults with impaired decision-making capacity.s",
  
  listedbelowthechildrenandoradultswithimpaireddecisionmakingcapacity_25232:"Listed below the children and/or adults with impaired decision-making capacity",
  
  iconsentforMicahtostoremyhousekeysindesignatedkeystorage_30828:"I consent for Micah to store my house keys in a designated key storage ",
  
  iacknowledgethatMicahProjectshasadvisedmeoftheWorkingTogetherwithMicahProjectsfactsheetwhichin_25235:"I acknowledge that Micah Projects has advised me of the Working Together with Micah Projects Charter (which includes information about privacy and confidentiality and how to provide feedback or raise concerns).",
  
  iunderstandthattherearesomeexceptionswheremyconsentisnotrequiredtoshareinformationwithothersTh_25238:"I understand that there are some situations where my consent is not required to share information with others. These are usually situations where disclosure is required to be shared to manage a serious child protection, family and domestic violence risk, or to be kept accurate in exchange of information between Government and authorised staff (as in the drug trial release).",
  
  iunderstandthattherearesomeexceptionswheremyconsentisnotrequiredtoshareinformationwithothersTh_25238:"Conditions Of Occupancy",
  inabilitytogainconsentWorkertocomplete_25239:"Inability to gain consent (Worker to complete)",
  
  reasonforrefusalwithdrawal_25240:"Reason for refusal/withdrawal",

  signedbypersonfamily_25241_Signee:"Signed by person / family",
  dateofSignature_25242:"Participant Date Signed",

  workerSignature_25243_Signee:"Worker signature",

  workerDatesigned_25244:"Worker Date signed",
  verbalConsentprovided_25246:"Verbal Consent provided?",
  uploadScannedDocumenthereClickonUploadNavigatetofileandselectSelectandthenOpenfilewillautomati_25247:"Upload Scanned Document here",

};

return (
  <div className="ConsentDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default ConsentDetailView;