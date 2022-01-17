import { useEffect, useState, React } from 'react'
import nookies from 'nookies'
import Router from 'next/router'
import axios from 'axios'
import { FaPencilAlt, FaTrashAlt, FaSearch } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function HargaEmas() {

    const [owner, setOwner] = useState(false);
    const [cookies, setCookies] = useState({});
    const [userData, setUserData] = useState({});
    const [customer, setCustomer] = useState({});
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [editData, setEditData] = useState({});
    const [editId, setEditId] = useState(0);

    useEffect(() => {
        const cks = nookies.get(null);
        setCookies(cks);
        getCust(cks.jwt);
        if (cks.is_owner == "false") {
            Router.push("/prohibited");
        } else {
            setOwner(true);
        }
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    }

    function nextPage(val) {
        if (customer.meta.pagination.pageCount >= val) {
            setPage(val);
            getCust(cookies.jwt, val);
        }

    }

    function prevPage(val) {
        if (page > 0) {
            setPage(val);
            getCust(cookies.jwt, val);
        }

    }

    const getCust = async (c = cookies.jwt, p = page) => {
        let size = 10;
        let searchVal = `&filters[Kadar][$containsi]=${search}`;
        if (search != "") {
            p = 1;
            size = 100;
        }
        try {
            var res = await axios.get(`${process.env.API_URL}/api/prices?pagination[pageSize]=${size}&pagination[page]=${p}${searchVal}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + c
                    }
                });
            setCustomer(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteResource = async (id) => {
        try {
            var res = await axios.delete(`${process.env.API_URL}/api/prices/${id}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + cookies.jwt
                    }
                });
            toast.success("Harga berhasil dihapus", { position: toast.POSITION.TOP_CENTER });
            getCust(cookies.jwt);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            var res = await axios.post(process.env.API_URL + '/api/prices', { data: userData },
                {
                    headers: {
                        Authorization: 'Bearer ' + cookies.jwt
                    }
                });
            toast.success("Harga berhasil ditambahkan", { position: toast.POSITION.TOP_CENTER });
            getCust(cookies.jwt);
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            var res = await axios.put(process.env.API_URL + '/api/prices/' + editId, { data: editData },
                {
                    headers: {
                        Authorization: 'Bearer ' + cookies.jwt
                    }
                });
            toast.success("Harga berhasil diedit", { position: toast.POSITION.TOP_CENTER });
            getCust(cookies.jwt);
        } catch (err) {
            console.log(err);
        }
    }

    async function editResource(id) {
        setEditId(id);
        try {
            var res = await axios.get(process.env.API_URL + '/api/prices/' + id,
                {
                    headers: {
                        Authorization: 'Bearer ' + cookies.jwt
                    }
                });
            setEditData(res.data.data.attributes);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            console.log(err);
        }
    }

    function custRow() {
        var custArr = customer.data;

        if (custArr == undefined) {
            return;
        }

        return custArr.map((el) => {
            return (
                <div key={el.id} className='grid grid-cols-4 gap-3 text-left text-xs border-b py-3'>
                    <div>{el.id}</div>
                    <div>{el.attributes.Kadar}</div>
                    <div>{el.attributes.Harga}</div>
                    <div className='flex justify-end w-full'>
                        <button onClick={() => editResource(el.id)} className='text-xs bg-green-500 mr-1 p-1 rounded text-white'><FaPencilAlt /></button>
                        <button onClick={() => deleteResource(el.id)} className='text-xs bg-red-500 p-1 rounded text-white'><FaTrashAlt /></button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <ToastContainer />
            {owner && <div>
                {editId == 0 && <div>
                    <div className='w-full p-3 rounded'>
                        <p className='font-bold text-lg'>Buat Harga Baru</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='rounded p-3 grid grid-cols-2 gap-3'>
                            <input onChange={(e) => handleChange(e)} required placeholder='Kadar' name="Kadar" className='p-2 border rounded' />
                            <input type="number" onChange={(e) => handleChange(e)} required placeholder='Harga' name="Harga" className='p-2 border rounded' />
                            <div></div>
                            <button className='p-2 border rounded bg-green-400 text-white font-bold'>SIMPAN</button>
                        </div>
                    </form>
                </div>}

                {editId != 0 && <div>
                    <div className='w-full p-3 rounded'>
                        <div className='font-bold text-lg'>Edit Harga <button onClick={() => setEditId(0)} className='text-xs border p-1'>Buat Baru</button></div>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='rounded p-3 grid grid-cols-2 gap-3'>
                            <input onChange={(e) => handleUpdateChange(e)} required placeholder='Kadar' value={editData?.Kadar || ""} name="Kadar" className='p-2 border rounded' />
                            <input type="number" onChange={(e) => handleUpdateChange(e)} required placeholder='Harga' value={editData?.Harga || ""} name="Harga" className='p-2 border rounded' />
                            <div></div>
                            <button className='p-2 border rounded bg-green-400 text-white font-bold'>UPDATE</button>
                        </div>
                    </form>
                </div>}

                <hr />

                <div className='rounded p-3'>
                    <div className='w-full rounded my-3'>
                        <p className='font-bold text-lg'>Daftar Harga</p>
                    </div>
                    <div className='mb-3 flex'>
                        <input onChange={(e) => setSearch(e.target.value)} placeholder='Cari Harga' className='w-4/12 p-2 mr-2 border rounded' />
                        <button onClick={() => getCust()} className='flex justify-center items-center p-2 border rounded bg-white text-slate-800 w-2/12'><FaSearch className='mr-1' /> CARI</button>
                    </div>
                    <div className='flex flex-end items-center mb-2'>
                        <div className='w-full text-right text-xs'>Page {customer?.meta?.pagination?.page} of {customer?.meta?.pagination?.pageCount}</div>
                        <div className='flex flex-end ml-2'>
                            <button onClick={() => prevPage(customer?.meta?.pagination?.page - 1)} className='border bg-white p-2 text-xs'>Prev</button>
                            <button onClick={() => nextPage(customer?.meta?.pagination?.page + 1)} className='border bg-white p-2 text-xs'>Next</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 gap-3 text-left font-bold text-xs border-b border-t py-3'>
                        <div>ID</div>
                        <div>Kadar</div>
                        <div>Harga</div>
                        <div className='text-right'>Action</div>
                    </div>
                    {custRow()}
                </div>
            </div>}
        </div>
    )
}

export default HargaEmas
