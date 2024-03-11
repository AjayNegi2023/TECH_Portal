import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from "./pages/Dashboard";
import CourseHome from "./courses/Home/CourseHome.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nested Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllJobs />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="course" element={<CourseHome />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;