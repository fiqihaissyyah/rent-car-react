import React from 'react'
import success from '../assets/images/success.svg'
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import pdfInvoice from '../assets/Invoice.pdf'
import { FiDownload } from 'react-icons/fi';


const Invoice = () => {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
  
  return (
    <div>
        <div className="mt-5">
          <img
            className="d-block mx-auto success"
            src={success}
            alt=""
            width="48"
            height="48"
          />
          <h5 className="fw-bold fs-6 text-center mt-3">
            Pembayaran Berhasil!
          </h5>
          <p className="text-center mt-2">
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
        </div>
        <div
          className="bg-white mx-auto p-5 rounded-3 mt-5"
          style={{
            width: "605px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="fw-bold fs-6">Tiket</h5>
              <p style={{ fontSize: "12px", fontWeight: "300" }}>*invoice</p>
            </div>
            <Download>
              {(props) => (
                <button
                  className="download-invoice d-flex px-4 h-25 py-2 border-2 fw-bold rounded-1"
                  onClick={props.onClick}
                >
                    <FiDownload
                    className='me-2 align-itmes-center'
                    width={18}
                    height={18}
                    />
                  Unduh
                </button>
              )}
            </Download>
          </div>

          <div
            className="d-flex w-100 border-secondary p-5 justify-content-center mt-3"
            style={{ borderStyle: "dashed", backgroundColor: "#D0D0D0" }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfInvoice} plugins={[getFilePluginInstance]} />
            </Worker>
          </div>
        </div>
      </div>
  )
}

export default Invoice