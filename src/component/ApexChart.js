import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import moment from "moment/moment";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import SaveIcon from "@mui/icons-material/Save";
import { data } from "../utils/const";
import { ModalComponent } from "./Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  flexDirection: "column",
};

export const ApexChart = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errors, setError] = useState();
  const newData = data.map((item) => {
    return item.Date;
  });
  const newRevenue = data.map((item) => {
    return item.Revenue;
  });
  const apexData = {
    series: [
      {
        name: "Reveneu",
        data: newRevenue,
      },
    ],

    // moment(newData[0]).format("MM/DD/YYYY"),
    options: {
      annotations: {
        yaxis: [
          {
            y: newRevenue[0],
            y2: newRevenue[newRevenue.length - 1],
            borderColor: "#000",
            fillColor: "#FEB019",
            label: {
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: "This is a test",
            },
          },
        ],
        xaxis: [
          {
            x: new Date(moment(newData[20]).format("MM/DD/YYYY")).getTime(),
            // x2: newRevenue[newRevenue.length - 1],
            borderColor: "#775DD0",
            label: {
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              text: "This is a test2",
            },
          },
          {
            x: new Date(moment(newData[40]).format("MM/DD/YYYY")).getTime(),
            borderColor: "#FEB019",
            label: {
              borderColor: "#FEB019",
              style: {
                color: "#fff",
                background: "#FEB019",
              },
              orientation: "horizontal",
              text: "This is a test 3",
            },
          },
        ],
      },
      chart: {
        id: "chart2",
        type: "line",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        events: {
          click: function (event, chartContext, config) {
            setOpenModal(true);
            // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
          },
        },
        // brush: {
        //   enabled: false,
        //   autoScaleYaxis: true,
        // },
      },
      colors: ["#546E7A"],
      stroke: {
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        categories: newData,
      },
      title: {
        text: "Line with Annotations",
        align: "center",
      },
      yaxis: {
        title: {
          text: "Revenues",
        },
      },
    },

    seriesLine: [
      {
        data: newRevenue,
      },
    ],
    optionsLine: {
      chart: {
        id: "chart1",
        height: 130,
        type: "area",
        brush: {
          target: "chart2",
          enabled: true,
        },
        selection: {
          enabled: true,
          xaxis: {
            // min: new Date("19 Jun 2017").getTime(),
            // max: new Date("14 Aug 2017").getTime(),
            // type: "datetime",
            min: moment(newData[0]).format("MM/DD/YYYY"),
            max: new Date(
              moment(newData[newData.length - 1]).format("DD MMM YYYY")
            ).getTime(),
          },
        },
      },
      colors: ["#008FFB"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1,
        },
      },
      xaxis: {
        type: "datetime",
        categories: newData,
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1,
        },
      },
      yaxis: {
        tickAmount: 2,
      },
    },
  };
  console.log("test", openModal);
  const onSubmit = () => {};
  return (
    <>
      <ModalComponent
        isOpen={openModal}
        handleModal={(isOpen) => setOpenModal(isOpen)}
        errorHandler={(errorMessage) => setError(errorMessage)}
        children={
          <Grid container spacing={2}>
            <Box component="form" sx={style} autoComplete="off">
              <TextField
                id="outlined-basic"
                label="What annotation would you like to add?"
                variant="outlined"
                sx={{ m: 1, width: 380 }}
              />
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Make sure that you remember what you added another annotation.
              </Typography>
              <Grid display="flex" justifyContent="center" alignItems="center">
                <Button variant="contained" onSubmit={onSubmit} size="medium">
                  <SaveIcon fontSize="inherit" /> Submit
                </Button>
              </Grid>
            </Box>
          </Grid>
        }
      />
      <div id="wrapper">
        <div id="chart-line2">
          <ReactApexChart
            key="chart-line2"
            options={apexData.options}
            series={apexData.series}
            type="line"
            height={280}
            width={1000}
          />
        </div>
        <div id="chart-line">
          <ReactApexChart
            options={apexData.optionsLine}
            type="area"
            series={apexData.seriesLine}
            height={280}
            width={1000}
          />
        </div>
      </div>
    </>
  );
};
