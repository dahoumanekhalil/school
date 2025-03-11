"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../Inputfield";
import Image from "next/image";

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long!" })
    .max(100, { message: "Title must be at most 100 characters long!" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long!" })
    .max(500, { message: "Description must be at most 500 characters long!" }),
  date: z.date({ message: "Date is required!" }),
  class: z.enum(["Class A", "Class B", "Class C", "Class D", "Class E"], {
    message:
      "Class must be one of: Class A, Class B, Class C, Class D, Class E!",
  }),
  priority: z.enum(["Low", "Medium", "High"], {
    message: "Priority must be one of: Low, Medium, High!",
  }),
});

type Inputs = z.infer<typeof schema>;

const AnnouncementForm = ({
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
      <h1 className="text-xl font-semibold"> create a new Priority</h1>
      <span className="text-xs text-gray-400 font-medium">
        authontication information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Title"
          name="title"
          defaultValue={data?.title}
          register={register}
          error={errors.title}
        />
        <InputField
          label="Class"
          name="class"
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
          label="Date"
          name="date"
          type="date"
          defaultValue={data?.date}
          register={register}
          error={errors.date}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Priority</label>
          <select
            className="ring-[1.5px] ring-red-300 p-2 rounded-md text-sm w-full"
            {...register("priority")}
            defaultValue={data?.sexe}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority?.message && (
            <p className="text-xs text-red-400">
              {errors.priority.message.toString()}
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

export default AnnouncementForm;
