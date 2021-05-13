import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface TimeLineProps {
  activeDay: number;
  setActiveDay: Function;
}

const DaysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const TimeLine = (props: TimeLineProps) => {
  const { activeDay, setActiveDay } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    })
  );
  const classes = useStyles();

  return (
    <div className="grid gap-6 text-gray-500 sm:grid-cols-2 ">
      {DaysOfWeek.map((item, idx) => {
        return (
          <div key={idx} className="p-4 border rounded">
            <div className="flex items-center space-x-3 ">
              <button
                onClick={() => setActiveDay(idx)}
                className={`w-5 h-5 rounded border ${
                  activeDay == idx && "bg-indigo-500 "
                }`}
              >
                {activeDay == idx && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white fill-current"
                  >
                    <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
                  </svg>
                )}
              </button>
              <p>{item}</p>
            </div>
            <div className="grid grid-cols-2 mt-2 gap-x-4">
              <div>
                <p>from </p>
                <form className={classes.container} noValidate>
                  <TextField
                    id="time"
                    // label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </form>
              </div>
              <div>
                <p>to </p>
                <form className={classes.container} noValidate>
                  <TextField
                    id="time"
                    // label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
