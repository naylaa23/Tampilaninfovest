import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  description: string;
  status: string;
};

const schema = z.object({
  name: z.string().min(3, "Nama kategori minimal 3 karakter"),
  description: z.string().min(5, "Deskripsi minimal 5 karakter"),
  status: z.string().min(1, "Status wajib dipilih"),
});

export default function CategoryCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Data kategori:", data);
    alert("Kategori berhasil dibuat!");
    navigate("/dashboard/category");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      {/* CARD */}
      <div className="w-full max-w-xl bg-white p-8 rounded-3xl shadow-xl border border-gray-100">

        {/* HEADER */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-[#7B1D3F]">
            Tambah Kategori
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Isi data kategori event kamu
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Nama */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Nama Kategori
            </label>
            <input
              {...register("name")}
              placeholder="Contoh: Seminar"
              className={`w-full mt-2 px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F] transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Deskripsi */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Deskripsi
            </label>
            <textarea
              {...register("description")}
              rows={3}
              placeholder="Tulis deskripsi singkat..."
              className={`w-full mt-2 px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F] transition ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-xs text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Status
            </label>
            <select
              {...register("status")}
              className={`w-full mt-2 px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F] transition ${
                errors.status ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Pilih status</option>
              <option value="active">Aktif</option>
              <option value="inactive">Nonaktif</option>
            </select>
            {errors.status && (
              <p className="text-xs text-red-500 mt-1">
                {errors.status.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#7B1D3F] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#5a152e] active:scale-[0.98] transition"
          >
            Simpan Kategori
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-300 mt-6">
          Pastikan data sudah benar sebelum disimpan
        </p>
      </div>
    </div>
  );
}