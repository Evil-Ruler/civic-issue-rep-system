import React, { useState } from "react";
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CNavItem,
  CNavLink,
  CSidebar,
  CSidebarNav,
  CSidebarBrand,
  CSidebarToggler,
  CForm,
  CFormInput,
  CFormTextarea,
  CFormSelect,
  CButton,
  CAlert,
} from "@coreui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const CitizenDashboard = () => {
  const [reports, setReports] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    photo: "",
  });

  const categories = ["Pothole", "Garbage", "Streetlight", "Water Supply", "Other"];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

  // Handle form input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      ...formData,
      id: reports.length + 1,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };
    setReports([...reports, newReport]);
    setFormData({ title: "", description: "", category: "", location: "", photo: "" });
    setSuccessMsg("✅ Report submitted successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  // Default data for charts (so they aren’t empty)
  const sampleLineData = [
    { name: "Report 1", reports: 1 },
    { name: "Report 2", reports: 2 },
    { name: "Report 3", reports: 3 },
  ];

  const lineData = reports.length
    ? reports.map((r, i) => ({ name: `Report ${i + 1}`, reports: i + 1 }))
    : sampleLineData;

  const pieData = categories.map((cat) => ({
    name: cat,
    value: reports.filter((r) => r.category === cat).length,
  }));

  const hasPieData = pieData.some((item) => item.value > 0);

  return (
    <div className="d-flex mar">
      {/* Sidebar */}
      <CSidebar visible={true} unfoldable className="border-end">
        <CSidebarBrand className="fw-bold text-center">Citizen</CSidebarBrand>
        <CSidebarNav>
          <CNavItem>
            <CNavLink href="#">Dashboard</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">My Reports</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Submit Report</CNavLink>
          </CNavItem>
        </CSidebarNav>
        <CSidebarToggler />
      </CSidebar>

      {/* Main Content */}
      <CContainer fluid className="p-4">
        <h3 className="mb-4">Citizen Dashboard</h3>

        {/* Success Message */}
        {successMsg && <CAlert color="success">{successMsg}</CAlert>}

        {/* Stat Cards */}
        <CRow className="mb-4">
          <CCol md={3}>
            <CCard className="shadow-sm text-center">
              <CCardBody>
                <CCardTitle>Total Reports</CCardTitle>
                <CCardText className="fs-4 fw-bold">{reports.length}</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={3}>
            <CCard className="shadow-sm text-center">
              <CCardBody>
                <CCardTitle>Resolved</CCardTitle>
                <CCardText className="fs-4 fw-bold text-success">
                  {reports.filter((r) => r.status === "Resolved").length}
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={3}>
            <CCard className="shadow-sm text-center">
              <CCardBody>
                <CCardTitle>Pending</CCardTitle>
                <CCardText className="fs-4 fw-bold text-warning">
                  {reports.filter((r) => r.status === "Pending").length}
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        {/* Charts */}
        <CRow className="mb-4">
          <CCol md={8}>
            <CCard className="shadow-sm">
              <CCardBody>
                <CCardTitle>Reports Over Time</CCardTitle>
                {lineData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="reports" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-center text-muted">No reports yet</p>
                )}
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={4}>
            <CCard className="shadow-sm">
              <CCardBody>
                <CCardTitle>Reports by Category</CCardTitle>
                {hasPieData ? (
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-center text-muted">No category data yet</p>
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        {/* Report Submission Form */}
        <CRow>
          <CCol md={12}>
            <CCard className="shadow-sm">
              <CCardBody>
                <CCardTitle>Submit an Issue</CCardTitle>
                <CForm onSubmit={handleSubmit}>
                  <CRow className="mb-3">
                    <CCol md={6}>
                      <CFormInput
                        type="text"
                        name="title"
                        placeholder="Issue Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormSelect
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </CFormSelect>
                    </CCol>
                  </CRow>

                  <CRow className="mb-3">
                    <CCol md={12}>
                      <CFormTextarea
                        rows={3}
                        name="description"
                        placeholder="Describe the issue..."
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </CCol>
                  </CRow>

                  <CRow className="mb-3">
                    <CCol md={6}>
                      <CFormInput
                        type="text"
                        name="location"
                        placeholder="Enter Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormInput type="file" name="photo" onChange={handleChange} />
                    </CCol>
                  </CRow>

                  <CButton color="primary" type="submit">
                    Submit Report
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default CitizenDashboard;
