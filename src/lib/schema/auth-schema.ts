import z from "zod";

// Password Role
const passwordRegex = {
  pattern:
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,
  message:
    "Your password must contain at least 1 uppercase letter, 1 lowercase letter,1 special character(!@#$%^&*), and 1 number",
};

//Login schema
export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email should not be empty" }).email(),
  password: z
    .string()
    .min(1, { message: "Password should not be empty" })
    .regex(passwordRegex.pattern, { message: "Wrong password" }), // You should not apply the regex in login, this is strange for users experience
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
    .regex(passwordRegex.pattern, passwordRegex.message),
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
      .regex(passwordRegex.pattern, passwordRegex.message),
    rePassword: z.string().min(8),
    phone: z
      .string()
      .min(10, { message: "Phone number must be more than 10 numbers" }), // Proper validation should've been applied
  })
  .refine((value) => value.password === value.rePassword, {
    message: "Doesn't match to your password",
    path: ["rePassword"],
  });

// Change Password Schema
const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, { message: "password should not be empty" })
      .regex(passwordRegex.pattern, { message: "Wrong password" }),

    password: z
      .string()
      .min(1, { message: "password should not be empty" })
      .regex(passwordRegex.pattern, { message: "Wrong password" }),
    rePassword: z.string().min(1, { message: "password should not be empty" }),
  })
  .refine((value) => value.rePassword === value.password, {
    message: "Your confirm password does't match with new password",
    path: ["rePassword"],
  });

// Update profile schema
const updateProfileSchema = z.object({
  lastName: z
    .string()
    .min(1, { message: "Your last name shouldn't be empty" })
    .min(3, { message: "Your last name should be at least 3 characters" }),
});

const formsSchema = {
  loginSchema,
  forgotPasswordSchema,
  setPasswordSchema,
  verifySchema,
  registerSchema,
  changePasswordSchema,
  updateProfileSchema,
};

export default formsSchema;
