

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";



export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async (params) => {
      const { sortBy, order, category, search, currentPage } = params;
      const { data } = await axios.get(
        `https://67a7dc25203008941f68ad45.mockapi.io/react-pizza?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
    }
  );



















































// export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
//   'pizza/fetchPizzasStatus',
//   async (params) => {
//     const { sortBy, order, category, search, currentPage } = params;
//     console.log(params, 4444);
//     const { data } = await axios.get<Pizza[]>(`https://67a7dc25203008941f68ad45.mockapi.io/react-pizza?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`, {
//       params: pickBy(
//         {
//           page: currentPage,
//           limit: 4,
//           category,
//           sortBy,
//           order,
//           search,
//         },
//         identity,
//       ),
//     });

//     return data;
//   },
// );

// function pickBy(arg0: { page: string; limit: number; category: string; sortBy: string; order: string; search: string; }, identity: any): any {
//   throw new Error("Function not implemented.");
// }
