import * as React from "react";
import Cards from "./Cards";
import "./CardList.css";
import AddForm from "./AddForm";

const CardList: React.FunctionComponent<{
  filterdata: any;
  setFilterdata: any;
  add: any;
  setAdd: any;
}> = ({ filterdata, setFilterdata, add, setAdd }) => {
  const location = () => {
    setFilterdata(filterdata.map((e: any) => (e.location = "Hyderabad")));
  };

  const handleDelete = (id: any) => {
    console.log(id);
    window.alert("Are you sure wants to delete..");
    setFilterdata(filterdata.filter((e: any) => e.id !== id));
  };

  React.useEffect(() => {
    location();
    console.log(filterdata);
  }, []);

  if (filterdata.length === 0) {
    return (
      <div className="alert">
        <h3>No Data Found...</h3>
      </div>
    );
  }
  if (add) {
    return (
      <AddForm
        setAdd={setAdd}
        setFilterdata={setFilterdata}
        filterdata={filterdata}
      />
    );
  }

  return (
    <div className="cardlist">
      {filterdata.map((user: any) => {
        return (
          <Cards
            user={user}
            handleDelete={handleDelete}
            setFilterdata={setFilterdata}
            filterdata={filterdata}
          />
        );
      })}
    </div>
  );
};

export default CardList;
