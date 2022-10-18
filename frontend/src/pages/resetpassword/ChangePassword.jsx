import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
export const ChangePassword = (props) => {
  const { password, setPassword, conf_pass, setConfPass } = props;
  return (
    <div className="reset_form" style={{height:"320px"}}>
      <div className="reset_form_header">Change Password</div>
      <div className="reset_form_text">
       Pick a strong password.
      </div>
      <Formik enableReinitialize initialValues={{ password, conf_pass }}>
        {(formik) => (
          <Form>
            <LoginInput
              value={formik.email}
              type="password"
              name="password"
              placeholder="New Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <LoginInput
              value={formik.email}
              type="password"
              name="conf_pass "
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfPass(e.target.value);
              }}
            />
            {/* {error && <div className="error_text">{error}</div>} */}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancle
              </Link>
              <button type="submit" className="blue_btn">
                Continute
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
