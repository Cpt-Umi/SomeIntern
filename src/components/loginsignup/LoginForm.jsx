import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/store";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      pass: Yup.string()
        .min(8, "Minimum 8 characters required")
        .required("Password required"),
    }),
    onSubmit: (values) => {
      dispatch(login(values.name));
      navigate("/dashboard");
    },
  });

  return (
    <VStack as={"section"} bg={"white"} w={"100%"} my={"10"}>
      <Heading as={"h2"}>Login</Heading>
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
          <Text
            mt={"5"}
            color={"blue.900"}
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            Forgot Password?
          </Text>
          <Button w={"35%"} mt={"3"} type="submit" colorScheme="cyan">
            Login
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default LoginForm;
