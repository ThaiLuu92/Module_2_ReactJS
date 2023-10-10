import React from "react";
import Home from "../pages/Home/Home";
import CourseManagement from "../pages/Admin/CourseManagement/CourseManagement";
import MentorManagement from "../pages/Admin/MentorManagement/MentorManagement";
import UserManagement from "../pages/Admin/UserManagement/UserManagement";
import Form from "../pages/auth/LoginAndRegister/Form";
import { I_Router } from "../types";





export const routes: I_Router[] = [
    {
        title: "Home",
        path: "/",
        element: <Home />
    },
    {
        title: "CourseManagement",
        path: "/admin/course-management",
        element: <CourseManagement />
    },
    {
        title: "MentorManagement",
        path: "/admin/mentor-management",
        element: <MentorManagement />
    },
    {
        title: "UserManagement",
        path: "/admin/user-management",
        element: <UserManagement />
    },
    {
        title: "Form",
        path: "/auth/login",
        element: <Form/>
    }
]