import { Button, Card, Container, TextField, Typography } from "@mui/material";
import * as React from "react";
import "./Editform.css";
import "./AddForm.css";

const AddForm: React.FunctionComponent<{
  setAdd: any;
  setFilterdata: any;
  filterdata: any;
}> = ({ setAdd, setFilterdata, filterdata }) => {
  const [addtitle, setAddtitle] = React.useState("");
  const [addbody, setAddbody] = React.useState("");

  let lastid = filterdata[filterdata.length - 1].id;
  const [newid, setNewid] = React.useState(lastid + 1);

  const Addsave = () => {
    let obj = { title: addtitle, body: addbody, id: newid };
    filterdata.push(obj);
    setFilterdata(filterdata);
    setNewid(newid + 1);
    setAdd(false);
  };
  console.log(newid);
  console.log(filterdata);

  return (
    <>
      <div className="add_form">
        <Card className="edit">
          <Container>
            <div>
              <Button
                onClick={() => {
                  setAdd(false);
                }}
                className="close_btn"
              >
                X
              </Button>
              <Typography variant="h5" className="edit_data">
                Add Data
              </Typography>
              <div className="form_data">
                <Typography variant="h6">ID:{newid}</Typography>
                Title:
                <TextField
                  value={addtitle}
                  className="textFeild"
                  type="text"
                  variant="outlined"
                  onChange={(e) => {
                    setAddtitle(e.target.value);
                  }}
                />
                <br></br>
                Body:
                <TextField
                  className="textFeild"
                  type="text"
                  variant="outlined"
                  value={addbody}
                  onChange={(e) => {
                    setAddbody(e.target.value);
                  }}
                />
                <br></br>
              </div>
              {addtitle !== "" && addbody !== "" && (
                <Button
                  variant="contained"
                  className="btn_save"
                  onClick={() => {
                    Addsave();
                  }}
                >
                  Save
                </Button>
              )}
            </div>
          </Container>
        </Card>
      </div>
    </>
  );
};

export default AddForm;
