import Image from "next/image";
import Router from "next/router";

import { useState } from "react";
import Swal from "sweetalert2";
import { mutate } from "swr";

import { Header } from "../../components/common/Header";
import AdminAPI from "../../lib/adminApi";

export default function login() {
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  function handleOnSetValue(event: any) {
    setLoginPayload({
      ...loginPayload,
      [event.target.name]: event.target.value.trim(),
    });
  }

  async function handleLogin() {
    const { data, status } = await AdminAPI.login(
      loginPayload.email,
      loginPayload.password
    );

    if (status !== 200 || data?.error) {
      Swal.fire("Error", data.message, "error");
      return;
    }
    if (!!data.access_token) {
      Swal.fire("Success", "Successfully logged in!", "success");
      window.localStorage.setItem(
        "accessToken",
        JSON.stringify(data.access_token)
      );

      const token = window.localStorage.getItem("accessToken");

      mutate("accessToken", data.access_token);
      Router.push("/");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />
      <div className="flex w-full py-24 mx-auto space-y-4 ">
        <div className="w-full max-w-2xl mx-auto ">
          <div className="flex justify-center flex-shrink-0 mx-auto cursor-pointer">
            <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
          </div>
          <div className="w-full p-4 space-y-4 bg-white rounded shadow">
            <div className="space-y-2 ">
              <p className="">Email</p>
              <input
                name="email"
                onChange={handleOnSetValue}
                type="text"
                placeholder="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="space-y-2 ">
              <p className="">Password</p>
              <input
                name="password"
                onChange={handleOnSetValue}
                type="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-2 text-white bg-green-500 rounded "
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
