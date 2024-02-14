import React from 'react';

const SignalPage = () => {
    return (
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr> 
                    <th scope="col" class="px-6 py-3">ticker</th>
                    <th scope="col" class="px-6 py-3">kst-dp</th>
                    <th scope="col" class="px-6 py-3">dp-scr</th>
                    <th scope="col" class="px-6 py-3">dp-tp</th>
                    <th scope="col" class="px-6 py-3">cu-scr</th>
                    <th scope="col" class="px-6 py-3">cu-tp</th>
                    <th scope="col" class="px-6 py-3">df_div_3m</th>
                    <th scope="col" class="px-6 py-3">df_v_mean_krw</th>
                    <th scope="col" class="px-6 py-3">df_v_3_krw</th>
                    <th scope="col" class="px-6 py-3">income</th>
                    <th scope="col" class="px-6 py-3">vm</th>
                </tr>
                <tr> 
                    <th scope="col" class="px-6 py-3"></th>
                    <th scope="col" class="px-6 py-3">kst-bid</th>
                    <th scope="col" class="px-6 py-3">cu-scr</th>
                    <th scope="col" class="px-6 py-3">cu-tp</th>
                    <th scope="col" class="px-6 py-3">con-abp</th>
                    <th scope="col" class="px-6 py-3">act-dmz</th>
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
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    </div>

    );
};

export default SignalPage;