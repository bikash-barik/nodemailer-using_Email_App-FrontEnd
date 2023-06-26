import React, { useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import "./Style.css";
import URLAPI from "../API/URLAPI";
import { Container } from "react-bootstrap";
import { Col, Row, List, Typography } from "antd";
import "./EmailSend.css";
import { Input, Upload, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UploadOutlined,
  CopyOutlined,
} from "@ant-design/icons";

const socket = io(`${URLAPI}`);

function EmailSand() {
  const [subject, setSubject] = useState("");
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [mailContent, setMailContent] = useState("");
  const [emailList, setEmailList] = useState(null);
  const [domainList, setDomainList] = useState(null);
  const [successRecipient, setSuccessRecipient] = useState([]);

  const getFiles = () => {
    return {
      emailList,
      domainList,
    };
  };

  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("subject", subject);
      formData.append("emailid", emailid);
      formData.append("password", password);
      formData.append("mailContent", mailContent);

      const { emailList, domainList } = getFiles();
      formData.append("emailList", emailList);
      formData.append("domainList", domainList);

      const response = await axios.post(`${URLAPI}/upload`, formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  socket.on("connect", () => {
    console.log(socket.id);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });

  socket.on("mailSuccess", ({ email }) => {
    console.log(`Mail sent successfully to ${email}`);
    setSuccessRecipient([...successRecipient, email]);
  });

  const onRightClick = (event) => {
    event.preventDefault();
    console.log("pos:", { x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <Container style={{ marginTop: "2rem" }}>
        <Row justify={"space-between"}>
          <Col
            xs={24}
            sm={24}
            md={10}
            lg={10}
            xl={11}
            className="input-form-email-send"
          >
            <form onSubmit={handleSubmit}>
              <Row justify={"space-between"}>
                <Col xl={11}>
                  <Input
                    required
                    name="emailid"
                    id="emailid"
                    value={emailid}
                    onChange={(e) => setEmailid(e.target.value)}
                    className="input-email-send"
                    size="large"
                    placeholder="FORM EMAIL"
                    prefix={<MailOutlined />}
                  />
                </Col>
                <Col xl={11}>
                  <Input.Password
                    required
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-email-send"
                    size="large"
                    placeholder="PASSWORD"
                    prefix={<LockOutlined />}
                  />
                </Col>
              </Row>

              <Upload
                action={"http://localhost:3000/demo"}
                listType="picture"
                required
                style={{ width: "400px" }}
                beforeUpload={(file) => {
                  console.log(file);
                  return false;
                }}
                name="emailList"
                id="emailList"
                onChange={(e) => setEmailList(e.file)}
              >
                <Button
                  className="input-email-send"
                  fullWidth
                  icon={<UploadOutlined />}
                >
                  Email List and Domain List
                </Button>
              </Upload>

              <Input
                name="subject"
                required
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="input-email-send"
                size="large"
                placeholder="SUBJECT"
                prefix={<CopyOutlined />}
              />

              <Input.TextArea
                className="input-email-send"
                showCount
                style={{ height: "10rem", resize: "vertical" }}
                id="mailContent"
                value={emailList}
                onChange={(e) => setMailContent(e.target.value)}
                placeholder="Email Content"
              />

              <Row fullWidth justify={"space-around"}>
                <Col span={24}>
                  <button
                    fullWidth
                    type="submit"
                    className="btn btn-primary input-email-send"
                  >
                    Send Email
                  </button>
                </Col>
              </Row>
            </form>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={10}
            lg={10}
            xl={11}
            className="input-form-email-send"
          >
            {/* <h3>Success</h3> */}
            <h4>
              <span className="mr-5 h2">Success</span>
              Total Email Send Limit:{" "}
              <span className="ml-2 text-danger">
                50,000{/* {response.validEmails.length}{" "} */}
              </span>{" "}
            </h4>
            <h4>
              Total number of recipients:{" "}
              <span className="ml-2 text-success">
                0{/* {response.validEmails.length}{" "} */}
              </span>{" "}
            </h4>

            <List
              header={<div>Email</div>}
              bordered
              style={{ marginTop: "2rem", color: "black", fontSize: "2rem" }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text></Typography.Text> {item}
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <div class="row mt-5">
          <div class="col">
            <h2>Valid emails:</h2>
          </div>
          <div class="col">
            <h4>
              Total No. Of Sand Emails :
              <span className="ml-2 text-success">
                0{/* {response.validEmails.length}{" "} */}
              </span>{" "}
            </h4>
          </div>
          <div class="col">
            <h4>
              Total No. Of Unsand Emails :
              <span className="ml-2 text-danger">
                0{/* {response.invalidEmails.length}{" "} */}
              </span>
            </h4>
          </div>
        </div>

        <Row justify={"center"}>
          <Col xs={24} sm={24} md={10} lg={10} xl={20}>
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
                {/* {response.validEmails.map((email, i) => ( */}
                <tr>
                  <th scope="row"> 1</th>

                  <td>Donain</td>
                  <td>Emails</td>
                  <td>
                    <button type="button" class="btn btn-success">
                      Sand successfully
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EmailSand;
