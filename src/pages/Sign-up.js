import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import CustomInput from "../components/common/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign-up"}></Meta>
      <BreadCrumbs title="Sign-up" />
      <Container class1="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Name" />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile no."
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Sign-up
                    </button>
                    <Link to="/login">Already Sign-up?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
