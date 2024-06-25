import { FunctionComponent } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./View.module.css";

export type ViewType = {
  className?: string;
};

const View: FunctionComponent<ViewType> = ({ className = "" }) => {
  return (
    <div className={[styles.view, className].join(" ")}>
      <div className={styles.emrIntegrationReport}>
        <div className={styles.pagetitle}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <h2 className={styles.title}>View EMR Integration Report</h2>
        </div>
        <div className={styles.contentsection}>
          <div className={styles.headingtitle}>
            <div className={styles.facilityname}>
              <div className={styles.facilitytitle}>
                <h1 className={styles.title}>Global Open Wound Care</h1>
                <img className={styles.icon} alt="" src="/icon1.svg" />
              </div>
              <div className={styles.addresscontent}>
                <img className={styles.icon2} alt="" src="/icon2.svg" />
                <p className={styles.paragraph}>
                  250 Milon DR, Southlake TX 76092
                </p>
              </div>
            </div>
            <div className={styles.statusinfo}>
              <h6 className={styles.status}>Status</h6>
              <Button
                className={styles.button}
                disableElevation
                color="primary"
                variant="contained"
                sx={{ borderRadius: "0px 0px 0px 0px", width: 127 }}
              >
                Requested
              </Button>
            </div>
          </div>
          <div className={styles.viewsection}>
            <div className={styles.clientcontent}>
              <div className={styles.clienttitle}>
                <h4 className={styles.williamBennette}>William Bennette</h4>
                <p className={styles.clientPocFor}>
                  Client POC: (For Integration)
                </p>
              </div>
              <div className={styles.clientcontentChild} />
              <div className={styles.clientdetails}>
                <div className={styles.clientpoc}>
                  <img className={styles.user1Icon} alt="" src="/icon3.svg" />
                  <div className={styles.clientgroup}>
                    <p className={styles.clientEmrPoc}>Client EMR POC</p>
                    <h4 className={styles.eclinicalWorks}>eClinical Works</h4>
                  </div>
                </div>
                <div className={styles.clientpoc}>
                  <img className={styles.user1Icon} alt="" src="/user-1.svg" />
                  <div className={styles.clientgroup}>
                    <p className={styles.clientEmrPoc}>Contact Name</p>
                    <h4 className={styles.eclinicalWorks}>Margaret Noelk</h4>
                  </div>
                </div>
                <div className={styles.clientpoc}>
                  <img className={styles.user1Icon} alt="" src="/icon4.svg" />
                  <div className={styles.clientgroup}>
                    <p className={styles.clientEmrPoc}>Phone Number</p>
                    <h4 className={styles.eclinicalWorks}>508 667 4052</h4>
                  </div>
                </div>
                <div className={styles.clientpoc}>
                  <img className={styles.icon5} alt="" src="/icon5.svg" />
                  <div className={styles.clientgroup}>
                    <p className={styles.clientEmrPoc}>Email ID</p>
                    <h4 className={styles.eclinicalWorks}>
                      margaret@eclinicalworks.com
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.clientcontentChild} />
              <div className={styles.clientdetails}>
                <div className={styles.clientpoc}>
                  <img className={styles.user1Icon} alt="" src="/icon3.svg" />
                  <div className={styles.clientgroup}>
                    <p className={styles.clientEmrPoc}>Client EMR POC</p>
                    <h4 className={styles.eclinicalWorks}>eClinical Works</h4>
                  </div>
                </div>
                <div className={styles.clientpoc}>
                  <img className={styles.user1Icon} alt="" src="/user-1.svg" />
                  <div className={styles.clientgroup}>
                    <p className={styles.clientEmrPoc}>Contact Name</p>
                    <h4 className={styles.eclinicalWorks}>
                      Senior Tech Account
                    </h4>
                  </div>
                </div>
                <div className={styles.clientpoc}>
                  <div className={styles.icon7}>
                    <img className={styles.groupIcon} alt="" src="/group.svg" />
                  </div>
                  <div className={styles.clientgroup}>
                    <p className={styles.clientEmrPoc}>Phone Number</p>
                    <h4 className={styles.eclinicalWorks}>508 667 4052</h4>
                  </div>
                </div>
                <div className={styles.clientpoc}>
                  <img className={styles.icon5} alt="" src="/icon5.svg" />
                  <div className={styles.clientgroup}>
                    <p className={styles.clientEmrPoc}>Email ID</p>
                    <h4 className={styles.eclinicalWorks}>
                      margaret@eclinicalworks.com
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.durationsection}>
                <div className={styles.startdate}>
                  <p className={styles.clientStartDate}>Client Start Date</p>
                  <div className={styles.datelabel}>
                    <h5 className={styles.monthsAgo}>3 Months Ago</h5>
                  </div>
                </div>
                <div className={styles.startdate}>
                  <p className={styles.clientStartDate}>
                    Integration Goal Date
                  </p>
                  <div className={styles.actionlabel}>
                    <h5 className={styles.monthsAgo}>ASAP</h5>
                  </div>
                </div>
              </div>
              <div className={styles.clientcontentChild} />
              <div className={styles.internalsection}>
                <div className={styles.title2}>
                  <h3 className={styles.internalUse}>Internal Use</h3>
                </div>
                <div className={styles.internaldetails}>
                  <div className={styles.clientpoc}>
                    <img className={styles.user1Icon} alt="" src="/icon3.svg" />
                    <div className={styles.clientgroup}>
                      <p className={styles.clientEmrPoc}>
                        Integration Approval
                      </p>
                      <h4 className={styles.eclinicalWorks}>---</h4>
                    </div>
                  </div>
                  <div className={styles.clientpoc}>
                    <img className={styles.icon10} alt="" src="/icon6.svg" />
                    <div className={styles.clientgroup}>
                      <p className={styles.clientEmrPoc}>
                        Integration Promised Date
                      </p>
                      <h4 className={styles.eclinicalWorks}>18/06/2024</h4>
                    </div>
                  </div>
                  <div className={styles.clientpoc}>
                    <img
                      className={styles.user1Icon2}
                      alt=""
                      src="/user-11.svg"
                    />
                    <div className={styles.clientgroup}>
                      <p className={styles.clientEmrPoc}>Contact Person Name</p>
                      <h4 className={styles.eclinicalWorks}>Margaret Noelk</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.notessection}>
              <div className={styles.titlesectionParent}>
                <div className={styles.titlesection}>
                  <img
                    className={styles.pencil1Icon}
                    alt=""
                    src="/pencil-1.svg"
                  />
                  <h4 className={styles.progressNotes}>Progress Notes</h4>
                </div>
                <TextField
                  className={styles.inputTextarea}
                  color="primary"
                  rows={3}
                  label="Notes"
                  variant="outlined"
                  multiline
                />
              </div>
              <div className={styles.notecontent}>
                <div className={styles.notedetails}>
                  <img className={styles.noteicon} alt="" src="/noteicon.svg" />
                  <div className={styles.content}>
                    <div className={styles.persondetails}>
                      <div className={styles.personname1}>
                        <h4 className={styles.title}>Margaret Noelk</h4>
                        <p className={styles.datetime}>
                          June 12, 2024, 10:30 AM
                        </p>
                      </div>
                      <img
                        className={styles.iconEllipsis}
                        alt=""
                        src="/icon--ellipsis.svg"
                      />
                    </div>
                    <p className={styles.paragraph1}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
                <div className={styles.notedetails}>
                  <img className={styles.noteicon} alt="" src="/noteicon.svg" />
                  <div className={styles.content}>
                    <div className={styles.persondetails}>
                      <div className={styles.personname1}>
                        <h4 className={styles.title}>Margaret Noelk</h4>
                        <p className={styles.datetime}>
                          June 12, 2024, 10:30 AM
                        </p>
                      </div>
                      <img
                        className={styles.iconEllipsis}
                        alt=""
                        src="/icon--ellipsis.svg"
                      />
                    </div>
                    <p className={styles.paragraph1}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
