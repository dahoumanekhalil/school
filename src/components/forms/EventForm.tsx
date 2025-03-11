"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../Inputfield";

const schema = z.object({
  event: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!." })
    .max(20, { message: "username must be at most 20 characters long!." }),
  class: z.string().min(2, { message: "Invalid class adress!." }),
  date: z.date({ message: "date is required!." }),
  start: z.date({ message: "date is required!." }),
  end: z.date({ message: "date is required!." }),
});

type Inputs = z.infer<typeof schema>;

const EventForm = ({
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
      <h1 className="text-xl font-semibold"> create a new Event</h1>
      <span className="text-xs text-gray-400 font-medium">
        authontication information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Event"
          name="event"
          defaultValue={data?.event}
          register={register}
          error={errors.event}
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
          label="date of exam"
          name="date"
          type="date"
          defaultValue={data?.date}
          register={register}
          error={errors.date}
        />
        <InputField
          label="Start"
          name="start"
          type="start"
          defaultValue={data?.start}
          register={register}
          error={errors.start}
        />
        <InputField
          label="End"
          name="end"
          type="end"
          defaultValue={data?.end}
          register={register}
          error={errors.end}
        />
      </div>
      <button className="bg-beproGreen hover:bg-opacity-80 text-beproBlack font-bold p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default EventForm;
