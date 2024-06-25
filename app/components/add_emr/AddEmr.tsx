"use client";
import { FunctionComponent, useState } from "react";
import {
  TextField,
  Icon,
  InputAdornment,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./AddEmr.module.css";

export type AddEmrType = {
  className?: string;
};

const AddEmr: FunctionComponent<AddEmrType> = ({ className = "" }) => {
  const [inputDateDateTimePickerValue, setInputDateDateTimePickerValue] =
    useState(null);
  const [inputDateDateTimePicker1Value, setInputDateDateTimePicker1Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={[styles.addemr, className].join(" ")}>
        <div className={styles.addSection}>
          <div className={styles.pageheader}>
            <img className={styles.iconBack} alt="" src="/iconback.svg" />
            <h1 className={styles.addEmrIntegration}>
              Add EMR Integration Report
            </h1>
          </div>
          <div className={styles.formfiledsgroup}>
            <div className={styles.formfields}>
              <div className={styles.clientformrow}>
                <div className={styles.sectionRow}>
                  <div className={styles.todaysdateDateofrequest}>
                    <label className={styles.label}>
                      Today’s Date (Date of Request)
                    </label>
                    <div className={styles.inputDate}>
                      <DatePicker
                        value={inputDateDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setInputDateDateTimePickerValue(newValue);
                        }}
                        sx={{}}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: false,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.todaysdateDateofrequest}>
                    <h4 className={styles.label1}>Client Name</h4>
                    <TextField
                      className={styles.inputfield}
                      color="primary"
                      defaultValue="Enter Client Name"
                      size="medium"
                      variant="outlined"
                      sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                    />
                  </div>
                  <div className={styles.todaysdateDateofrequest}>
                    <label className={styles.label}>
                      Client POC (For Integration)
                    </label>
                    <TextField
                      className={styles.inputfield}
                      color="primary"
                      defaultValue="HintText"
                      size="medium"
                      variant="outlined"
                      sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                    />
                  </div>
                </div>
                <div className={styles.clientaddress}>
                  <label className={styles.label}>Client Address</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
              </div>
              <div className={styles.formfieldsChild} />
              <div className={styles.sectionRow}>
                <div className={styles.todaysdateDateofrequest}>
                  <label className={styles.label}>Client EMR Name</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
                <div className={styles.todaysdateDateofrequest}>
                  <label className={styles.label}>Contact Name</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
                <div className={styles.todaysdateDateofrequest}>
                  <label className={styles.label}>Phone Number</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
                <div className={styles.todaysdateDateofrequest}>
                  <label className={styles.label}>Email ID</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
              </div>
              <div className={styles.formfieldsChild} />
              <div className={styles.sectionRow}>
                <div className={styles.todaysdateDateofrequest}>
                  <label className={styles.label}>Client EMR POC</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
                <div className={styles.todaysdateDateofrequest}>
                  <label className={styles.label}>Contact Name</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
                <div className={styles.todaysdateDateofrequest}>
                  <label className={styles.label}>Phone Number</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
                <div className={styles.todaysdateDateofrequest}>
                  <label className={styles.label}>Email ID</label>
                  <TextField
                    className={styles.inputfield}
                    color="primary"
                    defaultValue="HintText"
                    size="medium"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                  />
                </div>
              </div>
              <div className={styles.formfieldsChild} />
              <div className={styles.internalrow}>
                <div className={styles.title}>
                  <h2 className={styles.internalUse}>Internal Use</h2>
                </div>
                <div className={styles.integrationrow}>
                  <div className={styles.inputIntegrationapproval}>
                    <label className={styles.integrationApproval}>
                      Integration Approval
                    </label>
                    <FormControl
                      className={styles.selectType}
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "376px",
                        height: "40px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <InputLabel color="primary">Select</InputLabel>
                      <Select
                        color="primary"
                        label="Select"
                        disableUnderline
                        displayEmpty
                      />
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <div className={styles.todaysdateDateofrequest}>
                    <label className={styles.label}>
                      Integration Promised Date
                    </label>
                    <div className={styles.inputDate}>
                      <DatePicker
                        value={inputDateDateTimePicker1Value}
                        onChange={(newValue: any) => {
                          setInputDateDateTimePicker1Value(newValue);
                        }}
                        sx={{}}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: false,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.todaysdateDateofrequest}>
                    <label className={styles.label}>Contact Name</label>
                    <TextField
                      className={styles.inputfield}
                      color="primary"
                      defaultValue="HintText"
                      size="medium"
                      variant="outlined"
                      sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.progressNote}>
                <div className={styles.headingTitle}>
                  <img
                    className={styles.iconNotes}
                    alt=""
                    src="/iconnotes.svg"
                  />
                  <h3 className={styles.progressNotes}>Progress Notes</h3>
                </div>
                <TextField
                  className={styles.inputDate}
                  color="primary"
                  rows={4}
                  variant="outlined"
                  multiline
                />
              </div>
              <div className={styles.buttonsSection}>
                <Button
                  disableElevation
                  color="primary"
                  variant="contained"
                  sx={{ borderRadius: "0px 0px 0px 0px" }}
                >
                  Save
                </Button>
                <Button
                  disableElevation
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: "0px 0px 0px 0px" }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default AddEmr;
