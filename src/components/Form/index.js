import React, { useRef, useState } from "react";
import { IoSend, IoTrashBin, IoCheckmarkCircleOutline } from "react-icons/io5";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";
import { useTranslation } from 'react-i18next';


function FormComp({loc}) {
  const formikRef = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");
  const { t } = useTranslation();

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
          setIsSuccess(true);
          setMessage(json.message);
        } else {
          console.log(json.message)
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };



  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        name: "",
        email: "",
        message: "",
        emailMarketing: false,
        src: loc
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
        // alert(JSON.stringify(values, null, 2));
        formikRef.current?.resetForm();
      }}
    >
      {(props) => (
        <Form className="mt-10 flex-col justify-center items-center">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <Field
                as="input"
                id="name"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-dark-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-teal-400 focus:outline-none focus:ring-0"
                placeholder=" "
              />

              <ErrorMessage
                component="p"
                name="name"
                className="text-red-500 mt-2 w-full font-bold select-none text-sm"
              />

              <label className="absolute top-3 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-teal-400">
              {t('your_name')}
              </label>
            </div>

            <div className="relative z-0">
              <Field
                as="input"
                id="email"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-dark-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-teal-400 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <ErrorMessage
                component="p"
                name="email"
                className="text-red-500 mt-2 w-full font-bold select-none text-sm"
              />
              <label
                htmlFor="email"
                className="absolute top-3 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-teal-400"
              >
                {t('your_email')}
              </label>
            </div>

            <div className="relative z-0 col-span-2">
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="5"
                className="peer block w-full appearance-none border-0 border-b border-dark-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-teal-400 focus:outline-none focus:ring-0 min-h-[100px]"
                placeholder=" "
              ></Field>
              <ErrorMessage
                component="p"
                name="message"
                className="text-red-500 mt-2 w-full font-bold select-none text-sm"
              />
              <label className="absolute top-3 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-teal-400">
              {t('your_message')}
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <div className="flex items-center justify-center">

              <Field type="checkbox" id="emailMarketing" name="emailMarketing" className="form-check-input float-left cursor-pointer mr-2 w-4 h-4 text-teal-400 bg-gray-100 rounded border-gray-300 focus:ring-teal-400 focus:ring-0 transition duration-200 focus:ring-offset-0"></Field>
              <label
                className="form-check-label inline-block text-white pt-0.5"
                htmlFor="emailMarketing"
                >
                {t('check_here')}
              </label>
                </div>
                {isSuccess && (
                        <>
                          <div className="flex  justify-center items-center ">
                            <div>
                              <div className="flex flex-col md:flex-row mt-5 flex items-center text-green-400">
                                <span className="tracking-wide">
                                {t('email_sent')}
                                </span>
                                <IoCheckmarkCircleOutline className="ml-2 md:mb-0.5 mt-2 md:mt-0 w-6 h-6" />
                              </div>
                            </div>
                          </div>
                        </>
                      )}


            </div>
          </div>
          <div className="flex w-full grow justify-center items-center ">
            <button
              type="reset"
              className="btn-sm text-white bg-dark-700 hover:bg-teal-400  mr-2 mt-5"
            >
              <IoTrashBin className="m-0.5" />
            </button>
            <button
              type="submit"
              className={`btn-sm ml-2  text-white ${
                props.isValid && props.dirty ? "bg-teal-500" : "bg-dark-700"
              }  hover:bg-teal-400   mt-5 `}
            >
              <span>{t('send_message')}</span>
              <IoSend className="ml-2" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormComp;
