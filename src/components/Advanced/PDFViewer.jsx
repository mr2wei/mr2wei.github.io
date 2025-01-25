import React from "react";

function PDFViewer({ file }) {
    return (
        <iframe
            src={file}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="PDF Viewer"
        />
    );
}

export default PDFViewer;