import React from "react";
import "./App.css";
import CardList from "./Components/CardList";
import Header from "./Components/Header";

function App() {
  const [data, setData] = React.useState([]);
  const [filterdata, setFilterdata] = React.useState([]);
  const [add, setAdd] = React.useState(false);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setFilterdata(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <Header
          data={data}
          add={add}
          setAdd={setAdd}
          setFilterdata={setFilterdata}
        />
        <CardList
          filterdata={filterdata}
          add={add}
          setAdd={setAdd}
          setFilterdata={setFilterdata}
        />
      </div>
    </>
  );
}

export default App;
