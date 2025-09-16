import React, { useState, useEffect } from "react";
import { fetchDocuments } from 'actions/DocumentsAction/DocumentAction';

function base64ToBlobUrl(base64, mimeType) {
  // Clean up possible prefix and whitespace
  base64 = base64
    .replace(/^data:.*;base64,/, "")    // Remove any data: URI prefix
    .replace(/\s/g, "");                // Remove whitespace/newlines

  // Validate that only Base64 characters remain
  if (!/^[A-Za-z0-9+/=]+$/.test(base64)) {
    throw new Error("Received string is not valid Base64.");
  }

  const byteCharacters = atob(base64);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    byteArrays.push(new Uint8Array(byteNumbers));
  }
  const blob = new Blob(byteArrays, { type: mimeType });
  return URL.createObjectURL(blob);
}

function DocumentAttachmentList({ participant }) {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDocuments() {
      setLoading(true);
      try {
        const result = await fetchDocuments(participant.id);
        setDocuments(result || []);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setDocuments([]);
      } finally {
        setLoading(false);
      }
    }

    if (participant?.id) {
      getDocuments();
    } else {
      setDocuments([]);
    }
  }, [participant?.id]);

  function getMimeType(document) {
    if (document.mimeType) return document.mimeType;
    const ext = document.fileName.split('.').pop().toLowerCase();
    if (["jpg", "jpeg"].includes(ext)) return "image/jpeg";
    if (ext === "png") return "image/png";
    if (ext === "gif") return "image/gif";
    if (ext === "pdf") return "application/pdf";
    return "application/octet-stream";
  }

  function handleDownload(doc) {
    const mimeType = getMimeType(doc);
    // Use base64ToBlobUrl for conversion
    const url = base64ToBlobUrl(doc.content, mimeType);

    const a = document.createElement("a");
    a.href = url;
    a.download = doc.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  if (loading) return <div>Loading documents...</div>;
  if (!documents || !documents.length) return <div>No documents available.</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Upload Document</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc, idx) => (
          <tr key={idx}>
            <td>
              <button
                style={{ background: "none", border: "none", color: "#1976d2", textDecoration: "underline", cursor: "pointer", font: "inherit", padding: 0 }}
                onClick={() => handleDownload(doc)}
                title={`Download ${doc.fileName}`}
              >
                {doc.fileName}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DocumentAttachmentList;
