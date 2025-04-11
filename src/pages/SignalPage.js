import React from 'react';
import Pageing from './Pageing';

const SignalPage = () => {
    return (
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr> 
                    <th scope="col" class="px-6 py-3">ticker</th>
                    <th scope="col" class="px-6 py-3">kst_dp</th>
                    <th scope="col" class="px-6 py-3">dp_scr</th>
                    <th scope="col" class="px-6 py-3">dp_tp</th>
                    <th scope="col" class="px-6 py-3">cu_scr</th>
                    <th scope="col" class="px-6 py-3">cu_tp</th>
                    <th scope="col" class="px-6 py-3">df_div_3m</th>
                    <th scope="col" class="px-6 py-3">df_v_mean_krw</th>
                    <th scope="col" class="px-6 py-3">df_v_3_krw</th>
                    <th scope="col" class="px-6 py-3">income</th>
                    <th scope="col" class="px-6 py-3">vm</th>
                </tr>
                <tr> 
                    <th scope="col" class="px-6 py-3"></th>
                    <th scope="col" class="px-6 py-3">kst_bid</th>
                    <th scope="col" class="px-6 py-3">cu_scr</th>
                    <th scope="col" class="px-6 py-3">cu_tp</th>
                    <th scope="col" class="px-6 py-3">con_abp</th>
                    <th scope="col" class="px-6 py-3">act_dmz</th>
                    <th scope="col" class="px-6 py-3">bid_cnt</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">KRW-META</td>
                    <td class="px-6 py-4">2024-02-09 19:44:18</td>
                    <td class="px-6 py-4">3.33</td>
                    <td class="px-6 py-4">49.81</td>
                    <td class="px-6 py-4">4.34</td>
                    <td class="px-6 py-4">50.11</td>
                    <td class="px-6 py-4">5</td>
                    <td class="px-6 py-4">34,225,332</td>
                    <td class="px-6 py-4">173,234,223</td>
                    <td class="px-6 py-4">0.743</td>
                    <td class="px-6 py-4">-0.37</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4">2024-02-09 20:04:18</td>
                    <td class="px-6 py-4">1.69</td>
                    <td class="px-6 py-4">47.9</td>
                    <td class="px-6 py-4">48.59</td>
                    <td class="px-6 py-4">-2</td>
                    <td class="px-6 py-4">3..1</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4"></td>
                    <td class="px-6 py-4">2024-02-09 21:04:18</td>
                    <td class="px-6 py-4">2.69</td>
                    <td class="px-6 py-4">49.9</td>
                    <td class="px-6 py-4">47.59</td>
                    <td class="px-6 py-4">-2</td>
                    <td class="px-6 py-4">3..2</td>
                </tr>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">KRW-XRP</td>
                    <td class="px-6 py-4">2024-02-10 19:40:18</td>
                    <td class="px-6 py-4">3.33</td>
                    <td class="px-6 py-4">49.81</td>
                    <td class="px-6 py-4">4.34</td>
                    <td class="px-6 py-4">50.11</td>
                    <td class="px-6 py-4">5</td>
                    <td class="px-6 py-4">34,225,332</td>
                    <td class="px-6 py-4">173,234,223</td>
                    <td class="px-6 py-4">0.743</td>
                    <td class="px-6 py-4">-0.37</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4">2024-02-10 19:40:18</td>
                    <td class="px-6 py-4">1.69</td>
                    <td class="px-6 py-4">47.9</td>
                    <td class="px-6 py-4">48.59</td>
                    <td class="px-6 py-4">-2</td>
                    <td class="px-6 py-4">3..1</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4"></td>
                    <td class="px-6 py-4">2024-02-10 19:40:18</td>
                    <td class="px-6 py-4">2.69</td>
                    <td class="px-6 py-4">49.9</td>
                    <td class="px-6 py-4">47.59</td>
                    <td class="px-6 py-4">-2</td>
                    <td class="px-6 py-4">3..2</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4"></td>
                    <td class="px-6 py-4">2024-02-10 19:40:18</td>
                    <td class="px-6 py-4">2.69</td>
                    <td class="px-6 py-4">49.9</td>
                    <td class="px-6 py-4">47.59</td>
                    <td class="px-6 py-4">-2</td>
                    <td class="px-6 py-4">3..3</td>
                </tr>
            </tbody>
        </table>

        <Pageing />

    </div>

    );
};

export default SignalPage;