import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  job: z.string().min(3, "Pekerjaan minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  photo: z.string().optional(),
  bio: z.string().min(5, "Bio minimal 5 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function PembicaraCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Pembicara:", data);
    alert("Pembicara berhasil ditambahkan!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">

      {/* CARD */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-[#7B1D3F]">
            Tambah Pembicara
          </h1>
          <p className="text-sm text-gray-400">
            Isi data pembicara untuk event
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Nama & Job */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                {...register("name")}
                placeholder="Nama lengkap"
                className="w-full px-3 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("job")}
                placeholder="Pekerjaan"
                className="w-full px-3 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
              />
              {errors.job && (
                <p className="text-xs text-red-500 mt-1">{errors.job.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full px-3 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Photo */}
          <div>
            <input
              {...register("photo")}
              placeholder="Link foto (opsional)"
              className="w-full px-3 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
          </div>

          {/* Bio */}
          <div>
            <textarea
              rows={3}
              {...register("bio")}
              placeholder="Tulis bio singkat"
              className="w-full px-3 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
            {errors.bio && (
              <p className="text-xs text-red-500 mt-1">{errors.bio.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button className="w-full bg-[#7B1D3F] text-white py-3 rounded-xl font-semibold shadow hover:bg-[#5a152e] transition">
            Simpan
          </button>

        </form>
      </div>
    </div>
  );
}