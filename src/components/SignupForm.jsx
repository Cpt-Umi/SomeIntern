import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      pass: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 character required")
        .max(25)
        .required("Name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      pass: Yup.string()
        .min(8, "Minimum 8 characters required")
        .required("Password required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 3));
    },
  });

  return (
    <VStack as={"section"} bg={"white"} w={"100%"} my={"10"}>
      <Heading as={"h2"}>Signup</Heading>
      <Box w={"50%"}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.touched.name && formik.errors.name}>
            <FormLabel htmlFor="name" mt={"8"}>
              Name
            </FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name..."
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel htmlFor="email" mt={"8"}>
              Email
            </FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="mail@mail.com"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.pass && formik.errors.pass}>
            <FormLabel htmlFor="pass" mt={"8"}>
              Password
            </FormLabel>
            <Input
              type="password"
              id="pass"
              name="pass"
              placeholder="Pass..."
              value={formik.values.pass}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.pass}</FormErrorMessage>
          </FormControl>
          <Button w={"35%"} mt={"8"} type="submit">
            Signup
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default SignupForm;
