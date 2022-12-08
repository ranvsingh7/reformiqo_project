import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Customers.scss";
import { Table } from "antd";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { CgSearch } from "react-icons/cg";
import { BiExport } from "react-icons/bi";
import { BiFilter } from "react-icons/bi";

const Customer = () => {
  const [exportOpen, setExportOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  // const menuRef = useRef()

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
      key: "2",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "3",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "4",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "5",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "6",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "7",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "8",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "9",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "10",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "11",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "12",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "13",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "14",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "15",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },
    {
      key: "16",
      business_name: "Reformiqo Business Service Pvt. Ltd",
      type: "Customer",
      account: "Account Receivable",
      unadjusted_account: "Unadjested Receipts",
      type_category: "Wholeseler",
      email: "parth@gmail.com",
    },

    // ...
  ];
  const columnsData = [
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
  const [columns,setColumns] = useState(columnsData)
  

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
  const openSetting = () => {
    setSettingOpen(!settingOpen);
  };

  useEffect(() => {
    let handler = (e) => {
      if (e.target) {
        setExportOpen(false);
        
      }
      // setSettingOpen(false);
    };
    document.addEventListener("mousedown", handler);
  });

  const handleDragEnd = (e)=>{
    if (!e.destination) return;
    let tempData = Array.from(columns);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setColumns(tempData)
  }

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
          <div className="settings" >
            <img src="./images/icons/setting.svg" alt="icon" onClick={openSetting} />
            <DragDropContext onDragEnd={handleDragEnd}>
              <div
                className={`table_setting_dropdown ${
                  settingOpen ? "active" : "inactive"
                }`}
              >
                <h5>Manage Columns</h5>

                <Droppable droppableId="draggable_item">
                  {(provider) => (
                    <div ref={provider.innerRef} {...provider.droppableProps}>
                      {columns.map((item,index) => (
                        <Draggable draggableId={item.key} index={index} key={item.key}>
                          {(provider) => (
                            <div
                              className="columns_fields"
                              ref={provider.innerRef}
                              {...provider.draggableProps}
                              {...provider.dragHandleProps}
                            >
                              <div className="chekbox_title">
                                <input type="checkbox" />
                                <span>{item.title}</span>
                              </div>
                              <div>
                                <img
                                  src="./images/icons/bx-dialpad-alt.svg"
                                  alt="icon"
                                />
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provider.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
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
