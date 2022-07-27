import { Button, Card, Container, TextField, Typography } from "@mui/material";
import * as React from "react";
import "./Editform.css";

const EditForm: React.FunctionComponent<{
  user: any;
  setEdit: any;
  setFilterdata: any;
  filterdata: any;
}> = ({ user, setEdit, setFilterdata, filterdata }) => {
  const [title, setTitle] = React.useState(user.title);
  const [body, setBody] = React.useState(user.body);

  const onsave = () => {
    console.log(user.id);
    console.log(title);
    console.log(body);

    setFilterdata(
      filterdata.map((e: any) => {
        if (e.id === user.id) {
          e.title = title;
          e.body = body;
        }
        return e;
      })
    );

    setEdit(false);
  };

  return (
    <>
      <Card className="edit">
        <Container>
          <div>
            <form>
              <Typography variant="h5" className="edit_data">
                Edit Data
              </Typography>
              <div className="form_data">
                Title:
                <TextField
                  value={title}
                  className="textFeild"
                  type="text"
                  variant="outlined"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <br></br>
                Body:
                <TextField
                  value={body}
                  className="textFeild"
                  type="text"
                  variant="outlined"
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                />
                <br></br>
              </div>
              <Button
                variant="contained"
                onClick={() => onsave()}
                className="btn_save"
              >
                Save
              </Button>
            </form>
          </div>
        </Container>
      </Card>
    </>
  );
};

export default EditForm;
