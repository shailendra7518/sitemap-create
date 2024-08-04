import {
  Form,
  useActionData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import React, { useEffect, useRef, useState } from "react";
import useReCaptcha from "~/hooks/useReCaptcha";
import RegularButton from "../Buttons/RegularButton";
import FormEmail from "../Icons/Form/FormEmail";
import MessageIcon from "../Icons/Form/MessageIcon";
import SingleUserIcon from "../Icons/Form/SingleUserIcon";

const validateName = (name?: any) => {
  if (!name?.length) {
    return "Name is required";
  } else if (typeof name !== "string") {
    return `Name must be a string`;
  }
};

const validateEmail = (email?: any) => {
  if (!email?.length) {
    return "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address";
  }
};

const validateMessage = (message?: any) => {
  if (!message?.length) {
    return "Message is required";
  }
};

const ClutchContactForm: React.FC<{
  additionalInfo?: Record<string, any>;
}> = ({ additionalInfo }) => {
  const [formErrors, setFormErrors] = useState<any>();

  const actionData = useActionData();

  const { handleReCaptchaVerify } = useReCaptcha("clutchContactForm");

  const transition = useTransition();

  const submit = useSubmit();

  let formRef = useRef<any>(null);

  const btnText =
    transition.state === "submitting"
      ? "Submitting..."
      : transition.state === "loading"
      ? "Submit"
      : "Submit";

  useEffect(() => {
    if (actionData) {
      formRef.current?.reset();
      handleReCaptchaVerify();
    }
  }, [actionData]);

  const handleChange = (event: any) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    if (additionalInfo) {
      Object.entries(additionalInfo).forEach(([key, value]) => {
        form.set(key, value);
      });
    }

    const data = Object.fromEntries(form);

    const errors = {
      name: validateName(data?.name),
      email: validateEmail(data?.email),
      message: validateMessage(data?.description),
    };

    const isError = Object.values(errors).some(Boolean);

    if (isError) {
      setFormErrors(errors);
      return errors;
    } else {
      setFormErrors({});
    }

    submit(form, { method: "post", action: "/" });

    if (!isError) {
      formRef.current.reset();
    }
  };

  return (
    <Form
      method="post"
      onSubmit={handleChange}
      ref={formRef}
      className="contact-form clutch-contact-form d-flex flex-column gap-5"
    >
      <div className="contact-item ">
        <div className="form-floating input-group">
          <span className="input-group-icon mt-4 mx-2">
            <SingleUserIcon />
          </span>
          <input
            autoComplete="off"
            type="text"
            name="name"
            className="form-control mx-2 mt-2"
            id="floatingInputName"
            placeholder="name@example.com"
          />
          <label
            htmlFor="floatingInputName"
            className="form-control-label mx-5 mt-2"
          >
            Name
          </label>
        </div>
        {formErrors?.name && (
          <p className="text-danger small">{formErrors?.name}</p>
        )}
      </div>

      <div className="contact-item">
        <div className="form-floating input-group">
          <span className="input-group-icon mt-4 mx-2">
            <FormEmail />
          </span>
          <input
            autoComplete="off"
            name="email"
            className="form-control mx-2 mt-2"
            id="floatingInputEmail"
            placeholder="name@example.com"
          />
          <label
            htmlFor="floatingInputEmail"
            className="form-control-label mx-5 mt-2"
          >
            Email
          </label>
        </div>
        {formErrors?.email && (
          <p className="text-danger small">{formErrors?.email}</p>
        )}
      </div>

      <div className="contact-item">
        <div className="col-12 contact-item">
          <div className="form-floating input-group">
            <span className="input-group-icon mt-4 mx-2">
              <MessageIcon />
            </span>
            <textarea
              name="description"
              className="form-control mx-2 project-description clutch-form-message"
              id="floatingInput"
              placeholder="Message"
              autoComplete="off"
              rows={5}
            />
          </div>
          {formErrors?.message && (
            <p className="text-danger small">{formErrors?.message}</p>
          )}
        </div>
      </div>

      <div className="me-md-2 mt-5 me-lg-0">
        <RegularButton classes="w-100 clutch-contact-form-btn">
          {btnText}
        </RegularButton>
      </div>
    </Form>
  );
};

export default ClutchContactForm;
