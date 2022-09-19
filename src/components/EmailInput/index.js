import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { IoSend } from "react-icons/io5";
import { validationSchema } from "./validationSchema";

function FormComp() {
  const formikRefFooter = useRef();
  const onSubmit = async (data) => {
    // console.log(data);
    await fetch("https://d87k557w60.execute-api.us-east-1.amazonaws.com/default/contactFormSubmission", {
      method: "POST",
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          console.log(json.message)
        } else {
          console.log(json.message)
        }
      })
      .catch((error) => {
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <Formik
    innerRef={formikRefFooter}
      initialValues={{
        name: "n-a",
        email: "",
        message: "n-a",
        emailMarketing: true,
        src: "footer-email"
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
        // alert(JSON.stringify(values, null, 2));
        formikRefFooter.current?.resetForm();
      }}
    >
      {(props) => (
      <Form>
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            <label htmlFor="email" className="block text-sm sr-only">
              Email
            </label>
            <div className="relative flex items-center max-w-xs ">
              <Field
                as="input"
                id="email"
                name="email"
                className="bg-transparent form-input w-full text-white px-3 py-2 pr-12 text-sm"
                placeholder="Your email"
              />
              <button
                type="submit"
                className="absolute inset-0 left-auto"
                aria-label="Subscribe"
              >
                <span
                  className="absolute inset-0 right-auto w-px -ml-px my-2"
                  aria-hidden="true"
                ></span>
                <IoSend
                  className={`ml-2 mr-2 transition duration-200 ${
                    props.isValid && props.dirty
                      ? "text-teal-500"
                      : "text-white"
                  }  hover:text-teal-400`}
                />
              </button>
            </div>
          </div>
          <ErrorMessage
            component="p"
            name="email"
            className="text-center w-full text-red-500 mt-2 w-full font-bold select-none text-sm"
          />
        </div>
      </Form>
      )}
    </Formik>
  );
}

export default FormComp;
