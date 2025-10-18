import { transformDocumentContent } from 'transformer/documentTransformer';

export async function fetchDocuments(params) {
  const response = await fetch(
    `http://localhost:5001/participant/documents/${params.toString()}`,
  );
  if (!response.ok) {
    throw new Error("Documents not found");
  }
  const data = await response.json();
  const transformed = transformDocumentContent(data);

    return transformed;
}
