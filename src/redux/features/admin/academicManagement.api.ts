import { TAcademicDepartment } from "../../../types/academicManagement.type";
import { TResponseRedux } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get all semester
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        // params.append("name", "Autum"); //params apppend the value as string string pair
        if (args) {
          args.forEach((item: any) => params.append(item.name, item.value));
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
          // params: { name: args },
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response.data.data,
          meta: response.data.meta,
        };
      },
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map((item: any) => ({
                type: "AcademicSemester",
                id: item._id,
              })),
              { type: "AcademicSemester", id: "LIST" },
            ]
          : [{ type: "AcademicSemester", id: "LIST" }],
    }),
    //add academic semester
    addAcademicSemester: builder.mutation({
      query: (semesterData) => ({
        url: "/academic-semesters/create-academic-semester",
        body: semesterData,
        method: "POST",
      }),
      invalidatesTags: [{ type: "AcademicSemester", id: "LIST" }],
    }),
    // get all academic faculty
    getAllAcademicFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        // params.append("name", "Autum"); //params apppend the value as string string pair
        if (args) {
          args.forEach((item: any) => params.append(item.name, item.value));
        }

        return {
          url: "/academic-faculties",
          method: "GET",
          params: params,
          // params: { name: args },
        };
      },
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map((item: any) => ({
                type: "AcademicFaculty",
                id: item._id,
              })),
              { type: "AcademicFaculty", id: "LIST" },
            ]
          : [{ type: "AcademicFaculty", id: "LIST" }],
    }),
    // add academic faculty
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "academic-faculties/create-academic-faculty",
        body: data,
        method: "POST",
      }),
      invalidatesTags: [{ type: "AcademicFaculty", id: "LIST" }],
    }),
    // get academic departments
    getAcademicDepartments: builder.query({
      query: () => {
        return { url: "/academic-departments", method: "GET" };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data.data,
          meta: response.data.meta,
        };
      },
    }),
    // create academic department
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllSemestersQuery,
  useAddAcademicSemesterMutation,
  useGetAllAcademicFacultiesQuery,
  useAddAcademicFacultyMutation,
  useGetAcademicDepartmentsQuery,
  useAddAcademicDepartmentMutation,
} = academicManagementApi;
