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
  checked: true,
  h: 8,
  i: "7",
  w: 6,
  x: 6,
  y: 26,
  dtlist: [
    {
      Country: "Canada",
      Product: "Carretera",
      UnitsSold: 1618.5,
      ManufacturingPrice: 3,
      SalePrice: 20,
      GrossSales: 32370,
      Sales: 32370,
    },
    {
      Country: "Germany",
      Product: "Carretera",
      UnitsSold: 1321,
      ManufacturingPrice: 3,
      SalePrice: 20,
      GrossSales: 26420,
      Sales: 26420,
    },
    {
      Country: "France",
      Product: "Carretera",
      UnitsSold: 2178,
      ManufacturingPrice: 3,
      SalePrice: 15,
      GrossSales: 32670,
      Sales: 32670,
    },
    {
      Country: "Germany",
      Product: "Carretera",
      UnitsSold: 888,
      ManufacturingPrice: 3,
      SalePrice: 15,
      GrossSales: 13320,
      Sales: 13320,
    },
    {
      Country: "Mexico",
      Product: "Carretera",
      UnitsSold: 2470,
      ManufacturingPrice: 3,
      SalePrice: 15,
      GrossSales: 37050,
      Sales: 37050,
    },
    {
      Country: "Germany",
      Product: "Carretera",
      UnitsSold: 1513,
      ManufacturingPrice: 3,
      SalePrice: 350,
      GrossSales: 529550,
      Sales: 529550,
    },
    {
      Country: "Germany",
      Product: "Montana",
      UnitsSold: 921,
      ManufacturingPrice: 5,
      SalePrice: 15,
      GrossSales: 13815,
      Sales: 13815,
    },
    {
      Country: "Canada",
      Product: "Montana",
      UnitsSold: 2518,
      ManufacturingPrice: 5,
      SalePrice: 12,
      GrossSales: 30216,
      Sales: 30216,
    },
    {
      Country: "France",
      Product: "Montana",
      UnitsSold: 1899,
      ManufacturingPrice: 5,
      SalePrice: 20,
      GrossSales: 37980,
      Sales: 37980,
    },
    {
      Country: "Germany",
      Product: "Montana",
      UnitsSold: 1545,
      ManufacturingPrice: 5,
      SalePrice: 12,
      GrossSales: 18540,
      Sales: 18540,
    },
    {
      Country: "Mexico",
      Product: "Montana",
      UnitsSold: 2470,
      ManufacturingPrice: 5,
      SalePrice: 15,
      GrossSales: 37050,
      Sales: 37050,
    },
    {
      Country: "Canada",
      Product: "Montana",
      UnitsSold: 2665.5,
      ManufacturingPrice: 5,
      SalePrice: 125,
      GrossSales: 333187.5,
      Sales: 333187.5,
    },
    {
      Country: "Mexico",
      Product: "Montana",
      UnitsSold: 958,
      ManufacturingPrice: 5,
      SalePrice: 300,
      GrossSales: 287400,
      Sales: 287400,
    },
    {
      Country: "Germany",
      Product: "Montana",
      UnitsSold: 2146,
      ManufacturingPrice: 5,
      SalePrice: 7,
      GrossSales: 15022,
      Sales: 15022,
    },
    {
      Country: "Canada",
      Product: "Montana",
      UnitsSold: 345,
      ManufacturingPrice: 5,
      SalePrice: 125,
      GrossSales: 43125,
      Sales: 43125,
    },
    {
      Country: "UnitedStatesofAmerica",
      Product: "Montana",
      UnitsSold: 615,
      ManufacturingPrice: 5,
      SalePrice: 15,
      GrossSales: 9225,
      Sales: 9225,
    },
    {
      Country: "Canada",
      Product: "Paseo",
      UnitsSold: 292,
      ManufacturingPrice: 10,
      SalePrice: 20,
      GrossSales: 5840,
      Sales: 5840,
    },
    {
      Country: "Mexico",
      Product: "Paseo",
      UnitsSold: 974,
      ManufacturingPrice: 10,
      SalePrice: 15,
      GrossSales: 14610,
      Sales: 14610,
    },
    {
      Country: "Canada",
      Product: "Paseo",
      UnitsSold: 2518,
      ManufacturingPrice: 10,
      SalePrice: 12,
      GrossSales: 30216,
      Sales: 30216,
    },
    {
      Country: "Germany",
      Product: "Paseo",
      UnitsSold: 1006,
      ManufacturingPrice: 10,
      SalePrice: 350,
      GrossSales: 352100,
      Sales: 352100,
    },
    {
      Country: "Germany",
      Product: "Paseo",
      UnitsSold: 367,
      ManufacturingPrice: 10,
      SalePrice: 12,
      GrossSales: 4404,
      Sales: 4404,
    },
    {
      Country: "Mexico",
      Product: "Paseo",
      UnitsSold: 883,
      ManufacturingPrice: 10,
      SalePrice: 7,
      GrossSales: 6181,
      Sales: 6181,
    },
    {
      Country: "France",
      Product: "Paseo",
      UnitsSold: 549,
      ManufacturingPrice: 10,
      SalePrice: 15,
      GrossSales: 8235,
      Sales: 8235,
    },
    {
      Country: "Mexico",
      Product: "Paseo",
      UnitsSold: 788,
      ManufacturingPrice: 10,
      SalePrice: 300,
      GrossSales: 236400,
      Sales: 236400,
    },
    {
      Country: "Mexico",
      Product: "Paseo",
      UnitsSold: 2472,
      ManufacturingPrice: 10,
      SalePrice: 15,
      GrossSales: 37080,
      Sales: 37080,
    },
    {
      Country: "UnitedStatesofAmerica",
      Product: "Paseo",
      UnitsSold: 1143,
      ManufacturingPrice: 10,
      SalePrice: 7,
      GrossSales: 8001,
      Sales: 8001,
    },
    {
      Country: "Canada",
      Product: "Paseo",
      UnitsSold: 1725,
      ManufacturingPrice: 10,
      SalePrice: 350,
      GrossSales: 603750,
      Sales: 603750,
    },
    {
      Country: "UnitedStatesofAmerica",
      Product: "Paseo",
      UnitsSold: 912,
      ManufacturingPrice: 10,
      SalePrice: 12,
      GrossSales: 10944,
      Sales: 10944,
    },
    {
      Country: "Canada",
      Product: "Paseo",
      UnitsSold: 2152,
      ManufacturingPrice: 10,
      SalePrice: 15,
      GrossSales: 32280,
      Sales: 32280,
    },
    {
      Country: "Canada",
      Product: "Paseo",
      UnitsSold: 1817,
      ManufacturingPrice: 10,
      SalePrice: 20,
      GrossSales: 36340,
      Sales: 36340,
    },
    {
      Country: "Germany",
      Product: "Paseo",
      UnitsSold: 1513,
      ManufacturingPrice: 10,
      SalePrice: 350,
      GrossSales: 529550,
      Sales: 529550,
    },
    {
      Country: "Mexico",
      Product: "Velo",
      UnitsSold: 1493,
      ManufacturingPrice: 120,
      SalePrice: 7,
      GrossSales: 10451,
      Sales: 10451,
    },
    {
      Country: "France",
      Product: "Velo",
      UnitsSold: 1804,
      ManufacturingPrice: 120,
      SalePrice: 125,
      GrossSales: 225500,
      Sales: 225500,
    },
    {
      Country: "Germany",
      Product: "Velo",
      UnitsSold: 2161,
      ManufacturingPrice: 120,
      SalePrice: 12,
      GrossSales: 25932,
      Sales: 25932,
    },
    {
      Country: "Germany",
      Product: "Velo",
      UnitsSold: 1006,
      ManufacturingPrice: 120,
      SalePrice: 350,
      GrossSales: 352100,
      Sales: 352100,
    },
  ],
  dtsetting: { dtype: "paste" },
  setting: {
    title: "new Item7",
    column: [
      {
        title: "Country",
        titletext: "Country",
        origin: "Country",
        dataIndex: "Country",
        key: "Country",
      },
      {
        title: "Product",
        titletext: "Product",
        origin: "Product",
        dataIndex: "Product",
        key: "Product",
      },
      {
        title: "UnitsSold",
        titletext: "UnitsSold",
        origin: "UnitsSold",
        dataIndex: "UnitsSold",
        key: "UnitsSold",
      },
      {
        title: "ManufacturingPrice",
        titletext: "ManufacturingPrice",
        origin: "ManufacturingPrice",
        dataIndex: "ManufacturingPrice",
        key: "ManufacturingPrice",
      },
      {
        title: "SalePrice",
        titletext: "SalePrice",
        origin: "SalePrice",
        dataIndex: "SalePrice",
        key: "SalePrice",
      },
      {
        title: "GrossSales",
        titletext: "GrossSales",
        origin: "GrossSales",
        dataIndex: "GrossSales",
        key: "GrossSales",
      },
      {
        title: "Sales",
        titletext: "Sales",
        origin: "Sales",
        dataIndex: "Sales",
        key: "Sales",
      },
    ],
    reset: false,
  },
  type: "table",
};
