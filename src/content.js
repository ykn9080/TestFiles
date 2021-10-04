import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import EasyChart from "imcchart";
import EasyTable from "imcgridtable";
import EasyData from "imcdata";
import AntFormDisplay from "imcformbuilder";
import formArray from "./formArray.json";
import "./style.css";

const Admin = ({ match }) => {
  const location = useLocation();
  const [showmenu, setShowmenu] = useState(false);
  const [formurl, setFormurl] = useState();
  const [formeurl, setFormeurl] = useState();
  let utitle,
    param = "",
    title = match.params.name;
  utitle = title;
  if (typeof match.params.child != "undefined") {
    title += match.params.child;
    utitle += " " + match.params.child;
  }
  if (typeof match.params.grandchild != "undefined") {
    title += match.params.grandchild;
    utitle += " " + match.params.grandchild;
  }

  useEffect(() => {
    const params = parseParams(location?.search); // returns an object like:
    if (params?.showmenu) {
      var isTrueSet = params.showmenu === "true";
      setShowmenu(isTrueSet);
      if (isTrueSet) param = "?showmenu=true";
      setFormurl(`/form${param}`);
      setFormeurl(`/form/edit${param}`);
    }
  }, [location]);
  //Param Extractor
  const parseParams = (params = "") => {
    const rawParams = params.replace("?", "").split("&");
    const extractedParams = {};
    rawParams.forEach((item) => {
      item = item.split("=");
      extractedParams[item[0]] = item[1];
    });
    return extractedParams;
  };

  const onSave = (val) => {
    console.log(val);
  };
  const onChange = (changedValues, allValues) => {
    console.log(changedValues, allValues);
  };
  const echart = <EasyChart edit={false} authObj={sampledata1} />;
  const echartedit = <EasyChart edit={true} authObj={sampledata1} />;
  const etable = <EasyTable edit={false} authObj={sampledata} save={onSave} />;
  const etableedit = (
    <EasyTable edit={true} authObj={sampledata} save={onSave} />
  );
  const edata = <EasyData edit={true} authObj={sampledata1} />;

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

  const menu = (
    <div style={{ margin: 20, marginTop: 40, marginBottom: 50 }}>
      <ul>
        <Link to="/chart" className="linkStyle" title="Chart display mode">
          Chart
        </Link>
        <Link to="/chart/edit" className="linkStyle" title="Chart Edit mode">
          Chart Edit
        </Link>
        <Link to="/table" className="linkStyle" title="Table display mode">
          Table
        </Link>
        <Link to="/table/edit" className="linkStyle" title="Table Edit mode">
          Table Edit
        </Link>
        <Link to="/data" className="linkStyle" title="Data create/edit">
          Data
        </Link>
        <Link to="/form" className="linkStyle" title="Form display mode">
          Form
        </Link>
        <Link to="/form/edit" className="linkStyle" title="Edit button appear">
          Formedit
        </Link>
      </ul>
      <hr />
    </div>
  );

  return (
    <>
      {showmenu && menu}
      {title && <h1>{utitle.toUpperCase()}</h1>}
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
          case "data":
            return edata;
          default:
            return !showmenu && menu;
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
const sampledata2 = {
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
const sampledata = {
  setting: {
    column: [
      {
        title: "name",
        titletext: "name",
        origin: "name",
        dataIndex: "name",
        key: "name",
        datatype: "string",
      },
      {
        title: "chinese",
        titletext: "chinese",
        origin: "chinese",
        dataIndex: "chinese",
        key: "chinese",
        datatype: "int",
      },
      {
        title: "math",
        titletext: "math",
        origin: "math",
        dataIndex: "math",
        key: "math",
        datatype: "int",
      },
      {
        title: "english",
        titletext: "english",
        origin: "english",
        dataIndex: "english",
        key: "english",
        datatype: "int",
      },
    ],
    reset: false,
    title: "Score",
    size: "small",
  },
  dtlist: [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
  ],
};
