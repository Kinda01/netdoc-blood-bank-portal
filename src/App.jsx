import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file

function App() {
  const [activeSection, setActiveSection] = useState('patient-section');

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>TransNet</h2>
        <a
          href="#patient-section"
          onClick={() => showSection('patient-section')}
          className={activeSection === 'patient-section' ? 'active' : ''}
        >
          Patient Information
        </a>
        <a
          href="#serological-section"
          onClick={() => showSection('serological-section')}
          className={activeSection === 'serological-section' ? 'active' : ''}
        >
          Serological Statement
        </a>
        <a
          href="#blood-order-section"
          onClick={() => showSection('blood-order-section')}
          className={activeSection === 'blood-order-section' ? 'active' : ''}
        >
          Blood Order
        </a>
        <a
          href="#transfusion-control-section"
          onClick={() => showSection('transfusion-control-section')}
          className={activeSection === 'transfusion-control-section' ? 'active' : ''}
        >
          Transfusion Control
        </a>
        <a
          href="#cross-matching-section"
          onClick={() => showSection('cross-matching-section')}
          className={activeSection === 'cross-matching-section' ? 'active' : ''}
        >
          Cross Matching
        </a>
        <a
          href="#report-section"
          onClick={() => showSection('report-section')}
          className={activeSection === 'report-section' ? 'active' : ''}
        >
          Report
        </a>
        <a
          href="#transfusion-history-section"
          onClick={() => showSection('transfusion-history-section')}
          className={activeSection === 'transfusion-history-section' ? 'active' : ''}
        >
          Transfusion History
        </a>
      </div>

      <div className="content">
        <div className="header">Patient Blood Information Dashboard</div>

        <div className="details">
          {/* Patient Section */}
          <div
            id="patient-section"
            className={`section ${activeSection === 'patient-section' ? 'active' : ''}`}
          >
            <h3>Patient Information</h3>
            <div className="two-column">
              <div className="field">
                <label>Full Name:</label>
                <input type="text" placeholder="Enter full name" />
              </div>
              <div className="field">
                <label>Date of Birth:</label>
                <input type="date" />
              </div>
              <div className="field">
                <label>Blood Grouping:</label>
                <input type="text" placeholder="e.g., O RhD Positive" />
              </div>
              <div className="field">
                <label>BAS-test Status:</label>
                <input type="text" placeholder="Enter BAS test status" />
              </div>
              <div className="field">
                <label>Hospital Name:</label>
                <input type="text" placeholder="Enter hospital name" />
              </div>
              <div className="field">
                <label>Ward Name/Number:</label>
                <input type="text" placeholder="Enter ward" />
              </div>
              <div className="field">
                <label>Patient ID:</label>
                <input type="text" placeholder="Enter patient ID" />
              </div>
              <div className="field">
                <label>Medical Notes:</label>
                <textarea rows="3" placeholder="Enter medical notes"></textarea>
              </div>
              <div className="field">
                <label>Reasons for Transfusion:</label>
                <textarea rows="3" placeholder="Enter reasons"></textarea>
              </div>
            </div>
            <button className="save-button">Save Patient Info</button>
          </div>

          {/* Serological Section */}
          <div
            id="serological-section"
            className={`section ${activeSection === 'serological-section' ? 'active' : ''}`}
          >
            <h3>Serological Statement</h3>
            <div className="field">
              <label>HIV Test Result:</label>
              <select>
                <option>Positive</option>
                <option>Negative</option>
                <option>Inconclusive</option>
              </select>
            </div>
            <button className="save-button">Save Serological Info</button>
          </div>

          {/* Blood Order Section */}
          <div
            id="blood-order-section"
            className={`section ${activeSection === 'blood-order-section' ? 'active' : ''}`}
          >
            <h3>Blood Order</h3>
            <div className="field">
              <label>Blood Type:</label>
              <select>
                <option>A+</option>
                <option>O+</option>
                <option>B+</option>
                <option>AB-</option>
              </select>
            </div>
            <div className="field">
              <label>Units Ordered:</label>
              <input type="number" placeholder="Enter number of units" />
            </div>
            <div className="field">
              <label>Order Date:</label>
              <input type="date" />
            </div>
            <button className="save-button">Save Blood Order</button>
          </div>

          {/* Transfusion Control Section */}
          <div
            id="transfusion-control-section"
            className={`section ${activeSection === 'transfusion-control-section' ? 'active' : ''}`}
          >
            <h3>Transfusion Control</h3>
            <div className="field">
              <label>Transfusion Date:</label>
              <input type="date" />
            </div>
            <div className="field">
              <label>Transfusion Status:</label>
              <select>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
            <button className="save-button">Save Transfusion Control Info</button>
          </div>

          {/* Cross Matching Section */}
          <div
            id="cross-matching-section"
            className={`section ${activeSection === 'cross-matching-section' ? 'active' : ''}`}
          >
            <h3>Cross Matching</h3>
            <div className="field">
              <label>Cross Match Test Result:</label>
              <select>
                <option>Positive</option>
                <option>Negative</option>
                <option>Inconclusive</option>
              </select>
            </div>
            <button className="save-button">Save Cross Matching Info</button>
          </div>

          {/* Report Section */}
          <div
            id="report-section"
            className={`section ${activeSection === 'report-section' ? 'active' : ''}`}
          >
            <h3>Report</h3>
            <div className="field">
              <label>Report Type:</label>
              <select>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Annual</option>
              </select>
            </div>
            <button className="save-button">Generate Report</button>
          </div>

          {/* Transfusion History Section */}
          <div
            id="transfusion-history-section"
            className={`section ${activeSection === 'transfusion-history-section' ? 'active' : ''}`}
          >
            <h3>Transfusion History</h3>
            <table>
              <thead>
                <tr>
                  <th>Transfusion Date</th>
                  <th>Blood Type</th>
                  <th>Units Transfused</th>
                  <th>Administering Doctor</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-01-15</td>
                  <td>O+</td>
                  <td>2</td>
                  <td>Dr. John Doe</td>
                  <td className="actions">
                    <button className="edit-button" onClick={() => alert('Edit')}>Edit</button>
                    <button className="delete-button" onClick={() => alert('Delete')}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
