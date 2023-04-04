import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset-Password"}></Meta>
      <BreadCrumbs title="Reset-Password" />
      <div className="reset-password-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="confpassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Ok
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;