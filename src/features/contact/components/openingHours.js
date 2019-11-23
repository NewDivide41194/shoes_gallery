import React from "react";
import { titleText } from "../../../config/fontConfig";

const OpeningHour = () => {
  return (
    <div
      id="page-wrap"
      className="d-flex flex-row flex-wrap justify-content-around py-4"
    >
      <div
        style={{ fontSize: 25, fontFamily: titleText }}
        className="d-flex align-items-center pb-4"
      >
        - Opening Hours -
      </div>

      <div className="d-flex">
        <table className="table table-borderless">
          <thead><tr><th></th></tr></thead>
          <tbody>
            <tr>
              <td>
                <b>Mon</b>
              </td>
              <td>------------</td>
              <td>10Am - 6Pm</td>
            </tr>
            <tr>
              <td>
                <b>Tue</b>
              </td>
              <td>------------</td>
              <td>10Am - 6Pm</td>
            </tr>{" "}
            <tr>
              <td>
                <b>Wed</b>
              </td>
              <td>------------</td>
              <td>10Am - 6Pm</td>
            </tr>{" "}
            <tr>
              <td>
                <b>Thu</b>
              </td>
              <td>------------</td>
              <td>10Am - 6Pm</td>
            </tr>{" "}
            <tr>
              <td>
                <b>Fri</b>
              </td>
              <td>------------</td>
              <td>10Am - 6Pm</td>
            </tr>{" "}
            <tr>
              <td>
                <b>Sat</b>
              </td>
              <td>------------</td>
              <td>10Am - 5Pm</td>
            </tr>
            <tr>
              <td>
                <b>Sun</b>
              </td>
              <td>------------</td>
              <td>10Am - 12Pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpeningHour;
