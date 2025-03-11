"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../Inputfield";

const schema = z.object({
  subjectName: z
    .string()
    .min(3, { message: "firstname must be at least 3 characters long!." }),
  studentName: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!." })
    .max(20, { message: "username must be at most 20 characters long!." }),
  score: z.number().min(1, { message: "your nute must be less than 20!." }),
  class: z.number().min(1, { message: "your nute must be less than 20!." }),
  teacher: z.number().min(1, { message: "your nute must be less than 20!." }),
  date: z.number().min(1, { message: "your nute must be less than 20!." }),
  type: z.number().min(1, { message: "your nute must be less than 20!." }),
});

type Inputs = z.infer<typeof schema>;

const ResultForm = ({
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
      <h1 className="text-xl font-semibold"> create a new Result</h1>
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
          label="Student Name"
          name="studentName"
          defaultValue={data?.studentName}
          register={register}
          error={errors.studentName}
        />
        <InputField
          label="Score"
          name="score"
          type="number"
          defaultValue={data?.Score}
          register={register}
          error={errors.Score}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        personal information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Class"
          name="class"
          defaultValue={data?.class}
          register={register}
          error={errors.class}
        />
        <InputField
          label="Teacher"
          name="teacher"
          defaultValue={data?.teacher}
          register={register}
          error={errors.teacher}
        />
        <InputField
          label="Date"
          name="date"
          defaultValue={data?.date}
          register={register}
          error={errors.date}
        />
        <InputField
          label="Type"
          name="type"
          defaultValue={data?.type}
          register={register}
          error={errors.type}
        />
      </div>
      <button className="bg-beproGreen hover:bg-opacity-80 text-beproBlack font-bold p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ResultForm;
