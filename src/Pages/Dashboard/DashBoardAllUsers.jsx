import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'
import TableSkeleten from '../../components/common/TableSkeleten'
import toast from 'react-hot-toast'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Swal from 'sweetalert2'

const DashBoardAllUsers = () => {
    const [allUsers, setAllUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [deletFlag, setDeleteFlag] = useState(false)
    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/all-users`)
                if (res.status === 200) {
                    setAllUsers(res.data.users)
                }
            } catch (error) {
                console.log(error)
                toast.error("Error fetching all users")
            } finally {
                setLoading(false)
            }

        }

        fetchAllUsers()
    }, [deletFlag])

    const handleDeleteUser = async (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to delete this user.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "red",
                cancelButtonColor: "black",
                confirmButtonText: "Delete"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axios.delete(`${BASE_URL}/api/delete-user`, { data: { id: id } })
                    if (res.status === 200) {
                        toast.success("user deleted successrfully")
                        setDeleteFlag(!deletFlag)
                    }
                }
            });

        } catch (error) {
            console.log(error)
            toast.error("an error occured while deleting user")
        }
    }

    return (
        <div>
            <h2 className='text-center font-bold text-2xl py-5'>All Users</h2>
            <div className="overflow-x-auto rounded-box border-[2px] border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <TableSkeleten rows={5} columns={6} /> : allUsers ? allUsers.map((user, idx) => (
                                <tr key={idx}>
                                    <th>{(idx + 1)}</th>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <div className='flex gap-5 items-center justify-start cursor-pointer'>
                                            <RiDeleteBin6Line onClick={() => handleDeleteUser(user.id)} size={20} color='red' />
                                        </div>

                                    </td>
                                </tr>
                            )) : <tr>
                                <td>No users found</td>
                            </tr>
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashBoardAllUsers