// import React, { useState } from "react";
// import axios from "axios";
// import { io } from "socket.io-client";
// import "./Style.css";
// import URLAPI from "../API/URLAPI";
// import { Container } from "react-bootstrap";
// import { Col, Row,List, Typography } from 'antd';
// import "./EmailSend.css"
// import { Input, Upload , Button } from 'antd';
// import {MailOutlined,LockOutlined, UploadOutlined,CopyOutlined} from '@ant-design/icons';



// const socket = io(`${URLAPI}`);


// function Demo() {
//   const [subject, setSubject] = useState("");
//   const [emailid, setEmailid] = useState("");
//   const [password, setPassword] = useState("");
//   const [mailContent, setMailContent] = useState("");
//   const [emailList, setEmailList] = useState(null);
//   const [domainList, setDomainList] = useState(null);
//   const [successRecipient, setSuccessRecipient] = useState([]);

//   const getFiles = () => {
//     return {
//       emailList,
//       domainList,
//     };
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("subject", subject);
//       formData.append("emailid", emailid);
//       formData.append("password", password);
//       formData.append("mailContent", mailContent);

//       const { emailList, domainList } = getFiles();
//       formData.append("emailList", emailList);
//       formData.append("domainList", domainList);

//       const response = await axios.post(
//         `${URLAPI}/upload`,
//         formData
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   socket.on("connect", () => {
//     console.log(socket.id);
//   });

//   socket.on("disconnect", () => {
//     console.log("Disconnected");
//   });

//   socket.on("mailSuccess", ({ email }) => {
//     console.log(`Mail sent successfully to ${email}`);
//     setSuccessRecipient([...successRecipient, email]);
//   });

//   const onRightClick = (event) => {
//     event.preventDefault();
//     console.log("pos:", { x: event.clientX, y: event.clientY });
//   };
//   const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

//   return (
//     <>
        

//     </>
      
//   );
// }

// export default Demo;



// <section onContextMenu={onRightClick}>
//       <div class="container mt-5 ">
//         <div class="row">


//           <div class="col">
//             <div className="form-container container-child card p-2">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-input">
//                   <label htmlFor="emailid">Form Email</label>
//                   <input
//                     type="text"
//                     name="emailid"
//                     id="emailid"
//                     value={emailid}
//                     className=""
//                     onChange={(e) => setEmailid(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-input">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="text"
//                     name="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="d-flex">
//                   <div className="form-input">
//                     <label htmlFor="emailList">Email List </label>
//                     <input
//                       type="file"
//                       name="emailList"
//                       id="emailList"
//                       onChange={(e) => setEmailList(e.target.files[0])}
//                     />
//                   </div>
//                   <div className="form-input">
//                     <label htmlFor="domainList">
//                       Domain List According to Email List{" "}
//                     </label>
//                     <input
//                       type="file"
//                       name="DomainList"
//                       id="domainList"
//                       onChange={(e) => setDomainList(e.target.files[0])}
//                     />
//                   </div>
//                 </div>

//                 <div className="form-input">
//                   <label htmlFor="subject">Subject </label>
//                   <input
//                     type="text"
//                     placeholder="`Re : Domain : ` Please Write After this  "
//                     name="subject"
//                     id="subject"
//                     value={subject}
//                     onChange={(e) => setSubject(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-input">
//                   <label htmlFor="subject">Email Content </label>
//                   <textarea
//                     type="text"
//                     name="mailContent"
//                     rows="10"
//                     cols="70"
//                     id="mailContent"
//                     value={emailList}
//                     onChange={(e) => setMailContent(e.target.value)}
//                   />
//                 </div>
//                 <div className="d-flex justify-content-center mt-2">
//                   <button className="btn btn-primary " type="submit">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>


//           <div class="col">
//             <h3>Success</h3>
//             <h4>
//               Total number of recipients:{" "}
//               <span className="ml-2 text-success">
//                 0{/* {response.validEmails.length}{" "} */}
//               </span>{" "}
//             </h4>
//             <div className="emails">
//               {/* {#each successRecipient as email, index} */}
//               <p className="text-white">1. Email</p>
//               {/* {/each} */}
//             </div>
//           </div>
//         </div>

//         {/* //table" */}

//         <div class="row mt-5">
//           <div class="col">
//             <h2>Valid emails:</h2>
//           </div>
//           <div class="col">
//             <h4>
//               Total No. Of Sand Emails :
//               <span className="ml-2 text-success">
//                 0{/* {response.validEmails.length}{" "} */}
//               </span>{" "}
//             </h4>
//           </div>
//           <div class="col">
//             <h4>
//               Total No. Of Unsand Emails :
//               <span className="ml-2 text-danger">
//                 0{/* {response.invalidEmails.length}{" "} */}
//               </span>
//             </h4>
//           </div>
//         </div>
//         <table class="table table-hover">
//           <thead>
//             <tr>
//               <th scope="col">#SL.</th>
//               <th scope="col">Domain</th>
//               <th scope="col">Emails</th>
//               <th scope="col">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* {response.validEmails.map((email, i) => ( */}
//             <tr>
//               <th scope="row"> 1</th>

//               <td>Donain</td>
//               <td>Emails</td>
//               <td>
//                 <button type="button" class="btn btn-success">
//                   Sand successfully
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </section>