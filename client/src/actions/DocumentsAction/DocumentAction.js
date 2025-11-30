import { transformDocumentContent } from 'transformer/documentTransformer';

export async function fetchDocuments(params) {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/participant/documents/${params.toString()}`,
  );
  if (!response.ok) {
    throw new Error("Documents not found");
  }
  const data = await response.json();
  const transformed = transformDocumentContent(data);

    return transformed;
}
