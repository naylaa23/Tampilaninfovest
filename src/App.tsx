import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Beranda from "./pages/Beranda";
import Seminar from "./pages/Seminar";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import Register from "./pages/Register";

import Dashboard from "./pages/dashboard/Dashboard";
import CategoryIndex from "./pages/dashboard/kategori/CategoryIndex";
import CategoryCreate from "./pages/dashboard/kategori/CategoryCreate";
import EventIndex from "./pages/dashboard/event/EvenIndex";
import EventCreate from "./pages/dashboard/event/EventCreate";


import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />

            {/* CATEGORY */}
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />

            {/* EVENT */}
            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} />

            {/* PEMBICARA */}
            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />

          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}