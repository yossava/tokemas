import React from 'react'
import { FaCashRegister, FaHome, FaUserFriends, FaWallet, FaRegGem, FaSignOutAlt, FaRegMoneyBillAlt, FaChartPie, FaDatabase, FaBookOpen } from "react-icons/fa";

function Sidebar() {
    return (
        <div className="flex flex-col justify-between w-2/12 bg-transparent p-3 rounded-xl">
            <div>
                <img src='img/logo.svg' className='w-28 mt-4 mb-10' alt='logo' />

                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-200 bg-blue-500 focus:shadow-outline">
                            <span className="text-white w-4">
                                <FaHome />
                            </span>
                            <span>Beranda</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-slate-800 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600 w-4">
                                <FaCashRegister />
                            </span>
                            <span>Kasir</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-slate-800 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600 w-4">
                                <FaRegGem />
                            </span>
                            <span>Barang</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-slate-800 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600 w-4">
                                <FaUserFriends />
                            </span>
                            <span>Karyawan</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-slate-800 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600 w-4">
                                <FaWallet />
                            </span>
                            <span>Finance</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-slate-800 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600 w-4">
                                <FaBookOpen />
                            </span>
                            <span>Piutang</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-slate-800 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600 w-4">
                                <FaChartPie />
                            </span>
                            <span>Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-slate-800 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600 w-4">
                                <FaDatabase />
                            </span>
                            <span>Master Data</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 text-slate-800 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span className="text-gray-600 w-4">
                                <FaSignOutAlt />
                            </span>
                            <span>Keluar</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='text-sm text-sky-500'>©Digitif Indonesia</div>
        </div>
    )
}

export default Sidebar
