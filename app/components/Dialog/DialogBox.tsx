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
import { MdClose } from "react-icons/md";
import {
  careerClosedPaths,
  careerPaths,
  dialogClosedPaths,
  dialogConstants,
} from "~/constants/dialogConstants";
import { dialogDelay } from "~/constants/dialogDelay";
import { RegularButton } from "../Buttons";
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
  } else if (!/^[^-]\d+$/.test(phone)) {
    return "Invalid phone number";
  }
};

const validateDescription = (description?: any) => {
  if (!description?.length) {
    return "Requirement is required";
  }
};

const DialogBox: React.FC<{ additionalInfo?: Record<string, any> }> = ({
  additionalInfo,
}) => {
  const [headingName, setHeadingName] = useState("Have an Idea?");
  const [open, setOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<any>({});
  const actionData = useActionData();
  const transition = useTransition();
  const submit = useSubmit();
  const formRef = useRef<any>(null);
  const location = useRef(
    typeof window !== "undefined" ? window.location?.pathname : ""
  );

  const btnText = useMemo(() => {
    return transition.state === "submitting"
      ? "Sending..."
      : transition.state === "loading"
      ? "Sent!"
      : "Submit";
  }, [transition.state]);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const pathName = window.location?.pathname;
    if (sessionStorage.getItem("isSubmitted")) {
      setOpen(false);
      return;
    }
    setOpen(false);
    if (
      pathName === "/project-survey" ||
      pathName.startsWith("/startup-partnerships") ||
      pathName.startsWith("/partnerships") ||
      (sessionStorage.getItem("dialogClosed") &&
        JSON.parse(sessionStorage.getItem("dialogClosed") || "").includes(
          pathName
        ))
    ) {
      setOpen(false);
      return;
    }
    const matchingMenuItem = dialogConstants.find(
      (item) => item.link === pathName
    );
    if (matchingMenuItem) {
      setHeadingName(matchingMenuItem.title);
    }
    const delayItem = dialogDelay.find((item) => item.link === pathName);
    const delayTime = delayItem
      ? delayItem.delay
      : pathName.startsWith("/projects/")
      ? 8000
      : 14000;
    const timeoutId = setTimeout(() => {
      if (window.location?.pathname === pathName) {
        setOpen(true);
      }
    }, delayTime);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.current]);

  useEffect(() => {
    if (!open) {
      setFormErrors({});
    }
  }, [open]);

  useEffect(() => {
    if (actionData) {
      formRef.current?.reset();
    }
  }, [actionData]);

  const handleChange = useCallback((event: any) => {
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
      sessionStorage.setItem("isSubmitted", "true");
      formRef.current.reset();
      setClosing(true);
      setTimeout(() => setOpen(false), 5000); // Match the duration with slideOut animation
    }
  }, []);

  const handleClosedDialog = useCallback(() => {
    setClosing(true);
    setTimeout(() => setOpen(false), 5000); // Match the duration with slideOut animation
    const pathName = window.location?.pathname;
    if (dialogClosedPaths.includes(pathName)) {
      sessionStorage.setItem("dialogClosed", JSON.stringify(dialogClosedPaths));
    }
    if (careerPaths.includes(pathName)) {
      sessionStorage.setItem("dialogClosed", JSON.stringify(careerClosedPaths));
    }
  }, []);

  const spaceIndex = headingName?.indexOf(" ");

  return (
    <>
      {open && (
        <div
          className={`dialog-content ${closing && "close"}`}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="close-button d-flex justify-content-end pb-3"
            onClick={() => handleClosedDialog()}
          >
            <span role="button" aria-label="close button" tabIndex={0}>
              <MdClose role="button" aria-label="close button" />
            </span>
          </div>
          <div className="heading-container">
            <h2 className="heading w-75">
              <span>{headingName.substring(0, spaceIndex)}</span>
              {headingName.substring(spaceIndex)}
            </h2>
            <p className="sub-heading w-75">Connect with our experts today.</p>
          </div>
          <Form
            method="post"
            onSubmit={handleChange}
            ref={formRef}
            className="dialog-form"
          >
            <div className="col-12">
              <div className="form-floating input-group">
                <span className="input-group-icon mt-4 mx-2">
                  <SingleUserIcon />
                </span>
                <input
                  autoComplete="off"
                  type="text"
                  name="name"
                  className="form-control mx-2 mt-2"
                  id="dialogInputName"
                  placeholder="name@example.com"
                />
                <label
                  htmlFor="dialogInputName"
                  className="form-control-label mx-5 mt-2"
                >
                  Name
                </label>
              </div>
              {formErrors?.name && (
                <p className="dialog-error-msg text-danger small">
                  {formErrors?.name}
                </p>
              )}
            </div>

            <div className="col-12 mt-1">
              <div className="form-floating input-group">
                <span className="input-group-icon mt-4 mx-2">
                  <PhoneIcon />
                </span>
                <input
                  autoComplete="off"
                  type="number"
                  name="phone"
                  className="form-control mx-2 mt-2"
                  id="dialogInputPhone"
                  placeholder="Phone"
                />
                <label
                  htmlFor="dialogInputPhone"
                  className="form-control-label mx-5 mt-2"
                >
                  Phone
                </label>
              </div>
              {formErrors?.phone && (
                <p className="dialog-error-msg text-danger small">
                  {formErrors?.phone}
                </p>
              )}
              <div className="col-12 mt-1">
                <div className="form-floating input-group">
                  <span className="input-group-icon mt-4 mx-2">
                    <FormEmail />
                  </span>
                  <input
                    autoComplete="off"
                    name="email"
                    className="form-control mx-2 mt-2"
                    id="dialogInputEmail"
                    placeholder="name@example.com"
                  />
                  <label
                    htmlFor="dialogInputEmail"
                    className="form-control-label mx-5 mt-2"
                  >
                    Email
                  </label>
                </div>
                {formErrors?.email && (
                  <p className="dialog-error-msg text-danger small">
                    {formErrors?.email}
                  </p>
                )}
              </div>
              <div className="col-12 mt-2">
                <div className="form-floating input-group">
                  <span className="input-group-icon mt-4 mx-2">
                    <DescriptionIcon />
                  </span>
                  <textarea
                    name="description"
                    className="form-control mx-2 requirement"
                    id="dialogInput"
                    placeholder="Requirement"
                    autoComplete="off"
                    aria-label="description"
                  />
                </div>
                {formErrors?.description && (
                  <p className="dialog-error-msg text-danger small">
                    {formErrors?.description}
                  </p>
                )}
              </div>
            </div>
            <div className="me-md-2 me-lg-0 mt-5">
              <RegularButton classes="w-100">{btnText}</RegularButton>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default React.memo(DialogBox);
