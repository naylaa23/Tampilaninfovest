import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  status: "Aktif" | "Nonaktif";
};

const categories: Category[] = [
  { id: 1, name: "Seminar", status: "Aktif" },
  { id: 2, name: "Workshop", status: "Aktif" },
  { id: 3, name: "Talkshow", status: "Nonaktif" },
];

function StatusBadge({ status }: { status: Category["status"] }) {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full ${
        status === "Aktif"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function CategoryIndex() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-start">

        {/* JUDUL */}
        <div>
          <h1 className="text-2xl font-bold text-[#7B1D3F] tracking-tight">
            Data Kategori Event
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Kelola kategori event yang tersedia
          </p>
        </div>

        {/* BUTTON */}
        <Link
          to="/dashboard/category/create"
          className="bg-[#7B1D3F] text-white px-4 py-2 rounded-lg shadow hover:bg-[#5a152e]"
        >
          + Tambah
        </Link>

      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="w-full text-sm">

          {/* HEADER TABLE */}
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 text-gray-500">No</th>
              <th className="text-left px-4 py-3 text-gray-500">Nama Kategori</th>
              <th className="text-left px-4 py-3 text-gray-500">Status</th>
              <th className="text-left px-4 py-3 text-gray-500">Aksi</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {categories.map((item, index) => (
              <tr key={item.id} className="border-t">
                
                <td className="px-4 py-3 text-gray-400">
                  {index + 1}
                </td>

                <td className="px-4 py-3 font-medium text-[#1a0a10]">
                  {item.name}
                </td>

                <td className="px-4 py-3">
                  <StatusBadge status={item.status} />
                </td>

                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    
                    <button className="px-3 py-1 text-xs rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                      Edit
                    </button>

                    <button className="px-3 py-1 text-xs rounded bg-red-100 text-red-600 hover:bg-red-200">
                      Hapus
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}