import { Link } from "react-router-dom";

const events = [
  { id: 1, name: "Talkshow", category: "Talkshow", date: "2026-01-10", status: "Aktif" },
  { id: 2, name: "Workshop React", category: "Workshop", date: "2026-02-15", status: "Nonaktif" },
  { id: 3, name: "Seminar", category: "Seminar", date: "2026-03-20", status: "Aktif" },
];

export default function EventIndex() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#7B1D3F]">
            Data Event
          </h1>
          <p className="text-sm text-gray-500">
            Daftar semua event
          </p>
        </div>

        <Link
          to="/dashboard/event/create"
          className="bg-[#7B1D3F] text-white px-4 py-2 rounded-lg shadow hover:bg-[#5a152e]"
        >
          Tambah Event
        </Link>
      </div>

      {/* WRAPPER */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">

        <table className="w-full text-sm border-separate border-spacing-y-2">

          {/* HEADER */}
          <thead>
            <tr className="text-gray-400 text-xs">
              <th className="text-left">No</th>
              <th className="text-left">Nama</th>
              <th className="text-left">Kategori</th>
              <th className="text-left">Tanggal</th>
              <th className="text-left">Status</th>
              <th className="text-left">Aksi</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {events.map((item, index) => (
              <tr
                key={item.id}
                className="bg-[#fafafa] rounded-xl shadow-sm"
              >
                <td className="py-3 px-2 text-gray-400 rounded-l-xl">
                  {index + 1}
                </td>

                <td className="font-semibold text-[#1a0a10]">
                  {item.name}
                </td>

                <td>
                  {item.category}
                </td>

                <td className="text-gray-500">
                  {new Date(item.date).toLocaleDateString("id-ID")}
                </td>

                <td>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      item.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="rounded-r-xl">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-md">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-xs bg-red-100 text-red-600 rounded-md">
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        {/* FOOTER */}
        <div className="mt-4 text-xs text-gray-400">
          Total: {events.length} event
        </div>

      </div>
    </div>
  );
}