import z from "zod";

// Password Role
const regexRole =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;

//Login schema
export const loginSchema = z.object({
  email: z.string().min(1, { message: "email should not be empty" }).email(),
  password: z
    .string()
    .min(1, { message: "password should not be empty" })
    .regex(regexRole, { message: "Wrong password" }),
});

//forgot password page schema
export const forgotPasswordSchema = z.object({
  email: z.string().min(1, { message: "email should not be empty" }).email(),
});

//Set password page schema

export const setPasswordSchema = z.object({
  email: z.string().min(1, { message: "email should not be empty" }).email(),
  newPassword: z
    .string()
    .min(8, { message: "Your password should be at least 8 characters" })
    .regex(
      regexRole,
      "Your password must contain at least 1 uppercase letter, 1 lowercase letter,1 special character(!@#$%^&*), and 1 number ",
    ),
});

//Verify page Schema
export const verifySchema = z.object({
  resetCode: z.string().min(6, { message: "incorrect code" }),
});

//Register page Schema
export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Your name must be at least 3 characters" }),
    firstName: z
      .string()
      .min(3, { message: "Your name must be at least 3 characters" }),
    lastName: z
      .string()
      .min(3, { message: "Your name must be at least 3 characters" }),
    email: z.string().min(1, { message: "email should not be empty" }).email(),
    password: z
      .string()
      .min(8, { message: "Your password should be at least 8 characters" })
      .regex(
        regexRole,
        "Your password must contain at least 1 uppercase letter, 1 lowercase letter,1 special character(!@#$%^&*), and 1 number ",
      ),
    rePassword: z.string().min(8),
    phone: z
      .string()
      .min(10, { message: "Phone number must be more than 10 numbers" }),
  })
  .refine((value) => value.password === value.rePassword, {
    message: "Doesn't match to your password",
    path: ["rePassword"],
  });

const formsSchema = {
  loginSchema,
  forgotPasswordSchema,
  setPasswordSchema,
  verifySchema,
  registerSchema,
};

export default formsSchema;
