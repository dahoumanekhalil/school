"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../Inputfield";

const schema = z.object({
  subjectName: z.string().min(3, { message: "write that subject you want!." }),
  class: z
    .string()
    .min(3, { message: "lastName must be at least 3 characters long!." }),
  teacher: z
    .string()
    .min(3, { message: "write name of teacher!." })
    .max(20, { message: "username must be at most 20 characters long!." }),
  dueDate: z
    .string()
    .min(10, { message: "lastName must be at least 3 characters long!." }),
});

type Inputs = z.infer<typeof schema>;

const AssignmentForm = ({
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
      <h1 className="text-xl font-semibold"> create a new Assignment</h1>
      <span className="text-xs text-gray-400 font-medium">
        authontication information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Subject Name"
          name="subjectName"
          defaultValue={data?.subjectName}
          register={register}
          error={errors.subjectName}
        />
        <InputField
          label="Class"
          name="class"
          type="class"
          defaultValue={data?.class}
          register={register}
          error={errors.class}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        personal information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Teacher"
          name="teacher"
          defaultValue={data?.teacher}
          register={register}
          error={errors.teacher}
        />
        <InputField
          label="DueDate"
          name="dueDate"
          type="date"
          defaultValue={data?.dueDate}
          register={register}
          error={errors.dueDate}
        />
      </div>
      <button className="bg-beproGreen hover:bg-opacity-80 text-beproBlack font-bold p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AssignmentForm;
