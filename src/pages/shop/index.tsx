import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { AdminLayout } from "../../components/common/AdminLayout";
import ImageUploading from "react-images-uploading";

const DaysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function shop() {
  const [activeDay, setActiveDay] = useState(0);
  const [images, setImages] = useState<any[]>([]);

  const onChange = (imageList: any) => {
    setImages(imageList);
  };
  return (
    <AdminLayout>
      <div className="container p-4 mx-auto space-y-4 text-gray-700 lg:py-8 lg:space-y-8 max-w-7xl">
        <p className="text-2xl font-bold lg:text-4xl ">Manage store profile</p>
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-4 lg:gap-y-0">
          <div className=" lg:col-span-8 lg:space-y-8">
            <div className="p-4 space-y-4 bg-white xl:p-8">
              <div className="space-y-2 ">
                <p className="text-gray-500 ">Store name</p>
                <input className="w-full px-3 py-1 border rounded lg:w-1/2 bg-gray-50" />
              </div>
              <div className="grid grid-cols-1 space-y-2 sm:space-y-0 sm:grid-cols-2 gap-x-4">
                <div className="space-y-2 ">
                  <p className="text-gray-500 ">Phone</p>
                  <input className="w-full px-3 py-1 border rounded bg-gray-50" />
                </div>
                <div className="space-y-2 ">
                  <p className="text-gray-500 ">Email</p>
                  <input className="w-full px-3 py-1 border rounded bg-gray-50" />
                </div>
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">Address</p>
                <input className="w-full px-3 py-1 border rounded bg-gray-50" />
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">Introduction</p>
                <textarea
                  name="description"
                  className="w-full px-2 py-1 border rounded bg-gray-50 h-28"
                />
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">About us</p>
                <textarea
                  placeholder=" about us ..."
                  name="description"
                  className="w-full px-2 py-1 border rounded bg-gray-50 h-28"
                />
              </div>
            </div>
            <div className="p-4 space-y-4 bg-white xl:p-8">
              <p className="font-semibold text-gray-700 ">Open Hours</p>
              <OpenHours activeDay={activeDay} setActiveDay={setActiveDay} />
            </div>
          </div>
          <div className="space-y-4 lg:space-y-8 lg:col-span-4 ">
            <div className="p-4 space-y-4 bg-white xl:p-8">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">
                  Amenities
                </p>
                <p className="text-gray-500 ">Choose your store amenities</p>
              </div>

              <div className="grid grid-cols-4 gap-x-4 ">
                <div className="text-sm text-center text-gray-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto "
                  >
                    <path
                      d="M18 6C19.1046 6 20 5.10457 20 4C20 2.89543 19.1046 2 18 2C16.8954 2 16 2.89543 16 4C16 5.10457 16.8954 6 18 6Z"
                      fill="#999999"
                    />
                    <path
                      d="M17.836 12.014L13.491 12.739L16.781 8.62597C16.956 8.40697 17.031 8.12497 16.988 7.84797C16.945 7.57097 16.788 7.32497 16.554 7.16897L10.554 3.16897C10.158 2.90397 9.63 2.95597 9.292 3.29397L5.292 7.29397L6.706 8.70797L10.126 5.28797L12.71 7.01097L10.029 10.363C9.395 10.132 8.713 9.99997 8 9.99997C6.706 9.99997 5.51 10.416 4.529 11.115L5.98 12.566C6.575 12.216 7.261 12 8 12C10.206 12 12 13.794 12 16C12 16.739 11.784 17.425 11.434 18.02L12.885 19.471C13.584 18.49 14 17.294 14 16C14 15.555 13.947 15.122 13.855 14.705L17 14.181V20H19V13C19 12.706 18.871 12.427 18.646 12.237C18.423 12.048 18.128 11.967 17.836 12.014ZM8 20C5.794 20 4 18.206 4 16C4 15.261 4.216 14.575 4.566 13.98L3.115 12.529C2.416 13.51 2 14.706 2 16C2 19.309 4.691 22 8 22C9.294 22 10.49 21.584 11.471 20.885L10.02 19.434C9.425 19.784 8.739 20 8 20Z"
                      fill="#999999"
                    />
                  </svg>
                  <span>Accessible</span>
                </div>
                <div className="text-sm text-center text-gray-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto "
                  >
                    <path
                      d="M20.772 10.155L19.404 6.051C18.995 4.824 17.852 4 16.559 4H7.441C6.148 4 5.005 4.824 4.596 6.051L3.228 10.155C2.507 10.457 2 11.169 2 12V17C2 17.738 2.404 18.376 3 18.723V19.897V21C3 21.553 3.447 22 4 22H5C5.553 22 6 21.553 6 21V19H18V21C18 21.553 18.447 22 19 22H20C20.553 22 21 21.553 21 21V18.723C21.596 18.376 22 17.739 22 17V12C22 11.169 21.493 10.457 20.772 10.155ZM7.441 6H16.558C16.989 6 17.371 6.274 17.507 6.684L18.613 10H17.819H6.181H5.387L6.492 6.684C6.629 6.274 7.011 6 7.441 6ZM5.5 16C4.672 16 4 15.328 4 14.5C4 13.672 4.672 13 5.5 13C6.328 13 7 13.672 7 14.5C7 15.328 6.328 16 5.5 16ZM18.5 16C17.672 16 17 15.328 17 14.5C17 13.672 17.672 13 18.5 13C19.328 13 20 13.672 20 14.5C20 15.328 19.328 16 18.5 16Z"
                      fill="#999999"
                    />
                  </svg>

                  <span>Curbside pickup</span>
                </div>
                <div className="text-sm text-center text-gray-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto "
                  >
                    <path
                      d="M15 2.01318H9V9.00018H2V15.0002H9V21.9872H15V15.0002H22V9.00018H15V2.01318Z"
                      fill="#999999"
                    />
                  </svg>

                  <span>Medical</span>
                </div>
                <div className="text-sm text-center text-gray-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto "
                  >
                    <path
                      d="M20 12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7Z"
                      fill="#999999"
                    />
                  </svg>

                  <span>Security</span>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4 bg-white xl:p-8 ">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">License</p>
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">State License Number</p>
                <input className="w-full px-3 py-1 border rounded bg-gray-50" />
              </div>
            </div>

            <div className="p-4 space-y-4 bg-white xl:p-8 ">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">
                  First-Time Patients
                </p>
              </div>
              <div className="space-y-2 ">
                <p className="text-gray-500 ">Description</p>
                <textarea
                  name="description"
                  className="w-full px-2 py-1 border rounded bg-gray-50 h-28"
                />
              </div>
            </div>

            <div className="p-4 space-y-4 bg-white xl:p-8 ">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">Media</p>
              </div>
              <div className="space-y-2 ">
                <div className="flex ">
                  <div className="mx-auto text-center">
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={1}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        // onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          {!(imageList.length > 0) && (
                            <div
                              style={isDragging ? { color: "red" } : undefined}
                              onClick={onImageUpload}
                              {...dragProps}
                              className="text-gray-500 "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="w-40 h-32 fill-current text-trueGray-400"
                              >
                                <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                              </svg>
                              <div className="flex justify-center ">
                                <button className="flex items-center justify-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    className="w-4 h-4 text-gray-400 fill-current"
                                  >
                                    <path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z" />
                                  </svg>
                                  <p className="font-semibold text-gray-400 ">
                                    Upload images
                                  </p>
                                </button>
                              </div>
                            </div>
                          )}
                          &nbsp;
                          {/* <button onClick={onImageRemoveAll}>
                            Remove all images
                          </button> */}
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img
                                src={image["data_url"]}
                                alt=""
                                width="100"
                                className="h-32 w-44"
                              />
                              <div className="flex justify-center space-x-3 text-center image-item__btn-wrapper">
                                <button
                                  className="flex items-center space-x-2 text-gray-500"
                                  onClick={() => onImageUpdate(index)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-gray-500 fill-current "
                                  >
                                    <path d="M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z" />
                                  </svg>
                                  <span>Update</span>
                                </button>
                                <button
                                  className="flex items-center space-x-2 text-gray-500"
                                  onClick={() => onImageRemove(index)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-gray-500 fill-current "
                                  >
                                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
                                  </svg>
                                  <span>Remove</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-4 text-gray-500 bg-white xl:p-8">
              <div>
                <p className="text-xl font-semibold text-gray-700 ">
                  Social Media
                </p>
                <p className="text-gray-500 ">Link your social media</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 12.073C24 5.40577 18.6269 0 12 0C5.37309 0 0 5.40577 0 12.073C0 18.0984 4.38761 23.0933 10.1252 24V15.5636H7.07748V12.073H10.1252V9.41251C10.1252 6.38703 11.9173 4.7147 14.6578 4.7147C15.9707 4.7147 17.3444 4.95069 17.3444 4.95069V7.92186H15.8306C14.3406 7.92186 13.8748 8.85225 13.8748 9.80808V12.0729H17.2026L16.671 15.5636H13.8747V23.9999C19.6123 23.0949 24 18.1001 24 12.073Z"
                    fill="#0078FF"
                  />
                </svg>
                <p>Link with Facebook</p>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M23.7135 12.2763C23.7135 11.4605 23.6474 10.6404 23.5063 9.83789H12.1875V14.4589H18.6692C18.4003 15.9492 17.536 17.2676 16.2705 18.1054V21.1037H20.1375C22.4083 19.0137 23.7135 15.9272 23.7135 12.2763Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.1874 24.0008C15.4238 24.0008 18.1532 22.9382 20.1418 21.1039L16.2748 18.1055C15.1989 18.8375 13.81 19.252 12.1918 19.252C9.06115 19.252 6.40673 17.1399 5.45431 14.3003H1.46387V17.3912C3.50098 21.4434 7.65016 24.0008 12.1874 24.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.45004 14.3002C4.94738 12.8099 4.94738 11.196 5.45004 9.70569V6.61475H1.464C-0.238001 10.0055 -0.238001 14.0004 1.464 17.3912L5.45004 14.3002Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.1874 4.74966C13.8982 4.7232 15.5517 5.36697 16.7907 6.54867L20.2168 3.12262C18.0474 1.0855 15.1681 -0.034466 12.1874 0.000808666C7.65016 0.000808666 3.50098 2.55822 1.46387 6.61481L5.4499 9.70575C6.39791 6.86173 9.05674 4.74966 12.1874 4.74966Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p>Link with Google</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8258 21.0949C16.3164 21.0949 20.9604 14.0605 20.9604 7.96032C20.9604 7.76052 20.9604 7.56162 20.9469 7.36362C21.8503 6.71014 22.6302 5.90101 23.25 4.97412C22.4075 5.34744 21.5137 5.59227 20.5986 5.70042C21.5623 5.1235 22.2835 4.21612 22.6281 3.14712C21.7219 3.68483 20.7306 4.06378 19.6968 4.26762C19.0008 3.52754 18.0803 3.03747 17.0777 2.87326C16.0751 2.70905 15.0463 2.87985 14.1506 3.35923C13.2549 3.83861 12.5421 4.59985 12.1226 5.52513C11.7031 6.45042 11.6002 7.48818 11.8299 8.47782C9.99458 8.38581 8.19912 7.90887 6.56008 7.07795C4.92103 6.24704 3.47505 5.08072 2.316 3.65472C1.72568 4.67097 1.54488 5.874 1.81041 7.01887C2.07593 8.16374 2.76782 9.16436 3.7452 9.81702C3.01057 9.79525 2.29195 9.59707 1.65 9.23922C1.65 9.25812 1.65 9.27792 1.65 9.29772C1.65029 10.3635 2.01924 11.3964 2.69425 12.2212C3.36927 13.046 4.30881 13.6119 5.3535 13.8229C4.67388 14.0083 3.96082 14.0354 3.2691 13.9021C3.56408 14.8194 4.13838 15.6215 4.91166 16.1963C5.68495 16.7711 6.61855 17.0898 7.5819 17.1079C5.94726 18.3926 3.92795 19.09 1.8489 19.0879C1.48161 19.0872 1.11468 19.065 0.75 19.0213C2.86107 20.3761 5.31742 21.0947 7.8258 21.0913"
                    fill="#1DA1F2"
                  />
                </svg>

                <p>Link with twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

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

interface OpenHourProps {
  activeDay: number;
  setActiveDay: Function;
}

function OpenHours(props: OpenHourProps) {
  const { activeDay, setActiveDay } = props;
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
            <div className="flex justify-between mt-2">
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
}
