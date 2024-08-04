import {
  Form,
  useActionData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useReCaptcha from "~/hooks/useReCaptcha";
import RegularButton from "../Buttons/RegularButton";
import CompanyIcon from "../Icons/Form/CompanyIcon";
import DescriptionIcon from "../Icons/Form/DescriptionIcon";
import FormEmail from "../Icons/Form/FormEmail";
import PhoneIcon from "../Icons/Form/PhoneIcon";
import SingleUserIcon from "../Icons/Form/SingleUserIcon";

const validateName = (name?: any) => {
  if (!name?.length) {
    return "Name is required";
  } else if (typeof name !== "string") {
    return "Name must be a string";
  }
};

const validateEmail = (email?: any) => {
  if (!email?.length) {
    return "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address";
  }
};

const validatePhone = (phone?: any) => {
  if (!phone?.length) {
    return "Phone number is required";
  }
};

const validateDescription = (description?: any) => {
  if (!description?.length) {
    return "Description is required";
  }
};
const ContactForm: React.FC<{ additionalInfo?: Record<string, any> }> = ({
  additionalInfo,
}) => {
  const [formErrors, setFormErrors] = useState<any>({});
  const actionData = useActionData();
  const { handleReCaptchaVerify } = useReCaptcha("contactForm");
  const transition = useTransition();
  const submit = useSubmit();
  const formRef = useRef<any>(null);
  const btnText = useMemo(() => {
    return transition.state === "submitting"
      ? "Sending..."
      : transition.state === "loading"
      ? "Sent!"
      : "Send";
  }, [transition.state]);

  useEffect(() => {
    if (actionData) {
      formRef.current?.reset();
      handleReCaptchaVerify();
    }
  }, [actionData]);

  const handleChange = useCallback(
    (event: any) => {
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
        phone: validatePhone(data?.phone),
        description: validateDescription(data?.description),
      };
      const isError = Object.values(errors).some(Boolean);
      if (isError) {
        setFormErrors(errors);
        return errors;
      } else {
        setFormErrors({});
        submit(form, { method: "post", action: "/" });
        formRef.current.reset();
      }
    },
    [additionalInfo, submit]
  );

  return (
    <Form
      method="post"
      onSubmit={handleChange}
      ref={formRef}
      className="col-lg-7 contact-form"
    >
      <div className="row">
        <div className="col-lg-6 contact-item">
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
            <p className="text-danger small">{formErrors.name}</p>
          )}
        </div>
        <div className="col-lg-6 contact-item">
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
            <p className="text-danger small">{formErrors.email}</p>
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 contact-item">
          <div className="form-floating input-group">
            <span className="input-group-icon mt-4 mx-2">
              <PhoneIcon />
            </span>
            <input
              autoComplete="off"
              type="number"
              name="phone"
              className="form-control mx-2 mt-2"
              id="floatingInputPhone"
              placeholder="Phone"
            />
            <label
              htmlFor="floatingInputPhone"
              className="form-control-label mx-5 mt-2"
            >
              Phone
            </label>
          </div>
          {formErrors?.phone && (
            <p className="text-danger small">{formErrors.phone}</p>
          )}
        </div>
        <div className="col-lg-6 contact-item">
          <div className="form-floating input-group">
            <span className="input-group-icon mt-4 mx-2">
              <CompanyIcon />
            </span>
            <input
              autoComplete="off"
              type="text"
              name="company"
              className="form-control mx-2 mt-2"
              id="floatingInputCompanyName"
              placeholder="Company Name"
            />
            <label
              htmlFor="floatingInputCompanyName"
              className="form-control-label mx-5 mt-2"
            >
              Company&nbsp;Name
            </label>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 contact-item">
          <div className="form-floating input-group">
            <span className="input-group-icon mt-4 mx-2">
              <DescriptionIcon />
            </span>
            <label
              htmlFor="floatingInput"
              className="form-control-label d-none"
            >
              Description
            </label>
            <textarea
              name="description"
              className="form-control mx-2 project-description"
              id="floatingInput"
              placeholder="Describe your Project in short"
              autoComplete="off"
              aria-label="description"
            />
          </div>
          {formErrors?.description && (
            <p className="text-danger small">{formErrors.description}</p>
          )}
        </div>
      </div>
      <div className="me-md-2 me-lg-0 mt-5">
        <div className="d-flex justify-content-end">
          <RegularButton>{btnText}</RegularButton>
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
