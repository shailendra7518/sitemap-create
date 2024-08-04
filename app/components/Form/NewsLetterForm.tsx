import RegularButton from "../Buttons/RegularButton";

const NewsLetterForm = ({ status, message, onValidated }: any) => {
  let email: any;
  const submit = (e: any) => {
    e.preventDefault();
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
    email.value = "";
  };
  return (
    <>
      <div className="mt-3 d-flex flex-wrap justify-content-end">
        <input
          className="py-1 ps-2 me-xl-2 flex-grow-1"
          ref={(node) => (email = node)}
          type="email"
          placeholder="Enter Your mail"
          aria-label="email"
        />
        <RegularButton classes="my-md-3 my-xl-0 ms-2 ms-md-0" onClick={submit}>
          Subscribe
        </RegularButton>
      </div>
      {status === "error" && (
        <div
          className="text-danger mt-3"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="text-theme mt-3"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </>
  );
};

export default NewsLetterForm;
