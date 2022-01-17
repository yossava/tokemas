import React from 'react'
import Link from 'next/link'
import { FaUserClock, FaFileSignature, FaExchangeAlt, FaAddressBook, FaMoneyBill, FaExpandAlt, FaClipboardCheck, FaFileInvoiceDollar, FaCompressAlt } from "react-icons/fa"
import { AiFillGold } from "react-icons/ai"
import { MdPayments } from "react-icons/md"
import { GiPriceTag } from "react-icons/gi"
import { HiDocumentSearch } from "react-icons/hi"


function MasterData() {
    return (
        <div>
            <div className='flex justify-center my-40'>
                <div className="w-32 mr-3 cursor-pointer">
                    <Link href="/jenis-emas">
                        <div>
                            <div className='text-center rounded-md flex justify-center items-center p-5  hover:bg-green-500 bg-green-500/90 mb-2'>
                                <AiFillGold className='text-white' size={40} />
                            </div>
                            <div className='text-center font-semibold text-slate-700'>Jenis Emas</div>
                        </div>
                    </Link>

                </div>
                <div className="w-32 mr-3 cursor-pointer">
                    <Link href="/jenis-pembayaran">
                        <div>
                            <div className='text-center rounded-md flex justify-center p-5  hover:bg-green-500 bg-green-500/90 mb-2'>
                                <MdPayments className='text-white' size={40} />
                            </div>
                            <div className='text-center font-semibold text-slate-700'>Jenis Pembayaran</div>
                        </div>
                    </Link>
                </div>
                <div className="w-32 mr-3 cursor-pointer">
                    <Link href="/harga-emas">
                        <div>
                            <div className='text-center rounded-md flex justify-center p-5  hover:bg-green-500 bg-green-500/90 mb-2'>
                                <GiPriceTag className='text-white' size={40} />
                            </div>
                            <div className='text-center font-semibold text-slate-700'>Harga Emas</div>
                        </div>
                    </Link>
                </div>
                <div className="w-32 mr-3 cursor-not-allowed">
                    <Link href="/master-data">
                        <div>
                            <div className='text-center cursor-not-allowed rounded-md flex justify-center p-5  bg-gray-500/90 mb-2'>
                                <HiDocumentSearch className='text-white' size={40} />
                            </div>
                            <div className='text-center font-semibold text-slate-700'>Tipe Transaksi</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MasterData
