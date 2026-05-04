import { Link } from "react-router-dom";

const speakers = [
  { id: 1, name: "Dery Agung Triyadi", job: "Aws Indonesia", email: "DeryAgung@mail.com" },
  { id: 2, name: "Danang Avan M", job: "UI/UX Designer", email: "danang@mail.com" },
  { id: 3, name: "Sowam Habibi", job: "Google Indonesia", email: "SowanH@gmail.com" },
  { id: 4, name: "Lhuqita Fazry", job: "Mobile Development", email: "Lhuqita@gmail.com" },
  { id: 5, name: "M. Dendi Purwanto", job: "Artificial Intelligence", email: "MDendi.P.@gmail.com" },
];

export default function PembicaraIndex() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#7B1D3F]">
            Data Pembicara
          </h1>
          <p className="text-sm text-gray-500">
            Daftar pembicara event
          </p>
        </div>

        <Link
          to="/dashboard/pembicara/create"
          className="bg-[#7B1D3F] text-white px-4 py-2 rounded-lg"
        >
          Tambah
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-md p-5">

        <table className="w-full text-sm">

          {/* HEADER */}
          <thead>
            <tr className="text-gray-400 text-xs">
              <th className="text-left pb-3">Nama</th>
              <th className="text-left pb-3">Email</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {speakers.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">

                {/* NAMA + JOB */}
                <td className="py-3">
                  <p className="font-semibold text-[#1a0a10]">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.job}
                  </p>
                </td>

                {/* EMAIL */}
                <td className="py-3 text-gray-500">
                  {item.email}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

        {/* FOOTER */}
        <div className="mt-4 text-xs text-gray-400">
          Total: {speakers.length} pembicara
        </div>

      </div>
    </div>
  );
}