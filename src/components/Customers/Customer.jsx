import React from "react";
import { useState } from "react";
import "./Customers.scss";
import { Table } from "antd";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { CgSearch } from "react-icons/cg";
import { BiExport } from "react-icons/bi";
import { BiFilter } from "react-icons/bi";
import { useEffect } from "react";

const Customer = () => {
  const [exportOpen, setExportOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "1",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },

    // ...
  ];

  const columns = [
    {
      title: "Business Name",
      label: "Business Name",
      dataIndex: "business_name",
      key: "business_name",
    },
    {
      title: "Type",
      label: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Account",
      label: "Account",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Unadjusted Account",
      label: "Unadjusted Account",
      dataIndex: "unadjusted_account",
      key: "unadjusted_account",
    },
    {
      title: "Type Category",
      label: "Type Category",
      dataIndex: "type_category",
      key: "type_category",
    },
    {
      title: "Email",
      label: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const csvLink = {
    filename: "customer_data.csv",
    headers: columns,
    data: dataSource,
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Customer Data", 20, 10);
    doc.autoTable({
      columns: columns.map((col) => ({ ...col, dataKey: col.key })),
      body: dataSource,
    });
    doc.save("customer_data.pdf");
  };

  const openExport = () => {
    setExportOpen(!exportOpen);
  };

  useEffect(() => {
    let handler = (e) => {
      if (e.target) {
        setExportOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="customers">
      <div className="table_nav">
        <div className="search_customer">
          <div className="search_icon">
            <CgSearch size={23} color="#697A8D" />
          </div>
          <input type="text" placeholder="Search Customer" />
        </div>

        <div className="tableBtn_container">
          <div className="tableBtn export" onClick={openExport}>
            <div className="btn_icon">
              <BiExport size={15} />
            </div>
            <span>Export</span>

            <div
              className={`export_dropdown ${
                exportOpen ? "active" : "inactive"
              }`}
            >
              <div className="export_dropdown_btn">
                <div className="export_icon">
                  <img src="./images/icons/print_icon.svg" alt="print_icon" />
                </div>
                <span>Print</span>
              </div>
              <CSVLink {...csvLink} className="csvLink">
                <div className="export_dropdown_btn">
                  <div className="export_icon">
                    <img
                      src="./images/icons/document_icon.svg"
                      alt="document_icon"
                    />
                  </div>
                  <span>Csv</span>
                </div>
              </CSVLink>
              <div className="export_dropdown_btn" onClick={downloadPdf}>
                <div className="export_icon">
                  <img src="./images/icons/pdf_icon.svg" alt="pdf_icon" />
                </div>
                <span>Pdf</span>
              </div>
              <div className="export_dropdown_btn">
                <div className="export_icon">
                  <img src="./images/icons/copy_icon.svg" alt="copy_icon" />
                </div>
                Copy
              </div>
            </div>
          </div>

          <div className="tableBtn">
            <div className="btn_icon">
              <BiFilter size={15} />
            </div>
            Filter
          </div>
          <div className="tableBtn addNewBtn">
            <div className="addNew_btn_icon ">+</div>
            New
          </div>
          <div className="settings">
            <img src="./images/icons/setting.svg" alt="" />
            <div className="table_setting_dropdown">
          </div>
          </div>
          
        </div>
      </div>

      <div className="tableData">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Customer;
