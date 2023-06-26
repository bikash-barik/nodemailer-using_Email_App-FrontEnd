import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import URLAPI from "../API/URLAPI";

function DoaminCountry() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const history = useHistory();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("domainList", file);
    const response = await fetch(`${URLAPI}/domains`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setResults(data);
    setFilteredResults(data);
  };

  const handleFilterChange = (e) => {
    const selectedRegion = e.target.value;
    setSelectedRegion(selectedRegion);
    if (selectedRegion === "All") {
      setFilteredResults(results);
    } else {
      const filtered = results.filter(({ country }) => country === selectedRegion);
      filtered.forEach((domain) => {
        domain.country = selectedRegion;
      });
      setFilteredResults(filtered);
    }
  };


  const EmailSand = () => {
    history.push("/EmailSand");
  };

  return (
    <>
      <div className="container p-5">
        <div className="d-flex">
          <div className="form-input">
            <label htmlFor="emailList"> Domain List </label>
            <div className="d-flex justify-content-between">
            <input
              type="file"
              name="emailList"
              id="emailList"
              onChange={handleFileChange}
            />
            <button onClick={handleFormSubmit} className="btn btn-primary">
            Find Country Name
          </button>
          {/* <button onClick={EmailSand} className="btn btn-primary">
            Next
          </button> */}
        </div>
          </div>
        </div>
       
          
        <hr />

        {filteredResults.length > 0 && (
          <div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h2>Domains:</h2>
                </div>
                <div class="col">
                  <h4>
                    Total Domains :
                    <span className="ml-2 text-success">
                      {filteredResults.length}{" "}
                    </span>{" "}
                  </h4>
                </div>
                <div class="col">
                  <h4>
                    Not Found Country :
                    <span className="ml-2 text-danger"></span>
                  </h4>
                </div>
                <div className="col">
                  <h4>Filter</h4>

                  <select
                    onChange={handleFilterChange}
                    className=" w-60"
                    aria-label="Filter Domains By Name"
                  >
                    <option value="All">All Domains</option>
                    <option value="US">USA</option>
                    <option value="IN">India</option>
                  </select>
                </div>
              </div>

              <table  class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#SL</th>
                    <th scope="col">Domain</th>
                    <th scope="col">Country Name</th>
                  </tr>
                </thead>
                <tbody>
                {results.reverse().map(({ domain, country }, i) => (
  country === selectedRegion && (
                    <tr key={domain}>
                      <th scope="row">{i + 1}</th>

                      <td>{domain}</td>
                      {/* <td>{country}</td> */}
                      <td
                        style={{
                          width: "20px",
                          textDecoration: "none",
                          border: "none",
                        }}
                      >
                        {country && (
                          <ReactFlagsSelect
                            countries={[
                              "US",
                              "GB",
                              "CA",
                              "FR",
                              "DE",
                              "IT",
                              "ES",
                              "IN",
                              "CN",
                              "JP",
                              "KR",
                              "AU",
                            ]}
                            customLabels={{
                              US: "USA",
                              GB: "UK",
                              CA: "Canada",
                              FR: "France",
                              DE: "Germany",
                              IT: "Italy",
                              ES: "Spain",
                              IN: "India",
                              CN: "China",
                              JP: "Japan",
                              KR: "South Korea",
                              AU: "Australia",
                            }}
                            selected={country}
                          />
                        )}
                      </td>
                    </tr>
                )
                ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DoaminCountry;
