import React, { useState } from "react";
import EditButton from "../EditButton/EditButton";
import "./EditProgramContainer.css";

function ProgramModal({ programs, show, onClose, onSelect }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Site & Programs</h2>
        <div className="program-list">
          {programs?.programs.map((prog) => (
            <button
              key={prog.code}
              className="program-btn"
              onClick={() => {
                onSelect(prog.code);
                onClose();
              }}
            >
              {prog.name}
            </button>
          ))}
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function EditProgramsContainer({
  selectedProgram,
  setSelectedProgram,
  programs,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <EditButton onClick={() => setShowModal(true)} />
      <ProgramModal
        programs={programs}
        show={showModal}
        onSelect={setSelectedProgram}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default EditProgramsContainer;
