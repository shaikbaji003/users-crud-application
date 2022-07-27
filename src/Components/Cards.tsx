import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Cards.css";
import { Button } from "@mui/material";
import EditForm from "./EditForm";

const Cards: React.FunctionComponent<{
  user: any;
  handleDelete: any;
  setFilterdata: any;
  filterdata: any;
}> = ({ user, handleDelete, setFilterdata, filterdata }) => {
  const [edit, setEdit] = React.useState(false);

  return (
    <div>
      {edit === false && (
        <Card className="card">
          <div className="gradient"></div>
          <CardContent className="info">
            Title:
            <Typography variant="h5" className="text">
              {user.title}
            </Typography>
            <br></br>
            Body:
            <Typography variant="h6" className="title">
              {user.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              className="btn_edit"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              className="btn"
              onClick={() => {
                handleDelete(user.id);
              }}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      )}
      {edit && (
        <EditForm
          user={user}
          setEdit={setEdit}
          setFilterdata={setFilterdata}
          filterdata={filterdata}
        />
      )}
    </div>
  );
};

export default Cards;
