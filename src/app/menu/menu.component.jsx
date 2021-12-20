import React, { useEffect, useState, useRef } from 'react';

import QuotesService from '../../service/quotes.service';
import PaymentService from '../../service/payment.service';

import MenuFormComponent from './form/menu-form.component';

import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import {
    Skeleton,
    Tag
} from 'antd';
import Swal from 'sweetalert2';

import './menu.scss';

const MenuComponent = () => {
    const _service = new QuotesService;
    const paymentService = new PaymentService;

    const [quotesList, setQuotesList] = useState([]);
    const [paymentList, setPaymentList] = useState([]);
    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [oneData, setOneData] = useState({});
    const [loading, setLoading] = useState(false);

    const toast = useRef(null);

    useEffect(() => {
        loadQuotes();
        loadDataPayment();

        let angka1 = 60;
        const angka2 = 90;

        angka1 = 90

        alert(angka1)

        if(angka1 > 60) {
            alert('ini bagus')
        } else if(angka1 = 60) {
            alert
        }
    }, []);

    function loadDataPayment() {
        paymentService.getPayment().then((res) => {
            const data = res.data;
            setPaymentList(data);
        })
    }

    function loadQuotes() {
        _service.getQuotes().then((res) => {
            if (res.status === 200) {
                const data = res.data;
                setQuotesList(data)
            } else {
                alert('ERROR 404')
            }
        })
    }

    function submitQuotes(payload, type) {
        if (type == 'create') {
            setLoading(true);
            _service.createQuotes(payload).then((res) => {
                setIsCreate(false);
                loadQuotes();
                setLoading(false);
            });
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
            Toast.fire({
                icon: 'success',
                title: 'Data created successfully !'
            });
        } else {
            Swal.fire({
                title: 'Do you want to save the changes?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    setLoading(true);
                    _service.editQuotes(oneData._id, payload).then(res => {
                        setIsEdit(false);
                        setOneData({});
                        loadQuotes();
                        setLoading(false);
                    });
                }
            });
        }
    }

    function editData(id) {
        _service.getQuotesId(id).then(res => {
            setOneData(res.data);
            setIsEdit(true);
        })
    }

    function deleteQuotes(id) {
        const Toast = Swal.fire({
            title: 'Are you sure?',
            text: "Your data will be deleted !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                _service.deleteQuotes(id).then((res) => {
                    loadQuotes();
                    setLoading(false);
                });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }
        });
    }

    function showModal(type) {
        if (type == 'create') {
            setIsCreate(true);
        } else {
            setIsEdit(true);
        }
    }

    function closeModal() {
        setIsCreate(false);
        setIsEdit(false);
    }

    return (
        <>
            <div className="container-fluid mt-2">
                <div className="text-right">
                    <Button
                        className="p-button-success"
                        label="Quotes"
                        icon="pi pi-plus"
                        onClick={() => {
                            showModal('create');
                        }}
                    />
                </div>
            </div>
            <div>
                {paymentList.map(item => {
                    return (
                        <div>
                            <p><b>Uang anda sebesar</b> Rp.{item.saldo}</p>
                        </div>
                    );
                })}
            </div>
            <div className="mb-3">
                <div className="col-12">
                    <div className="row">
                        {quotesList.map((item, i) => {
                            return (
                                <div className="col-12 mt-4" key={i}>
                                    <Skeleton loading={loading}>
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="d-flex justify-content-between">
                                                    <div className="p-2">
                                                        <span><Avatar label="P" className="p-mr-2" size="small" shape="circle" /></span>
                                                    </div>
                                                    <div>
                                                        <Button
                                                            className="p-button-danger mr-2"
                                                            icon="pi pi-trash"
                                                            onClick={() => {
                                                                deleteQuotes(item._id)
                                                            }}
                                                            id="buttonMessage"
                                                        />
                                                        <Button
                                                            className="p-button-primary"
                                                            icon="pi pi-pencil"
                                                            onClick={() => editData(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <blockquote className="blockquote mb-0">
                                                    <p><b><i>{item.title}</i></b></p>
                                                    <footer className="blockquote-footer">By <cite title={item.author}><Tag color="green">{item.author}</Tag></cite></footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </Skeleton>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <br />

            <MenuFormComponent
                createModal={isCreate}
                editModal={isEdit}
                onHide={closeModal}
                onSubmit={submitQuotes}
                oneData={oneData}
            />
        </>
    );
}

export default MenuComponent;
