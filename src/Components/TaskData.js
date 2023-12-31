import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TaskData = ({ item, handleDelete, handleEdit }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'low':
                return 'bg-green-100 text-green-600';
            case 'medium':
                return 'bg-orange-100 text-orange-600';
            case 'high':
                return 'bg-red-100 text-red-600';
            case 'none':
                return 'bg-gray-100 text-gray-600';
            default:
                return '';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-600';
            case 'task added dones':
                return 'bg-blue-100 text-blue-600';
            case 'completed':
                return 'bg-green-100 text-green-600';
            case 'Test Case Resolved':
                return 'bg-pink-100 text-pink-600';
            default:
                return '';
        }
    };

    const priorityColor = getPriorityColor(item.priority);
    const statusColor = getStatusColor(item?.taskStatus?.statusName);

    return (


        <tr className='text-[#6B7280] border-b'>

            <td className={`truncate p-3`}>
                <div class="flex text-base items-center">
                    <div>
                        <div class="dropdown">
                            <div class="dropdown-toggle" id="dropdown-toggle-157-JzjOVIXHuE">
                                <span class="tooltip-wrapper">
                                    <div></div>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* edit */}
                    <button onClick={() => handleEdit(item.id)} class="cursor-pointer circle items-center cursor-pointer hover:text-indigo-500">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                    </button>

                    {/* delete */}
                    {/* <span onClick={() => handleDelete(item.id)} class="cursor-pointer hover:text-red-500 circle  mx-1 items-center"> */}
                    <span onClick={() => setIsModalOpen(true)} class="cursor-pointer hover:text-red-500 circle  mx-1 items-center">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </span>

                    {isModalOpen && (
                        <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                {/* Background overlay */}
                                <div
                                    className="fixed inset-0 transition-opacity"
                                    aria-hidden="true"
                                >
                                    <div className="absolute inset-0 bg-black opacity-60"></div>
                                </div>

                                {/* Modal panel */}
                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                >


                                    <div className="bg-white rounded-lg px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="">
                                            {/* ... Modal content */}
                                            <div onClick={() => setIsModalOpen(false)} className='cursor-pointer text-right text-xs'>X</div>
                                            <div >
                                                <h3 className='text-black text-xl font-semibold'>Delete Task</h3>
                                                <div className="whitespace-normal mt-3  text-sm overflow-hidden line-clamp-3">
                                                    Are you sure you want to delete this Task? All record related to this task will be deleted as well. This action cannot be undone.
                                                </div>
                                            </div>
                                            <div className='mt-3'>
                                                <div className='text-right '>
                                                    <div className=''>
                                                        <button
                                                            onClick={() => setIsModalOpen(false)}
                                                            className="cursor-pointer border rounded-md px-4 py-2 mt-3 w-full sm:mt-0  sm:w-auto sm:text-sm"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setIsModalOpen(false);
                                                                handleDelete(item.id);
                                                            }}
                                                            className="cursor-pointer inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-2  sm:w-auto sm:text-sm"
                                                        >
                                                            Confirm
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    {/* view */}
                    <Link className='text-decoration-none' to={`/taskdetails/${item.id}`} key={item.id}>
                        <span class="cursor-pointer  hover:text-green-500 circle items-center text-lg">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                            </svg>
                        </span>
                    </Link>

                    <span class="tooltip-wrapper">
                        <button disabled="" class="cursor-pointer mx-1 circle items-center !cursor-not-allowed">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969"></path>
                                <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554"></path>
                                <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592"></path>
                                <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305"></path>
                                <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356"></path>
                            </svg>
                        </button>
                    </span>

                    <span class="tooltip-wrapper">
                        <button class="cursor-pointer circle items-center cursor-pointer hover:text-emerald-500">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                            </svg>
                        </button>
                    </span>
                </div>

            </td>

            <td className='truncate p-3'>{item.title ?? '-'}</td>
            <td className='truncate p-3'>{formatDate(item.dueDate) ?? '-'}</td>
            <td className={`truncate p-3 capitalize`}>
                <span className={`${priorityColor} py-1 px-2 rounded-md text-xs font-semibold`}>{item.priority ?? '-'}</span>
            </td>
            <td className='truncate p-3'>{item?.module ?? '-'}</td>
            <td className='truncate p-3'>-</td>
            <td className='truncate p-3'>-</td>
            <td className='truncate p-3'>{item?.type ?? '-'}</td>
            <td className='truncate p-3'>
                {item?.assignedToData?.firstName && item?.assignedToData?.lastName
                    ? `${item.assignedToData.firstName} ${item.assignedToData.lastName}`
                    : '-'}
            </td>
            <td className='truncate p-3'>{item?.leadModel?.title ?? '-'}</td>
            <td className='truncate p-3'>
                <span className={`${statusColor} py-1 px-2 rounded-md text-xs`}>{item?.taskStatus?.statusName ?? '-'}</span>
            </td>
        </tr>


    );
};

export default TaskData;

