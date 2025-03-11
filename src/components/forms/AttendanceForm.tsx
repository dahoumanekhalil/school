"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../Inputfield";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!." })
    .max(20, { message: "username must be at most 20 characters long!." }),
  email: z.string().email({ message: "Invalid email adress!." }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters long!." }),
  firstName: z
    .string()
    .min(3, { message: "firstname must be at least 3 characters long!." }),
  lastName: z
    .string()
    .min(3, { message: "lastName must be at least 3 characters long!." }),
  phone: z
    .string()
    .min(10, { message: "lastName must be at least 3 characters long!." }),
  address: z.string().min(4, { message: "address is required!." }),
  birthday: z.date({ message: "birthday is required!." }),
  sexe: z.enum(["male", "female"], { message: "sexe is required!." }),
});

type Inputs = z.infer<typeof schema>;

const ParentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold"> create a new Parent</h1>
      <span className="text-xs text-gray-400 font-medium">
        authontication information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        personal information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">sexe</label>
          <select
            className="ring-[1.5px] ring-red-300 p-2 rounded-md text-sm w-full"
            {...register("sexe")}
            defaultValue={data?.sexe}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sexe?.message && (
            <p className="text-xs text-red-400">
              {errors.sexe.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-beproGreen hover:bg-opacity-80 text-beproBlack font-bold p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ParentForm;
