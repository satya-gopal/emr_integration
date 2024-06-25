"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import { removeUserDetails } from '@/redux/Modules/userlogin';
import TanStackTableComponent from './Core/Tanstack_table';// Adjust the import path as needed

interface IProduct {
  id: number;
  client_name: string;
  client_emr_name: string;
  email_id: string;
  phone_number: number;
}

const BasicTable: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const user = useSelector((state: any) => state?.auth?.user?.user_details);
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchProducts = async (page = 1, limit = 10) => {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/66790266ad19ca34f87dcc57?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });
      if (res.status === 200 || res.status === 201) {
        const responseData = await res.json();
        const allProducts: any = responseData.record;
        const totalPage: number = responseData.total_pages;

        setProducts(allProducts);
        setTotalPages(totalPage);
      } else {
        throw new Error(`Error: ${res.statusText}`);
      }
    } catch (error: any) {
      console.error('Error fetching:', error.message);
    }
  };

  useEffect(() => {
    fetchProducts(page, limit);
  }, [page, limit]);

  const handleLogout = () => {
    dispatch(removeUserDetails());
    alert('Logged out');
    router.push('/');
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const columns = [
    { accessorKey: 'id', header: 'ID', width: 70 },
    { accessorKey: 'client_name', header: 'Client Name', width: 130 },
    { accessorKey: 'client_emr_name', header: 'Client EMR Name', width: 130 },
    { accessorKey: 'email_id', header: 'Email', width: 200 },
    { accessorKey: 'phone_number', header: 'Phone Number', width: 130 },
    { accessorKey: 'date_of_request', header: 'Date Of Request', width: 130 },
    { accessorKey: 'client_address', header: 'Client Address', width: 130 },
    { accessorKey: 'integration_promised_date', header: 'Promissed Date', width: 130 },


  ];

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p>Username: {user.username}, Email: {user.email}, Mobile: {user.mobile}, Gender: {user.gender}</p>
          <Button variant="contained" type="button" onClick={handleLogout}>Logout</Button>
        </div>
      )}
      <TanStackTableComponent
        columns={columns}
        data={products}
        loading={true}
        getData={fetchProducts}
        paginationDetails={{ page, total: totalPages, perPage: limit }}
        removeSortingForColumnIds={[]}
      />
    </>
  );
};

export default BasicTable;
