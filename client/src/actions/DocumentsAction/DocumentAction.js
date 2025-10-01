import { transformDocumentContent } from 'transformer/documentTransformer';

export async function fetchDocuments(id) {
  const response = await fetch(
    `http://localhost:5001/participant/documents/${id}`,
  );
  if (!response.ok) {
    throw new Error("Documents not found");
  }
  const data = await response.json();
  const transformed = transformDocumentContent(data);

    return transformed;
}
