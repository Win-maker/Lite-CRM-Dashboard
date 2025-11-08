import "./App.css";
// import CreateUserView from "./views/CreateUserView";
import DashboardView from "./views/dashboard/DashboardView";
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { VStack, Input, Field, Button } from "@chakra-ui/react";
// import NRCView from "./views/NRCView";

// type Inputs = {
//   username: string;
//   password: string;
//   age: number;
// };

function App() {


  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <VStack>
    //     {/* Username Field */}
    //     <Field.Root invalid={!!errors.username} required>
    //       <Field.Label>
    //         Username <Field.RequiredIndicator />
    //       </Field.Label>
    //       <Input
    //         {...register("username", { required: "Username is required" })}
    //         variant="outline"
    //       />
    //       {/* Dynamically show error message */}
    //       <Field.ErrorText>
    //         {errors.username?.message}
    //       </Field.ErrorText>
    //     </Field.Root>

    //     {/* Password Field */}
    //     <Field.Root invalid={!!errors.password} required>
    //       <Field.Label>
    //         Password <Field.RequiredIndicator />
    //       </Field.Label>
    //       <Input
    //         {...register("password", {
    //           required: "Password is required",
    //           minLength: {
    //             value: 2,
    //             message: "Password must be at least 2 characters long",
    //           },
    //         })}
    //         variant="outline"
    //       />
    //       {/* Dynamically show error message */}
    //       <Field.ErrorText>
    //         {errors.password?.message}
    //       </Field.ErrorText>
    //     </Field.Root>

    //     {/* Age Field */}
    //     <Field.Root invalid={!!errors.age} required>
    //       <Field.Label>
    //         Age <Field.RequiredIndicator />
    //       </Field.Label>
    //       <Input
    //         type="number"
    //         defaultValue="18"
    //         {...register("age", {
    //           required: "Age is required",
    //           min: { value: 18, message: "Must be at least 18" },
    //           max: { value: 80, message: "Must be at most 80" },
    //         })}
    //         variant="outline"
    //       />
    //       {/* Dynamically show error message */}
    //       <Field.ErrorText>
    //         {errors.age?.message}
    //       </Field.ErrorText>
    //     </Field.Root>

    //     <Button type="submit">Submit</Button>
    //   </VStack>
    // </form>
    // <NRCView/>
    // <CreateUserView/>
    <DashboardView/>
  );
}

export default App;
