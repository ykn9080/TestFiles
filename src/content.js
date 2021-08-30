import React from "react";
import EasyChart from "imc-easychart";
import EasyTable from "imc-easytable";
import AntFormDisplay from "imcformbuilder";
import formArray from "./formArray.json";

const Admin = ({ match }) => {
  let title = match.params.name,
    titleUpper = "";
  if (typeof match.params.child != "undefined") title += match.params.child;
  if (typeof match.params.grandchild != "undefined")
    title = match.params.grandchild;

  const onSave = (val) => {
    console.log(val);
  };
  const onChange = (changedValues, allValues) => {
    console.log(changedValues, allValues);
  };
  const echart = <EasyChart edit={false} authObj={sampledata1} />;
  const etable = <EasyTable edit={false} authObj={sampledata} save={onSave} />;
  const echartedit = <EasyChart edit={true} authObj={sampledata1} />;
  const etableedit = (
    <EasyTable edit={true} authObj={sampledata} save={onSave} />
  );
  const display = (
    <AntFormDisplay
      showedit={false}
      formArray={formArray}
      onFinish={onSave}
      onValuesChange={onChange}
    />
  );
  const edit = (
    <AntFormDisplay
      showedit={true}
      formArray={formArray}
      onFinish={onSave}
      onValuesChange={onChange}
    />
  );
  return (
    <>
      {(() => {
        switch (title) {
          case "chart":
            return echart;
          case "table":
            return etable;
          case "chartedit":
            return echartedit;
          case "tableedit":
            return etableedit;
          case "form":
            return display;
          case "formedit":
            return edit;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default Admin;
const sampledata1 = {
  checked: true,
  h: 22,
  i: "4",
  setting: {
    title: "new Item5",
    charttype: "pie",
    xField: "Year",
    yField: "Population",
    aggregate: "sum",
    series: "Slug Nation",
    initVal: {
      url: "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
      method: "get",
      header: "",
      datafield: "data",
    },
    result: [
      {
        "ID Nation": "01000US",
        Nation: "United States",
        "ID Year": 2019,
        Year: "2019",
        Population: 328239523,
        "Slug Nation": "united-states",
      },
      {
        "ID Nation": "01000US",
        Nation: "United States",
        "ID Year": 2018,
        Year: "2018",
        Population: 327167439,
        "Slug Nation": "united-states",
      },
      {
        "ID Nation": "01000US",
        Nation: "United States",
        "ID Year": 2017,
        Year: "2017",
        Population: 325719178,
        "Slug Nation": "united-states",
      },
      {
        "ID Nation": "01000US",
        Nation: "United States",
        "ID Year": 2016,
        Year: "2016",
        Population: 323127515,
        "Slug Nation": "united-states",
      },
      {
        "ID Nation": "01000US",
        Nation: "United States",
        "ID Year": 2015,
        Year: "2015",
        Population: 321418821,
        "Slug Nation": "united-states",
      },
      {
        "ID Nation": "01000US",
        Nation: "United States",
        "ID Year": 2014,
        Year: "2014",
        Population: 318857056,
        "Slug Nation": "united-states",
      },
      {
        "ID Nation": "01000US",
        Nation: "United States",
        "ID Year": 2013,
        Year: "2013",
        Population: 316128839,
        "Slug Nation": "united-states",
      },
    ],
  },
  type: "chart",
  w: 6,
  x: 6,
  y: 22,
  dtlist: [
    { Year: "2019", Population: 328239523 },
    { Year: "2018", Population: 327167439 },
    { Year: "2017", Population: 325719178 },
    { Year: "2016", Population: 323127515 },
    { Year: "2015", Population: 321418821 },
    { Year: "2014", Population: 318857056 },
    { Year: "2013", Population: 316128839 },
  ],
};
const sampledata = {
  key: "ext5",
  title: "Partition Vector",
  type: "table",
  dtorigin: [
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
  ],
  setting: {
    column: [
      {
        title: "Partition",
        titletext: "Partition",
        origin: "Partition",
        dataIndex: "Partition",
        key: "Partition",
        datatype: "int",
      },
    ],
    reset: false,
    title: "Partition Vector",
    size: "small",
  },
  id: "210317132524",
  checked: true,
  x: 6,
  y: 0,
  w: 6,
  h: 14,
  i: "1",
  dtlist: [
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 1 },
    { Partition: 2 },
    { Partition: 2 },
    { Partition: 1 },
    { Partition: 2 },
  ],
};
