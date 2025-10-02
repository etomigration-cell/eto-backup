import React, { useState, useEffect } from "react";
import { fetchDocuments } from 'actions/DocumentsAction/DocumentAction';
import { FaEye } from 'react-icons/fa';
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import Spinner from "common/Spinner/Spinner";
import DocumentDetails from "./DocumentDetails";

import './Documents.css';

// Converts base64 string to Blob URL, with validation and proper padding
function base64ToBlobUrl(base64, mimeType) {
  base64 = base64.replace(/^data:.*;base64,/, "").replace(/\s/g, "");
  while (base64.length % 4 !== 0) {
    base64 += "=";
  }
  if (!/^[A-Za-z0-9+/=]+$/.test(base64)) {
    throw new Error("Received string is not valid Base64.");
  }
  const byteCharacters = atob(base64);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = Array.from(slice).map((c) => c.charCodeAt(0));
    byteArrays.push(new Uint8Array(byteNumbers));
  }
  const blob = new Blob(byteArrays, { type: mimeType });
  return URL.createObjectURL(blob);
}

// Determines MIME type with a strict priority: contentType property, then filename extension fallback
function getMimeType(document) {
  // contentType can be "application/pdf", "image/jpeg", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", etc.
  if (document.contentType) return document.contentType;
  if (document.mimeType) return document.mimeType;
  if (!document.fileName || !document.fileName.includes(".")) return "application/octet-stream";
  const ext = document.fileName.split('.').pop().toLowerCase();
  if (["jpg", "jpeg"].includes(ext)) return "image/jpeg";
  if (ext === "png") return "image/png";
  if (ext === "gif") return "image/gif";
  if (ext === "pdf") return "application/pdf";
  if (ext === "docx") return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  if (ext === "doc") return "application/msword";
  if (ext === "xlsx") return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  if (ext === "xls") return "application/vnd.ms-excel";
  return "application/octet-stream";
}

function DocumentAttachmentList({ participant, config }) {
  const [documents, setDocuments] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [documentsDetail, setDocumentDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [viewedData, setViewedData] = useState(null);

  useEffect(() => {
    async function getDocuments() {
      setLoading(true);
      setError("");
      try {
        const result = await fetchDocuments(participant.clid);
        setDocuments(result || []);
        setDocumentDetails(result.full);
      } catch (err) {
        setError("Error fetching documents.");
        setDocuments([]);
      } finally {
        setLoading(false);
      }
    }
    if (participant?.clid) {
      getDocuments();
    } else {
      setDocuments([]);
    }
  }, [participant?.clid]);

  function handleDownload(doc) {
    console.log(doc)
    try {
      const mimeType = getMimeType(doc);
      console.log(mimeType)
      const url = base64ToBlobUrl(doc.content, mimeType);
      const a = document.createElement("a");
      a.href = url;
      a.download = doc.fileName || "download";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (e) {
      setError("Invalid file data: could not download. Please contact support if this persists.");
    }
  }

    const handleView = (row) => {
   // console.log(addressBookDetails)
    console.log(documents)
    const detail = documentsDetail.find(d => d.formResponseID === row.formResponseID) || row;
     setViewedData(detail); // or load details via API, then setViewedData(result)
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: 'Documents uploaded',
      content: <DocumentDetails detail={viewedData} />
    }
  ];

  const columnsData = config(handleDownload);

  const configWithActions = {
    ...columnsData,
    columns: columnsData.columns.map(col =>
      col.key === 'actions'
        ? {
            ...col,
            render: (row) => (
              <button
                title="View"
                onClick={() => handleView(row)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
              >
                <FaEye size={20} color="currentColor" />
              </button>
            )
          }
        : col
    )
  };

  return (
    <div className="documents-panel">
          <div className="panel-header">
            <strong>Documents Uploaded</strong>
          </div>
           {loading && <Spinner />}
          {!loading &&  <div className="documents-table-wrapper">
            <DynamicTable data={documents.minimal || []} config={configWithActions} className="documents-table" />
          </div> }
          <Sidebar visible={!!viewedData} onClose={handleCloseSidebar} title={viewedData ? `Documents uploaded for ${participant.fName} ${participant.lName}` : ''}>
           <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}  />
          </Sidebar>
    </div>
  );
}

export default DocumentAttachmentList;
