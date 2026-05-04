type Stat = {
  title: string;
  value: number;
};

type EventItem = {
  name: string;
  date: string;
};

type SpeakerItem = {
  name: string;
  job: string;
};

const stats: Stat[] = [
  { title: "Kategori", value: 10 },
  { title: "Event", value: 25 },
  { title: "Pembicara", value: 8 },
  { title: "Event Aktif", value: 5 },
];

const events: EventItem[] = [
  { name: "Seminar", date: "10 Jan 2026" },
  { name: "Workshop", date: "15 Feb 2026" },
  { name: "Talkshow", date: "20 Mar 2026" },
];

const speakers: SpeakerItem[] = [
  { name: "Dery Agung Triyadi", job: "Aws Indonesia" },
  { name: "Sowam Habibi", job: "Google Indonesia" },
  { name: "Lhuqita Fazry", job: "Mobile Development" },
];

export default function Dashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-[#7B1D3F]">
        Dashboard
      </h1>
      <p className="text-gray-500 mb-8 mt-1">
        Selamat datang di dashboard Anda
      </p>

      {/* STATISTIK */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl p-6 shadow-md min-h-[100px] flex flex-col justify-center"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>
            <p className="text-2xl font-bold text-[#7B1D3F] mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* EVENT */}
        <div className="bg-white rounded-xl p-6 shadow-md min-h-[220px]">
          <h2 className="font-semibold mb-4 text-[#7B1D3F]">
            Event Terbaru
          </h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 text-xs">
                <th className="text-left py-2">Nama</th>
                <th className="text-left">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {events.map((item) => (
                <tr key={item.name}>
                  <td className="py-2 font-medium">
                    {item.name}
                  </td>
                  <td className="text-gray-500">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PEMBICARA */}
        <div className="bg-white rounded-xl p-6 shadow-md min-h-[220px]">
          <h2 className="font-semibold mb-4 text-[#7B1D3F]">
            Pembicara
          </h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 text-xs">
                <th className="text-left py-2">Nama</th>
                <th className="text-left">Pekerjaan</th>
              </tr>
            </thead>
            <tbody>
              {speakers.map((item) => (
                <tr key={item.name}>
                  <td className="py-2 font-medium">
                    {item.name}
                  </td>
                  <td className="text-gray-500">
                    {item.job}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}