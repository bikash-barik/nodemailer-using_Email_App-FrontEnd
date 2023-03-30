import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


function Home() {
  const [emailList, setEmailList] = useState(null);
  const [domainList, setDomainList] = useState(null);
  const [data, setData] = useState(null);
  const [value, setValue] = useState()
  const history = useHistory();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("emailList", emailList);
    formData.append("domainList", domainList);
    try {
      const response = await axios.post(
        "http://localhost:3000/uploadcsv",
        formData
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const EmailSand = () => {
    history.push("/DomainCountry");
  };
  return (
    <div className="container">
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailList">Email List:</label>
          <input
            type="file"
            id="emailList"
            onChange={(event) => setEmailList(event.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="domainList">Domain List:</label>
          <input
            type="file"
            id="domainList"
            onChange={(event) => setDomainList(event.target.files[0])}
          />
        </div>
        <button type="submit">Upload</button>
      </form> */}
 

     

      <div className="d-flex">
        <div className="form-input">
          <label htmlFor="emailList">Email List </label>
          <input
            type="file"
            id="emailList"
            onChange={(event) => setEmailList(event.target.files[0])}
          />
        </div>
        <div className="form-input">
          <label htmlFor="domainList">Domain List :</label>
          <input
            type="file"
            id="domainList"
            onChange={(event) => setDomainList(event.target.files[0])}
          />
        </div>
      </div>
      {/* <input type="file" onChange={handleFileUpload} /> */}

      <div className="d-flex justify-content-between">
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        <button onClick={EmailSand} className="btn btn-primary">
          Next
        </button>
      </div>
      <hr />

      <div class="row mt-5">
        <div class="col">
          <h2>Valid emails:</h2>
        </div>
        <div class="col">
          <h4>
            Total Emails :
            {data && (
              <span className="ml-2 text-success">{data.emails.length}</span>
            )}
          </h4>
        </div>
        <div class="col">
          <h4>
            Total Doamins :
            {data && (
              <span className="ml-2 text-success">{data.domains.length} </span>
            )}
          </h4>
        </div>
      </div>
      {data && (
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#SL.</th>
              <th scope="col">Domain</th>
              <th scope="col">Emails</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.emails.map((email, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>

                <td>{data.domains[index]}</td>
                <td>{email}</td>
                <td>
                  <button type="button" class="btn btn-success">
                    Upload successfully
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        // <table>
        //   <thead>
        //     <tr>
        //       <th>Email</th>
        //       <th>Domain</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {data.emails.map((email, index) => (
        //       <tr key={index}>
        //         <td>{email}</td>
        //         <td>{data.domains[index]}</td>
        //       </tr>
        //
        //   </tbody>
        // </table>
      )}
    </div>
  );
}

export default Home;
