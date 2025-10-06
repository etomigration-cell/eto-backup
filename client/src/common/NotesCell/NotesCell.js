import React, { useState } from "react";
import "./NotesCell.css";

function Modal({ open, onClose, children, heading }) {
  if (!open) return null;
  return (
    <div className="notes-modal-backdrop">
      <div className="notes-modal-content">
        <button className="notes-modal-close" onClick={onClose}>&times;</button>
        <h2 className="notes-modal-heading">{heading}</h2>
        <div className="notes-modal-body">{children}</div>
      </div>
    </div>
  );
}

function NotesCell({ value, heading }) {
  const [open, setOpen] = useState(false);
  const previewLength = 100;
  const hasOverflow = value && value.length > previewLength;
  const preview = hasOverflow ? value.slice(0, previewLength) + "…" : value;

  return (
    <>
      <span>
        {preview}
        {hasOverflow &&
          <span
            className="notes-show-link"
            onClick={e => { e.stopPropagation(); setOpen(true); }}
          >
            Show
          </span>
        }
      </span>
      <Modal open={open} heading={heading} onClose={() => setOpen(false)}>
        {value}
      </Modal>
    </>
  );
}

export default NotesCell;
