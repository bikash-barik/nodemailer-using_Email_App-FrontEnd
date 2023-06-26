import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import URLAPI from "../API/URLAPI";
function Home() {
  const [domainList, setDomainList] = useState(null);
  const [data, setData] = useState(null);
  const history = useHistory();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("domainList", domainList);
    try {
      const config = {
        headers: {
          "Content-Type": undefined,
        },
      };
      const response = await axios.post(
        `${URLAPI}/uploadFiles`,
        formData,
        config
      );
      console.log(response.data);
      setData(response.data);

      // Send response to another API endpoint
      const otherApiConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const otherApiResponse = await axios.post(
        `${URLAPI}/domains`,
        response.data,
        otherApiConfig
      );
      console.log(otherApiResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  const EmailSand = () => {
    history.push("/DomainCountry");
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="form-input">
          <label htmlFor="domainList">Domain List :</label>
          <div className="d-flex justify-content-between">
            <input
              type="file"
              name="domainList"
              id="domainList"
              onChange={(event) => setDomainList(event.target.files[0])}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="row mt-5">
        <div class="col">
          <h2>Valid emails:</h2>
        </div>
        <div class="col">
          {data && data.domains && (
            <h4>
              Total Domains:{" "}
              <span className="ml-2 text-success">{data.domains.length}</span>
            </h4>
          )}
        </div>
      </div>
      {data && data.domains && (
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#SL.</th>
              <th scope="col">Domain</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.domains.map((domain, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>

                <td>{data.domains[index]}</td>
                <td>
                  <button type="button" class="btn btn-success">
                    Upload successfully
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Home;
