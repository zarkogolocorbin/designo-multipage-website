import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import styles from "../../styles/form.module.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const onSubmit = (values, submitProps) => {
  console.log(values);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Can’t be empty"),
  phone: Yup.string().required("Can’t be empty"),
  message: Yup.string().required("Can’t be empty"),
  email: Yup.string()
    .email("Looks like this is not an email")
    .required("Can’t be empty"),
});

export default function FormSection() {
  return (
    <div className={styles["main-form"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className={styles["form-control"]}>
            <Field name="name">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <div
                      className={
                        styles[
                          `${
                            meta.touched && meta.error ? "error-input" : "input"
                          }`
                        ]
                      }
                    >
                      <input
                        placeholder="First Name"
                        type="text"
                        id="firstName"
                        autoComplete="off"
                        {...field}
                      />
                      <div className={styles.errors}>
                        {meta.touched && meta.error ? (
                          <div className={styles.error}>{meta.error}</div>
                        ) : null}
                        {meta.touched && meta.error ? (
                          <Image
                            src={"/assets/contact/desktop/icon-error.svg"}
                            alt="error"
                            height={20}
                            width={20}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <div className={styles["form-control"]}>
            <Field name="email">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <div
                      className={
                        styles[
                          `${
                            meta.touched && meta.error ? "error-input" : "input"
                          }`
                        ]
                      }
                    >
                      <input
                        placeholder="Email Address"
                        type="email"
                        id="email"
                        autoComplete="off"
                        {...field}
                      />
                      <div className={styles.errors}>
                        {meta.touched && meta.error ? (
                          <div className={styles.error}>{meta.error}</div>
                        ) : null}
                        {meta.touched && meta.error ? (
                          <Image
                            src={"/assets/contact/desktop/icon-error.svg"}
                            alt="error"
                            height={20}
                            width={20}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <div className={styles["form-control"]}>
            <Field name="phone">
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <div
                      className={
                        styles[
                          `${
                            meta.touched && meta.error ? "error-input" : "input"
                          }`
                        ]
                      }
                    >
                      <input
                        placeholder="Phone"
                        type="text"
                        id="phone"
                        autoComplete="off"
                        {...field}
                      />
                      <div className={styles.errors}>
                        {meta.touched && meta.error ? (
                          <div className={styles.error}>{meta.error}</div>
                        ) : null}
                        {meta.touched && meta.error ? (
                          <Image
                            src={"/assets/contact/desktop/icon-error.svg"}
                            alt="error"
                            height={20}
                            width={20}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <div className={styles["form-control"]}>
            <Field name="message">
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <div
                      className={
                        styles[
                          `${
                            meta.touched && meta.error ? "error-input" : "input"
                          }`
                        ]
                      }
                    >
                      <textarea
                        placeholder="Your Message"
                        type="text"
                        id="message"
                        autoComplete="off"
                        rows="5"
                        {...field}
                      />
                      <div className={styles.errors}>
                        {meta.touched && meta.error ? (
                          <div className={styles.error}>{meta.error}</div>
                        ) : null}
                        {meta.touched && meta.error ? (
                          <Image
                            src={"/assets/contact/desktop/icon-error.svg"}
                            alt="error"
                            height={20}
                            width={20}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              }}
            </Field>
          </div>
          <button type="submit" className={styles["submit-button"]}>
            submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
