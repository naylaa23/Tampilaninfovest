import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  category: string;
  date: string;
  status: string;
};

export default function EventCreate() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Event berhasil dibuat");
    navigate("/dashboard/event");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#7B1D3F]">
          Tambah Event
        </h1>
        <p className="text-sm text-gray-500">
          Isi data event dengan lengkap
        </p>
      </div>

      {/* BOX */}
      <div className="bg-white rounded-xl shadow-lg p-8">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Nama */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-sm font-medium text-gray-600">
              Nama Event
            </label>
            <input
              {...register("name")}
              placeholder="Seminar AI"
              className="col-span-2 px-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
          </div>

          {/* Kategori */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-sm font-medium text-gray-600">
              Kategori
            </label>
            <input
              {...register("category")}
              placeholder="Seminar / Workshop"
              className="col-span-2 px-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
          </div>

          {/* Tanggal */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-sm font-medium text-gray-600">
              Tanggal
            </label>
            <input
              type="date"
              {...register("date")}
              className="col-span-2 px-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
          </div>

          {/* Status */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-sm font-medium text-gray-600">
              Status
            </label>
            <select
              {...register("status")}
              className="col-span-2 px-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            >
              <option value="">Pilih status</option>
              <option value="Aktif">Aktif</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>

          {/* BUTTON */}
          <div className="flex justify-end gap-3 pt-6">
            <button
              type="button"
              onClick={() => navigate("/dashboard/event")}
              className="px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100"
            >
              Batal
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-[#7B1D3F] text-white hover:bg-[#5a152e]"
            >
              Simpan
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
